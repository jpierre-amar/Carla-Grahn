"use client";

import React from "react";
import { MadeWithDyad } from "./made-with-dyad";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-8 text-center text-sm text-muted-foreground">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Carla Grahn. Tous droits réservés.</p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;