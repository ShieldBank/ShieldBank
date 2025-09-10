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
        <div className="flex px-20 items-center gap-50 bg-transparent absolute">
          <Image src={shieldbank} alt="Shieldbank" width={130} height={50} />
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="flex gap-10 text-[16px] items-center">
                  <NavigationMenuLink href="/">Quem somos</NavigationMenuLink>
                  <NavigationMenuLink href="/">Shield Pay</NavigationMenuLink>
                  <NavigationMenuLink href="/">Blog</NavigationMenuLink>
                  <NavigationMenuLink href="/">Carreiras</NavigationMenuLink>
                  <NavigationMenuLink href="/">Contato</NavigationMenuLink>
                  <div className="flex ml-20 gap-10">
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
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>
    </>
  );
}
