import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

import shieldbank from "../assets/shieldbank.png";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <>
      <header className=" w-full  z-10  fixed ">
        <div className="w-full h-[5rem] flex justify-around  items-center   bg-[#001124]  ">
          <a href="/">
            <Image
              priority
              className="ml-10 max-sm:ml-0 brightness-105"
              width={150}
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
                  href="https://investimentos-sigma.vercel.app/"
                  target="_blank"
                  className="group-hover:text-gray-400 hover:!text-white text-white transition-colors   "
                >
                  Rendimento
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
                  variant={"default"}
                  className="p-6 hover:bg-[#CCAA76] bg-transparent border border-amber-50 hover:border-0 hover:text-foreground group-hover:text-gray-400"
                >
                  <a href="/acessar-conta">Acessar Conta</a>
                </Button>
                <Button
                  variant={"default"}
                  className="p-6 hover:bg-[#CCAA76] bg-transparent border border-amber-50 hover:border-0 hover:text-foreground group-hover:text-gray-400"
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

          <div className="sm:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-white " />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-30 bg-background border-[#CCAA76] text-white flex flex-col items-center"
                align="end"
              >
                <DropdownMenuItem>
                  <a href="/">Quem Somos</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/produtos/bank">Shield Bank</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/produtos/shieldpay">Shield Pay</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://investimentos-sigma.vercel.app/">
                    Rendimento
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/blog">Blog</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/#contatos">Contatos</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/acessar-conta">Acessar Conta</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a
                    href="https://wa.me/5511978802370/?text=Olá, Quero abrir minha conta Shield!"
                    target="_blank"
                  >
                    Seja Shield
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
}
