import React from "react";

export function Hero() {
  return (
    <div>
    <section id="hero" className="flex flex-col justify-center items-center px-4 py-12 max-w-3xl mx-auto">
    <img
  src="src\img\charles.jpg"
  alt="Charles Åkerstedt"
  className="w-40 h-40 object-cover rounded-full border-2 border-green-400 mb-4"
/>
    <h1 className="charles-text text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center text-green-400">
    Charles Åkerstedt
  </h1>
      <p className="mt-4 text-xl text-zinc-400">Systemutvecklare med passion för användarvänliga och smarta lösningar.</p>
    </section>
    </div>
  );
}
