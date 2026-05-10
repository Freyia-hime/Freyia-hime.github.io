import { startTransition, useEffect, useState } from 'react'
import './App.css'

type GitHubProfile = {
  followers: number
  public_repos: number
  updated_at: string
}

type GitHubRepo = {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  updated_at: string
}

const featuredNames = new Set(['LiLiTH', 'LiLiTH-VoiceModel'])

const introLines = [
  'ยินดีที่ได้รู้จักน๊า ฉันชื่อว่า フレイア',
  'อนิเมะ มังงะ ของน่ารัก ๆ แล้วก็โปรเจกต์ที่มี character ชัด ๆ คือของโปรด',
]

function formatDate(input: string) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(input))
}

function App() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])

  useEffect(() => {
    let active = true

    async function load() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/Freyia-hime'),
          fetch('https://api.github.com/users/Freyia-hime/repos?per_page=100&sort=updated'),
        ])

        if (!profileRes.ok || !reposRes.ok) {
          return
        }

        const [profileJson, reposJson] = await Promise.all([
          profileRes.json() as Promise<GitHubProfile>,
          reposRes.json() as Promise<GitHubRepo[]>,
        ])

        if (!active) {
          return
        }

        startTransition(() => {
          setProfile(profileJson)
          setRepos(reposJson)
        })
      } catch {
        // Keep the page usable if GitHub API is temporarily unavailable.
      }
    }

    load()

    return () => {
      active = false
    }
  }, [])

  const featuredRepos = repos.filter((repo) => featuredNames.has(repo.name)).slice(0, 2)
  const latestRepo = repos.find((repo) => repo.name !== 'Freyia-hime.github.io')

  return (
    <main className="page-shell">
      <section className="hero-card reveal">
        <div className="hero-copy">
          <p className="eyebrow">Freyia's page</p>
          <h1>❀フレイア❀</h1>
          <p className="jp-line">まだ動いてるコードは、絶対に触るな。</p>
          <div className="intro-text">
            {introLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="quick-links">
            <a href="https://github.com/Freyia-hime" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://discord.gg/KAFuFKznpj" target="_blank" rel="noreferrer">
              PixelAnimeClub
            </a>
          </div>
        </div>

        <aside className="status-panel reveal reveal-delay-1">
          <p className="eyebrow">Live Status</p>
          <div className="status-grid">
            <div>
              <span>repos</span>
              <strong>{profile?.public_repos ?? '...'}</strong>
            </div>
            <div>
              <span>followers</span>
              <strong>{profile?.followers ?? '...'}</strong>
            </div>
            <div>
              <span>latest update</span>
              <strong>{profile ? formatDate(profile.updated_at) : 'loading'}</strong>
            </div>
          </div>
          {latestRepo ? (
            <p className="status-note">
              latest active repo: <a href={latestRepo.html_url}>{latestRepo.name}</a>
            </p>
          ) : null}
        </aside>
      </section>

      <section className="mini-grid">
        <article className="soft-panel reveal reveal-delay-1">
          <p className="eyebrow">Now</p>
          <h2>What this page is for</h2>
          <p>
            小さなプロフィールサイトです。GitHub の README よりもう少しだけ自由に、
            好きなものと今触っているものを置いておく場所。
          </p>
        </article>

        <article className="soft-panel reveal reveal-delay-2">
          <p className="eyebrow">Mood</p>
          <h2>Things I like</h2>
          <div className="chip-row">
            <span>anime</span>
            <span>manga</span>
            <span>cute stuff</span>
            <span>voice experiments</span>
            <span>discord bots</span>
          </div>
        </article>
      </section>

      <section className="projects reveal reveal-delay-2">
        <div className="section-head">
          <p className="eyebrow">Projects</p>
          <h2>Featured</h2>
        </div>
        <div className="project-list">
          {featuredRepos.length > 0 ? (
            featuredRepos.map((repo) => (
              <article className="project-card" key={repo.id}>
                <div className="project-title">
                  <h3>{repo.name}</h3>
                  <span>{formatDate(repo.updated_at)}</span>
                </div>
                <p>{repo.description || 'No description yet.'}</p>
                <div className="project-links">
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    repository
                  </a>
                  {repo.homepage ? (
                    <a href={repo.homepage} target="_blank" rel="noreferrer">
                      open link
                    </a>
                  ) : null}
                </div>
              </article>
            ))
          ) : (
            <article className="project-card">
              <div className="project-title">
                <h3>Loading projects</h3>
                <span>GitHub API</span>
              </div>
              <p>Waiting for live repository data...</p>
            </article>
          )}
        </div>
      </section>
    </main>
  )
}

export default App
