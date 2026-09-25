import React, { useState, useEffect } from 'react';
import './App.css';
import profileImg from './assets/profile.jpg';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Cpu,
  Layers,
  BookOpen,
  Calendar,
  Briefcase,
  GraduationCap,
  Send,
  CheckCircle2,
  FileText,
  X,
  Download,
  Sparkles,
  Globe,
  Menu,
  ArrowUpRight,
  Database,
  Terminal,
  Languages,
  Sun,
  Moon
} from 'lucide-react';

const GithubIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Handle scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const projects = [
    {
      id: 'nr-wealth',
      title: 'NR Wealth Desk — Portfolio Management System',
      category: 'fullstack',
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Go (Gin)', 'REST API'],
      desc: 'Full-stack financial portfolio management platform for tracking stock & asset investments with user authentication, CSV transaction import, live stock price sync, and interactive P&L analytics.',
      highlights: [
        'Secure Firebase Auth & user session management',
        'Backend developed in Go (Gin) serving high-throughput REST APIs',
        'CSV import for bulk trade transactions & live portfolio analytics dashboard'
      ],
      icon: <Layers className="w-8 h-8" />,
      github: 'https://github.com/nikhilroule',
      demo: '#'
    },
    {
      id: 'smart-library',
      title: 'Smart Library Management System',
      category: 'web',
      tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Firebase', 'SQL / MySQL'],
      desc: 'Comprehensive web application for managing library inventory, student/faculty accounts, book issuing & returns, fine tracking, and real-time record searches.',
      highlights: [
        'Real-time book search & instant availability status',
        'Automated issue/return transaction logging',
        'Relational MySQL / Firebase data architecture for high performance'
      ],
      icon: <BookOpen className="w-8 h-8" />,
      github: 'https://github.com/nikhilroule',
      demo: '#'
    },
    {
      id: 'esp8266-led',
      title: 'Smart LED Control using ESP8266 (IoT)',
      category: 'iot',
      tech: ['ESP8266 (NodeMCU)', 'Arduino IDE', 'Blynk IoT', 'C++'],
      desc: 'IoT-based remote hardware control system enabling users to toggle and dim lighting arrays over Wi-Fi using the Blynk mobile application and cloud platform.',
      highlights: [
        'Microcontroller firmware written in C++ via Arduino IDE',
        'Low-latency telemetry & bidirectional Wi-Fi state sync',
        'Mobile dashboard interface with custom Blynk cloud widgets'
      ],
      icon: <Cpu className="w-8 h-8" />,
      github: 'https://github.com/nikhilroule',
      demo: '#'
    }
  ];

  const filteredProjects = projectFilter === 'all'
    ? projects
    : projects.filter(p => p.category === projectFilter);

  return (
    <div className="app-container">
      {/* Sticky Navigation Bar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="content-wrapper nav-container">
          <a href="#home" className="logo">
            NR<span className="logo-dot">.</span>
          </a>

          <ul className="nav-links">
            <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a></li>
            <li><a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a></li>
            <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a></li>
            <li><a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a></li>
            <li><a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}>Education</a></li>
            <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
          </ul>

          <div className="nav-actions">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn" 
              aria-label="Toggle Theme" 
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button onClick={() => setShowResumeModal(true)} className="btn-outline" style={{ padding: '8px 18px', fontSize: '0.88rem' }}>
              <FileText size={16} /> Resume
            </button>

            <a href="#contact" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.88rem' }}>
              Let's Talk
            </a>

            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="nav-link">About Me</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="nav-link">Experience</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="nav-link">Projects</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="nav-link">Skills</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="nav-link">Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-link">Contact</a>
            
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button 
                onClick={toggleTheme} 
                className="btn-outline" 
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              
              <button onClick={() => { setShowResumeModal(true); setMobileMenuOpen(false); }} className="btn-outline" style={{ flex: 1 }}>
                <FileText size={18} /> Resume
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="main-content">
        {/* HERO SECTION */}
        <section id="home" className="hero-section">
          <div className="content-wrapper">
            <div className="hero-grid">
              <div className="hero-text">
                <div className="hero-badge">
                  <span className="badge-tag">
                    <Sparkles size={14} /> Open for Software Engineering Internships
                  </span>
                </div>

                <h1 className="hero-title">
                  Building Scalable Web Apps & <span className="gradient-text">Smart IoT Systems</span>
                </h1>

                <p className="hero-subtitle">
                  Hi, I'm <strong>Nikhil Roule</strong> — B.Tech Computer Science & Engineering Student at MGM University.
                </p>

                <p className="hero-description">
                  Passionate Full-Stack Developer and IoT Engineer with hands-on experience in React.js, TypeScript, Go, Firebase, and embedded hardware controllers (ESP8266). Focused on engineering performant, secure, and user-friendly digital solutions.
                </p>

                <div className="hero-actions">
                  <a href="#projects" className="btn-primary">
                    Explore Projects <ArrowUpRight size={18} />
                  </a>
                  <a href="#contact" className="btn-outline">
                    Get In Touch
                  </a>
                  <button onClick={() => setShowResumeModal(true)} className="btn-outline">
                    <FileText size={18} /> View Resume
                  </button>
                </div>

                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-number gradient-text">3+</span>
                    <span className="stat-label">Major Projects</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number gradient-text">2</span>
                    <span className="stat-label">Internship Roles</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number gradient-text">6+</span>
                    <span className="stat-label">Tech Languages</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number gradient-text">2027</span>
                    <span className="stat-label">B.Tech Graduation</span>
                  </div>
                </div>
              </div>

              <div className="hero-avatar-wrapper">
                <div className="avatar-glow-ring">
                  <img src={profileImg} alt="Nikhil Roule Profile" className="avatar-img" />
                </div>
                <div className="avatar-status-badge">
                  <span className="status-dot"></span>
                  Available for Hire
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="section">
          <div className="content-wrapper">
            <div className="section-header">
              <span className="section-subtitle">Who I Am</span>
              <h2 className="section-title">About Me</h2>
              <p className="section-desc">Engineering student driven by code, curiosity, and smart technology.</p>
            </div>

            <div className="about-grid">
              <div className="glass-card about-card">
                <h3><Code className="text-secondary" /> Profile Summary</h3>
                <p style={{ lineHeight: '1.7', fontSize: '0.98rem' }}>
                  I am a Computer Science & Engineering student at the School of Engineering and Technology (SOET), MGM University, Chhatrapati Sambhajinagar (2023–2027).
                </p>
                <p style={{ marginTop: '14px', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  My core technical interests lie in full-stack web engineering, smart device integration (IoT), cloud backends, and cybersecurity. I take pride in creating clean architectures, smooth user experiences, and efficient solutions to complex real-world challenges.
                </p>

                <div className="focus-list">
                  <div className="focus-item">
                    <div className="focus-icon"><Layers size={20} /></div>
                    <div>
                      <h4>Full-Stack Web</h4>
                      <p>React.js, TypeScript, Go (Gin), Firebase, REST APIs</p>
                    </div>
                  </div>

                  <div className="focus-item">
                    <div className="focus-icon"><Cpu size={20} /></div>
                    <div>
                      <h4>IoT & Hardware</h4>
                      <p>ESP8266, NodeMCU, Arduino IDE, Blynk Cloud</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card about-card">
                <h3><Languages className="text-secondary" /> Linguistic Abilities</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '16px' }}>
                  Multilingual communicator fluent in three languages:
                </p>

                <table className="languages-table">
                  <thead>
                    <tr>
                      <th>Language</th>
                      <th>Read</th>
                      <th>Write</th>
                      <th>Speak</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>English</strong></td>
                      <td><span className="level-badge">Fluent</span></td>
                      <td><span className="level-badge">Fluent</span></td>
                      <td><span className="level-badge">Fluent</span></td>
                    </tr>
                    <tr>
                      <td><strong>Hindi</strong></td>
                      <td><span className="level-badge">Fluent</span></td>
                      <td><span className="level-badge">Fluent</span></td>
                      <td><span className="level-badge">Fluent</span></td>
                    </tr>
                    <tr>
                      <td><strong>Marathi</strong></td>
                      <td><span className="level-badge">Fluent</span></td>
                      <td><span className="level-badge">Fluent</span></td>
                      <td><span className="level-badge">Fluent</span></td>
                    </tr>
                  </tbody>
                </table>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                  <span className="info-label">Location</span>
                  <p style={{ fontWeight: '600', fontSize: '0.95rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={16} color="#06b6d4" /> Chhatrapati Sambhajinagar, Maharashtra - 431003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section">
          <div className="content-wrapper">
            <div className="section-header">
              <span className="section-subtitle">Work History</span>
              <h2 className="section-title">Internships & Experience</h2>
              <p className="section-desc">Hands-on experience in space technologies and IoT embedded development.</p>
            </div>

            <div className="timeline">
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">Def-Space Summer Intern</h3>
                    <div className="timeline-org">
                      <Briefcase size={16} /> Bharat Space Education Research Centre (BSERC)
                    </div>
                  </div>
                  <span className="timeline-date"><Calendar size={14} /> 19 June 2026 – 9 August 2026</span>
                </div>

                <ul className="timeline-bullets">
                  <li>Completed a 6+ week intensive Def-Space summer internship program.</li>
                  <li>Gained practical exposure to defense and space technologies and their real-world applications.</li>
                  <li>Participated in specialized research, problem-solving, and team innovation projects.</li>
                  <li>Developed an in-depth understanding of responsible space innovation and emerging technology trends.</li>
                </ul>

                <div className="timeline-tags">
                  <span className="badge-tag">Space Tech</span>
                  <span className="badge-tag">Defense Tech</span>
                  <span className="badge-tag">Research</span>
                  <span className="badge-tag">Teamwork</span>
                </div>
              </div>

              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">Internet of Things (IoT) Intern</h3>
                    <div className="timeline-org">
                      <Briefcase size={16} /> Intern Alpha
                    </div>
                  </div>
                  <span className="timeline-date"><Calendar size={14} /> 15 January 2026 – 28 February 2026</span>
                </div>

                <ul className="timeline-bullets">
                  <li>Completed a comprehensive internship focused on Internet of Things (IoT) architectures.</li>
                  <li>Hands-on experience with microcontrollers (ESP8266 NodeMCU), hardware sensors, and cloud communication protocols.</li>
                  <li>Designed and implemented wireless smart automation solutions.</li>
                  <li>Strengthened technical problem-solving, hardware debugging, and team collaboration skills.</li>
                </ul>

                <div className="timeline-tags">
                  <span className="badge-tag">IoT</span>
                  <span className="badge-tag">ESP8266 NodeMCU</span>
                  <span className="badge-tag">Sensors</span>
                  <span className="badge-tag">Arduino IDE</span>
                  <span className="badge-tag">Blynk IoT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="section">
          <div className="content-wrapper">
            <div className="section-header">
              <span className="section-subtitle">Portfolio Showcase</span>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-desc">Selected full-stack web applications and hardware IoT solutions.</p>
            </div>

            <div className="filter-tabs">
              <button className={`tab-btn ${projectFilter === 'all' ? 'active' : ''}`} onClick={() => setProjectFilter('all')}>All Projects</button>
              <button className={`tab-btn ${projectFilter === 'fullstack' ? 'active' : ''}`} onClick={() => setProjectFilter('fullstack')}>Full-Stack</button>
              <button className={`tab-btn ${projectFilter === 'web' ? 'active' : ''}`} onClick={() => setProjectFilter('web')}>Web Apps</button>
              <button className={`tab-btn ${projectFilter === 'iot' ? 'active' : ''}`} onClick={() => setProjectFilter('iot')}>IoT Systems</button>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((proj) => (
                <div key={proj.id} className="glass-card project-card">
                  <div className="project-banner">
                    <div className="project-icon-wrapper">
                      {proj.icon}
                    </div>
                  </div>

                  <div className="project-body">
                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-desc">{proj.desc}</p>

                    <div style={{ margin: '12px 0' }}>
                      <strong style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Key Highlights:</strong>
                      <ul className="timeline-bullets" style={{ margin: '6px 0 0 0' }}>
                        {proj.highlights.map((h, i) => (
                          <li key={i} style={{ fontSize: '0.85rem' }}>{h}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-footer">
                      <div className="timeline-tags" style={{ marginTop: 0 }}>
                        {proj.tech.map((t, i) => (
                          <span key={i} className="badge-tag" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <div className="content-wrapper">
            <div className="section-header">
              <span className="section-subtitle">Technical Proficiency</span>
              <h2 className="section-title">Skills & Technologies</h2>
              <p className="section-desc">Tools, programming languages, and concepts I work with.</p>
            </div>

            <div className="skills-grid">
              <div className="glass-card skill-card">
                <h3 className="skill-category-title"><Terminal className="text-secondary" /> Programming Languages</h3>
                <div className="skill-tags">
                  <span className="skill-badge">C</span>
                  <span className="skill-badge">C++</span>
                  <span className="skill-badge">Python</span>
                  <span className="skill-badge">JavaScript</span>
                  <span className="skill-badge">TypeScript</span>
                  <span className="skill-badge">Go (Basic)</span>
                </div>
              </div>

              <div className="glass-card skill-card">
                <h3 className="skill-category-title"><Globe className="text-secondary" /> Web Technologies</h3>
                <div className="skill-tags">
                  <span className="skill-badge">HTML5</span>
                  <span className="skill-badge">CSS3</span>
                  <span className="skill-badge">React.js</span>
                  <span className="skill-badge">Tailwind CSS</span>
                  <span className="skill-badge">REST API</span>
                </div>
              </div>

              <div className="glass-card skill-card">
                <h3 className="skill-category-title"><Database className="text-secondary" /> Backend & Database</h3>
                <div className="skill-tags">
                  <span className="skill-badge">Firebase</span>
                  <span className="skill-badge">Go (Gin) Framework</span>
                  <span className="skill-badge">SQL</span>
                  <span className="skill-badge">MySQL</span>
                  <span className="skill-badge">RESTful Services</span>
                </div>
              </div>

              <div className="glass-card skill-card">
                <h3 className="skill-category-title"><Cpu className="text-secondary" /> Tools & Hardware</h3>
                <div className="skill-tags">
                  <span className="skill-badge">Git & GitHub</span>
                  <span className="skill-badge">ESP8266 (NodeMCU)</span>
                  <span className="skill-badge">Arduino IDE</span>
                  <span className="skill-badge">Blynk IoT Platform</span>
                  <span className="skill-badge">VS Code</span>
                </div>
              </div>

              <div className="glass-card skill-card" style={{ gridColumn: 'span 1 / -1' }}>
                <h3 className="skill-category-title"><Sparkles className="text-secondary" /> Professional & Soft Skills</h3>
                <div className="skill-tags">
                  <span className="skill-badge" style={{ background: 'rgba(99, 102, 241, 0.15)' }}>⚡ Problem Solving</span>
                  <span className="skill-badge" style={{ background: 'rgba(99, 102, 241, 0.15)' }}>🤝 Teamwork & Leadership</span>
                  <span className="skill-badge" style={{ background: 'rgba(99, 102, 241, 0.15)' }}>💬 Communication</span>
                  <span className="skill-badge" style={{ background: 'rgba(99, 102, 241, 0.15)' }}>🚀 Quick Learner</span>
                  <span className="skill-badge" style={{ background: 'rgba(99, 102, 241, 0.15)' }}>🔄 Adaptability</span>
                  <span className="skill-badge" style={{ background: 'rgba(99, 102, 241, 0.15)' }}>⏱️ Time Management</span>
                  <span className="skill-badge" style={{ background: 'rgba(99, 102, 241, 0.15)' }}>🧠 Critical Thinking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="section">
          <div className="content-wrapper">
            <div className="section-header">
              <span className="section-subtitle">Academic Background</span>
              <h2 className="section-title">Education Journey</h2>
              <p className="section-desc">My academic progression in Engineering and Higher Secondary Education.</p>
            </div>

            <div className="timeline">
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">B.Tech in Computer Science & Engineering</h3>
                    <div className="timeline-org">
                      <GraduationCap size={18} /> School of Engineering & Technology (SOET), MGM University
                    </div>
                  </div>
                  <span className="timeline-date"><Calendar size={14} /> 2023 – 2027 (Pursuing)</span>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.93rem', marginTop: '10px' }}>
                  MGM University, Chhatrapati Sambhajinagar, Maharashtra.

                </p>
                <div className="timeline-tags" style={{ marginTop: '12px' }}>
                  <span className="badge-tag">MGM University</span>
                  <span className="badge-tag">Degree (Pursuing)</span>
                  <span className="badge-tag">2023 – 2027</span>
                </div>
              </div>

              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">HSC (12th Grade - Higher Secondary)</h3>
                    <div className="timeline-org">
                      <GraduationCap size={18} /> Samarth Arts and Science Junior College, Bazar Swangi
                    </div>
                  </div>
                  <span className="timeline-date"><Calendar size={14} /> Year of Passing: 2022</span>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.93rem', marginTop: '10px' }}>
                  Maharashtra State Board of Secondary and Higher Secondary Education.
                </p>
                <div className="timeline-tags" style={{ marginTop: '12px' }}>
                  <span className="badge-tag">Maharashtra State Board</span>
                  <span className="badge-tag">HSC (12th)</span>
                  <span className="badge-tag">Passed: 2022</span>
                </div>
              </div>

              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">SSC (10th Grade - Secondary School)</h3>
                    <div className="timeline-org">
                      <GraduationCap size={18} /> Zilla Parishad High School, Chikhalthan
                    </div>
                  </div>
                  <span className="timeline-date"><Calendar size={14} /> Year of Passing: 2020</span>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.93rem', marginTop: '10px' }}>
                  Maharashtra State Board of Secondary and Higher Secondary Education.
                </p>
                <div className="timeline-tags" style={{ marginTop: '12px' }}>
                  <span className="badge-tag">Maharashtra State Board</span>
                  <span className="badge-tag">SSC (10th)</span>
                  <span className="badge-tag">Passed: 2020</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section">
          <div className="content-wrapper">
            <div className="section-header">
              <span className="section-subtitle">Connect With Me</span>
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-desc">Feel free to reach out for internship opportunities or technical discussions.</p>
            </div>

            <div className="contact-grid">
              <div className="contact-info-cards">
                <a href="mailto:nikhilrofficial123@gmail.com" className="glass-card info-card">
                  <div className="info-icon"><Mail size={22} /></div>
                  <div>
                    <span className="info-label">Email</span>
                    <div className="info-value">nikhilrofficial123@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+919823396702" className="glass-card info-card">
                  <div className="info-icon"><Phone size={22} /></div>
                  <div>
                    <span className="info-label">Phone</span>
                    <div className="info-value">+91 9823396702</div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/nikhil-roule-4a61a8318/" target="_blank" rel="noreferrer" className="glass-card info-card">
                  <div className="info-icon"><LinkedinIcon size={22} /></div>
                  <div>
                    <span className="info-label">LinkedIn</span>
                    <div className="info-value">linkedin.com/in/nikhil-roule</div>
                  </div>
                </a>

                <div className="glass-card info-card">
                  <div className="info-icon"><MapPin size={22} /></div>
                  <div>
                    <span className="info-label">Location</span>
                    <div className="info-value">Chh. Sambhajinagar, India</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="glass-card">
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700 }}>Send a Message</h3>

                  {formSubmitted ? (
                    <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', padding: '18px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', color: '#34d399' }}>
                      <CheckCircle2 size={24} />
                      <div>
                        <strong>Thank you!</strong> Your message has been sent successfully. I will get back to you shortly.
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          className="form-input"
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          className="form-input"
                          placeholder="e.g. john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          className="form-input"
                          placeholder="Internship opportunity / Project inquiry"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          className="form-textarea"
                          placeholder="Write your message here..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        ></textarea>
                      </div>

                      <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                        <Send size={18} /> Send Message
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="content-wrapper footer-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 800, fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>Nikhil Roule</span>
            <span style={{ color: '#64748b' }}>| B.Tech CSE Portfolio</span>
          </div>

          <p style={{ color: '#64748b', fontSize: '0.88rem' }}>
            © {new Date().getFullYear()} Nikhil Roule. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="https://github.com/nikhilroule" target="_blank" rel="noreferrer" style={{ color: '#94a3b8' }}><GithubIcon size={20} /></a>
            <a href="https://www.linkedin.com/in/nikhil-roule-4a61a8318/" target="_blank" rel="noreferrer" style={{ color: '#94a3b8' }}><LinkedinIcon size={20} /></a>
            <a href="mailto:nikhilrofficial123@gmail.com" style={{ color: '#94a3b8' }}><Mail size={20} /></a>
          </div>
        </div>
      </footer>

      {/* RESUME PREVIEW MODAL */}
      {showResumeModal && (
        <div className="modal-overlay" onClick={() => setShowResumeModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FileText className="text-secondary" size={24} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700 }}>Nikhil Roule — Official Resume</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a href="/Nikhil_Roule_Resume.pdf" download="Nikhil_Roule_Resume.pdf" target="_blank" rel="noreferrer" className="btn-outline" style={{ padding: '6px 14px', fontSize: '0.82rem' }}>
                  <Download size={14} /> Print / Save PDF
                </a>
                <button onClick={() => setShowResumeModal(false)} className="modal-close-btn">
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="resume-body" style={{ color: '#e2e8f0', lineHeight: '1.7' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>NIKHIL ROULE</h2>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                  Chhatrapati Sambhajinagar, Maharashtra — 431003<br />
                  Email: nikhilrofficial123@gmail.com | Phone: +91-9823396702<br />
                  LinkedIn: https://www.linkedin.com/in/nikhil-roule-4a61a8318/
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem', marginBottom: '8px' }}>Career Objective</h4>
                <p style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '10px', borderLeft: '3px solid #6366f1', fontSize: '0.93rem' }}>
                  "B.Tech Computer Science & Engineering student with hands-on experience in full-stack web development and IoT projects. Skilled in React.js, TypeScript, Firebase, Python, and SQL, with experience building portfolio management and library management applications. Seeking a software development internship to apply programming and problem-solving skills while contributing to real-world projects."
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem', marginBottom: '10px' }}>Internships</h4>

                <div style={{ marginBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', color: '#fff' }}>
                    <span>1. Def-Space Summer Internship Programme 2026</span>
                    <span style={{ color: '#a5b4fc', fontWeight: 'normal', fontSize: '0.88rem' }}>19 June 2026 – 9 August 2026</span>
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.88rem' }}>Bharat Space Education Research Centre (BSERC)</div>
                  <ul style={{ paddingLeft: '20px', marginTop: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                    <li>Successfully completed a 6+ week Def-Space internship programme.</li>
                    <li>Gained exposure to defence and space technologies and their applications.</li>
                    <li>Developed research, problem-solving, and teamwork skills through internship activities.</li>
                    <li>Enhanced understanding of responsible innovation and emerging technologies.</li>
                  </ul>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', color: '#fff' }}>
                    <span>2. Internet of Things (IoT) Intern</span>
                    <span style={{ color: '#a5b4fc', fontWeight: 'normal', fontSize: '0.88rem' }}>15 January 2026 – 28 February 2026</span>
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.88rem' }}>Intern Alpha</div>
                  <ul style={{ paddingLeft: '20px', marginTop: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                    <li>Successfully completed an internship focused on Internet of Things (IoT) technologies.</li>
                    <li>Gained hands-on exposure to IoT concepts, sensors, and microcontrollers.</li>
                    <li>Developed an understanding of designing and implementing IoT-based solutions.</li>
                    <li>Strengthened technical, problem-solving, and teamwork skills through practical tasks.</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem', marginBottom: '10px' }}>Projects</h4>

                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#fff' }}>1. NR Wealth Desk – Portfolio Management System</strong><br />
                  <span style={{ fontSize: '0.82rem', color: '#a5b4fc' }}>Tech Stack: React.js, TypeScript, Tailwind CSS, Firebase, Go (Gin), REST API</span>
                  <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '4px' }}>
                    Developed a full-stack portfolio management web application for tracking investments. Implemented secure user authentication using Firebase, integrated CSV import and live stock price updates, and built an interactive dashboard to display portfolio value, profit/loss, and investment analytics.
                  </p>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#fff' }}>2. Smart Library Management System</strong><br />
                  <span style={{ fontSize: '0.82rem', color: '#a5b4fc' }}>Tech Stack: React.js, JavaScript, HTML, CSS, Firebase, SQL/MySQL</span>
                  <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '4px' }}>
                    Developed a smart library management system for managing books, users, and library records. Implemented book search, issue/return tracking, and user management features with an easy-to-use interface.
                  </p>
                </div>

                <div>
                  <strong style={{ color: '#fff' }}>3. Smart LED Control using ESP8266 (IoT Project)</strong><br />
                  <span style={{ fontSize: '0.82rem', color: '#a5b4fc' }}>Tech Stack: ESP8266 (NodeMCU), Arduino IDE, Blynk IoT, C++</span>
                  <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '4px' }}>
                    Developed an IoT-based smart LED control system enabling remote LED control over Wi-Fi using the Blynk mobile application and cloud platform.
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem', marginBottom: '10px' }}>Education</h4>
                <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                  <p style={{ marginBottom: '6px' }}><strong style={{ color: '#fff' }}>B.Tech in Computer Science & Engineering</strong> — School of Engineering & Technology (SOET), MGM University, Chhatrapati Sambhajinagar (2023 – 2027 Pursuing)</p>
                  <p style={{ marginBottom: '6px' }}><strong style={{ color: '#fff' }}>HSC (12th Grade)</strong> — Samarth Arts and Science Junior College, Bazar Swangi | <strong>Board:</strong> Maharashtra State Board (2022)</p>
                  <p><strong style={{ color: '#fff' }}>SSC (10th Grade)</strong> — Zilla Parishad High School, Chikhalthan Tq Kannad Dis Chh. Sambhajinagar | <strong>Board:</strong> Maharashtra State Board (2020)</p>
                </div>
              </div>

              <div>
                <h4 style={{ color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem', marginBottom: '10px' }}>Linguistic Abilities</h4>
                <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                  <p><strong style={{ color: '#fff' }}>English:</strong> Read: Fluent | Write: Fluent | Speak: Fluent</p>
                  <p><strong style={{ color: '#fff' }}>Hindi:</strong> Read: Fluent | Write: Fluent | Speak: Fluent</p>
                  <p><strong style={{ color: '#fff' }}>Marathi:</strong> Read: Fluent | Write: Fluent | Speak: Fluent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;