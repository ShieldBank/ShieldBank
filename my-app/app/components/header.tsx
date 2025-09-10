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
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <>
      <header>
        <div className="flex px-20 items-center gap-50">
          <Image src={shieldbank} alt="Shieldbank" width={200} height={50} />
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="flex gap-10 text-[18px] items-center">
                  <NavigationMenuLink href="/">Quem somos</NavigationMenuLink>
                  <NavigationMenuLink href="/">Shield Pay</NavigationMenuLink>
                  <NavigationMenuLink href="/">Blog</NavigationMenuLink>
                  <NavigationMenuLink href="/">Carreiras</NavigationMenuLink>
                  <NavigationMenuLink href="/">Contato</NavigationMenuLink>
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
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>
    </>
  );
}
