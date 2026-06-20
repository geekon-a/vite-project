// src/pages/EventsData.ts

export interface CoreEvent {
  id: string;
  day: string;
  month: string;
  title: string;
  location: string;
  time: string;
  tag: string;
  showOnHome?: boolean; // Nové políčko
}

export const vsechnyAkce: CoreEvent[] = [
  {
    id: "1",
    day: "25",
    month: "ČVN",
    title: "CORE Demo Day & Testování novinek",
    location: "Rujána, Německo – Kitesurf centrum",
    time: "10:00 - 18:00",
    tag: "Test Day",
    showOnHome: true // Chci na hlavní stránce
  },
  {
    id: "2",
    day: "12",
    month: "ČVC",
    title: "Big Air Clinic: Jak skočit tvůj první board-off",
    location: "Fehmarn, Německo – South Beach",
    time: "09:00 - 16:00",
    tag: "Camp",
    showOnHome: true // Chci na hlavní stránce
  },
  {
    id: "3",
    day: "05",
    month: "SRA",
    title: "Hydrofoil & Wing foil akademie",
    location: "Nechranice, Česko – Yacht Club",
    time: "11:00 - 17:00",
    tag: "Workshop"
    // Na úvodní stránce se neschová, zůstane jen v kompletním kalendáři
  }
  // ... zbytek tvých akcí
];