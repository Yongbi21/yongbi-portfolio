import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (

    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-4 sm:p-20 bg-[#000]
    font-[family-name:var(--font-poppins)] relative flex-col justify-center">
      <header className="row-start-1 flex gap-[18px] flex-wrap item-start text-white">
        <a
            className="flex items-center gap-2  font-semibold text-2xl"
            target="_blank"
            rel="noopener noreferrer"
        >
          Plan →
        </a>
        <a
            className="flex items-center gap-2  font-semibold text-2xl"
            target="_blank"
            rel="noopener noreferrer"
        >
          Develop →
        </a>
        <a
            className="flex items-center gap-2  font-semibold text-2xl"
            target="_blank"
            rel="noopener noreferrer"
        >
          Launch
        </a>

      </header>
      <main className="flex row-start-2 sm:items-start mt-10 justify-center">
        <Card className="bg-[#1a1a1a] text-white border-none ">
          <CardContent className="flex flex-col gap-4 my-2 mx-2">
          <h1 className="text-2xl font-light text-white">
            <span>Hello there! I&#39;m </span>
            <span className="font-semibold">Alvin John Romblon</span>
           </h1>
        <p className="text-2xl text-white font-light">
          I turn ideas into refined, usable websites.
        </p>

        <p className="text-md text-white font-light max-w-xl">
          I&#39;m a front-end developer crafting user-focused interfaces that simplify daily tasks through thoughtful, intentional design.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-3">
          <a
              className="rounded-md border border-transparent transition-colors flex items-center justify-center
                 bg-[#2AC6A4] text-white gap-2 font-medium text-md sm:text-base h-10 sm:h-11 px-4 sm:px-5 sm:w-auto"
              href=""
              target="_blank"
              rel="noopener noreferrer"
          >
            Get in touch
          </a>
        </div>
            </CardContent>
        </Card>

      </main>




    </div>
  );
}


// <div className="flex gap-4 items-center flex-col sm:flex-row">
//   <a
//       className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center
//              bg-[#2AC6A4] text-white gap-2  font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//   >
//     Deploy now
//   </a>
// </div>