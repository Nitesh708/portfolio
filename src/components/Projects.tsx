import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  ExternalLink, X, ArrowUpRight,
  Users, Zap, Database, Layers,
  Gamepad2, Wifi, Puzzle, Trophy,
} from 'lucide-react';

interface Highlight { icon: React.ElementType; text: string }
interface Project {
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  highlights: Highlight[];
  technologies: string[];
  live: string;
  accent: 'teal' | 'fuchsia';
}

const projects: Project[] = [
  {
    title: 'Impostor Word Game',
    subtitle: 'Personal Project · April 2026 – Present',
    tagline: 'Cross-platform multiplayer party game',
    description:
      'A cross-platform multiplayer party game for up to 10 players across React web and Flutter mobile (Android & macOS) via shared room codes. Real-time phases — lobby, word reveal, discussion, voting, results — synced with sub-100ms latency.',
    highlights: [
      { icon: Users,    text: 'Up to 10 concurrent players via shared room codes' },
      { icon: Zap,      text: 'Sub-100ms sync across all game phases via PartyKit WebSockets' },
      { icon: Database, text: '1000+ curated word pairs in Supabase with category & difficulty filtering' },
      { icon: Layers,   text: 'Configurable game modes, impostor count, and round timers' },
    ],
    technologies: ['React', 'Vite', 'PartyKit', 'Supabase', 'Netlify', 'Flutter'],
    live: 'https://imposter-word.netlify.app/',
    accent: 'teal',
  },
  {
    title: 'Crimson Manor',
    subtitle: 'Personal Project',
    tagline: 'Multiplayer mystery deduction game',
    description:
      'A browser-based multiplayer mystery deduction game set in a gothic manor. Players gather clues, interrogate suspects, and race to solve the crime before the killer strikes again — inspired by the classic Cluedo board game.',
    highlights: [
      { icon: Gamepad2, text: 'Classic Cluedo-inspired deduction gameplay in the browser' },
      { icon: Wifi,     text: 'Real-time multiplayer with live room-based sessions' },
      { icon: Puzzle,   text: 'Dynamic clue distribution and suspect mechanics each round' },
      { icon: Trophy,   text: 'Score tracking and win/loss states across game rounds' },
    ],
    technologies: ['React', 'Netlify'],
    live: 'https://clue-do.netlify.app/',
    accent: 'fuchsia',
  },
];

/* ─── Accent helper ─────────────────────────────────────────────────── */
const a = (accent: 'teal' | 'fuchsia') =>
  accent === 'teal'
    ? {
        text:        'text-teal-400',
        textMuted:   'text-teal-400/60',
        border:      'border-teal-400/25',
        bg:          'bg-teal-400/10',
        gradFrom:    'from-teal-950/70',
        badgeBg:     'bg-teal-400',
        badgeText:   'text-[#0d0d1a]',
        btnPrimary:  'bg-teal-400 hover:bg-teal-300 text-[#0d0d1a]',
        iconModal:   'bg-teal-400/10 text-teal-400',
        tagBorder:   'border-teal-500/25 text-teal-400 hover:bg-teal-500/10 hover:border-teal-500/50',
      }
    : {
        text:        'text-fuchsia-400',
        textMuted:   'text-fuchsia-400/60',
        border:      'border-fuchsia-400/25',
        bg:          'bg-fuchsia-400/10',
        gradFrom:    'from-fuchsia-950/70',
        badgeBg:     'bg-fuchsia-500',
        badgeText:   'text-white',
        btnPrimary:  'bg-fuchsia-500 hover:bg-fuchsia-400 text-white',
        iconModal:   'bg-fuchsia-400/10 text-fuchsia-400',
        tagBorder:   'border-fuchsia-500/25 text-fuchsia-400 hover:bg-fuchsia-500/10 hover:border-fuchsia-500/50',
      };

/* ─── Animation variants ─────────────────────────────────────────────── */
const container: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const cardV: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

