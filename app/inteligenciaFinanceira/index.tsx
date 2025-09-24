import { Button } from "../components/ui/button";

export function Inteligencia() {
  return (
    <div className="w-full flex justify-center mt-12 max-sm:mt-10 max-sm:h-[10rem]">
      <div className=" h-[25rem] w-[80%]  max-sm:w-full  max-sm:h-[20rem]     rounded-4xl grid place-content-center  grid-cols-2 bg-[url('/home.png')] bg-cover bg-center max-sm:px-5  max-sm:grid-cols-1 ">
        <div className=" max-sm:w-[80%]    ">
          <h1 className="text-5xl text-center max-sm:text-start  font-light mt-20  max-sm:mt-12 px-20 max-sm:text-3xl max-sm:px-0 ">
            <strong className="text-[#CCAA76]">Inteligência Financeira:</strong>{" "}
            o poder em suas mãos.
          </h1>
          <div className="flex justify-center max-sm:justify-start mt-10 max-sm:mt-5 ">
            <Button
              asChild
              variant={"default"}
              className="text-2xl border border-amber-50 bg-transparent p-6 hover:bg-[#CCAA76] hover:border-0 hover:animate-pulse  hover:text-foreground  max-sm:p-4 max-sm:text-xl"
            >
              <a
                href="https://efici-ncia-tribut-ria.vercel.app/"
                target="_blank"
              >
                Sua nova realidade
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
