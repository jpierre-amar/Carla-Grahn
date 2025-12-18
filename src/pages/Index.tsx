"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioImages } from "@/data/portfolioImages";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">Carla Grahn</h1>
          <p className="text-xl md:text-2xl font-light italic drop-shadow-md">Photographe</p>
          <Button asChild className="mt-8 px-8 py-3 text-lg">
            <Link to="/portfolio">Voir le Portfolio</Link>
          </Button>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="container py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Mon Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioImages.slice(0, 3).map((image, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary">{image.alt}</h3>
                  <p className="text-sm text-muted-foreground">{image.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/portfolio">Voir toutes les œuvres</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted py-16">
        <div className="container flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg" // Replace with an actual portrait of Carla Grahn
              alt="Carla Grahn"
              className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[400px]"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-primary">À propos de Carla Grahn</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Carla Grahn est une photographe passionnée, spécialisée dans les portraits, la mode et la photographie de nature. Avec un œil aiguisé pour la beauté et une capacité unique à capturer l'émotion, Carla crée des images qui racontent des histoires et évoquent des sentiments profonds. Son travail est caractérisé par une esthétique moderne et artistique, mélangeant lumière naturelle et composition soignée pour produire des clichés intemporels.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link to="/about">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Contactez-moi</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Intéressé par une collaboration ou une séance photo ? N'hésitez pas à me contacter.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Envoyer un message</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;