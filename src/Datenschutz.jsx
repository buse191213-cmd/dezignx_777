import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Datenschutz | DEZIGNX";
  }, []);

  return (
    <div style={styles.page}>
      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        <Link to="/" style={styles.breadcrumbLink}>Startseite</Link>
        <span style={styles.breadcrumbSep}>/</span>
        <span style={styles.breadcrumbCurrent}>Datenschutz</span>
      </div>

      <div style={styles.container}>
        <h1 style={styles.h1}>Datenschutzerklärung</h1>

        <section style={styles.section}>
          <h2 style={styles.h2}>1. Verantwortlicher</h2>
          <p style={styles.text}>
            DEZIGNX, Inhaber [DEIN VOLLSTÄNDIGER NAME], [STRAßE], [PLZ] [STADT],{" "}
            <a href="mailto:info@dezignx.de" style={styles.link}>
              info@dezignx.de
            </a>
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>2. Verarbeitung personenbezogener Daten</h2>
          <p style={styles.text}>
            Wir verarbeiten personenbezogene Daten nur, soweit dies zur
            Vertragsabwicklung, Kundenkommunikation oder aufgrund gesetzlicher
            Pflichten erforderlich ist.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>3. Weitergabe</h2>
          <p style={styles.text}>
            Eine Weitergabe erfolgt nur an Dienstleister (Versand,
            Zahlungsanbieter) oder wenn gesetzlich vorgeschrieben.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>4. Rechte der Betroffenen</h2>
          <p style={styles.text}>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung sowie Widerspruch.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>5. Cookies &amp; Server-Logs</h2>
          <p style={styles.text}>
            Diese Website verwendet nur technisch notwendige Cookies.
            Server-Logs werden zur Sicherstellung des Betriebs verarbeitet.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>6. Kontakt Datenschutz</h2>
          <p style={styles.text}>
            Fragen zum Datenschutz bitte an:{" "}
            <a href="mailto:info@dezignx.de" style={styles.link}>
              info@dezignx.de
            </a>
          </p>
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
    color: "#666",
    display: "flex",
    gap: "6px",
    alignItems: "center",
  },
  breadcrumbLink: {
    color: "#888",
    textDecoration: "none",
  },
  breadcrumbSep: {
    color: "#444",
  },
  breadcrumbCurrent: {
    color: "#aaa",
  },
  container: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "0 24px",
  },
  h1: {
    fontFamily: "'Archivo', sans-serif",
    fontSize: "clamp(28px, 5vw, 42px)",
    fontWeight: 800,
    color: "#ffffff",
    marginBottom: "32px",
    lineHeight: 1.15,
  },
  section: {
    marginBottom: "36px",
  },
  h2: {
    fontFamily: "'Archivo', sans-serif",
    fontSize: "18px",
    fontWeight: 700,
    color: "#ffffff",
    marginBottom: "12px",
    marginTop: "0",
    paddingBottom: "10px",
    borderBottom: "1px solid #1e1e28",
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.75",
    color: "#999",
    marginBottom: "0",
  },
  link: {
    color: "#7c7cf0",
    textDecoration: "none",
  },
};
