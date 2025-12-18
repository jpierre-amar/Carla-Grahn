"use client";

import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      <section className="container py-16">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-primary">Contactez-moi</h1>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          J'adorerais avoir de vos nouvelles ! Que vous ayez une question, une proposition de collaboration ou que vous souhaitiez simplement dire bonjour, n'hésitez pas à me contacter via le formulaire ci-dessous ou par les moyens directs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Envoyer un message</h2>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Nom</Label>
                <Input id="name" type="text" placeholder="Votre nom" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Votre email" />
              </div>
              <div>
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" type="text" placeholder="Sujet du message" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Votre message..." rows={5} />
              </div>
              <Button type="submit" className="w-full">Envoyer le message</Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6 text-primary">Mes Coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:contact@carlagrahn.com" className="text-lg text-muted-foreground hover:text-primary transition-colors">contact@carlagrahn.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <a href="tel:+1234567890" className="text-lg text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="text-lg text-muted-foreground">Votre Ville, Votre Pays</p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Suivez-moi</h3>
              <div className="flex justify-center md:justify-start space-x-6">
                {/* Replace with actual social media links */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.86 8.16 6.839 9.504.499.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.116-4.555-4.951 0-1.093.39-1.988 1.029-2.681-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.485 9.485 0 0112 6.13c.85.004 1.701.115 2.503.381 1.909-1.295 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.651.64.693 1.029 1.587 1.029 2.681 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;