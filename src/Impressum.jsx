import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Impressum | DEZIGNX";
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.breadcrumb}>
        <Link to="/" style={styles.breadcrumbLink}>Startseite</Link>
        <span style={styles.breadcrumbSep}>/</span>
        <span style={styles.breadcrumbCurrent}>Impressum</span>
      </div>

      <div style={styles.container}>
        <h1 style={styles.h1}>Impressum</h1>
        <p style={styles.intro}>DEZIGNX – Rechtstexte &amp; Website-Inhalte</p>

        <div style={styles.card}>
          <p style={styles.text}>
            <strong style={styles.strong}>DEZIGNX</strong><br />
            Inhaber: Sener Kirli<br />
            Westuferstr. 25<br />
            45356 Essen<br />
            Deutschland
          </p>
          <p style={styles.text}>
            E-Mail: <a href="mailto:info@dezignx.de" style={styles.link}>info@dezignx.de</a><br />
            Telefon: <a href="tel:+4920184362510" style={styles.link}>0201 / 84362510</a><br />
            Mobil: <a href="tel:+491606767001" style={styles.link}>0160 / 6767001</a>
          </p>
          <p style={styles.text}>
            Umsatzsteuer-ID: <strong style={styles.strong}>DE353055316</strong><br />
            Steuernummer: <strong style={styles.strong}>111/5145/4871</strong>
          </p>
          <p style={styles.text}>
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:<br />
            Sener Kirli, Westuferstr. 25, 45356 Essen
          </p>
          <p style={styles.text}>
            Online-Streitbeilegung:{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={styles.link}>
              https://ec.europa.eu/consumers/odr
            </a><br />
            Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <section style={styles.section}>
          <h2 style={styles.h2}>Allgemeine Geschäftsbedingungen (AGB)</h2>

          <h3 style={styles.h3}>1. Geltungsbereich</h3>
          <p style={styles.text}>Diese AGB gelten für alle Lieferungen und Leistungen der DEZIGNX an Verbraucher (§ 13 BGB) und Unternehmer (§ 14 BGB).</p>

          <h3 style={styles.h3}>2. Vertragspartner</h3>
          <p style={styles.text}>DEZIGNX, Inhaber Sener Kirli, Westuferstr. 25, 45356 Essen.</p>

          <h3 style={styles.h3}>3. Angebot und Vertragsschluss</h3>
          <p style={styles.text}>Unsere Angebote sind freibleibend. Ein Vertrag kommt durch unsere Auftragsbestätigung oder mit Lieferung der Ware zustande.</p>

          <h3 style={styles.h3}>4. Preise und Lieferung</h3>
          <p style={styles.text}>Alle Preise sind in Euro inkl. MwSt. Versandkosten werden gesondert ausgewiesen. Lieferzeiten werden individuell angegeben.</p>

          <h3 style={styles.h3}>5. Zahlung</h3>
          <p style={styles.text}>
            Zahlung per Vorkasse oder nach Vereinbarung auf das Konto:<br />
            IBAN: <strong style={styles.strong}>DE30 3605 0105 0002 3808 97</strong><br />
            BIC: <strong style={styles.strong}>SPESDE3EXXX</strong>
          </p>

          <h3 style={styles.h3}>6. Eigentumsvorbehalt</h3>
          <p style={styles.text}>Bis zur vollständigen Bezahlung bleibt die Ware unser Eigentum.</p>

          <h3 style={styles.h3}>7. Gewährleistung</h3>
          <p style={styles.text}>Es gelten die gesetzlichen Sachmängelrechte. Gegenüber Unternehmern beträgt die Gewährleistungsfrist 12 Monate.</p>

          <h3 style={styles.h3}>8. Haftung</h3>
          <p style={styles.text}>Wir haften unbegrenzt für Vorsatz und grobe Fahrlässigkeit. Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten.</p>

          <h3 style={styles.h3}>9. Widerrufsrecht</h3>
          <p style={styles.text}>Verbrauchern steht ein Widerrufsrecht nach Maßgabe der folgenden Widerrufsbelehrung zu.</p>

          <h3 style={styles.h3}>10. Gerichtsstand</h3>
          <p style={styles.text}>Es gilt deutsches Recht. Gerichtsstand ist Essen.</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Widerrufsbelehrung</h2>
          <p style={styles.text}>
            Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
            Die Frist beträgt 14 Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter die Waren in Besitz genommen haben.
          </p>
          <p style={styles.text}>
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (DEZIGNX, Westuferstr. 25, 45356 Essen,{" "}
            <a href="mailto:info@dezignx.de" style={styles.link}>info@dezignx.de</a>)
            mittels einer eindeutigen Erklärung (z. B. per Brief oder E-Mail) informieren.
          </p>
          <p style={styles.text}>
            <strong style={styles.strong}>Folgen des Widerrufs:</strong> Wenn Sie diesen Vertrag widerrufen,
            erstatten wir alle Zahlungen, einschließlich der Lieferkosten, innerhalb von 14 Tagen nach Erhalt
            der Rücksendung. Die Rücksendekosten trägt der Käufer.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Muster-Widerrufsformular</h2>
          <div style={styles.formBox}>
            <p style={styles.text}>
              An DEZIGNX, Westuferstr. 25, 45356 Essen,{" "}
              <a href="mailto:info@dezignx.de" style={styles.link}>info@dezignx.de</a>
            </p>
            <p style={styles.text}>
              Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über den Kauf
              der folgenden Waren / die Erbringung der folgenden Dienstleistung:
            </p>
            <p style={styles.text}>
              Bestellt am: ____________<br />
              Erhalten am: ____________
            </p>
            <p style={styles.text}>
              Name des Verbrauchers: _______________________________<br />
              Anschrift des Verbrauchers: ____________________________
            </p>
            <p style={styles.text}>
              Datum: ___________________________<br />
              Unterschrift (nur bei Mitteilung auf Papier): ___________________________
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0b0b0f",
    color: "#e8e8e8",
    fontFamily: "'Inter', sans-serif",
    paddingTop: "100px",
    paddingBottom: "80px",
  },
  breadcrumb: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "0 24px 24px",
    fontSize: "13px",
    display: "flex",
    gap: "6px",
    alignItems: "center",
  },
  breadcrumbLink: { color: "#666", textDecoration: "none" },
  breadcrumbSep: { color: "#444" },
  breadcrumbCurrent: { color: "#888" },
  container: { maxWidth: "760px", margin: "0 auto", padding: "0 24px" },
  h1: {
    fontFamily: "'Archivo', sans-serif",
    fontSize: "clamp(28px, 5vw, 42px)",
    fontWeight: 800,
    color: "#ffffff",
    marginBottom: "8px",
    lineHeight: 1.15,
  },
  intro: { fontSize: "14px", color: "#555", marginBottom: "32px" },
  card: {
    border: "1px solid #1e1e28",
    borderRadius: "12px",
    padding: "24px 28px",
    marginBottom: "40px",
    backgroundColor: "#111118",
  },
  section: { marginBottom: "40px" },
  h2: {
    fontFamily: "'Archivo', sans-serif",
    fontSize: "20px",
    fontWeight: 700,
    color: "#ffffff",
    marginBottom: "16px",
    marginTop: "0",
    paddingBottom: "10px",
    borderBottom: "1px solid #1e1e28",
  },
  h3: { fontSize: "14px", fontWeight: 600, color: "#cccccc", marginBottom: "6px", marginTop: "20px" },
  text: { fontSize: "14px", lineHeight: "1.8", color: "#888", marginBottom: "14px" },
  strong: { color: "#ccc", fontWeight: 600 },
  link: { color: "#7c7cf0", textDecoration: "none" },
  formBox: {
    border: "1px solid #1e1e28",
    borderRadius: "8px",
    padding: "20px 24px",
    backgroundColor: "#0f0f16",
  },
};
