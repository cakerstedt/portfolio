import React from "react";

export function PreviousProjects() {
  return (
    <section id="previousprojects" className="px-4 py-8 max-w-3xl mx-auto">
      <h2 className="text-2xl text-green-400 mb-4">Systemutvecklingsprojekt</h2>

      <p className="text-zinc-300">
        Drev ett systemutvecklingsprojekt på Quale Consulting AB under min tid på universitetet där vi byggde en webbaserad applikation för att validera data med hjälp av en egen AI-modell. 
      </p>

      <p className="text-zinc-300 mt-4">
        <strong>Tech-stack:</strong> Python, .NET, C#, Microsoft SQL Server, HuggingFace.
      </p>
        <br></br>
      <div className="flex items-center flex-wrap gap-2 mt-2">
        <img src="src/img/python.svg" alt="Python" className="w-10 h-10" />
        <img src="src/img/dotnet.svg" alt=".NET" className="w-10 h-10" />
        <img src="src/img/c-sharp.svg" alt="C#" className="w-10 h-10" />
        <img src="src/img/html-5.svg" alt="HTML5" className="w-10 h-10" />
        <img src="src/img/css-3.svg" alt="CSS" className="w-10 h-10" />
        <img src="src/img/javascript.svg" alt="JS" className="w-10 h-10" />
        <img src="src/img/hugging-face-icon.svg" alt="HuggingFace" className="w-10 h-10" />
      </div>


      <ul className="text-zinc-300 space-y-4 mt-6">
        <li className="flex items-center space-x-2">
          <img
            src="src/img/github.png"
            alt="GitHub"
            className="w-5 h-5"
          />
          <strong>GitHub:</strong>
          <a
            href="https://github.com/cakerstedt"
            className="text-green-400 underline"
          >
            github.com/cakerstedt
          </a>
        </li>
      </ul>
    </section>
  );
}
