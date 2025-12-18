"use client";

import React from "react";
import Layout from "@/components/Layout";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  return (
    <Layout>
      <section className="container py-16">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-primary">À propos de Carla Grahn</h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <img
              src="/images/carla-grahn-about.jpg" // Chemin d'accès pour l'image de Carla Grahn
              alt="Carla Grahn"
              className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[500px]"
            />
          </div>
          <div className="md:order-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6 text-primary">Ma Philosophie</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En tant que photographe, je crois que chaque personne et chaque instant a une histoire unique à raconter. Mon objectif est de capturer l'essence de ces histoires à travers des images authentiques et émouvantes. J'aime travailler avec la lumière naturelle et les compositions minimalistes pour créer des photographies qui sont à la fois puissantes et intemporelles.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Que ce soit pour un portrait, un événement de mode ou la beauté brute de la nature, je m'efforce d'apporter une touche artistique et une perspective fraîche à chaque projet. Mon travail est une exploration constante de la beauté sous toutes ses formes.
            </p>
          </div>
        </div>
        <Separator className="my-16" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Mon Parcours</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mon voyage dans la photographie a commencé il y a plus de dix ans, armée d'un appareil photo argentique et d'une curiosité insatiable pour le monde. Après des études en arts visuels et plusieurs années à affiner mon art, j'ai eu le privilège de travailler avec une clientèle variée, des magazines de mode aux particuliers cherchant à immortaliser des moments précieux. Chaque expérience a enrichi ma vision et ma technique, me permettant de développer un style distinctif qui me passionne.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;