"use client";

import React from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src="/images/about-1.jpg"
                alt="Carla Grahn"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 hidden lg:block"></div>
          </div>

          {/* Text */}
          <div className="lg:pt-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-primary mb-8">
              {t("about.title")}
            </h1>
            <div className="w-16 h-px bg-accent mb-8"></div>
            
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6">
              {t("about.bio1")}
            </p>
            
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              {t("about.bio2")}
            </p>
            
            <p className="font-sans text-muted-foreground leading-relaxed">
              {t("about.bio3")}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-primary mb-8">
              {t("about.philosophy.title")}
            </h2>
            <p className="font-serif text-xl md:text-2xl text-primary/80 leading-relaxed italic mb-8">
              "{t("about.philosophy.quote")}"
            </p>
            <span className="font-sans text-sm text-muted-foreground tracking-widest uppercase">
              — Carla Grahn
            </span>
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-primary mb-6">
              {t("about.studio.title")}
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              {t("about.studio.description1")}
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              {t("about.studio.description2")}
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed">
              {t("about.studio.description3")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="image-hover rounded-sm overflow-hidden">
              <img
                src="/images/about-2.jpg"
                alt="Studio view"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="image-hover rounded-sm overflow-hidden mt-8">
              <img
                src="/images/about-3.jpg"
                alt="Work in progress"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-primary-foreground text-center mb-16">
            {t("about.materials.title")}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-primary-foreground/30 flex items-center justify-center">
                <span className="font-serif text-2xl text-primary-foreground">W</span>
              </div>
              <h3 className="font-serif text-xl text-primary-foreground mb-4">
                {t("about.materials.wood.title")}
              </h3>
              <p className="font-sans text-sm text-primary-foreground/70">
                {t("about.materials.wood.description")}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-primary-foreground/30 flex items-center justify-center">
                <span className="font-serif text-2xl text-primary-foreground">M</span>
              </div>
              <h3 className="font-serif text-xl text-primary-foreground mb-4">
                {t("about.materials.metal.title")}
              </h3>
              <p className="font-sans text-sm text-primary-foreground/70">
                {t("about.materials.metal.description")}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-primary-foreground/30 flex items-center justify-center">
                <span className="font-serif text-2xl text-primary-foreground">S</span>
              </div>
              <h3 className="font-serif text-xl text-primary-foreground mb-4">
                {t("about.materials.stone.title")}
              </h3>
              <p className="font-sans text-sm text-primary-foreground/70">
                {t("about.materials.stone.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-primary mb-6">
            {t("about.cta.title")}
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed mb-8">
            {t("about.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cv"
              className="inline-block font-sans text-sm uppercase tracking-widest text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              {t("common.viewCv")}
            </Link>
            <Link
              to="/contact"
              className="inline-block font-sans text-sm uppercase tracking-widest text-primary-foreground bg-primary px-8 py-3 hover:bg-accent transition-colors duration-300"
            >
              {t("common.contact")}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
