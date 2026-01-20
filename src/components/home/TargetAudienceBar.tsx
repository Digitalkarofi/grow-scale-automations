import { Rocket, Building2, Landmark, Palette, GraduationCap } from "lucide-react";

const audiences = [
  { icon: Rocket, label: "Startups & Entrepreneurs" },
  { icon: Building2, label: "SMEs & Corporates" },
  { icon: Landmark, label: "Government Institutions" },
  { icon: Palette, label: "Creatives & Professionals" },
  { icon: GraduationCap, label: "Young Innovators" },
];

export function TargetAudienceBar() {
  return (
    <div className="bg-muted border-b border-border">
      <div className="container-wide">
        <div className="flex items-center justify-center gap-2 py-3 overflow-x-auto">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap mr-4">
            Strategic Solutions For:
          </span>
          <div className="flex items-center gap-6">
            {audiences.map((audience) => (
              <div
                key={audience.label}
                className="flex items-center gap-2 text-sm text-foreground/80 whitespace-nowrap"
              >
                <audience.icon size={16} className="text-primary" />
                <span className="font-medium">{audience.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