/* ─── Card ───────────────────────────────────────────────────────────── */
function Card({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const ac = a(project.accent);

  return (
    <motion.article
      variants={cardV}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative flex flex-col bg-[#12121f] rounded-2xl overflow-hidden cursor-pointer"
      style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.4)' }}
      onClick={onOpen}
    >
      {/* ── Visual header ────────────────────────────────────────────── */}
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${ac.gradFrom} via-[#0f0f1e] to-[#1a1a2b]`}>
        {/* dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
        {/* decorative rings */}
        <div className={`absolute -top-14 -right-14 w-56 h-56 rounded-full border ${ac.border} opacity-30`} />
        <div className={`absolute -top-5  -right-5  w-32 h-32 rounded-full border ${ac.border} opacity-20`} />
        <div className={`absolute  top-10  right-10 w-14 h-14 rounded-full ${ac.bg}  opacity-50`} />
        {/* large watermark number */}
        <span className={`absolute -bottom-3 -left-1 text-[7rem] font-black ${ac.text} opacity-[0.06] leading-none select-none pointer-events-none`}>
          {String(index + 1).padStart(2, '0')}
        </span>
        {/* Live badge */}
        <span className={`absolute top-3 right-3 px-3 py-1 ${ac.badgeBg} ${ac.badgeText} text-xs font-bold rounded-full shadow-lg`}>
          Live
        </span>
        {/* floating tech tags */}
        <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((t) => (
            <span key={t} className={`px-2.5 py-0.5 ${ac.bg} ${ac.text} border ${ac.border} rounded-full text-xs font-semibold backdrop-blur-sm`}>
              {t}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 text-gray-400 rounded-full text-xs">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-white mb-1 leading-snug">{project.title}</h3>
        <p className={`text-sm font-semibold ${ac.text} mb-3`}>{project.tagline}</p>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">{project.description}</p>

        {/* footer row */}
        <div className={`mt-5 pt-4 border-t ${ac.border} flex items-center justify-between`}>
          {/* Live icon button */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`p-2 rounded-lg border ${ac.border} ${ac.bg} ${ac.text} hover:opacity-80 transition-opacity`}
            title="Live App"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          <span className={`flex items-center gap-1 text-xs font-semibold ${ac.textMuted} group-hover:${ac.text} transition-colors`}>
            Details <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Modal ──────────────────────────────────────────────────────────── */
function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  const ac = a(project.accent);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      style={{ background: 'rgba(5,5,15,0.80)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 28 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        exit={{    opacity: 0, scale: 0.93, y: 28 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[#13131f] rounded-2xl"
        style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.8)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* accent bar */}
        <div className={`h-1 w-full rounded-t-2xl ${ac.badgeBg}`} />

        <div className="p-7 md:p-9">
          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-xl text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* title block */}
          <div className="mb-6 pr-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{project.title}</h3>
            <p className={`text-sm font-semibold ${ac.text}`}>{project.subtitle}</p>
          </div>

          {/* description */}
          <p className="text-gray-400 text-[15px] leading-relaxed mb-7">{project.description}</p>

          {/* highlights */}
          <div className="grid sm:grid-cols-2 gap-3 mb-7">
            {project.highlights.map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#0f0f1c] rounded-xl p-4">
                <div className={`mt-0.5 p-1.5 rounded-lg shrink-0 ${ac.iconModal}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-gray-300 text-sm leading-snug">{text}</span>
              </div>
            ))}
          </div>

          {/* tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span key={tech} className={`px-3 py-1 bg-[#0f0f1c] border rounded-full text-xs font-medium cursor-default transition-colors ${ac.tagBorder}`}>
                {tech}
              </span>
            ))}
          </div>

          {/* actions */}
          <div className="flex gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors ${ac.btnPrimary}`}
            >
              <ExternalLink className="w-4 h-4" /> Live App
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────── */
export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a0a18 0%, #111127 50%, #0a0a18 100%)' }}
    >
      {/* ambient glows */}
      <div className="absolute top-32 left-8 w-80 h-80 rounded-full opacity-[0.035] blur-3xl pointer-events-none" style={{ background: '#14b8a6' }} />
      <div className="absolute bottom-32 right-8 w-80 h-80 rounded-full opacity-[0.035] blur-3xl pointer-events-none" style={{ background: '#ec4899' }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* heading */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-4 tracking-tight">
            Featured <span className="text-fuchsia-500">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-fuchsia-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto">
            Things I've built — click any card to explore the details
          </p>
        </motion.div>

        {/* grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {projects.map((p, i) => (
            <Card key={i} project={p} index={i} onOpen={() => setSelected(i)} />
          ))}
        </motion.div>

      </div>

      {/* modal */}
      <AnimatePresence>
        {selected !== null && (
          <Modal project={projects[selected]} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
