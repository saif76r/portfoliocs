import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Terminal, 
  Shield, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  ExternalLink, 
  ChevronRight, 
  Lock, 
  ShieldCheck, 
  Activity,
  Server,
  Code2,
  Mail,
  Send
} from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';

// --- Shared Components ---

const SectionHeading = ({ children, subtitle, number }: { children: ReactNode, subtitle?: string, number?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="mb-12"
  >
    <div className="flex items-center gap-4 mb-2">
      {number && <span className="text-cyber-green font-mono text-sm">{number}</span>}
      <div className="h-[1px] flex-1 bg-zinc-800"></div>
    </div>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 uppercase italic">
      {children}
    </h2>
    {subtitle && <p className="text-zinc-500 font-mono text-sm max-w-xl">{subtitle}</p>}
  </motion.div>
);

const Card = ({ children, className = "", title, id }: { children: ReactNode, className?: string, title?: string, id?: string, key?: any }) => (
  <motion.div 
    id={id} 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -5, borderColor: "rgba(0, 255, 65, 0.4)", boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
    className={`bg-cyber-dark border border-cyber-border p-6 rounded-2xl transition-all duration-300 group overflow-hidden flex flex-col ${className}`}
  >
    {title && <div className="card-title">{title}</div>}
    {children}
  </motion.div>
);

// --- Sections ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-black/80 backdrop-blur-md border-b border-cyber-border">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-cyber-green rounded flex items-center justify-center">
          <Shield className="text-cyber-black w-5 h-5" />
        </div>
        <span className="font-mono font-bold text-cyber-text tracking-widest uppercase hidden sm:block">Meer.Saif</span>
      </div>
      <div className="flex gap-8 items-center">
        {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-cyber-dim hover:text-cyber-green font-mono text-[10px] uppercase tracking-widest transition-colors">
            {item}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

const BigHero = () => (
  <section className="min-h-[85vh] flex items-center justify-center pt-12 overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-cyber-green/20 rounded-full blur-[120px] pointer-events-none"
      />
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "circOut" }}
        className="relative z-20"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-block px-3 py-1 border border-cyber-green/30 rounded-full text-[10px] font-mono text-cyber-green mb-6 uppercase tracking-widest bg-cyber-green/5 backdrop-blur-sm"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-cyber-green mr-2 animate-pulse"></span>
          System Initialized // v2.0.4
        </motion.div>
        
        <h1 className="text-6xl md:text-[120px] font-black text-cyber-text leading-[0.8] mb-8 tracking-tighter">
          <motion.span 
             initial={{ filter: "blur(10px)", opacity: 0 }}
             animate={{ filter: "blur(0px)", opacity: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="block"
          >MEER</motion.span>
          <motion.span 
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 1, delay: 0.4, ease: "backOut" }}
             className="text-cyber-green block"
          >MD. SAIF</motion.span>
        </h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center gap-6"
        >
          <div className="h-0.5 w-12 bg-cyber-green"></div>
          <p className="text-sm font-mono text-cyber-dim uppercase tracking-[0.4em] animate-pulse">
            Cyber Security Enthusiast
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "circOut" }}
        className="relative z-10"
      >
        <div className="aspect-[4/5] md:aspect-square max-w-md ml-auto rounded-[40px] overflow-hidden border border-cyber-border relative group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="absolute inset-0 bg-cyber-green/5 mix-blend-overlay z-10"
          ></motion.div>
          <img 
            src="https://images4.alphacoders.com/129/1298453.jpg" 
            alt="Meer Md. Saif" 
            className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-8 left-8 z-20">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl"
            >
              <p className="text-[10px] font-mono text-cyber-green mb-1 flex items-center gap-2">
                <Globe size={10} className="animate-spin" /> NODE_LOC
              </p>
              <p className="text-sm text-white font-bold tracking-tight">DIGITAL_FRONTIER // IN</p>
            </motion.div>
          </div>
        </div>
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-cyber-green/40 rounded-tr-[50px] pointer-events-none"
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-cyber-green/40 rounded-bl-[50px] pointer-events-none"
        />
      </motion.div>
    </div>
  </section>
);

