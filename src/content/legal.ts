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
        "[Vollständiger Firmenname und Rechtsform]",
        "[Straße und Hausnummer], [PLZ und Ort]",
        "Vertreten durch: [Name der vertretungsberechtigten Person]",
      ],
    },
    {
      title: "Kontakt",
      paragraphs: ["Telefon: [Telefonnummer]", "E-Mail: [E-Mail-Adresse]"],
    },
    {
      title: "Registereintrag",
      paragraphs: [
        "Eintragung im Handelsregister: [Registergericht], [Registernummer] — falls nicht zutreffend, Abschnitt entfernen.",
      ],
    },
    {
      title: "Umsatzsteuer-ID",
      paragraphs: [
        "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [USt-IdNr.] — falls nicht vorhanden, Abschnitt entfernen.",
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
        "Verantwortlich für die Datenverarbeitung auf dieser Website: [Firmenname], [Anschrift], [E-Mail-Adresse].",
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
