"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call - replace with actual newsletter service
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-4xl mb-4 block">🌱</span>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Pridružite se Eko Pokretu
        </h2>
        <p className="text-green-100 mb-6">
          Prijavite se na naš newsletter i primajte savjete za održivi život,
          ekskluzivne ponude i novosti o ekologiji u BiH.
        </p>

        {status === "success" ? (
          <div className="bg-white/20 rounded-xl p-4 text-lg">
            ✅ Hvala! Uspješno ste se prijavili na newsletter.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Vaša email adresa"
              required
              className="flex-1 px-5 py-3 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-white text-green-600 font-semibold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Učitavanje..." : "Prijavi se"}
            </button>
          </form>
        )}

        <p className="text-green-200 text-sm mt-4">
          Nema spam-a. Možete se odjaviti u bilo koje vrijeme.
        </p>
      </div>
    </section>
  );
}
