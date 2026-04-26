const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "Figma",
];

const strengths = [
  {
    title: "User-focused interface design",
    description:
      "I turn product ideas into screens that feel clear, fast, and easy to use from the first interaction.",
  },
  {
    title: "Performance with maintainability",
    description:
      "I care about loading speed, clean component boundaries, and structures that teams can extend without pain.",
  },
  {
    title: "Collaboration-ready development",
    description:
      "I work closely with designers, PMs, and backend engineers and value communication as much as implementation.",
  },
];

const projects = [
  {
    title: "Commerce Experience Redesign",
    period: "2025",
    summary:
      "Redesigned a mobile-first commerce flow to simplify the funnel and improve the buying experience.",
    impact: "Increased mobile conversion by 18%",
    stack: ["Next.js", "TypeScript", "Storybook"],
  },
  {
    title: "Operations Dashboard",
    period: "2024",
    summary:
      "Built an internal dashboard for operations teams to monitor real-time status and key business metrics.",
    impact: "Cut reporting time by 40%",
    stack: ["React", "Node.js", "Chart UI"],
  },
  {
    title: "Developer Blog Platform",
    period: "2024",
    summary:
      "Created an MDX-powered blog with SEO improvements and a smoother publishing workflow.",
    impact: "Reduced content publishing overhead",
    stack: ["Next.js", "MDX", "Vercel"],
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <section className="hero section-wrap">
        <nav className="topbar">
          <span className="brand">Alice Jeong</span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Frontend Developer Portfolio</p>
            <h1>I design thoughtful interfaces and build polished web products.</h1>
            <p className="lead">
              I build web experiences that balance visual clarity, product thinking,
              and maintainable engineering. My focus is shipping fast without losing
              structure, performance, or detail.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View Projects
              </a>
              <a href="#contact" className="button button-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <p className="panel-label">Snapshot</p>
            <ul className="snapshot-list">
              <li>4 years of frontend experience</li>
              <li>Product development with React and Next.js</li>
              <li>Strong focus on UX, speed, and teamwork</li>
            </ul>
            <div className="metric-row">
              <div>
                <strong>12+</strong>
                <span>Projects</span>
              </div>
              <div>
                <strong>4Y</strong>
                <span>Experience</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Responsive</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="section-wrap">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>I care about how a product feels, performs, and grows with a team.</h2>
        </div>

        <div className="info-grid">
          <article className="intro-card">
            <p>
              I am a frontend developer who values both product quality and code
              quality. I enjoy turning vague ideas into interfaces that feel
              intentional, accessible, and ready for real users.
            </p>
          </article>

          <div className="feature-list">
            {strengths.map((item) => (
              <article key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Core tools I use to build modern web products.</h2>
        </div>

        <div className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="section-wrap">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>I prefer work where the design quality and product impact are both visible.</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-top">
                <span className="project-period">{project.period}</span>
                <h3>{project.title}</h3>
              </div>
              <p>{project.summary}</p>
              <strong className="project-impact">{project.impact}</strong>
              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={`${project.title}-${item}`}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-wrap contact-section">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something useful, elegant, and memorable.</h2>
            <p className="contact-copy">
              Freelance, full-time, and collaboration opportunities are all welcome.
              Replace the sample links below with your real contact details and the
              site is ready to use.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:hello@example.com">hello@example.com</a>
            <a href="https://github.com/yourname">github.com/yourname</a>
            <a href="https://yourblog.dev">yourblog.dev</a>
          </div>
        </div>
      </section>
    </main>
  );
}
