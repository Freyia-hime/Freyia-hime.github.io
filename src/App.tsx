import './App.css'

const tags = [
  'anime soul',
  'voice model',
  'discord bot',
  'unity world',
  'late night dev',
]

const highlights = [
  {
    title: 'LiLiTH',
    text: 'Discord bot project with a strong character, soft mood, and a little dangerous charm.',
    link: 'https://github.com/Freyia-hime/LiLiTH',
    label: 'view project',
  },
  {
    title: 'LiLiTH Voice',
    text: 'Voice-side experiments focused on giving the project a more vivid and expressive presence.',
    link: 'https://github.com/Freyia-hime/LiLiTH-VoiceModel',
    label: 'listen closer',
  },
]

const stacks = [
  'React',
  'TypeScript',
  'Bun',
  'Python',
  'C#',
  'Unity',
  'Rust',
  'Node.js',
  'Go',
  'Lua',
]

const notes = [
  'ชอบอนิเมะ มังงะ และอะไรที่น่ารัก ๆ',
  'かわいいだけじゃなくて、少し変わったものも好き。',
  'I like projects with mood, personality, and a little strange energy.',
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Freyia-hime.github.io</p>
          <h1>
            <span>❀フレイア❀</span>
            <small>かわいい空気と、少しだけ危ないコード。</small>
          </h1>
          <p className="lead">
            ยินดีที่ได้รู้จักน๊า ฉันชื่อว่า フレイア.
            <br />
            This is my little corner for cute ideas, strange experiments, and
            projects with personality.
          </p>

          <div className="tag-row">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="action-row">
            <a href="https://github.com/Freyia-hime" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://discord.gg/KAFuFKznpj" target="_blank" rel="noreferrer">
              PixelAnimeClub
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="window-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-card-body">
            <p className="card-label">status.log</p>
            <ul>
              <li>building LiLiTH</li>
              <li>tuning voice experiments</li>
              <li>collecting cute ideas at 2AM</li>
            </ul>
            <p className="quote">まだ動いてるコードは、絶対に触るな。</p>
          </div>
        </div>
      </section>

      <section className="content-grid">
        <article className="glass-panel intro-panel">
          <p className="section-kicker">About</p>
          <h2>Soft colors, sharp projects.</h2>
          <div className="note-stack">
            {notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </article>

        <article className="glass-panel stack-panel">
          <p className="section-kicker">Main Stack</p>
          <h2>Things I use a lot</h2>
          <div className="stack-grid">
            {stacks.map((stack) => (
              <span key={stack}>{stack}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="project-section">
        <div className="section-heading">
          <p className="section-kicker">Spotlight</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="project-grid">
          {highlights.map((item) => (
            <article className="project-card" key={item.title}>
              <div className="project-topline">
                <span className="project-dot" />
                <p>{item.title}</p>
              </div>
              <p className="project-text">{item.text}</p>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="footer-banner">
        <div>
          <p className="section-kicker">Links</p>
          <h2>Come say hi.</h2>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Freyia-hime" target="_blank" rel="noreferrer">
            github.com/Freyia-hime
          </a>
          <a href="https://discord.gg/KAFuFKznpj" target="_blank" rel="noreferrer">
            💮PixelAnimeClub🍥
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
