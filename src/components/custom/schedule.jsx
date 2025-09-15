import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Schedule() {
  const scheduleData = [
    {
      date: "12th October",
      day: "Day 1",
      events: ["AI Innovation Challenge", "Web Dev Sprint"],
      time: "9:00 AM - 9:00 PM",
    },
    {
      date: "13th October",
      day: "Day 2",
      events: ["Mobile App Marathon", "Data Science Derby"],
      time: "9:00 AM - 9:00 PM",
    },
    {
      date: "14th October",
      day: "Day 3",
      events: ["Cybersecurity Shield", "Game Dev Arena"],
      time: "9:00 AM - 9:00 PM",
    },
    {
      date: "17th October",
      day: "Day 4",
      events: ["Blockchain Builder", "Final Presentations"],
      time: "9:00 AM - 6:00 PM",
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 text-center rounded-xl">
        <h2 className="text-4xl font-bold mb-6">Event Schedule</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Four action-packed days of coding challenges, innovation, and collaboration.
        </p>
      </div>

      <div className="space-y-6 max-w-5xl mx-auto px-4 mt-12">
        {scheduleData.map((day, index) => (
          <Card key={index} className="bg-white text-black shadow-lg border border-gray-200">
            <div className="flex flex-col pl-3 md:flex-row">
              {/* left */}
              <div className="bg-gray-100 p-6 pl-12 md:w-64 rounded-xl">
                <div className="text-sm text-gray-600 mb-1">{day.day}</div>
                <div className="text-2xl font-bold mb-2">{day.date}</div>
                <div className="flex items-center text-sm text-gray-700">
                  <Clock className="h-4 w-4 mr-2" />
                  {day.time}
                </div>
              </div>

              {/* Right */}
              <CardContent className="p-6 flex-1">
                <h3 className="text-lg font-semibold mb-4">Events</h3>
                <div className="space-y-2">
                  {day.events.map((event, i) => (
                    <div
                      key={i}
                      className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="w-2 h-2 bg-black rounded-full mr-3" />
                      <span>{event}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
