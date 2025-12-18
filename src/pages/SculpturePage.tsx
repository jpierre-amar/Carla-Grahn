"use client";

import React from "react";
import Layout from "@/components/Layout";
import Gallery from "@/components/Gallery";
import { sculptureImages } from "@/data/portfolioImages";
import { useTranslation } from "@/i18n";

const SculpturePage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-primary mb-6 animate-fade-in-up">
            {t("sculpture.title")}
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8"></div>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t("sculpture.description")}
          </p>
        </div>

        {/* Gallery */}
        <Gallery images={sculptureImages} />
      </section>

      {/* Process Section */}
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-primary text-center mb-12">
              {t("sculpture.process.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="font-serif text-5xl text-accent/30 mb-4">01</div>
                <h3 className="font-serif text-xl text-primary mb-3">
                  {t("sculpture.process.step1.title")}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {t("sculpture.process.step1.description")}
                </p>
              </div>
              <div className="p-6">
                <div className="font-serif text-5xl text-accent/30 mb-4">02</div>
                <h3 className="font-serif text-xl text-primary mb-3">
                  {t("sculpture.process.step2.title")}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {t("sculpture.process.step2.description")}
                </p>
              </div>
              <div className="p-6">
                <div className="font-serif text-5xl text-accent/30 mb-4">03</div>
                <h3 className="font-serif text-xl text-primary mb-3">
                  {t("sculpture.process.step3.title")}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {t("sculpture.process.step3.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SculpturePage;
