// Echtes Team von Ohlmeier Architekten, von der "OA"-Seite der echten
// Website. Fotos aus dem PDF-Export extrahiert (CLIENT.md §18) und den
// Namen anhand ihrer Position im Seiten-Layout zugeordnet — diese
// Zuordnung ist aus der Extraktionsreihenfolge abgeleitet, nicht durch
// sichtbare Bildunterschriften bestätigt, und sollte vor dem Launch vom
// Kunden gegengeprüft werden. Freya Ohlmeier hat auf der Originalseite
// kein Foto — TeamGrid rendert dafür einen Initialen-Avatar.

import type { TeamMember } from "@/components/sections/team";

export const team: TeamMember[] = [
  {
    name: "Hans-Georg Ohlmeier",
    role: "Dipl.-Ing. Architekt BDA — Partner",
    image: {
      src: "/images/team/hans-georg-ohlmeier.jpg",
      alt: "Porträt Hans-Georg Ohlmeier",
    },
  },
  {
    name: "Philipp Ohlmeier",
    role: "M.Sc. Architekt | Energieeffizienz-Experte — Partner",
    image: {
      src: "/images/team/philipp-ohlmeier.jpg",
      alt: "Porträt Philipp Ohlmeier",
    },
  },
  {
    name: "Freya Ohlmeier",
    role: "Bakk. Publizistik und Kommunikationswissenschaft",
  },
  {
    name: "Anja Richter",
    role: "Bürokauffrau – Sekretariat",
    image: {
      src: "/images/team/anja-richter.jpg",
      alt: "Porträt Anja Richter",
    },
  },
  {
    name: "Kianosh Assadi",
    role: "Dipl.-Ing. Architektur",
    image: {
      src: "/images/team/kianosh-assadi.jpg",
      alt: "Porträt Kianosh Assadi",
    },
  },
  {
    name: "David Bürkner",
    role: "B.Sc. Architektur",
    image: {
      src: "/images/team/david-buerkner.jpg",
      alt: "Porträt David Bürkner",
    },
  },
  {
    name: "Eileen Boos",
    role: "B.Sc. Architektin",
    image: { src: "/images/team/eileen-boos.jpg", alt: "Porträt Eileen Boos" },
  },
  {
    name: "Christina Albrecht",
    role: "B.Sc. Architektur",
    image: {
      src: "/images/team/christina-albrecht.jpg",
      alt: "Porträt Christina Albrecht",
    },
  },
  {
    name: "Till Skupin",
    role: "M.Sc. Architektur | B.Sc. Stadtplanung | Energieeffizienz- & LCA-Experte",
    image: { src: "/images/team/till-skupin.jpg", alt: "Porträt Till Skupin" },
  },
  {
    name: "Carina Gries",
    role: "B.Sc. Architektur",
    image: {
      src: "/images/team/carina-gries.jpg",
      alt: "Porträt Carina Gries",
    },
  },
  {
    name: "Luca Gade",
    role: "B.Sc. Architektur",
    image: { src: "/images/team/luca-gade.jpg", alt: "Porträt Luca Gade" },
  },
  {
    name: "Julius Scharf",
    role: "B.Sc. Fachrichtung Architektur",
    image: {
      src: "/images/team/julius-scharf.jpg",
      alt: "Porträt Julius Scharf",
    },
  },
  {
    name: "Luca Schüler",
    role: "B.Sc. Architektur",
    image: {
      src: "/images/team/luca-schueler.jpg",
      alt: "Porträt Luca Schüler",
    },
  },
];
