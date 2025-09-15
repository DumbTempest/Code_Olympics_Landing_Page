import { Card, CardContent } from '@/components/ui/card';

export default function Sponsors() {
  const sponsors = [
    { name: "TechCorp", logo: "🏢" },
    { name: "InnovateLab", logo: "🔬" },
    { name: "CodeBase", logo: "💻" },
    { name: "FutureTech", logo: "🚀" },
    { name: "DataFlow", logo: "📈" },
    { name: "CloudNet", logo: "☁️" }
  ];

  return (
    <section id="sponsors" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Sponsors</h2>
          <p className="text-xl text-muted-foreground">
            Proudly supported by leading technology companies
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl mb-2">{sponsor.logo}</div>
                <div className="text-sm font-medium text-foreground">{sponsor.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