const TacticalPhilosophyBox = () => (
  <Card className="md:col-span-1 md:row-span-1" title="Philosophy">
    <div className="relative h-full overflow-hidden rounded-xl">
      <img 
        src="https://images3.alphacoders.com/131/1316688.jpg" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-[10px] font-mono text-cyber-green mb-1 uppercase tracking-widest">Technique</p>
        <p className="text-xs text-white font-bold leading-tight">PRECISE EXECUTION // ZERO TOLERANCE</p>
      </div>
    </div>
  </Card>
);

const AboutIntroBox = () => (
  <Card className="md:col-span-2 md:row-span-1" title="Short Bio">
    <div className="h-full flex flex-col justify-center">
      <p className="text-lg text-cyber-text leading-relaxed font-light italic">
        "I am a passionate <span className="text-cyber-green font-bold">Cyber Security lover</span> on a mission to secure the decentralized future. My expertise lies in identifying critical vulnerabilities before they can be exploited by malicious actors."
      </p>
      <div className="mt-6 flex gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-cyber-dim uppercase">Specialization</span>
          <span className="text-sm text-cyber-text">Offensive Security</span>
        </div>
        <div className="w-[1px] h-8 bg-cyber-border self-center"></div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-cyber-dim uppercase">Mission</span>
          <span className="text-sm text-cyber-text">Zero-Day Discovery</span>
        </div>
      </div>
    </div>
  </Card>
);

const HeroBox = () => (
  <Card className="md:col-span-2 md:row-span-1 flex flex-col justify-center relative group" title="Identity Data">
    <div className="flex items-center gap-6">
      <div className="w-16 h-16 rounded-full overflow-hidden border border-cyber-green/50">
        <img src="https://images4.alphacoders.com/129/1298453.jpg" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-cyber-text">MEER MD. SAIF</h3>
        <p className="text-xs font-mono text-cyber-green">LEVEL 7 SECURITY RESEARCHER</p>
      </div>
    </div>
  </Card>
);

