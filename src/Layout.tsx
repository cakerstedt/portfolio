import React, { ReactNode } from "react";
import galaxyImage from './img/galaxy_new.jpg'; 

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      
      
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${galaxyImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'hue-rotate(90deg) brightness(1.5)',
        }}
      />

      {/* Rendera huvudinnehållet med mer transparens */}
      <main className="relative z-10 scroll-smooth p-4 bg-black bg-opacity-60">
        {children} {/* Detta kommer att visa innehållet som skickas till Layout */}
      </main>
    </div>
  );
}
