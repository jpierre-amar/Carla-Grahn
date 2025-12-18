"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight text-primary">
          Carla Grahn
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Accueil
          </Link>
          <Link to="/portfolio" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Portfolio
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            À propos
          </Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 pt-6">
                <Link to="/" className="text-lg font-medium text-primary hover:text-muted-foreground">
                  Accueil
                </Link>
                <Link to="/portfolio" className="text-lg font-medium text-primary hover:text-muted-foreground">
                  Portfolio
                </Link>
                <Link to="/about" className="text-lg font-medium text-primary hover:text-muted-foreground">
                  À propos
                </Link>
                <Link to="/contact" className="text-lg font-medium text-primary hover:text-muted-foreground">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;