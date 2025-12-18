"use client";

import React from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n";

const CVPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-light text-primary mb-6">
              {t("cv.title")}
            </h1>
            <div className="w-16 h-px bg-accent mx-auto"></div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-primary mb-8 pb-2 border-b border-border">
              {t("cv.education.title")}
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="font-sans font-medium text-primary">MFA Sculpture</h3>
                  <p className="font-sans text-muted-foreground">Royal Institute of Art, Stockholm</p>
                </div>
                <span className="font-sans text-sm text-muted-foreground mt-1 md:mt-0">2000 - 2002</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="font-sans font-medium text-primary">BFA Fine Arts</h3>
                  <p className="font-sans text-muted-foreground">Konstfack, Stockholm</p>
                </div>
                <span className="font-sans text-sm text-muted-foreground mt-1 md:mt-0">1996 - 2000</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="font-sans font-medium text-primary">Foundation Studies</h3>
                  <p className="font-sans text-muted-foreground">Gerlesborgsskolan, Stockholm</p>
                </div>
                <span className="font-sans text-sm text-muted-foreground mt-1 md:mt-0">1994 - 1996</span>
              </div>
            </div>
          </div>

          {/* Solo Exhibitions */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-primary mb-8 pb-2 border-b border-border">
              {t("cv.soloExhibitions.title")}
            </h2>
            <div className="space-y-4">
              {[
                { year: "2024", title: "Forms in Dialogue", venue: "Galleri Andersson/Sandström, Stockholm" },
                { year: "2023", title: "Material Memory", venue: "Konsthall Malmö" },
                { year: "2022", title: "Between", venue: "Galleri Magnus Karlsson, Stockholm" },
                { year: "2021", title: "Organic Structures", venue: "Copenhagen Contemporary, Denmark" },
                { year: "2020", title: "Tension and Rest", venue: "Bonniers Konsthall, Stockholm" },
                { year: "2019", title: "Wood and Metal", venue: "Galerie Forsblom, Helsinki" },
                { year: "2018", title: "Variations", venue: "Galleri Riis, Oslo" },
                { year: "2017", title: "New Works", venue: "Galleri Andersson/Sandström, Stockholm" },
                { year: "2015", title: "Retrospective", venue: "Göteborgs Konsthall" },
              ].map((exhibition, index) => (
                <div key={index} className="flex flex-col md:flex-row md:gap-8">
                  <span className="font-sans text-sm text-accent w-16 flex-shrink-0">{exhibition.year}</span>
                  <div>
                    <span className="font-sans font-medium text-primary">{exhibition.title}</span>
                    <span className="font-sans text-muted-foreground"> — {exhibition.venue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Group Exhibitions */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-primary mb-8 pb-2 border-b border-border">
              {t("cv.groupExhibitions.title")}
            </h2>
            <div className="space-y-4">
              {[
                { year: "2024", title: "Nordic Sculpture Now", venue: "Louisiana Museum of Modern Art, Denmark" },
                { year: "2023", title: "Material World", venue: "Moderna Museet, Stockholm" },
                { year: "2022", title: "Crafted", venue: "Design Museum, Helsinki" },
                { year: "2021", title: "Northern Perspectives", venue: "Kiasma, Helsinki" },
                { year: "2020", title: "Form Follows Function", venue: "National Museum, Oslo" },
                { year: "2019", title: "Contemporary Swedish Art", venue: "Magasin III, Stockholm" },
                { year: "2018", title: "Wood: Material and Method", venue: "Nationalmuseum, Stockholm" },
              ].map((exhibition, index) => (
                <div key={index} className="flex flex-col md:flex-row md:gap-8">
                  <span className="font-sans text-sm text-accent w-16 flex-shrink-0">{exhibition.year}</span>
                  <div>
                    <span className="font-sans font-medium text-primary">{exhibition.title}</span>
                    <span className="font-sans text-muted-foreground"> — {exhibition.venue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Public Commissions */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-primary mb-8 pb-2 border-b border-border">
              {t("cv.commissions.title")}
            </h2>
            <div className="space-y-4">
              {[
                { year: "2023", title: "Urban Flow", client: "City of Stockholm, Norra Djurgårdsstaden" },
                { year: "2022", title: "Synergy", client: "Nordic Tech Headquarters, Stockholm" },
                { year: "2021", title: "Knowledge", client: "Uppsala University, Main Campus" },
                { year: "2020", title: "Remembrance", client: "Malmö City, Memorial Park" },
                { year: "2019", title: "Gateway", client: "Arlanda Airport, Terminal 5" },
                { year: "2017", title: "Horizon", client: "Gothenburg City, Waterfront Development" },
                { year: "2015", title: "Elements", client: "Karolinska Hospital, Stockholm" },
              ].map((commission, index) => (
                <div key={index} className="flex flex-col md:flex-row md:gap-8">
                  <span className="font-sans text-sm text-accent w-16 flex-shrink-0">{commission.year}</span>
                  <div>
                    <span className="font-sans font-medium text-primary">{commission.title}</span>
                    <span className="font-sans text-muted-foreground"> — {commission.client}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Grants */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-primary mb-8 pb-2 border-b border-border">
              {t("cv.awards.title")}
            </h2>
            <div className="space-y-4">
              {[
                { year: "2022", title: "Prince Eugen Medal", org: "Swedish Academy of Fine Arts" },
                { year: "2019", title: "Artist Grant", org: "Swedish Arts Grants Committee (5-year)" },
                { year: "2016", title: "Sculpture Prize", org: "Rooseum, Malmö" },
                { year: "2014", title: "Artist Grant", org: "Swedish Arts Grants Committee (3-year)" },
                { year: "2010", title: "Young Artist Award", org: "Bonniers Konsthall" },
                { year: "2005", title: "Debut Grant", org: "Swedish Arts Council" },
              ].map((award, index) => (
                <div key={index} className="flex flex-col md:flex-row md:gap-8">
                  <span className="font-sans text-sm text-accent w-16 flex-shrink-0">{award.year}</span>
                  <div>
                    <span className="font-sans font-medium text-primary">{award.title}</span>
                    <span className="font-sans text-muted-foreground"> — {award.org}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-primary mb-8 pb-2 border-b border-border">
              {t("cv.collections.title")}
            </h2>
            <ul className="font-sans text-muted-foreground space-y-2">
              <li>Moderna Museet, Stockholm</li>
              <li>Nationalmuseum, Stockholm</li>
              <li>Göteborgs Konstmuseum</li>
              <li>Malmö Konstmuseum</li>
              <li>Louisiana Museum of Modern Art, Denmark</li>
              <li>Kiasma Museum of Contemporary Art, Helsinki</li>
              <li>National Museum of Art, Architecture and Design, Oslo</li>
              <li>Statens Konstråd (Public Art Agency Sweden)</li>
            </ul>
          </div>

          {/* Download CV */}
          <div className="text-center pt-8 border-t border-border">
            <p className="font-sans text-sm text-muted-foreground mb-4">
              {t("cv.download.text")}
            </p>
            <Link
              to="/contact"
              className="inline-block font-sans text-sm uppercase tracking-widest text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              {t("common.contact")}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CVPage;
