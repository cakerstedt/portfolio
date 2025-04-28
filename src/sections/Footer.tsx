import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-center text-white py-6">
      © {new Date().getFullYear()} Charles Åkerstedt – Alla rättigheter förbehållna
    </footer>
  );
}
