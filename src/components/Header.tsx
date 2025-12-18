"use client";

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: t("nav.sculpture"), path: "/sculpture" },
    { name: t("nav.furniture"), path: "/furniture" },
    { name: t("nav.commissions"), path: "/commissions" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.cv"), path: "/cv" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-serif text-2xl md:text-3xl font-medium tracking-wide text-primary hover:text-accent transition-colors duration-300"
        >
          Carla Grahn
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative font-sans text-sm tracking-wide uppercase transition-colors duration-300 hover-underline ${
                location.pathname === item.path
                  ? "text-accent"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-background/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container py-12 flex flex-col items-center gap-8">
          <Link
            to="/"
            className={`font-serif text-2xl tracking-wide transition-colors duration-300 ${
              location.pathname === "/"
                ? "text-accent"
                : "text-foreground/80 hover:text-foreground"
            }`}
          >
            {t("nav.home")}
          </Link>
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-serif text-2xl tracking-wide transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-accent"
                  : "text-foreground/80 hover:text-foreground"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
