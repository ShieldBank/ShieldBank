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
          <Image
            className="ml-10"
            width={150}
            quality={90}
            src={shieldbank}
            alt="Shieldbank"
          />

          <NavigationMenu className="max-sm:hidden">
            <NavigationMenuList className="flex items-center gap-12 text-[18px] ">
              <div className="flex gap-15">
                <NavigationMenuLink
                  href="/"
                  className="hover:text-gray-400 text-white transition-colors   "
                >
                  Quem somos
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/"
                  className="hover:text-gray-400 text-white transition-colors   "
                >
                  Shield Bank
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/"
                  className="hover:text-gray-400 text-white transition-colors"
                >
                  Shield Pay
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/blog"
                  className="hover:text-gray-400 text-white transition-colors"
                >
                  Blog
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/"
                  className="hover:text-gray-400 text-white transition-colors"
                >
                  Contato
                </NavigationMenuLink>
              </div>

              <div className="flex gap-4">
                <Button
                  asChild
                  variant={"outline"}
                  className="p-6 hover:bg-[#CCAA76] hover:border-0 hover:text-foreground"
                >
                  <a href="/acessar-conta">Acessar conta</a>
                </Button>
                <Button
                  asChild
                  variant={"outline"}
                  className="p-6 hover:bg-[#CCAA76] hover:border-0 hover:text-foreground"
                >
                  <a
                    href="https://wa.me/5511978802370/?text=Olá, Quero abrir minha conta Shield!"
                    target="_blank"
                  >
                    Abra sua conta
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
