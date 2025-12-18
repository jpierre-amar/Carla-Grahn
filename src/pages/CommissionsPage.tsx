"use client";

import React from "react";
import Layout from "@/components/Layout";
import Gallery from "@/components/Gallery";
import { commissionImages } from "@/data/portfolioImages";
import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n";

const CommissionsPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-primary mb-6 animate-fade-in-up">
            {t("commissions.title")}
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8"></div>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t("commissions.description")}
          </p>
        </div>

        {/* Gallery */}
        <Gallery images={commissionImages} />
      </section>

      {/* Process Section */}
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-primary text-center mb-16">
              {t("commissions.process.title")}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center font-serif text-lg text-accent">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-3">
                    {t("commissions.process.step1.title")}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    {t("commissions.process.step1.description")}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center font-serif text-lg text-accent">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-3">
                    {t("commissions.process.step2.title")}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    {t("commissions.process.step2.description")}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center font-serif text-lg text-accent">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-3">
                    {t("commissions.process.step3.title")}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    {t("commissions.process.step3.description")}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center font-serif text-lg text-accent">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-3">
                    {t("commissions.process.step4.title")}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    {t("commissions.process.step4.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Commissions */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-primary text-center mb-12">
            {t("commissions.types.title")}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-sm">
              <h3 className="font-serif text-xl text-primary mb-4">
                {t("commissions.types.public.title")}
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                {t("commissions.types.public.description")}
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-sm">
              <h3 className="font-serif text-xl text-primary mb-4">
                {t("commissions.types.corporate.title")}
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                {t("commissions.types.corporate.description")}
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-sm">
              <h3 className="font-serif text-xl text-primary mb-4">
                {t("commissions.types.private.title")}
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                {t("commissions.types.private.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-primary-foreground mb-6">
            {t("commissions.cta.title")}
          </h2>
          <p className="font-sans text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {t("commissions.cta.description")}
          </p>
          <Link 
            to="/contact" 
            className="inline-block font-sans text-sm uppercase tracking-widest text-primary-foreground border border-primary-foreground px-8 py-3 hover:bg-primary-foreground hover:text-primary transition-colors duration-300 min-h-[44px] flex items-center justify-center"
          >
            {t("common.contact")}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CommissionsPage;
