import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function Contact(): JSX.Element {
  const { register, handleSubmit, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log("Meddelande skickat!", data);
    setSubmitted(true);
    reset();

    // Valfritt: Återställ 'submitted' efter några sekunder om du vill
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-zinc-800 p-6 rounded-lg shadow-lg transition-all duration-500">
      <h3 className="text-xl text-green-400 mb-4">Kontakta mig</h3>

      {submitted ? (
        <div className="p-4 bg-green-600 text-black rounded text-center animate-fade-in">
          Ditt meddelande har skickats - Tack för att du hörde av dig!
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name")}
            placeholder="Ditt namn"
            className="w-full p-2 bg-zinc-700 text-white border border-zinc-600 rounded"
          />
          <input
            {...register("email")}
            placeholder="Din e-post"
            className="w-full p-2 bg-zinc-700 text-white border border-zinc-600 rounded"
          />
          <textarea
            {...register("message")}
            placeholder="Meddelande"
            className="w-full p-2 bg-zinc-700 text-white border border-zinc-600 rounded h-32"
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded"
          >
            Skicka
          </button>
        </form>
      )}
    </div>
  );
}
