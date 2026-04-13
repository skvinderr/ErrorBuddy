function VsCodeIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={props.className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M246.6 52.4a17.7 17.7 0 0 0-19.3-3.8L155 80.6 97.3 26.2a17.8 17.8 0 0 0-24.5.3L41 58.3A17.8 17.8 0 0 0 41.3 83l45.1 44.9-45.1 44.9A17.8 17.8 0 0 0 41 197.7l31.8 31.8a17.8 17.8 0 0 0 24.5.3L155 175.4l72.3 32a17.7 17.7 0 0 0 25-16.2V68.6c0-7.1-4.2-13.4-10.7-16.2ZM220.7 176.3 168 152.9V103l52.7-23.4v96.7Z"
      />
    </svg>
  )
}

function App() {
  return (
    <div className="lp" id="top">
      <div className="lpBg" aria-hidden="true" />
      <div className="lpContainer">
        <header className="lpTopbar">
          <a className="lpBrand" href="#top" aria-label="ErrorBuddy home">
            <span className="lpBrandMark" aria-hidden="true" />
            ErrorBuddy
          </a>

          <nav className="lpNav" aria-label="Primary">
            <a href="#how">Home</a>
            <a href="#product">Product</a>
            <a href="#docs">Resources</a>
          </nav>

          <div className="lpActions">
            <a className="lpLogin" href="#signin">
              Log In
            </a>
            <a
              className="lpBtn lpBtnPrimary"
              href="https://marketplace.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <VsCodeIcon className="lpBtnIcon" />
              Download for VS Code
            </a>
          </div>
        </header>

        <main className="lpMain">
          <section className="lpHero">
            <div className="lpHeroCopy">
              <h1 className="lpH1">
                Understand your errors <span className="lpAccent">faster</span>
              </h1>

              <p className="lpLead">
                ErrorBuddy is a VS Code extension that helps beginners debug by
                explaining errors and giving Socratic hints—so you learn to think
                like a senior engineer.
              </p>

              <div className="lpCtas">
                <a
                  className="lpBtn lpBtnPrimary"
                  href="https://marketplace.visualstudio.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <VsCodeIcon className="lpBtnIcon" />
                  Download for VS Code
                </a>
                <a className="lpBtn lpBtnGhost" href="#docs">
                  View Documentation
                </a>
              </div>
            </div>

            <div className="lpHeroVisual" aria-label="Product UI mock">
              <div className="uiStack" aria-hidden="true">
                <div className="uiCard uiCardBack">
                  <div className="uiTop">
                    <span className="uiDot" />
                    <span className="uiDot" />
                    <span className="uiDot" />
                    <span className="uiPill">Search</span>
                  </div>
                  <div className="uiBody">
                    <div className="uiList">
                      <div className="uiRow">
                        <span className="uiBullet" />
                        <span className="uiText">TypeError: str + int</span>
                      </div>
                      <div className="uiRow">
                        <span className="uiBullet" />
                        <span className="uiText">Why it happens</span>
                      </div>
                      <div className="uiRow">
                        <span className="uiBullet" />
                        <span className="uiText">Next hint</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="uiCard uiCardMid">
                  <div className="uiTop">
                    <span className="uiPill">ErrorBuddy</span>
                    <span className="uiPill uiPillSoft">Socratic</span>
                    <span className="uiSpacer" />
                    <span className="uiCircle" />
                  </div>
                  <div className="uiBody">
                    <div className="uiTitle">Plain-English explanation</div>
                    <div className="uiPara">
                      You’re combining a string and a number. Python won’t
                      auto-convert during concatenation.
                    </div>
                    <div className="uiTag">Thought Process ▾</div>
                  </div>
                </div>

                <div className="uiCard uiCardFront">
                  <div className="uiTop">
                    <span className="uiPill">Fix without spoilers</span>
                    <span className="uiSpacer" />
                    <span className="uiCircle" />
                    <span className="uiCircle" />
                  </div>
                  <div className="uiBody">
                    <div className="uiTitle">Hint</div>
                    <div className="uiPara">
                      What type do you expect <span className="uiCode">name</span>{' '}
                      to be? Try printing <span className="uiCode">type(name)</span>{' '}
                      first.
                    </div>
                    <div className="uiCtaMini">Show next hint</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="lpSection" id="product">
            <div className="lpSectionHead">
              <div>
                <h2>Product</h2>
                <p className="lpSectionSub">
                  A VS Code extension that teaches debugging—right where you code.
                </p>
              </div>
              <div className="lpInlineActions">
                <a
                  className="lpBtn lpBtnPrimary"
                  href="https://marketplace.visualstudio.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <VsCodeIcon className="lpBtnIcon" />
                  Install Extension
                </a>
              </div>
            </div>

            <div className="lpProductGrid">
              <div className="lpProductSteps">
                <ol className="lpSteps">
                  <li className="lpStep">
                    <div className="lpStepNum">1</div>
                    <div>
                      <div className="lpStepTitle">Detect</div>
                      <div className="lpStepText">
                        ErrorBuddy spots a runtime error or failing test and
                        grabs just the relevant context.
                      </div>
                    </div>
                  </li>
                  <li className="lpStep">
                    <div className="lpStepNum">2</div>
                    <div>
                      <div className="lpStepTitle">Explain</div>
                      <div className="lpStepText">
                        Get a plain-English breakdown of what happened and why
                        it happened.
                      </div>
                    </div>
                  </li>
                  <li className="lpStep">
                    <div className="lpStepNum">3</div>
                    <div>
                      <div className="lpStepTitle">Guide</div>
                      <div className="lpStepText">
                        Socratic hints lead you to the fix without handing it to
                        you.
                      </div>
                    </div>
                  </li>
                  <li className="lpStep">
                    <div className="lpStepNum">4</div>
                    <div>
                      <div className="lpStepTitle">Teach</div>
                      <div className="lpStepText">
                        A short “why it works” recap turns the moment into a
                        reusable debugging pattern.
                      </div>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="lpProductDemo" aria-label="ErrorBuddy panel mock">
                <div className="lpDemoCard">
                  <div className="lpDemoTop">
                    <span className="lpDemoPill">ErrorBuddy</span>
                    <span className="lpDemoPill lpDemoPillSoft">Socratic</span>
                    <span className="lpDemoSpacer" />
                    <span className="lpDemoDot" />
                    <span className="lpDemoDot" />
                  </div>
                  <div className="lpDemoBody">
                    <div className="lpDemoTitle">You hit a TypeError</div>
                    <div className="lpDemoText">
                      You’re concatenating a string with a number. Python won’t
                      auto-convert types in <span className="lpMono">+</span>.
                    </div>
                    <div className="lpDemoDivider" />
                    <div className="lpDemoTitle">Try this</div>
                    <div className="lpDemoText">
                      Before changing anything: what does{' '}
                      <span className="lpCodeInline">type(name)</span> print? If
                      it’s <span className="lpCodeInline">int</span>, what
                      conversion could make the expression valid?
                    </div>
                    <div className="lpDemoFooter">
                      <span className="lpDemoChip">Thought Process ▾</span>
                      <span className="lpDemoChip">Next hint</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lpCallout">
              <div className="lpCalloutTitle">Built for learning loops</div>
              <div className="lpCalloutText">
                ErrorBuddy nudges you toward the correct mental model, then
                checks your understanding with a quick question—so the lesson
                sticks.
              </div>
            </div>
          </section>

          <section className="lpSection" id="features">
            <div className="lpSectionHead">
              <div>
                <h2>Features</h2>
                <p className="lpSectionSub">Everything you need to debug with confidence.</p>
              </div>
            </div>
            <div className="lpGrid3">
              <article className="lpCard">
                <h3>Plain English Explanations</h3>
                <p>Translates cryptic tracebacks into human language.</p>
              </article>
              <article className="lpCard">
                <h3>Socratic Guidance</h3>
                <p>Gives hints and direction—never spoiling the answer.</p>
              </article>
              <article className="lpCard">
                <h3>Transparent Reasoning</h3>
                <p>See how the agent analyzes your code and builds a lesson plan.</p>
              </article>
            </div>
          </section>

          <section className="lpSection" id="how">
            <div className="lpSectionHead">
              <div>
                <h2>How it works</h2>
                <p className="lpSectionSub">
                  A predictable flow that keeps you in control.
                </p>
              </div>
            </div>

            <div className="lpHowGrid">
              <div className="lpHowCard">
                <div className="lpHowTitle">1. Ask</div>
                <div className="lpHowText">
                  Run <span className="lpCodeInline">ErrorBuddy: Explain Error</span>{' '}
                  or click the “Explain” action next to the squiggle.
                </div>
              </div>
              <div className="lpHowCard">
                <div className="lpHowTitle">2. Understand</div>
                <div className="lpHowText">
                  Get a clear explanation with the key concept highlighted.
                </div>
              </div>
              <div className="lpHowCard">
                <div className="lpHowTitle">3. Iterate</div>
                <div className="lpHowText">
                  Request “one more hint” until you’ve got it. No spoilers by
                  default.
                </div>
              </div>
              <div className="lpHowCard">
                <div className="lpHowTitle">4. Lock it in</div>
                <div className="lpHowText">
                  ErrorBuddy summarizes the pattern so you can apply it again.
                </div>
              </div>
            </div>
          </section>

          <section className="lpSection" id="docs">
            <div className="lpSectionHead">
              <div>
                <h2>Documentation</h2>
                <p className="lpSectionSub">Quickstart, shortcuts, and best practices.</p>
              </div>
            </div>

            <div className="lpDocsGrid">
              <a className="lpDocCard" href="https://example.com/docs" target="_blank" rel="noreferrer">
                <div className="lpDocTitle">Quickstart</div>
                <div className="lpDocText">Install, run your first explanation, and tweak settings.</div>
              </a>
              <a className="lpDocCard" href="https://example.com/docs/commands" target="_blank" rel="noreferrer">
                <div className="lpDocTitle">Commands & Keybindings</div>
                <div className="lpDocText">The fastest way to request an explanation or hint.</div>
              </a>
              <a className="lpDocCard" href="https://example.com/docs/socratic" target="_blank" rel="noreferrer">
                <div className="lpDocTitle">Socratic Mode</div>
                <div className="lpDocText">How we avoid spoilers while still getting you unstuck.</div>
              </a>
              <a className="lpDocCard" href="https://github.com/" target="_blank" rel="noreferrer">
                <div className="lpDocTitle">Open Source</div>
                <div className="lpDocText">Report issues, request features, or contribute.</div>
              </a>
            </div>
          </section>

          <section className="lpSection" id="faq">
            <div className="lpSectionHead">
              <div>
                <h2>FAQ</h2>
                <p className="lpSectionSub">A few common questions.</p>
              </div>
            </div>

            <div className="lpFaq">
              <details className="lpFaqItem">
                <summary>
                  <span>Does ErrorBuddy give the full solution?</span>
                </summary>
                <div className="lpFaqBody">
                  By default, no. It focuses on explanations and hints. You can
                  always request more guidance when you’re ready.
                </div>
              </details>
              <details className="lpFaqItem">
                <summary>
                  <span>What languages does it support?</span>
                </summary>
                <div className="lpFaqBody">
                  Start with JavaScript/TypeScript and Python. More languages can
                  be added via adapters.
                </div>
              </details>
              <details className="lpFaqItem">
                <summary>
                  <span>Is the “Thought Process” visible?</span>
                </summary>
                <div className="lpFaqBody">
                  You’ll see the reasoning summary and the teaching plan at a
                  high level—enough to understand the approach without noise.
                </div>
              </details>
            </div>
          </section>

          <section className="lpFinal">
            <div className="lpFinalInner">
              <div>
                <div className="lpFinalTitle">Debug faster. Learn deeper.</div>
                <div className="lpFinalText">
                  Install ErrorBuddy and turn every error into a lesson.
                </div>
              </div>
              <div className="lpFinalActions">
                <a
                  className="lpBtn lpBtnPrimary"
                  href="https://marketplace.visualstudio.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <VsCodeIcon className="lpBtnIcon" />
                  Download for VS Code
                </a>
                <a className="lpBtn lpBtnGhost" href="#docs">
                  Read the docs
                </a>
              </div>
            </div>
          </section>

          <footer className="lpFooter">
            <span>© {new Date().getFullYear()} ErrorBuddy</span>
            <span className="lpFooterLinks">
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://x.com/" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://example.com/agentx-hackathon" target="_blank" rel="noreferrer">
                Built for AgentX Hackathon
              </a>
            </span>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
