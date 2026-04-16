"use client";

import { useState } from "react";
import { siteData } from "@/data/site";

export default function ContactForm() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Send oss ein melding</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">Namn</label>
              <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary" placeholder="Ditt namn" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">E-post</label>
              <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary" placeholder="din@epost.no" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="checkin" className="block text-sm font-medium text-primary mb-1">Innsjekk</label>
                <input type="date" id="checkin" name="checkin" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary" />
              </div>
              <div>
                <label htmlFor="checkout" className="block text-sm font-medium text-primary mb-1">Utsjekk</label>
                <input type="date" id="checkout" name="checkout" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">Melding</label>
              <textarea id="message" name="message" rows={5} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary resize-y" placeholder="Fortel oss kva du treng..." />
            </div>
            <button type="submit" className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">Send melding</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Kontaktinformasjon</h2>
          <div className="bg-light rounded-xl p-6 mb-6 space-y-3">
            <p className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <a href={`tel:${siteData.contact.phone.replace(/\s/g, "")}`} className="text-gray-600 hover:text-secondary">{siteData.contact.phone}</a>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-xl">✉️</span>
              <a href={`mailto:${siteData.contact.email}`} className="text-gray-600 hover:text-secondary">{siteData.contact.email}</a>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <span className="text-gray-600">{siteData.contact.address}</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-xl">🕐</span>
              <span className="text-gray-600">Sesong: {siteData.contact.season}</span>
            </p>
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4">Ofte stilte spørsmål</h2>
          <div className="space-y-2">
            {siteData.faq.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left hover:bg-light transition-colors">
                  <span className="font-medium text-primary">{item.question}</span>
                  <span className="text-secondary text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-gray-600 text-sm">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
