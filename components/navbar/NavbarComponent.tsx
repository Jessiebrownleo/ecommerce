'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "@/components/navbar/AcmeLogo";
import CustomThemeSwitcher from "../Themes/ThemeSwitcher";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      label: "Dashboard",
      link: "/dashboard"
    },{
    label: "Home",
    link: "/"
  },{
    label: "Product",
    link: "/product"
  },{
    label: "Policy",
    link: "/policy"
  },{
    label: "About",
    link: "/about"
  }
    
    
  ];
  const pathname = usePathname();
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="sticky top-0 z-50">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Ecommerce</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/"} >
          <Link color="foreground" href="/" >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/product"}>
          <Link color="foreground" href="/product">
            Product
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/policy"}>
          <Link color="foreground" href="/policy">
            Policy
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/about"}>
          <Link color="foreground" href="/about">
            ABout US
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem>
          <Button as={Link} color="primary" href="/dashboard" variant="flat" className="max-sm:hidden">
            Go To Dashboard
          </Button>
        </NavbarItem>
        <NavbarItem>
          <CustomThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} isActive={pathname === item.link}>
            <Link
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
