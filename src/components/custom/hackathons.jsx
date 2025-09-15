import { Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


export default function Hackathons() {
  const hackathons = [
    {
      title: "AI Innovation Challenge",
      date: "12th October",
      description: "Build cutting-edge AI solutions that solve real-world problems using machine learning and deep learning technologies.",
      icon: "🤖",
      difficulty: "Advanced",
      duration: "24 hours",
      team: "2-4 members"
    },
    {
      title: "Web Dev Sprint",
      date: "12th October",
      description: "Create stunning web applications using modern frameworks and showcase your frontend and backend skills.",
      icon: "🌐",
      difficulty: "Intermediate",
      duration: "24 hours",
      team: "2-4 members"
    },
    {
      title: "Mobile App Marathon",
      date: "13th October",
      description: "Develop innovative mobile applications for iOS and Android that impact millions of users.",
      icon: "📱",
      difficulty: "Intermediate",
      duration: "24 hours",
      team: "2-4 members"
    },
    {
      title: "Data Science Derby",
      date: "13th October",
      description: "Analyze complex datasets, extract insights, and build predictive models that drive business decisions.",
      icon: "📊",
      difficulty: "Advanced",
      duration: "24 hours",
      team: "2-4 members"
    },
    {
      title: "Cybersecurity Shield",
      date: "14th October",
      description: "Design and implement security solutions to protect digital infrastructure from modern threats.",
      icon: "🛡️",
      difficulty: "Expert",
      duration: "24 hours",
      team: "2-4 members"
    },
    {
      title: "Game Dev Arena",
      date: "14th October",
      description: "Create immersive gaming experiences using cutting-edge game development tools and engines.",
      icon: "🎮",
      difficulty: "Intermediate",
      duration: "24 hours",
      team: "2-4 members"
    },
    {
      title: "Blockchain Builder",
      date: "17th October",
      description: "Develop decentralized applications and explore the future of web3 and blockchain technology.",
      icon: "⛓️",
      difficulty: "Advanced",
      duration: "24 hours",
      team: "2-4 members"
    }
  ];

  const getDifficultyVariant = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'default';
      case 'Intermediate':
        return 'secondary';
      case 'Advanced':
        return 'destructive';
      case 'Expert':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <section id="hackathons" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">7 Epic Hackathons</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your challenge and showcase your skills in cutting-edge technologies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{hackathon.icon}</div>
                  <Badge variant={getDifficultyVariant(hackathon.difficulty)}>
                    {hackathon.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{hackathon.title}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">
                  {hackathon.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {hackathon.description}
                </p>
                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {hackathon.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {hackathon.team}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};