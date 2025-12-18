"use client";

import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioImages } from "@/data/portfolioImages";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const PortfolioPage = () => {
  return (
    <Layout>
      <section className="container py-16">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-primary">Mon Portfolio</h1>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Découvrez ma collection d'œuvres, allant des portraits intimes aux paysages époustouflants, en passant par la photographie de mode et l'art abstrait. Chaque image raconte une histoire et capture un moment unique.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {portfolioImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                  <CardContent className="p-0 relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white">
                        <h3 className="text-lg font-semibold">{image.alt}</h3>
                        <p className="text-sm">{image.category}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0">
                <img src={image.src} alt={image.alt} className="w-full h-auto object-contain max-h-[90vh]" />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{image.alt}</h3>
                  <p className="text-md text-muted-foreground">{image.category}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;