const AchievementsBox = () => {
  const certs = [
    { title: "Offensive Security Certified Professional", org: "OffSec", date: "2025" },
    { title: "Certified Ethical Hacker (v12)", org: "EC-Council", date: "2024" },
    { title: "Junior Penetration Tester (eJPT)", org: "INE", date: "2023" }
  ];
  return (
    <Card className="md:col-span-2 md:row-span-1" title="Honors & Certs">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        {certs.map(cert => (
          <div key={cert.title} className="p-3 bg-cyber-black/40 border border-cyber-border rounded-xl flex flex-col justify-center">
            <ShieldCheck className="text-cyber-green w-4 h-4 mb-2 opacity-50" />
            <h4 className="text-[11px] font-bold text-cyber-text leading-tight mb-1">{cert.title}</h4>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-[9px] font-mono text-cyber-dim uppercase tracking-tighter">{cert.org}</span>
              <span className="text-[9px] font-mono text-cyber-green">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const TerminalBox = () => {
  const [text, setText] = useState('');
  const fullText = "> Whoami\nMeer Md. Saif\n> Status\nSecuring the digital frontier...\n[saif@kali ~]$ scan --target local_network\nScanning... 4 hosts found active.\n[saif@kali ~]$ exploit --service ssh\nAccess granted.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="md:col-span-2 md:row-span-2 bg-black border-cyber-green/30" title="Live System Console">
      <div className="font-mono text-xs md:text-sm text-cyber-green leading-relaxed whitespace-pre-wrap flex-1">
        {text}<span className="terminal-cursor"></span>
      </div>
    </Card>
  );
};

const SkillsBox = () => {
  const skills = ["Metasploit", "Wireshark", "Python", "Linux", "Burp Suite", "Nmap", "Cryptography", "Docker", "OSINT", "Rust", "TypeScript"];
  return (
    <Card className="md:col-span-1 md:row-span-2" title="Tech Stack">
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-1 border border-cyber-border rounded-lg font-mono text-[10px] bg-cyber-green/5 text-cyber-text hover:border-cyber-green transition-colors cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
};

const FeaturedWorkBox = () => {
  const projects = [
    { name: "VulnScanner X", desc: "Automated vulnerability assessment tool.", demo: "https://demo.example.com" },
    { name: "CryptoGuard", desc: "E2E encrypted messaging protocol.", demo: "https://demo.example.com" },
    { name: "NetSentry AI", desc: "ML-driven anomaly detection.", demo: "https://demo.example.com" }
  ];
  return (
    <Card className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-cyber-dark to-zinc-900/50" title="Featured Work">
      <div className="space-y-6">
        {projects.map(p => (
          <div key={p.name} className="group/item cursor-pointer">
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-sm font-bold text-cyber-text group-hover/item:text-cyber-green transition-colors">{p.name}</h4>
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-[9px] font-mono text-cyber-dim hover:text-cyber-green flex items-center gap-1">
                DEMO <ExternalLink size={10} />
              </a>
            </div>
            <p className="text-[10px] text-cyber-dim leading-normal">{p.desc}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

const CertificateCard = ({ title, org, date, image }: { title: string, org: string, date: string, image: string, key?: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-cyber-dark border border-cyber-border rounded-2xl overflow-hidden group hover:border-cyber-green/50 transition-all"
  >
    <div className="aspect-[4/3] relative overflow-hidden bg-black">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-black flex items-end p-4">
        <Shield className="text-cyber-green w-6 h-6 mb-2 opacity-50" />
      </div>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-xs font-bold text-cyber-text group-hover:text-cyber-green transition-colors leading-tight">{title}</h4>
        <span className="text-[9px] font-mono text-cyber-green">{date}</span>
      </div>
      <p className="text-[10px] font-mono text-cyber-dim uppercase tracking-widest">{org}</p>
    </div>
  </motion.div>
);

const CertificatesSection = () => {
  const certs = [
    { title: "Offensive Security Certified Professional", org: "OffSec", date: "2025", image: "https://picsum.photos/seed/cert1/800/600" },
    { title: "Certified Ethical Hacker (v12)", org: "EC-Council", date: "2024", image: "https://picsum.photos/seed/cert2/800/600" },
    { title: "Junior Penetration Tester (eJPT)", org: "INE", date: "2023", image: "https://picsum.photos/seed/cert3/800/600" },
    { title: "AWS Certified Security - Specialty", org: "Amazon Web Services", date: "2024", image: "https://picsum.photos/seed/cert4/800/600" }
  ];

  return (
    <section id="achievements" className="mt-24 pt-16 border-t border-cyber-border">
      <SectionHeading number="04" subtitle="Honors & Awards">ACHIEVEMENTS</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map(cert => (
          <CertificateCard 
            key={cert.title} 
            title={cert.title} 
            org={cert.org} 
            date={cert.date} 
            image={cert.image} 
          />
        ))}
      </div>
    </section>
  );
};

const StatsBox = () => (
  <Card className="md:col-span-2 md:row-span-1" title="Field Stats">
    <div className="flex justify-around items-center h-full">
      <div className="text-center">
        <div className="text-3xl font-mono font-bold text-cyber-green">42+</div>
        <div className="text-[9px] uppercase tracking-widest text-cyber-dim">Bounties Found</div>
      </div>
      <div className="text-center border-x border-cyber-border px-8">
        <div className="text-3xl font-mono font-bold text-cyber-green">08</div>
        <div className="text-[9px] uppercase tracking-widest text-cyber-dim">CVEs Filed</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-mono font-bold text-cyber-green">99%</div>
        <div className="text-[9px] uppercase tracking-widest text-cyber-dim">Def Rate</div>
      </div>
    </div>
  </Card>
);

const ContactBox = () => (
  <Card className="md:col-span-2 md:row-span-1" title="Encrypted Channel">
    <div className="flex flex-col md:flex-row items-center justify-between h-full gap-4">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-cyber-green shadow-[0_0_10px_#00ff41]"></div>
        <span className="text-xs font-mono text-cyber-text">Available for Consultation</span>
      </div>
      <a href="mailto:root@saif.security" className="text-sm font-mono text-cyber-text border-b border-cyber-green pb-1 hover:text-white transition-colors">
        root@saif.security
      </a>
      <div className="flex gap-4">
        <a href="#" className="text-cyber-dim hover:text-cyber-green transition-colors"><Github size={18} /></a>
        <a href="#" className="text-cyber-dim hover:text-cyber-green transition-colors"><Linkedin size={18} /></a>
      </div>
    </div>
  </Card>
);

const SkillsSection = () => {
  const categories = [
    { title: "PenTesting", skills: ["Burp Suite", "OWASP ZAP", "Metasploit", "Nmap", "Wireshark"] },
    { title: "Development", skills: ["TypeScript", "Next.js", "Python", "Rust", "Golang"] },
    { title: "Security Tools", skills: ["Nessus", "Snyk", "Docker Security", "SIEM", "Splunk"] },
    { title: "Governance", skills: ["ISO 27001", "NIST", "SOC2", "GDPR", "Risk Assessment"] }
  ];
  return (
    <section id="skills" className="mt-24 pt-16 border-t border-cyber-border">
      <SectionHeading number="02" subtitle="Tactical / Arsenal">SKILLS</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(cat => (
          <Card key={cat.title} title={cat.title}>
            <ul className="space-y-2">
              {cat.skills.map(skill => (
                <li key={skill} className="text-xs font-mono flex items-center gap-2">
                  <ChevronRight size={12} className="text-cyber-green" /> {skill}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Vulnerability Scanner X",
      desc: "An automated tool that scans legacy networks for common configuration errors and zero-day vulnerabilities.",
      tags: ["Python", "Nmap API", "Security"],
      link: "#"
    },
    {
      title: "Shadow Vault",
      desc: "Secure end-to-end encrypted password storage with biometric bypass and quantum-resistant encryption.",
      tags: ["Rust", "WASM", "AES-GCM"],
      link: "#"
    },
    {
      title: "Intrusion Radar",
      desc: "Real-time threat monitoring dashboard for cloud infrastructure using ML to detect non-human traffic.",
      tags: ["Go", "React", "Terraform"],
      link: "#"
    }
  ];
  return (
    <section id="projects" className="mt-24 pt-16 border-t border-cyber-border">
      <SectionHeading number="03" subtitle="Field Operations">PROJECTS</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map(proj => (
          <Card key={proj.title} title={proj.title} className="hover:scale-[1.02]">
            <p className="text-xs text-cyber-dim mb-4 flex-1">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {proj.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 bg-cyber-green/10 text-cyber-green rounded">{tag}</span>
              ))}
            </div>
            <a href={proj.link} className="text-[10px] font-mono text-cyber-text border-b border-cyber-green pb-1 flex items-center gap-2 w-fit">
              ACCESS REPOSITORY <ExternalLink size={12} />
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="mt-24 pt-16 border-t border-cyber-border">
    <SectionHeading number="05" subtitle="Secure Channel">CONTACT</SectionHeading>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold uppercase italic">Ready to fortress?</h3>
        <p className="text-cyber-dim max-w-md">
          Whether it's a security audit, a full-stack project, or just technical consultation, I'm here to ensure your digital footprint is ironclad.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-cyber-text">
            <Mail className="text-cyber-green" /> <span>root@saif.security</span>
          </div>
          <div className="flex items-center gap-4 text-cyber-text">
            <Github className="text-cyber-green" /> <span>@saif_cyber</span>
          </div>
        </div>
      </div>
      <Card className="bg-cyber-dark/50 shadow-2xl">
        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="IDENTITY" className="w-full bg-cyber-black border border-cyber-border p-3 rounded group-hover:border-cyber-green transition-colors focus:outline-none" />
            <input type="email" placeholder="EMAIL" className="w-full bg-cyber-black border border-cyber-border p-3 rounded group-hover:border-cyber-green transition-colors focus:outline-none" />
          </div>
          <textarea rows={4} placeholder="ENCRYPTED PACKET" className="w-full bg-cyber-black border border-cyber-border p-3 rounded group-hover:border-cyber-green transition-colors focus:outline-none resize-none"></textarea>
          <button className="w-full bg-cyber-green text-cyber-black font-extrabold py-3 rounded uppercase tracking-[4px] hover:bg-white transition-all">
            TRANSMIT SIGNAL
          </button>
        </form>
      </Card>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 px-6 text-center">
    <p className="text-[9px] font-mono text-cyber-dim uppercase tracking-[4px]">
      &copy; 2026 Meer Md. Saif // Initializing Protocol // Secure Environment
    </p>
  </footer>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-cyber-black min-h-screen selection:bg-cyber-green selection:text-black pt-24 pb-12">
      <div className="scanline"></div>
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-cyber-green origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6">
        <BigHero />
        
        <section id="about" className="pt-24 mb-12 border-t border-cyber-border">
          <SectionHeading number="01" subtitle="Digital Identity">ABOUT ME</SectionHeading>
          <div className="bento-grid">
            <AboutIntroBox />
            <HeroBox />
            <TacticalPhilosophyBox />
            <SkillsBox />
            <FeaturedWorkBox />
            <TerminalBox />
            <StatsBox />
          </div>
        </section>

        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

