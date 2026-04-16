import { siteData } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto mb-16">
        <p className="text-lg text-gray-600 leading-relaxed">{siteData.about.story}</p>
      </div>
      {siteData.about.teamMembers.length > 0 && (
        <div className="mb-16">
          <SectionHeading label="Teamet" title="Menneska bak campingplassen" />
          <div className="flex flex-wrap justify-center gap-8">
            {siteData.about.teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-3" width={200} height={200} loading="lazy" />
                <h3 className="font-bold text-primary">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <SectionHeading label="Gjestene seier" title="Kva gjestene meiner" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {siteData.testimonials.map((t, i) => (
          <div key={i} className="bg-light rounded-xl p-6 border-l-4 border-accent">
            <p className="text-gray-600 italic mb-4">&ldquo;{t.text}&rdquo;</p>
            <p className="font-semibold text-primary">{"⭐".repeat(t.rating)} — {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
