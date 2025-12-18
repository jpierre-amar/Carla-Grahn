"use client";

import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "@/i18n";

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // In production, this would send to an API or email service
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Layout>
      <section className="container py-12 md:py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-primary mb-6 animate-fade-in-up">
            {t("contact.title")}
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8"></div>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl text-primary mb-8">
              {t("contact.form.title")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-sans text-sm text-muted-foreground">
                    {t("common.name")}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-card border-border focus:border-accent focus:ring-accent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-sans text-sm text-muted-foreground">
                    {t("common.email")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-card border-border focus:border-accent focus:ring-accent"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="font-sans text-sm text-muted-foreground">
                  {t("common.subject")}
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-card border-border focus:border-accent focus:ring-accent"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="font-sans text-sm text-muted-foreground">
                  {t("common.message")}
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-card border-border focus:border-accent focus:ring-accent resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full sm:w-auto px-12 py-6 font-sans text-sm uppercase tracking-widest bg-primary text-primary-foreground hover:bg-accent transition-colors duration-300"
              >
                {t("common.sendMessage")}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-primary mb-8">
              {t("contact.info.title")}
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-primary mb-1">
                    {t("contact.info.email")}
                  </h3>
                  <a
                    href="mailto:studio@carlagrahn.com"
                    className="font-sans text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    studio@carlagrahn.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-primary mb-1">
                    {t("contact.info.studio")}
                  </h3>
                  <p className="font-sans text-muted-foreground">
                    {t("contact.location")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-sans font-medium text-primary mb-4">
                {t("contact.info.visits.title")}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {t("contact.info.visits.description")}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-sans font-medium text-primary mb-4">
                {t("contact.info.representation.title")}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {t("contact.info.representation.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="bg-secondary/30 py-16">
        <div className="container">
          <div className="aspect-[21/9] bg-muted rounded-sm overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-accent/50 mx-auto mb-4" />
                <p className="font-sans text-muted-foreground">
                  {t("contact.location")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
