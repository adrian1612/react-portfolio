import './App.css'
import avatar from './assets/images/avatar.jpg'

const profile = {
  name: 'Adrian A. Jaspio',
  role: 'Programmer / Analyst S3',
  specialty: '.NET Fullstack Developer',
  tagline:
    'I build high-impact internal platforms that make operations faster, cleaner, and easier to scale.',
  linkedin: 'https://www.linkedin.com/in/adrian-jaspio-a61923188/',
  github: 'https://github.com/adrian1612',
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#services' },
  { label: 'Portfolio', href: '#recent-work' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '#contact' },
]

const aboutParagraphs = [
  'I am a .NET Fullstack Developer and Programmer/Analyst with hands-on experience building business-critical systems across HR, project management, gatepass, accounting, and attendance workflows. I currently work as Programmer/Analyst S3 under Vertere Global Solution, deployed at Toyota Special Economic Zone, where I help translate operational requirements into reliable software solutions.',
  'My core strength is connecting business goals with technical execution. I work across backend APIs, SQL Server databases, and frontend interfaces to deliver tools that are practical, maintainable, and aligned with real user processes. I focus on reducing manual work, improving performance, and making systems easier to support at scale.',
  'Over the years, I have progressed through Fullstack Programmer, Senior Programmer, and MIS Supervisor roles, which gave me both deep technical foundations and leadership exposure. I am comfortable owning end-to-end delivery from requirements analysis and architecture to development, deployment, and continuous improvement.',
]

const serviceItems = [
  {
    title: 'Web Development',
    text: 'Business web platforms using .NET, ASP.NET MVC, and SQL-backed architecture for operational reliability.',
  },
  {
    title: 'Application Development',
    text: 'Custom internal applications for HR, project management, accounting, and approval workflows.',
  },
  {
    title: 'Software Delivery',
    text: 'End-to-end delivery from system analysis to deployment, monitoring, and continuous enhancement.',
  },
]

const skillMeters = [
  { percent: '95%', label: 'C# / .NET', tone: 't1' },
  { percent: '93%', label: 'SQL Server', tone: 't2' },
  { percent: '90%', label: 'ASP.NET MVC', tone: 't3' },
  { percent: '88%', label: 'Blazor', tone: 't4' },
  { percent: '90%', label: 'REST API', tone: 't5' },
  { percent: '87%', label: 'JavaScript', tone: 't6' },
]

const workItems = [
  {
    title: 'Program Management System',
    type: 'Website / Enterprise',
    desc: 'Central dashboard for project, employee, and client operations.',
  },
  {
    title: 'HR Management System',
    type: 'Web Application',
    desc: 'Employee lifecycle, leave, and structure workflows with reporting.',
  },
  {
    title: 'Gatepass Management',
    type: 'Operations Tool',
    desc: 'Asset movement monitoring with controlled approvals and audit visibility.',
  },
]

function App() {
  return (
    <div className="site-bg">
      <div className="mesh m1" aria-hidden="true" />
      <div className="mesh m2" aria-hidden="true" />

      <header className="topbar shell">
        <a className="brand" href="#home">
          <img src={avatar} alt="Adrian Jaspio" />
          <span>Adrian.</span>
        </a>

        <nav className="menu" aria-label="Main Navigation">
          {navItems.map((item, index) => (
            <a key={item.label} href={item.href} className={index === 0 ? 'active' : ''}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="resume-btn" href={profile.linkedin} target="_blank" rel="noreferrer">
          Resume
        </a>
      </header>

      <main className="shell hero" id="home">
        <section>
          <p className="eyebrow">Portfolio 2026</p>
          <h1>
            Hello, I&apos;m <span>{profile.name.split(' ')[0]}</span>
          </h1>
          <h2>{profile.specialty}</h2>
          <p className="lead">{profile.tagline}</p>
          <div className="cta-row">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              Hire Me
            </a>
            <a className="ghost" href={profile.github} target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </div>
        </section>

        <section className="portrait-wrap">
          <div className="ring">
            <img src={avatar} alt="Profile" />
          </div>
          <div className="float-card fc1">
            <span className="badge-icon ps">Ps</span>
          </div>
          <div className="float-card fc2">
            <span className="badge-icon ai">Ai</span>
          </div>
          <div className="stat-pill">
            <span className="shield" aria-hidden="true">
              OK
            </span>
            <div>
              <strong>1500+</strong>
              <small>Completed Projects</small>
            </div>
          </div>
          <div className="float-card fc3 gem" aria-hidden="true">
            *
          </div>
        </section>
      </main>

      <section className="shell section" id="about">
        <h3>About</h3>
        {aboutParagraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </section>

      <section className="shell section advantage" id="advantage">
        <div className="xp-card">
          <strong>08</strong>
          <p>Years of Experience</p>
          <div className="xp-badge">
            <span>100%</span>
            <small>Client Satisfaction</small>
          </div>
        </div>

        <div>
          <h3>My Advantage</h3>
          <p>
            Broad technical depth in backend engineering, system analysis, and production delivery for
            high-usage internal platforms.
          </p>
          <div className="meter-grid">
            {skillMeters.map((meter) => (
              <article key={meter.label} className={`meter-card ${meter.tone}`}>
                <strong>{meter.percent}</strong>
                <span>{meter.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section" id="services">
        <h3>Popular Services</h3>
        <p>Focused engineering and delivery services for internal business software systems.</p>
        <div className="service-tabs" aria-hidden="true">
          <span>Design</span>
          <span className="active">Development</span>
          <span>Optimization</span>
        </div>
        <div className="service-grid">
          {serviceItems.map((item) => (
            <article className="service-card" key={item.title}>
              <div className="icon-dot">{item.title.charAt(0)}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <a href="#contact">Learn More</a>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section work" id="recent-work">
        <h3>Recent Work</h3>
        <p>Selected systems built for operations, management visibility, and team productivity.</p>
        <div className="work-grid">
          {workItems.map((work) => (
            <article key={work.title}>
              <div className="work-thumb" aria-hidden="true" />
              <h4>{work.title}</h4>
              <small>{work.type}</small>
              <p>{work.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section" id="contact">
        <h3>Contact</h3>
        <p>
          Connect on <a href={profile.linkedin}>LinkedIn</a> or check my code on{' '}
          <a href={profile.github}>GitHub</a>.
        </p>
      </section>
    </div>
  )
}

export default App