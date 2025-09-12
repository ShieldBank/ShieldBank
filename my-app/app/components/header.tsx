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
      <header className="  opacity-80">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
          <Image src={shieldbank} alt="Shieldbank" width={130} height={50} />

          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-10 text-[18px]">
              
              <div className="flex gap-10">
                <NavigationMenuLink href="/" className="hover:text-gray-400 text-white transition-colors">Quem somos</NavigationMenuLink>
                <NavigationMenuLink href="/" className="hover:text-gray-400 text-white transition-colors">Shield Pay</NavigationMenuLink>
                <NavigationMenuLink href="/blog" className="hover:text-gray-400 text-white transition-colors">Blog</NavigationMenuLink>
                <NavigationMenuLink href="/" className="hover:text-gray-400 text-white transition-colors">Carreiras</NavigationMenuLink>
                <NavigationMenuLink href="/" className="hover:text-gray-400 text-white transition-colors">Contato</NavigationMenuLink>
              </div>

              
              <div className="flex gap-4">
                <Button
                  asChild
                  variant={"outline"}
                  className="p-6 hover:bg-[#CCAA76] hover:border-0 hover:text-foreground"
                >
                  <a href="/login">Acessar conta</a>
                </Button>
                <Button
                  asChild
                  variant={"outline"}
                  className="p-6 hover:bg-[#CCAA76] hover:border-0 hover:text-foreground"
                >
                  <a href="/login">Abra sua conta</a>
                </Button>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    </>
  );
}