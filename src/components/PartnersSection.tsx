import { motion } from "motion/react";
import "./PartnersSection.css";

type Partner = { id: string; name: string };

const partners: Partner[] = [
  { id: "rosen", name: "ROSEN" },
  { id: "sweroad", name: "Sweroad" },
  { id: "greenenergy", name: "GreenEnergy GPO" },
  { id: "ek", name: "EK Consult" },
  { id: "suez", name: "SUEZ" },
  { id: "cecb", name: "CECB" },
  { id: "ipd", name: "Institute for Participatory Development" },
  { id: "alf", name: "ALF Consulting Engineers" },
  { id: "ocreeds", name: "O.CREEDS" },
  { id: "interconsult", name: "Inter-Consult" },
  { id: "cscec", name: "China State Construction Engineering Corporation" },
  { id: "chinageo", name: "China Geo" },
  { id: "chinapoly", name: "China Poly Group Corporation" },
  { id: "ages", name: "Consultants AGES" },
  { id: "millennium", name: "Millennium IT ESP" },
  { id: "careedge", name: "CareEdge Analytics & Advisory" },
  { id: "caddell", name: "Caddell Construction" },
];

const Wordmark = ({ children, fill = "#182536", size = 33, x = 8, y = 48 }: { children: string; fill?: string; size?: number; x?: number; y?: number }) => (
  <text x={x} y={y} fill={fill} fontFamily="Arial, sans-serif" fontSize={size} fontWeight="800" letterSpacing="-1.5">{children}</text>
);

