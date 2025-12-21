import { useState } from "react"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "./ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { ModeToggle } from "./mode-toggle"
import { useContactModal } from "../hooks/use-contact-modal"

export function Header() {
  const { openModal } = useContactModal()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const marketingServices = [
    { name: "Graphics Design", href: "#services" },
    { name: "Meta Ads", href: "#services" },
    { name: "Social Media Marketing", href: "#services" },
    { name: "SEO", href: "#services" },
    { name: "Content Strategy & Writing", href: "#services" },
  ]

  const consultingServices = [
    { name: "Premium Digital Growth Package", href: "#services" },
    { name: "Strategic Marketing Consultation", href: "#services" },
    { name: "Logo Design", href: "#services" },
    { name: "Advanced Analytics & Reporting", href: "#services" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="max-w-full mx-auto px-4">
        <div className="flex h-16 items-center">
          {/* Left - Logo */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <a href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-primary-foreground font-bold">
                AM
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">Amrit Paudel</span>
            </a>
          </div>

          {/* Center - Desktop Navigation */}
          <div className="hidden xl:flex flex-1 justify-center mx-8">
            <NavigationMenu>
              <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/50 dark:hover:text-blue-200 focus:bg-blue-50 focus:text-blue-700 dark:focus:bg-blue-900/50 dark:focus:text-blue-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-100 data-[active]:text-blue-800 dark:data-[active]:bg-blue-900/70 dark:data-[active]:text-blue-100"
                href="/"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/50 dark:hover:text-blue-200 focus:bg-blue-50 focus:text-blue-700 dark:focus:bg-blue-900/50 dark:focus:text-blue-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-100 data-[active]:text-blue-800 dark:data-[active]:bg-blue-900/70 dark:data-[active]:text-blue-100"
                href="/#about"
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                  <div>
                    <h4 className="mb-2 text-sm font-medium text-muted-foreground">
                      Marketing Services
                    </h4>
                    <ul className="space-y-1">
                      {marketingServices.map((service) => (
                        <li key={service.name}>
                          <NavigationMenuLink
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href={service.href}
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.name}
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-medium text-muted-foreground">
                      Consulting Services
                    </h4>
                    <ul className="space-y-1">
                      {consultingServices.map((service) => (
                        <li key={service.name}>
                          <NavigationMenuLink
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href={service.href}
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.name}
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/50 dark:hover:text-blue-200 focus:bg-blue-50 focus:text-blue-700 dark:focus:bg-blue-900/50 dark:focus:text-blue-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-100 data-[active]:text-blue-800 dark:data-[active]:bg-blue-900/70 dark:data-[active]:text-blue-100"
                href="#portfolio"
              >
                Portfolio
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/50 dark:hover:text-blue-200 focus:bg-blue-50 focus:text-blue-700 dark:focus:bg-blue-900/50 dark:focus:text-blue-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-100 data-[active]:text-blue-800 dark:data-[active]:bg-blue-900/70 dark:data-[active]:text-blue-100"
                href="#testimonials"
              >
                Testimonials
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/50 dark:hover:text-blue-200 focus:bg-blue-50 focus:text-blue-700 dark:focus:bg-blue-900/50 dark:focus:text-blue-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-100 data-[active]:text-blue-800 dark:data-[active]:bg-blue-900/70 dark:data-[active]:text-blue-100"
                href="#blog"
              >
                Blog
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/50 dark:hover:text-blue-200 focus:bg-blue-50 focus:text-blue-700 dark:focus:bg-blue-900/50 dark:focus:text-blue-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-100 data-[active]:text-blue-800 dark:data-[active]:bg-blue-900/70 dark:data-[active]:text-blue-100"
                href="#contact"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right - CTA Button + Theme Toggle */}
          <div className="flex items-center flex-shrink-0 space-x-3 ml-auto">
            <ModeToggle />
            <Button 
              onClick={() => openModal("Get Free Consultation")}
              className="hidden xl:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 whitespace-nowrap cursor-pointer"
            >
              Get Free Consultation
            </Button>
            
            {/* Mobile Call Button */}
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden"
              onClick={() => window.open("tel:+9779865846429", "_self")}
              title="Call now"
            >
              <Phone className="h-5 w-5" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              Home
            </a>
            <a
              href="/#about"
              className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              About Us
            </a>
            
            {/* Mobile Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <div className="px-2 py-1">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Marketing Services</p>
                  {marketingServices.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <a href={service.href} className="text-sm">
                        {service.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </div>
                <div className="px-2 py-1 border-t">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Consulting Services</p>
                  {consultingServices.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <a href={service.href} className="text-sm">
                        {service.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a
              href="#portfolio"
              className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#blog"
              className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              Contact
            </a>
            
            {/* Mobile CTA Button */}
            <div className="pt-4 border-t">
              <Button 
                onClick={() => openModal("Get Free Consultation")}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
