"use client"
import React from "react"
import { usePathname } from "next/navigation"

import LanguageToggler from "./LanguageToggler"
import LaponieLogo from "./LaponieLogo"
import { useLanguageContext } from "@/app/context/LanguageContext"
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale
} from "./Icons."

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownItem,
  Button,
  DropdownTrigger,
  DropdownMenu
} from "@nextui-org/react"

function Navigation() {
  const pathname = usePathname()

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out"
  ]

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />
  }

  const { languageSelected, setLanguageSelected } = useLanguageContext()
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <Navbar
      className={`bg-tw-primary/80 w-full`}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "hover:text-red-500",
          "text-red-500",
          "data-[active=true]:text-red-500",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[4px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-tw-pink",
          "data-[active=true]:after:rounded-r-xl",
          "data-[active=true]:after:rounded-l-xl"
        ]
      }}
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="md:hidden pr-3" justify="center">
        <NavbarBrand>
          <LaponieLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="end"></NavbarContent>

      <NavbarContent
        className="md:hidden pr-3"
        justify="center"
      ></NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="end">
        <NavbarBrand>
          <LaponieLogo />
        </NavbarBrand>
        <NavbarItem isActive={pathname === "/"}>
          <Link className="uppercase font-normal" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent uppercase text-md"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Brands
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Brands"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4"
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive={pathname === "/about-us"}>
          <Link
            className="uppercase font-normal"
            href="/about-us"
            color="foreground"
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/contact-us"}>
          <Link
            className="uppercase font-normal"
            color="foreground"
            href="/contact-us"
          >
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <LanguageToggler
            languageSelected={languageSelected}
            setLanguageSelected={setLanguageSelected}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-tw-primary/80">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Navigation
