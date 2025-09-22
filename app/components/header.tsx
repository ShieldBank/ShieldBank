import {
  Link,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import shieldbank from "../assets/shieldbank.png";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";

export function Header() {
  return (
    <>
      <header className=" w-full  z-10  fixed ">
        <div className="w-full h-[5rem] flex justify-around  items-center   bg-[#001124]  ">
          <a href="/">
            <Image
              className="ml-10 brightness-105"
              width={150}
              quality={90}
              src={shieldbank}
              alt="Shieldbank"
            />
          </a>

          <NavigationMenu className="max-sm:hidden">
            <NavigationMenuList className="flex items-center gap-12 text-[18px] group">
              <div className="flex gap-15">
                <NavigationMenuLink
                  href="/"
                  className="group-hover:text-gray-400 hover:!text-white text-white transition-colors   "
                >
                  Quem Somos
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/produtos/bank"

                  className="group-hover:text-gray-400 hover:!text-white text-white transition-colors   "
                >
                  Shield Bank

                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/produtos/shieldpay"

                  className="group-hover:text-gray-400 hover:!text-white text-white transition-colors"
                >
                  Shield Pay
                </NavigationMenuLink>


                <NavigationMenuLink
                  href="/blog"
                  className="group-hover:text-gray-400 hover:!text-white text-white transition-colors"
                >
                  Blog
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/#contatos"

                  className="group-hover:text-gray-400 hover:!text-white text-white transition-colors"
                >
                  Contato
                </NavigationMenuLink>
              </div>

              <div className="flex gap-4">
                <Button
                  asChild
                  variant={"outline"}
                  className="p-6 hover:bg-[#CCAA76] hover:border-0 hover:text-foreground group-hover:text-gray-400"
                >
                  <a href="/acessar-conta">Acessar Conta</a>
                </Button>
                <Button
                  asChild
                  variant={"outline"}
                  className="p-6 hover:bg-[#CCAA76] hover:border-0 hover:text-foreground group-hover:text-gray-400"
                >
                  <a
                    href="https://wa.me/5511978802370/?text=Olá, Quero abrir minha conta Shield!"
                    target="_blank"
                  >
                    Seja Shield
                  </a>
                </Button>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    </>
  );
}
