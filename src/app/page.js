'use client';

import { useState, useEffect } from 'react';
import { Menu, Calendar, Trophy, Users, Code, Zap, ArrowRight, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Schedule from '@/components/custom/schedule';
import Hackathons from '@/components/custom/hackathons';
import Sponsors from '@/components/custom/sponsors';
import Footer from '@/components/custom/footer';
import { redirect } from 'next/dist/server/api-utils';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'schedule', 'hackathons', 'sponsors', 'register'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const NavItems = () => (
    <>
      {['Home', 'About', 'Schedule', 'Hackathons'].map((item) => (
        <Button
          key={item}
          variant="ghost"
          onClick={() => scrollToSection(item.toLowerCase())}
          className={`px-3 py-2 text-md font-medium ${activeSection === item.toLowerCase() ? 'text-black' : 'text-gray-400 hover:text-black'}`}
        >
          {item}
        </Button>
      ))}
    </>
  );

  return (
    <div className="min-h-screen bg-white text-black">

      {/* navbar */}
      <nav className="fixed w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold">Code Olympics</div>
                <div className="text-sm text-gray-500">2025</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-4">
              <NavItems />
              <Button className=" bg-black text-white hover:bg-gray-800 rounded-xl " onClick={() => scrollToSection('register')}>Register</Button>
            </div>


            {/* mobile */}
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                  <div className="flex flex-col space-y-4 mt-4">
                    <NavItems />
                    <Button className=" bg-black text-white hover:bg-gray-800 rounded-xl " onClick={() => scrollToSection('register')}>Register</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>


      <section id="home" className="pt-28 pb-24 bg-gray-50 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Code Olympics <span className="block text-4xl md:text-5xl pt-2 text-gray-800">2025</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Where Innovation Meets Excellence. Join the ultimate coding competition featuring 7 epic hackathons across 4 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" onClick={() => scrollToSection('register')} className="bg-black text-white px-8 py-6 text-lg">
              Register Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('schedule')} className="border-black text-black px-8 py-6 text-lg">
              View Schedule
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
            {[['4', 'Days'], ['7', 'Hackathons'], ['500+', 'Participants'], ['₹50K+', 'Prizes']].map(([value, label], i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold mb-3">{value}</div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">About Code Olympics</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Code Olympics 2025 is the premier coding competition bringing together the brightest minds in technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[['Compete & Win', Trophy], ['Network', Users], ['Innovate', Zap]].map(([title, Icon], i) => (
              <Card key={i}>
                <CardContent className="text-center p-8">
                  <Icon className="h-12 w-12 mx-auto mb-4" />
                  <CardTitle className="text-xl mb-2">{title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {i === 0
                      ? 'Compete for prizes and recognition in the tech community'
                      : i === 1
                        ? 'Connect with developers and industry professionals'
                        : 'Push boundaries and create solutions for tomorrow’s challenges'}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-black text-white">
            <CardContent className="p-8 text-center">
              <CardTitle className="text-2xl mb-4">Why Participate?</CardTitle>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[['Industry Recognition', Award], ['Skill Development', Star], ['Team Building', Users]].map(([text, Icon], i) => (
                  <div key={i} className="flex items-center justify-center">
                    <Icon className="h-6 w-6 mr-2" /> <span>{text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Schedule />
      <Hackathons />
     

      <section id="register" className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Code?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of developers in the most exciting coding event of 2025.
          </p>
          <Card className="bg-white/10 border border-white/20 mb-8">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{ icon: Calendar, title: 'October 12-17', subtitle: '4 Intensive Days' },
                { icon: Trophy, title: '₹50,000+', subtitle: 'Prize Pool' },
                { icon: Users, title: '500+ Coders', subtitle: 'Expected Participants' }].map(({ icon: Icon, title, subtitle }, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <Icon className="h-8 w-8 text-white mb-2" />
                    <div className="font-semibold text-white">{title}</div>
                    <div className="text-sm text-gray-300">{subtitle}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-white text-black hover:text-white hover:bg-black" onClick={() => window.open('https://uni-cc.vercel.app/', '_blank')}>Register Individual</Button>
            <Button  size="lg" className="bg-white text-black hover:text-white hover:bg-black" onClick={() => window.open('https://uni-cc.vercel.app/', '_blank')}>
              Register Team
            </Button>
          </div>
          <p className="text-gray-400 text-sm">* Early bird registrations close on October 5th. Limited spots available!</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
