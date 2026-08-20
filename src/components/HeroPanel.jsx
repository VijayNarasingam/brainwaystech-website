import { useRef, useState } from 'react'

export default function HeroPanel() {
  const [active, setActive] = useState('web')
  const panelRef = useRef(null)
  const reducedTiltRef = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  function onMouseMove(e) {
    if (reducedTiltRef.current) return
    const panel = panelRef.current
    if (!panel) return
    const r = panel.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    panel.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`
  }

  function onMouseLeave() {
    if (panelRef.current) panelRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
  }

  return (
    <div className="hero-panel-wrap">
      <div
        className="hero-panel"
        id="hero-panel"
        ref={panelRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="panel-tabs">
          <button className={`ptab ${active === 'web' ? 'active' : ''}`} onClick={() => setActive('web')} type="button">
            Web &amp; App
          </button>
          <button className={`ptab ${active === 'marketing' ? 'active' : ''}`} onClick={() => setActive('marketing')} type="button">
            Marketing
          </button>
          <button className={`ptab ${active === 'video' ? 'active' : ''}`} onClick={() => setActive('video')} type="button">
            Video
          </button>
        </div>

        <div className="panel-body">
          {active === 'web' && (
            <div className="ptab-content active">
              <div className="browser-mock">
                <div className="browser-bar"><span></span><span></span><span></span></div>
                <div className="browser-body">
                  <div className="skel-line w-60"></div>
                  <div className="skel-line w-95"></div>
                  <div className="skel-line w-80"></div>
                  <div className="skel-line w-45"></div>
                </div>
              </div>
              <div className="panel-copy">
                <p>Clean, responsive builds — from marketing sites to full product platforms.</p>
              </div>
            </div>
          )}

          {active === 'marketing' && (
            <div className="ptab-content active">
              <div className="chart-mock">
                <div className="bar" style={{ '--h': '38%' }}></div>
                <div className="bar" style={{ '--h': '62%' }}></div>
                <div className="bar" style={{ '--h': '48%' }}></div>
                <div className="bar" style={{ '--h': '82%' }}></div>
                <div className="bar" style={{ '--h': '70%' }}></div>
                <div className="bar" style={{ '--h': '94%' }}></div>
              </div>
              <div className="panel-copy">
                <p>Campaigns tracked and tuned against real numbers, not vanity metrics.</p>
              </div>
            </div>
          )}

          {active === 'video' && (
            <div className="ptab-content active">
              <div className="video-mock">
                <div className="play-btn">
                  <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
              <div className="scrub"><div className="scrub-fill"></div></div>
              <div className="panel-copy">
                <p style={{ marginTop: '12px' }}>Edits built for Reels, Shorts, and Stories — fast turnaround, no filler.</p>
              </div>
            </div>
          )}
        </div>

        <div className="panel-foot">
          <div className="live-badge"><span className="live-dot"></span> Live preview</div>
          <div className="panel-stat-num">95% on-time</div>
        </div>
      </div>
    </div>
  )
}
