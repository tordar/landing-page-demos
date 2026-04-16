import { siteData } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TestimonialCards() {
  const previewTestimonials = siteData.testimonials.slice(0, 2);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading label="Gjestene sier" title="Hva gjestene våre mener" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previewTestimonials.map((t, i) => (
            <div
              key={i}
              className="bg-light rounded-xl p-6 border-l-4 border-accent"
            >
              <p className="text-gray-600 italic mb-4">&ldquo;{t.text}&rdquo;</p>
              <p className="font-semibold text-primary">
                {"⭐".repeat(t.rating)} — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
