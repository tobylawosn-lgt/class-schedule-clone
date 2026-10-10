export type Focus = "Strength" | "Conditioning" | "Mobility";
export type Location = "Studio" | "Outdoor";
export type Session = {
  time: string;
  name: string;
  focus: Focus;
  location: Location;
  place: string;
  duration: number;
  spots: number;
  capacity: number;
};

export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
export type Day = (typeof DAYS)[number];

export const SCHEDULE: Record<Day, Session[]> = {
  Mon: [
    { time: "07:00", name: "Strength Foundations", focus: "Strength", location: "Studio", place: "Eixample studio", duration: 60, spots: 2, capacity: 6 },
    { time: "12:30", name: "Lunch Conditioning", focus: "Conditioning", location: "Outdoor", place: "Parc de la Ciutadella", duration: 45, spots: 5, capacity: 8 },
    { time: "19:00", name: "Mobility Reset", focus: "Mobility", location: "Studio", place: "Eixample studio", duration: 45, spots: 0, capacity: 6 },
  ],
  Tue: [
    { time: "07:00", name: "Beach Conditioning", focus: "Conditioning", location: "Outdoor", place: "Barceloneta beach", duration: 45, spots: 3, capacity: 8 },
    { time: "18:30", name: "Barbell Strength", focus: "Strength", location: "Studio", place: "Eixample studio", duration: 60, spots: 1, capacity: 6 },
  ],
  Wed: [
    { time: "07:00", name: "Strength Foundations", focus: "Strength", location: "Studio", place: "Eixample studio", duration: 60, spots: 4, capacity: 6 },
    { time: "12:30", name: "Urban Circuit", focus: "Conditioning", location: "Outdoor", place: "Montjuïc steps", duration: 45, spots: 6, capacity: 8 },
    { time: "19:00", name: "Barbell Strength", focus: "Strength", location: "Studio", place: "Eixample studio", duration: 60, spots: 2, capacity: 6 },
  ],
  Thu: [
    { time: "07:00", name: "Beach Conditioning", focus: "Conditioning", location: "Outdoor", place: "Barceloneta beach", duration: 45, spots: 0, capacity: 8 },
    { time: "18:30", name: "Mobility Reset", focus: "Mobility", location: "Studio", place: "Eixample studio", duration: 45, spots: 3, capacity: 6 },
  ],
  Fri: [
    { time: "07:00", name: "Strength Foundations", focus: "Strength", location: "Studio", place: "Eixample studio", duration: 60, spots: 1, capacity: 6 },
    { time: "13:00", name: "Park Strength", focus: "Strength", location: "Outdoor", place: "Parc de la Ciutadella", duration: 60, spots: 4, capacity: 8 },
  ],
  Sat: [
    { time: "09:00", name: "Beach Conditioning", focus: "Conditioning", location: "Outdoor", place: "Barceloneta beach", duration: 60, spots: 7, capacity: 10 },
    { time: "10:30", name: "Mobility Reset", focus: "Mobility", location: "Outdoor", place: "Parc de la Ciutadella", duration: 45, spots: 5, capacity: 10 },
  ],
};
