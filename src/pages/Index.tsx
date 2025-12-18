"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { sculptureImages, furnitureImages, commissionImages } from "@/data/portfolioImages";
import { useTranslation } from "@/i18n";

const Index = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Layout className="pt-0">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Sculpture by Carla Grahn"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth/40 via-earth/20 to-background"></div>
        </div>

        {/* Content */}
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-cream mb-6 tracking-wide">
            Carla Grahn
          </h1>
          <div className="w-24 h-px bg-cream/50 mx-auto mb-6"></div>
          <p className="font-sans text-base sm:text-lg md:text-xl text-cream/90 tracking-widest uppercase px-4">
            {t("home.hero.subtitle")}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-cream/0 via-cream/50 to-cream/0"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl text-primary leading-relaxed font-light">
            "{t("home.intro.quote")}"
          </p>
          <div className="mt-8">
            <span className="font-sans text-sm text-muted-foreground tracking-widest uppercase">
              — Carla Grahn
            </span>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="pb-20 md:pb-32">
        {/* Sculpture */}
        <div className="container mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-12">
              <span className="font-sans text-xs tracking-widest uppercase text-accent mb-4 block">
                01 — {t("common.viewCollection")}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-primary mb-6">
                {t("home.sculpture.title")}
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                {t("home.sculpture.description")}
              </p>
              <Link 
                to="/sculpture" 
                className="inline-flex items-center gap-3 font-sans text-sm uppercase tracking-widest text-primary hover:text-accent transition-colors duration-300 group"
              >
                {t("common.viewCollection")}
                <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12"></span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="image-hover rounded-sm overflow-hidden">
                  <img 
                    src={sculptureImages[0]?.src} 
                    alt="Sculpture" 
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
                <div className="image-hover rounded-sm overflow-hidden">
                  <img 
                    src={sculptureImages[2]?.src} 
                    alt="Sculpture" 
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="image-hover rounded-sm overflow-hidden">
                  <img 
                    src={sculptureImages[1]?.src} 
                    alt="Sculpture" 
                    className="w-full aspect-[2/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Furniture */}
        <div className="bg-secondary/30 py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                <div className="pt-8">
                  <div className="image-hover rounded-sm overflow-hidden">
                    <img 
                      src={furnitureImages[0]?.src} 
                      alt="Furniture" 
                      className="w-full aspect-[2/3] object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="image-hover rounded-sm overflow-hidden">
                    <img 
                      src={furnitureImages[1]?.src} 
                      alt="Furniture" 
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <div className="image-hover rounded-sm overflow-hidden">
                    <img 
                      src={furnitureImages[2]?.src} 
                      alt="Furniture" 
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 lg:pl-12">
                <span className="font-sans text-xs tracking-widest uppercase text-accent mb-4 block">
                  02 — {t("common.viewCollection")}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-primary mb-6">
                  {t("home.furniture.title")}
                </h2>
                <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                  {t("home.furniture.description")}
                </p>
                <Link 
                  to="/furniture" 
                  className="inline-flex items-center gap-3 font-sans text-sm uppercase tracking-widest text-primary hover:text-accent transition-colors duration-300 group"
                >
                  {t("common.viewCollection")}
                  <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Commissions */}
        <div className="container mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-12">
              <span className="font-sans text-xs tracking-widest uppercase text-accent mb-4 block">
                03 — {t("common.viewCollection")}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-primary mb-6">
                {t("home.commissions.title")}
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                {t("home.commissions.description")}
              </p>
              <Link 
                to="/commissions" 
                className="inline-flex items-center gap-3 font-sans text-sm uppercase tracking-widest text-primary hover:text-accent transition-colors duration-300 group"
              >
                {t("common.learnMore")}
                <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12"></span>
              </Link>
            </div>
            <div className="relative">
              <div className="image-hover rounded-sm overflow-hidden">
                <img 
                  src={commissionImages[0]?.src} 
                  alt="Commission work" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border border-accent/20 rounded-sm hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-primary py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-sm overflow-hidden">
                <img 
                  src="/images/about-1.jpg" 
                  alt="Carla Grahn in studio" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-accent/30 rounded-sm hidden md:block"></div>
            </div>
            <div className="lg:pl-8">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-primary-foreground mb-6">
                {t("home.about.title")}
              </h2>
              <p className="font-sans text-primary-foreground/80 leading-relaxed mb-6">
                {t("home.about.description1")}
              </p>
              <p className="font-sans text-primary-foreground/80 leading-relaxed mb-8">
                {t("home.about.description2")}
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-3 font-sans text-sm uppercase tracking-widest text-primary-foreground hover:text-accent transition-colors duration-300 group"
              >
                {t("common.learnMore")}
                <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container py-20 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-primary mb-6">
            {t("home.cta.title")}
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed mb-8">
            {t("home.cta.description")}
          </p>
          <Link 
            to="/contact" 
            className="inline-block font-sans text-sm uppercase tracking-widest text-primary-foreground bg-primary px-10 py-4 hover:bg-accent transition-colors duration-300 min-h-[44px] flex items-center justify-center"
          >
            {t("common.getInTouch")}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
