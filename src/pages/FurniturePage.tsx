"use client";

import React from "react";
import Layout from "@/components/Layout";
import Gallery from "@/components/Gallery";
import { furnitureImages } from "@/data/portfolioImages";
import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n";

const FurniturePage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-primary mb-6 animate-fade-in-up">
            {t("furniture.title")}
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8"></div>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t("furniture.description")}
          </p>
        </div>

        {/* Gallery */}
        <Gallery images={furnitureImages} />
      </section>

      {/* Philosophy Section */}
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-primary mb-6">
                {t("furniture.philosophy.title")}
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                {t("furniture.philosophy.description1")}
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                {t("furniture.philosophy.description2")}
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                {t("furniture.philosophy.description3")}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-muted rounded-sm overflow-hidden">
                <img 
                  src="/images/furniture/furniture-2.jpg" 
                  alt="Furniture detail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-accent/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Orders */}
      <section className="container py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-primary mb-6">
            {t("furniture.custom.title")}
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed mb-8">
            {t("furniture.custom.description")}
          </p>
          <Link 
            to="/contact" 
            className="inline-block font-sans text-sm uppercase tracking-widest text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            {t("common.getInTouch")}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FurniturePage;