function PartnerMark({ partner }: { partner: Partner }) {
  if (partner.id === "careedge") {
    return <img className="partners__logoImage partners__logoImage--careedge" src="/assets/ccmg/partners/careedge.png" alt="CareEdge Analytics & Advisory" />;
  }

  const mark = (() => {
    switch (partner.id) {
      case "rosen": return <><path d="M8 17h32v32H8z" fill="#24458c" /><path d="M16 42 31 17M16 17l15 25" stroke="#fff" strokeWidth="3" /><Wordmark x={50} fill="#243f85">ROSEN</Wordmark></>;
      case "sweroad": return <><path d="m7 17 20 0-15 32H-8z" transform="translate(15)" fill="#0d4071" /><path d="m34 17 20 0-15 32H19z" fill="#f2b800" /><Wordmark x={67} size={29}>Sweroad</Wordmark></>;
      case "greenenergy": return <><path d="M17 44c4-18 14-28 30-30-2 15-12 27-30 30Z" fill="#17ab88" /><path d="M20 41c8-9 15-16 24-22" fill="none" stroke="#fff" strokeWidth="2" /><text x="57" y="34" fill="#2b6854" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="800" letterSpacing="1">GREENENERGY</text><text x="58" y="52" fill="#688274" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2">GPO</text></>;
      case "ek": return <><path d="M12 32c0-14 10-22 24-22 11 0 19 5 25 16" fill="none" stroke="#168ed0" strokeWidth="6" strokeLinecap="round" /><Wordmark x={14} y={54} fill="#176a9f" size={38}>ek</Wordmark><text x="72" y="48" fill="#293d57" fontFamily="Arial, sans-serif" fontSize="23" fontWeight="400">CONSULT</text></>;
      case "suez": return <><path d="M12 31c5-18 22-22 31-8 8 14 22 10 29-4" fill="none" stroke="#97c841" strokeWidth="7" strokeLinecap="round" /><Wordmark x={13} y={57} fill="#172d67" size={34}>SUEZ</Wordmark></>;
      case "cecb": return <><path d="M9 16h52M9 24h52M9 32h52M9 40h52" stroke="#f18a20" strokeWidth="4" /><text x="9" y="57" fill="#e27817" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="500" letterSpacing="-2">cecb</text></>;
      case "ipd": return <><text x="9" y="45" fill="#d78d62" fontFamily="Georgia, serif" fontSize="42" fontWeight="700" letterSpacing="-5">ipd</text><text x="10" y="61" fill="#a87660" fontFamily="Arial, sans-serif" fontSize="6.5" fontWeight="700" letterSpacing=".7">INSTITUTE FOR PARTICIPATORY DEVELOPMENT</text></>;
      case "alf": return <><path d="M11 14h15v34H11zM31 14h15v34H31zM51 14h15v34H51z" fill="none" stroke="#3e4e9a" strokeWidth="4" /><text x="11" y="45" fill="#3e4e9a" fontFamily="Arial, sans-serif" fontSize="29" fontWeight="800">ALF</text><text x="10" y="61" fill="#444" fontFamily="Arial, sans-serif" fontSize="7" letterSpacing="1.1">CONSULTING ENGINEERS</text></>;
      case "ocreeds": return <><circle cx="28" cy="31" r="18" fill="#111" /><circle cx="28" cy="31" r="8" fill="#fff" /><text x="57" y="34" fill="#1c75bc" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="800">O.CREEDS</text><text x="58" y="51" fill="#698096" fontFamily="Arial, sans-serif" fontSize="8" letterSpacing=".8">OPENHAND CREDIT LTD.</text></>;
      case "interconsult": return <><circle cx="27" cy="30" r="19" fill="#5ec4a7" /><path d="M27 10v40M8 30h38" stroke="#eaf8ef" strokeWidth="3" /><text x="55" y="37" fill="#3b86aa" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700">Inter-Consult</text><text x="56" y="52" fill="#779784" fontFamily="Arial, sans-serif" fontSize="7" letterSpacing=".8">BUILDING THE FUTURE</text></>;
      case "cscec": return <><path d="M10 13h42v42H10z" fill="#237bb6" /><path d="M21 21h20v8H21zM21 34h20v8H21z" fill="#fff" /><text x="62" y="39" fill="#237bb6" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="800">CSCEC</text><text x="62" y="53" fill="#3571a4" fontFamily="Arial, sans-serif" fontSize="6.5" letterSpacing=".3">CHINA STATE CONSTRUCTION</text></>;
      case "chinageo": return <><path d="M9 16h28v28H9z" fill="#d02a21" /><path d="M16 22h14M16 30h14M23 18v24" stroke="#fff" strokeWidth="2" /><text x="48" y="34" fill="#c72820" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="800">CHINA GEO</text><text x="49" y="50" fill="#c72820" fontFamily="Arial, sans-serif" fontSize="7" letterSpacing="1">ENGINEERING GROUP</text></>;
      case "chinapoly": return <><path d="M12 14h30v31H12z" fill="none" stroke="#cf2629" strokeWidth="4" /><path d="M18 20h18M18 29h18M18 38h18" stroke="#cf2629" strokeWidth="3" /><text x="54" y="34" fill="#cc2929" fontFamily="Arial, sans-serif" fontSize="19" fontWeight="800">CHINA POLY</text><text x="55" y="49" fill="#cc2929" fontFamily="Arial, sans-serif" fontSize="7" letterSpacing=".7">GROUP CORPORATION</text></>;
      case "ages": return <><path d="M12 15c25-12 35 10 47 0M12 27c25-12 35 10 47 0M12 39c25-12 35 10 47 0" fill="none" stroke="#395f9f" strokeWidth="3" /><text x="68" y="39" fill="#395f9f" fontFamily="Georgia, serif" fontSize="25">AGES</text><text x="69" y="52" fill="#526c99" fontFamily="Arial, sans-serif" fontSize="6.7">CONSULTANTS</text></>;
      case "millennium": return <><path d="m12 47 8-30 8 17 8-17 8 30" fill="none" stroke="#e1472e" strokeWidth="7" strokeLinejoin="round" /><text x="62" y="39" fill="#e1472e" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="800">MILLENNIUM</text><text x="63" y="53" fill="#5c6170" fontFamily="Arial, sans-serif" fontSize="8" letterSpacing="3">IT ESP</text></>;
      case "caddell": return <><Wordmark x={10} y={37} fill="#8b1834" size={32}>CADDELL</Wordmark><text x="13" y="54" fill="#8b1834" fontFamily="Arial, sans-serif" fontSize="7.5" fontWeight="700" letterSpacing="1">CONSTRUCTING WHAT MATTERS</text></>;
      default: return <Wordmark>{partner.name}</Wordmark>;
    }
  })();

  return <svg className="partners__logoMark" viewBox="0 0 230 70" role="img" aria-label={partner.name}>{mark}</svg>;
}

export default function PartnersSection() {
  return <section className="partners" id="partners" aria-labelledby="partners-title"><div className="partners__inner page-shell">
    <motion.div className="partners__heading" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}>
      <p className="section-kicker">Partner network</p><h2 className="section-title" id="partners-title">Collaborating across complex mandates</h2>
    </motion.div>
    <p className="partners__intro">CCMG’s collaboration network spans international consultants, engineering firms, technology providers, EPC contractors, and sustainability specialists.</p>
    <div className="partners__grid" aria-label="Companies represented in CCMG partner reference">
      {partners.map((partner, index) => <motion.div className="partners__logo" key={partner.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ delay: index * 0.045, duration: 0.55 }}><PartnerMark partner={partner} /></motion.div>)}
    </div>
  </div></section>;
}
