// src/pages/BlogData.ts

export interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  showOnHome?: boolean; // Nové políčko
}

export const nejnovejsiClanky: Article[] = [
  {
    id: "1",
    category: "Travel",
    title: "Norsko: Měsíc na snowkitu v nekonečném prašanu",
    excerpt: "Reportáž z expedice za polární kruh. Jak obstojí komorové kity v extrémních podmínkách?",
    date: "18. 06. 2026",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600",
    showOnHome: true // Zobrazí se na Home
  },
  {
    id: "2",
    category: "Test",
    title: "Recenze: Nový XR X a jeho limity v 40 uzlech",
    excerpt: "Vzali jsme nový Big Air benchmark na Fehmarn a pořádně ho protáhli v poryvovém větru.",
    date: "10. 06. 2026",
    image: "https://images.unsplash.com/photo-1510227272981-87123e259b17?q=80&w=600",
    showOnHome: true // Zobrazí se na Home
  },
  {
    id: "3",
    category: "Big Air",
    title: "Jak správně načasovat kiteloop pro maximální lift",
    excerpt: "Technický rozbor od našich team riderů. Kdy přesně zatáhnout za bar, aby tě kiteloop chytil?",
    date: "28. 05. 2026",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600",
    showOnHome: true // Zobrazí se na Home
  },
  {
    id: "4",
    category: "Drone",
    title: "Jak natáčet kiteboarding z FPV dronu a neztopit ho",
    excerpt: "Tipy pro commercial sports videography. Jak nastavit Betaflight a bezpečně létat nad slanou vodou.",
    date: "14. 05. 2026",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=600"
    // showOnHome chybí -> na Home nebude, ale v Magazínu ano
  },
  {
    id: "5",
    category: "Innovation",
    title: "Vývoj karbonových technologií u desek Roode",
    excerpt: "Nahlédnutí pod pokličku vývoje. Jak vrstvení high-modulus karbonu ovlivňuje pop a tvrdost dopadů.",
    date: "02. 05. 2026",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=600"
  }
];