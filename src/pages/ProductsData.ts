// src/pages/ProductsData.ts

export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: string;
  category: 'kiteboarding' | 'wing' | 'hydrofoil';
  type: 'kites' | 'boards' | 'bars' | 'wings' | 'foils';
  showOnHome?: boolean;
  
  // ROZŠÍŘENÁ DATA PRO DETAIL PRODUKTU:
  headline?: string;
  description?: string;
  windRange?: string;
  sizes?: string[];
  specs?: { [key: string]: string };
  features?: ProductFeature[];
}

export const vsechnyProdukty: Product[] = [
  {
    id: "1",
    name: "Core XR X",
    price: 44900,
    image: "https://ridecore.com/_img/elmrv4iFMuxqg6-iSoPo2SpR5CjYUzU3SSgVxk0vVds/fn:CORE_xr10_9_clipping_black/q:75/rs:fit:960:2000:1:0/czM6Ly9jb3Jla2l0ZXMtbmVvcy9uZW9zL3Jlc291cmNlcy9wZXJzaXN0ZW50L2RlMjJhODA4ZTZkNzkxYmMyYTAyZjc3NGI0MzJhN2MxM2I3YjI5N2E",
    tag: "Big Air",
    category: "kiteboarding",
    type: "kites",
    showOnHome: true,
    headline: "The Ultimate Big Air & High Performance Freeride Machine",
    description: "Tři roky nekompromisního vývoje přinášejí ikonický XR v jeho dosud nejradikálnější podobě. Díky použití ExoTex 2 materiálu je kostra kitu tužší, lehčí a reaktivnější. Pokud hledáš brutální lift, nekonečný hangtime a stoprocentní jistotu v megaloopech, XR X je tvoje jasná volba.",
    windRange: "12 - 38 uzlů",
    sizes: ["7m", "8m", "9m", "10m", "12m", "13.5m"],
    specs: {
      "Konstrukce": "5-Strut Delta Bow Frame",
      "Materiál náběžky": "ExoTex 3 Ultra Rigid Dacron",
      "Materiál vrchlíku": "CoreTex 2 Triple Ripstop",
      "Kategorie": "Big Air / High Performance Freeride",
      "Kompatibilita": "Sensor 4 Bar / Sensor 3 Series"
    },
    features: [
      {
        title: "ExoTex 3 Skeleton",
        description: "Kompletně přepracovaný dacron poskytuje o 80% vyšší pevnost v tahu a výrazně snižuje průměr náběžné hrany. Výsledkem je drak, který letí rychleji na kraj okna a generuje masivní vertikální pop."
      },
      {
        title: "CoreTex 2 Canopy",
        description: "Trojitý ripstop s extrémní odolností proti roztržení a vytahání. Vrchlík si zachovává perfektní profil i po měsících tvrdého ježdění v poryvovém větru."
      },
      {
        title: "Intelligent Arc",
        description: "Dynamické prohnutí kitu, které mění plochu podle zatažení za bar. Přitáhneš – drak se roztáhne pro maximální skok. Povolíš – otevře se pro snadný depower."
      }
    ]
  },
  {
    id: "2",
    name: "Core Fusion 7",
    price: 27900,
    image: "https://ridecore.com/_img/6u3prnOS2LJbK3vmxShZ1XB9Ko-D5-82zYJGTjw3kHk/fn:top_bottom_web/q:75/rs:fit:960:2000:1:0/czM6Ly9jb3Jla2l0ZXMtbmVvcy9uZW9zL3Jlc291cmNlcy9wZXJzaXN0ZW50LzYwOWNmZDI2NWUyMTI4N2MzYjVlZDM3ZjYzZDYyOGY3MTQ0MzIwMDY",
    tag: "Nejprodávanější",
    category: "kiteboarding",
    type: "boards",
    showOnHome: true,
    headline: "Carton Twin-Tip Masterpiece for Next-Level Freeride",
    description: "Nová generace legendárního twintipu Fusion přináší kompletně přepracované jádro a vylepšené vrstvení high-modulus karbonu. Deska absorbuje sekavou vodu s naprostou lehkostí, přičemž poskytuje explozivní pop, který tě nakopne do masivních board-offů a rotací.",
    windRange: "Full Range (Závisí na kitu)",
    sizes: ["133x40", "135x41", "137x41.5", "139x42", "141x43"],
    specs: {
      "Jádro desky": "Paulownia Light Woodcore",
      "Karbon": "Carton 3 Ultra High Performance Carbon",
      "Skluznice": "Multi-Channels & V-Shape Bottom",
      "Hrany": "Tucked 3D Rail System",
      "Příslušenství": "Poutka REVO / REVO Pro (volitelné)"
    },
    features: [
      {
        title: "Carton Carbon 3",
        description: "Exkluzivní technologické vrstvení 30° karbonové tkaniny, která poskytuje ideální torzní tuhost bez ztráty komfortu. Deska fantasticky stoupá proti větru a drží hranu do poslední setiny před odrazem."
      },
      {
        title: "V-Shape Bottom",
        description: "Hluboké véčko podél celé osy desky spolehlivě rozráží tvrdou hladinu a zajišťuje sametově hladké dopady z extrémních výšek bez nežádoucího podklouznutí."
      },
      {
        title: "Paulownia Light Core",
        description: "Vybrané dřevěné jádro s CNC frézováním, které dává desce dynamickou odezvu, skvělou flexi paměť a dlouhou životnost i při brutálním zatížení v botech."
      }
    ]
  },
  {
    id: "3",
    name: "Core Sensor 4 Bar",
    price: 18200,
    image: "https://ridecore.com/_img/cYKvBT9G8LanApyktuE0QIWr7JFYzJu7RPMCzcQOiTU/fn:CORE-Sensor-4-Clipping-Side-View_transparent/q:75/rs:fit:960:2000:1:0/czM6Ly9jb3Jla2l0ZXMtbmVvcy9uZW9zL3Jlc291cmNlcy9wZXJzaXN0ZW50L2I4NGE3ZDkzMThlMDlkMjRhNzQ4ZjZkNGNmZTA3NjE5ODJjNmI0ZTQ",
    category: "kiteboarding",
    type: "bars",
    showOnHome: true,
    headline: "Titanium Core & Modular Control System",
    description: "Sensor 4 nově definuje pojem čistého a bezpečného řízení. S integrovaným titanovým jádrem a plně modulárním systémem odstřelu splňuje nejpřísnější standardy ISO. Lišta nabízí přímou zpětnou vazbu bez jakýchkoli vibrací, plynulé odmávání draka a extrémně snadné rozmotávání šňůr po kiteloopech.",
    windRange: "Universal Control",
    sizes: ["Standard (47cm / 50cm Split)"],
    specs: {
      "Jádro baru": "Titanium Reinforced Composite",
      "Šňůry": "Tectanium Vario Lines (22m + 2m)",
      "Bezpečnost": "Single Frontline Safety (SFS)",
      "Odstřel": "CIC Release System (Push Out)",
      "Loopy": "Modular Loop/Stick system (Freeride / Pro)"
    },
    features: [
      {
        title: "Titanium Core",
        description: "Uvnitř karbonového těla baru se skrývá high-grade titanová výztuž. To dává baru extrémní pevnost v tahu při agresivním zatížení a zachovává nulový průhyb baru při kiteloopu."
      },
      {
        title: "Auto Untwist",
        description: "Keramické ložisko a promyšlené vedení šňůr zajišťují, že po jakékoli rotaci nebo boogieloopu se nosné šňůry samy kompletně rozmotají pouhým přitažením baru."
      },
      {
        title: "Tectanium Vario Lines",
        description: "Exkluzivní německé šňůry s minimálním průtahem, chráněné speciální vrstvou proti UV záření a oděru. Nabízejí možnost zkrácení nebo prodloužení podle preferovaného stylu."
      }
    ]
  },
  {
    id: "4",
    name: "Core XC",
    price: 25900,
    image: "https://ridecore.com/_img/eXtZeCogKefAqklb24_HDQkWc0pEVKqFxXuPyy3yB4Y/fn:core_cutout_xc_birdview_right_back_rgb_1200px/q:75/rs:fit::2560:0:0/czM6Ly9jb3Jla2l0ZXMtbmVvcy9uZW9zL3Jlc291cmNlcy9wZXJzaXN0ZW50LzkwOTM4M2YzMmM5YzRkZDgzYWNjZDIzMzFiOWJmM2I4MjJmYzA2NjQ",
    tag: "Novinka",
    category: "wing",
    type: "wings",
    showOnHome: false,
    headline: "Uncompromising Power & Control for High-Speed Wingfoiling",
    description: "Vstup CORE na wingfolovou scénu přichází v podobě high-performance křídla XC. Vyvážený a stabilní profil drží křídlo ve vzduchu s neuvěřitelnou lehkostí. Tuhá rukojeť a lineární nárůst výkonu ti zajistí okamžitý nástup do foilu, masivní rychlost ve stoupačkách a skvělý drift při jízdě na vlně.",
    windRange: "10 - 32 uzlů (Dle velikosti)",
    sizes: ["3.0m", "4.0m", "4.5m", "5.0m", "5.5m", "6.0m"],
    specs: {
      "Konstrukce stěžně": "ExoTex Rigid Strut Matrix",
      "Materiál plachty": "CoreTex 2 High Tenacity Canopy",
      "Rukojeti": "Ergonomic Rigid Handles",
      "Tlak nafukování": "Speed Valve 2 (8 PSI)",
      "Součást balení": "Prémiový batoh & Leash na ruku"
    },
    features: [
      {
        title: "Rigid Handles",
        description: "Pevná ergonomická madla poskytují naprosto přímé spojení s křídlem. Umožňují bleskovou změnu úhlu plachty a eliminují únavu předloktí při dlouhých sessions."
      },
      {
        title: "Swept-Wing Design",
        description: "Geometrie se šípovitým prohnutím drží konce křídla bezpečně nad vodní hladinou, což zabraňuje nechtěnému zachycení o vodu při agresivních otočkách nebo halzách."
      },
      {
        title: "High-Pressure Airframe",
        description: "Použití ExoTex dacronu na hlavním bánu umožňuje nafouknutí na vyšší tlak. Plachta se nedeformuje ani při brutálních poryvech a křídlo okamžitě reaguje na pumpování."
      }
    ]
  }
];