import React, { useState } from "react";
import { Contact } from "./Contact"; // Importera Contact-komponenten

export function ContactSection(): JSX.Element {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => setShowContactForm(!showContactForm);

  return (
    <section id="contact-section" className="px-4 max-w-3xl mx-auto mt-16">
      {/* Text eller knapp som togglar kontaktformuläret */}
      <div className="text-center">
              <button
          onClick={toggleContactForm}
          className="text-green-400 font-bold hover:text-green-600"
        >
          Om du vill komma i kontakt med mig, klicka här för att skicka ett meddelande.
        </button>
      </div>

      {/* Visa kontaktformuläret om showContactForm är true */}
      {showContactForm && (
        <div className="mt-6">
          <Contact />
        </div>
      )}
    </section>
  );
}
