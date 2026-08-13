// Legal page skeletons. Every [Platzhalter] must be replaced with real
// data from the CLIENT.md briefing (§24) before launch, and the final
// texts must be reviewed by the client's legal counsel — the agency
// provides structure, not legal advice.

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalPageContent {
  title: string;
  sections: LegalSection[];
}

export const impressum: LegalPageContent = {
  title: "Impressum",
  sections: [
    {
      title: "Angaben gemäß § 5 DDG",
      paragraphs: [
        "Ohlmeier Architekten PartmbB",
        "Rolandstraße 4, 34131 Kassel",
        "Vertreten durch: Dipl.-Ing. Hans-Georg Ohlmeier, Philipp Ohlmeier, M.Sc. (Partner)",
      ],
    },
    {
      title: "Kontakt",
      paragraphs: [
        "Telefon: +49 561 3085570",
        "E-Mail: office@ohlmeier-architekten.de",
      ],
    },
    {
      title: "Registereintrag",
      paragraphs: [
        "Eintragung im Partnerschaftsregister: Amtsgericht Frankfurt am Main, PR 2887. [Vor Veröffentlichung mit Originalquelle verifizieren — Angabe stammt aus einer Web-Recherche, nicht von der Originalseite.]",
      ],
    },
    {
      title: "Zuständige Kammer",
      paragraphs: [
        "[Vermutlich Architektenkammer Hessen — mit Kunde bestätigen und ggf. Berufsbezeichnung, Verleihungsstaat sowie Angaben zur Berufshaftpflichtversicherung gemäß § 5 DDG ergänzen.]",
      ],
    },
    {
      title: "Umsatzsteuer-ID",
      paragraphs: [
        "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [USt-IdNr. — mit Kunde klären; falls nicht vorhanden, Abschnitt entfernen.]",
      ],
    },
    {
      title: "EU-Streitschlichtung",
      paragraphs: [
        "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.",
        "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. [Von Rechtsberatung prüfen lassen.]",
      ],
    },
  ],
};

export const datenschutz: LegalPageContent = {
  title: "Datenschutzerklärung",
  sections: [
    {
      title: "Verantwortlicher",
      paragraphs: [
        "Verantwortlich für die Datenverarbeitung auf dieser Website: Ohlmeier Architekten PartmbB, Rolandstraße 4, 34131 Kassel, office@ohlmeier-architekten.de.",
      ],
    },
    {
      title: "Hosting",
      paragraphs: [
        "Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Seiten verarbeitet Vercel technisch notwendige Daten (z. B. IP-Adresse) zur Auslieferung der Inhalte. [Details und Rechtsgrundlage von Rechtsberatung ergänzen lassen.]",
      ],
    },
    {
      title: "Kontaktformular",
      paragraphs: [
        "Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage. Der Versand erfolgt über den Dienstleister Resend. [Rechtsgrundlage, Speicherdauer und ggf. AV-Vertrag von Rechtsberatung ergänzen lassen.]",
      ],
    },
    {
      title: "Ihre Rechte",
      paragraphs: [
        "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Wenden Sie sich dazu an die oben genannte Adresse. Zudem besteht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde.",
      ],
    },
    {
      title: "Hinweis",
      paragraphs: [
        "[Diese Datenschutzerklärung ist ein Platzhalter-Gerüst. Vor dem Launch vollständig ausarbeiten und rechtlich prüfen lassen — insbesondere wenn Analytics, Karten-Einbettungen oder weitere Drittdienste hinzukommen.]",
      ],
    },
  ],
};
