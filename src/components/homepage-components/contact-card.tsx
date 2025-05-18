import React, { useState } from "react";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const ContactCard: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !message) {
            toast.error("All fields are required.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        toast.success("Message sent successfully!", );
        // You can call your API here once it's ready
    };

    const handleCopyEmail = () => {
        const email = "ajromblon71@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            toast.success("Email copied to clipboard!", {
                duration: 2000,
            });
        });
    };

    return (
        <Card className="bg-[#1a1a1a] text-white border-none w-4xl">
            <CardContent className="flex flex-col gap-4 my-2 mx-2">
                <h1 className="font-semibold text-xl text-white mb-2 mt-2">
                    Have a project in mind? Let’s build something together!
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label className="py-4" htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <Label className="py-4" htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <Label className="py-4" htmlFor="email">Your Message</Label>
                        <Textarea
                            className="resize-none w-full h-full"
                            placeholder="What’s on your mind? Tell me about your ideas, collaborations, or even your favorite coffee blend ☕
                            (BTW, I can't reply if the email provided is not real 😎)"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            className="color-white bg-[#2AC6A4] hover:bg-[#25b197] w-1/6 cursor-pointer"
                            type="submit"
                        >
                            Send Message
                        </Button>
                        <Separator
                            orientation="vertical"
                            className="bg-white"
                            style={{ height: '24px' }}
                        />
                        <p
                            className="cursor-pointer flex items-center gap-2"
                            onClick={handleCopyEmail}
                        >
                            <span className="font-extralight">Or email me directly:</span>{" "}
                            ajromblon71@gmail.com
                        </p>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default ContactCard;
