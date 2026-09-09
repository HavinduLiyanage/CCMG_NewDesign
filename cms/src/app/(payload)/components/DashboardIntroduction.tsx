const contentShortcuts = [
  { description: "Define the services CCMG offers.", href: "/admin/collections/services", label: "Services" },
  { description: "Publish case studies and mandates.", href: "/admin/collections/case-studies", label: "Projects" },
  { description: "Keep the firm’s thinking current.", href: "/admin/collections/insights", label: "Insights" },
];

export default function DashboardIntroduction() {
  return (
    <section className="ccmg-dashboard-introduction">
      <div className="ccmg-dashboard-introduction__copy">
        <p className="ccmg-eyebrow">
          <span /> CCMG CONTENT STUDIO
        </p>
        <h1>Make every update count.</h1>
        <p className="ccmg-dashboard-introduction__lede">
          A considered workspace for the stories, services, projects, and partnerships that shape CCMG’s public presence.
        </p>
      </div>

      <div className="ccmg-dashboard-introduction__signal" aria-hidden="true">
        <span>COLOMBO</span>
        <strong>01</strong>
        <span>SRI LANKA</span>
      </div>

      <div className="ccmg-dashboard-introduction__shortcuts" aria-label="Content shortcuts">
        {contentShortcuts.map((shortcut, index) => (
          <a href={shortcut.href} key={shortcut.label}>
            <span className="ccmg-dashboard-introduction__shortcut-index">0{index + 1}</span>
            <span>
              <strong>{shortcut.label}</strong>
              <small>{shortcut.description}</small>
            </span>
            <b aria-hidden="true">↗</b>
          </a>
        ))}
      </div>
    </section>
  );
}
