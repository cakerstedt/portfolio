import React from "react";

export function CV() {
  return (
    <section id="cv" className="px-4 py-8 max-w-3xl mx-auto">
      <h2 className="text-2xl text-green-400 mb-4">CV</h2>
      <ul className="text-zinc-300 space-y-4">
        <li><strong>Utbildning:</strong> <br></br>Kandidatexamen i <em>Systemvetenskap</em> från Örebro Universitet<br></br>Kandidatexamen i <em>Nationalekonomi</em> med inriktning på Finans från Örebro Universitet</li>
        <li><strong>Erfarenhet:</strong> Flera års arbete med frontendutveckling, .NET MVC och databaser.<br></br> Arbetar idag som samordningsansvarig på SCB för ett dussintal webbutvecklare.</li>
        
        <li className="flex items-center space-x-2">
        <img
         src="src/img/linkedin.png"
         alt="LinkedIn"
        className="w-5 h-5"
         />
        <strong>LinkedIn:</strong>
        <a
        href="https://www.linkedin.com/in/charles-%C3%A5kerstedt-74817192/"
        className="text-green-400 underline"
        >
         linkedin.com/charles-åkerstedt
      </a>
</li> 
      </ul>
    </section>
  );
}
