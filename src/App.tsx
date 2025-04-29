import React from "react";
import { Layout } from "./Layout";

import { About } from "./sections/About";
import { CV } from "./sections/CV";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { PreviousProjects } from "./sections/PreviousProjects";

function App(): JSX.Element {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col font-sans bg-zinc-900 text-zinc-200 bg-opacity-90">
        <Hero />
        {/* Tvåkolumnslayout */}
        <div className="flex flex-1">
          <div className="w-1/2 p-10 flex flex-col justify-between">
            <div>
              
                <About />
              
                <ContactSection />
              
            </div>
          </div>
          <div className="w-1/2 p-10 overflow-y-auto max-h-screen">
            
              <CV />
            
              <PreviousProjects />
            
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
export default App;