// Enhanced Mystic Jeremy Watson App with Advanced Interactivity

class MysticJeremyWatsonApp {
  constructor() {
    // Original data preserved
    this.keyPublications = [
      {
        name: "NZ Herald",
        reach: "1.2M daily readers",
        relevance: "National authority for real estate",
        logo: "NH",
      },
      {
        name: "Taranaki Daily News",
        reach: "45K local readers",
        relevance: "Your local market dominance",
        logo: "TDN",
      },
      {
        name: "TVNZ1",
        reach: "800K viewers",
        relevance: "Prime time TV authority",
        logo: "TV1",
      },
      {
        name: "Stuff",
        reach: "2.1M monthly readers",
        relevance: "Digital news leader",
        logo: "ST",
      },
      {
        name: "Newshub",
        reach: "650K viewers",
        relevance: "TV news credibility",
        logo: "NH",
      },
    ]

    this.allPublications = {
      newZealand: [
        "NZ Herald",
        "Stuff",
        "TVNZ1",
        "TVNZ2",
        "Newshub",
        "Three",
        "RNZ",
        "Otago Daily Times",
        "The Press",
        "Dominion Post",
        "Taranaki Daily News",
        "Bay of Plenty Times",
        "Rotorua Daily Post",
        "Waikato Times",
        "Manawatu Standard",
        "Nelson Mail",
        "Southland Times",
        "Timaru Herald",
        "Greymouth Star",
        "Wanganui Chronicle",
        "Northern Advocate",
        "Hawke's Bay Today",
        "Gisborne Herald",
        "Marlborough Express",
        "Sunday Star-Times",
        "Weekend Herald",
        "Sunday News",
        "NBR",
        "Scoop",
        "Newsroom",
      ],
      australia: [
        "Herald Sun",
        "The Age",
        "Sydney Morning Herald",
        "The Australian",
        "The Guardian Australia",
        "ABC News",
        "Nine News",
        "Seven News",
        "Sky News Australia",
        "SBS News",
        "The Advertiser",
        "The West Australian",
        "The Courier-Mail",
        "NT News",
        "The Mercury",
        "The Canberra Times",
        "Brisbane Times",
        "WA Today",
        "PerthNow",
        "news.com.au",
      ],
      regional: [
        "Auckland News",
        "Wellington Scoop",
        "Christchurch News",
        "Hamilton News",
        "Tauranga Times",
        "Napier Mail",
        "New Plymouth Herald",
        "Palmerston North News",
        "Invercargill Times",
        "Dunedin Star",
        "Queenstown Mirror",
        "Nelson Weekly",
      ],
    }

    this.testimonials = [
      {
        name: "Michael Chen",
        role: "Independent Real Estate Agent, Auckland",
        quote:
          "After leaving Ray White, Pressence360 helped me get featured in NZ Herald within 30 days. My leads increased 400%.",
        result: "Featured in 15+ publications",
      },
      {
        name: "Sarah Williams",
        role: "Boutique Agency Owner, Wellington",
        quote:
          "Going independent was scary until Pressence360 positioned me as the Wellington luxury expert across all major media.",
        result: "$50M+ in sales attributed to PR",
      },
      {
        name: "David Thompson",
        role: "Former Harcourts Agent, Christchurch",
        quote: "The day my Stuff article went live, I had 12 new listing enquiries. Best investment I ever made.",
        result: "300% increase in listing appointments",
      },
    ]

    // Enhanced interactivity properties
    this.particles = []
    this.mouseX = 0
    this.mouseY = 0
    this.isMouseMoving = false
    this.animationFrame = null

    this.init()
  }

  init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        this.setupPage()
      })
    } else {
      this.setupPage()
    }
  }

  setupPage() {
    this.renderKeyPublications()
    this.renderAllPublications()
    this.renderTestimonials()
    this.setupEnhancedAnimations()
    this.setupInteractiveCursor()
    this.setupFloatingOrbs()
    this.setupScrollEffects()
    this.setupCTAButtons()
    this.setupParticleSystem()
    this.setupGlitchEffects()
    this.setupTypingEffect()
    this.addTimeBasedPersonalization()
    this.startAnimationLoop()
  }

  renderKeyPublications() {
    const container = document.getElementById("keyPublications")
    if (!container) return

    container.innerHTML = ""

    this.keyPublications.forEach((pub, index) => {
      const pubCard = document.createElement("div")
      pubCard.className = "publication-card interactive-card"
      pubCard.style.animationDelay = `${index * 0.2}s`

      pubCard.innerHTML = `
                <div class="publication-logo glow-text">
                    ${pub.logo}
                </div>
                <h3 class="publication-name">${pub.name}</h3>
                <p class="publication-reach highlight-glow">${pub.reach}</p>
                <p class="publication-relevance">${pub.relevance}</p>
                <div class="card-glow"></div>
            `

      // Add enhanced hover effects
      pubCard.addEventListener("mouseenter", (e) => {
        this.createHoverParticles(e.target)
        this.addCardGlow(e.target)
      })

      pubCard.addEventListener("mouseleave", (e) => {
        this.removeCardGlow(e.target)
      })

      container.appendChild(pubCard)
    })
  }

  renderAllPublications() {
    // Render New Zealand publications
    const nzContainer = document.getElementById("nzPublications")
    if (nzContainer) {
      nzContainer.innerHTML = ""
      this.allPublications.newZealand.forEach((pub, index) => {
        const tag = document.createElement("span")
        tag.className = "publication-tag"
        tag.textContent = pub
        tag.style.animationDelay = `${index * 0.05}s`

        // Add interactive effects
        tag.addEventListener("mouseenter", () => {
          this.createTagGlow(tag)
        })

        nzContainer.appendChild(tag)
      })
    }

    // Render Australian publications
    const auContainer = document.getElementById("auPublications")
    if (auContainer) {
      auContainer.innerHTML = ""
      this.allPublications.australia.forEach((pub, index) => {
        const tag = document.createElement("span")
        tag.className = "publication-tag"
        tag.textContent = pub
        tag.style.animationDelay = `${index * 0.05}s`

        tag.addEventListener("mouseenter", () => {
          this.createTagGlow(tag)
        })

        auContainer.appendChild(tag)
      })
    }

    // Render Regional publications
    const regionalContainer = document.getElementById("regionalPublications")
    if (regionalContainer) {
      regionalContainer.innerHTML = ""
      this.allPublications.regional.forEach((pub, index) => {
        const tag = document.createElement("span")
        tag.className = "publication-tag"
        tag.textContent = pub
        tag.style.animationDelay = `${index * 0.05}s`

        tag.addEventListener("mouseenter", () => {
          this.createTagGlow(tag)
        })

        regionalContainer.appendChild(tag)
      })
    }
  }

  renderTestimonials() {
    const container = document.getElementById("testimonials")
    if (!container) return

    container.innerHTML = ""

    this.testimonials.forEach((testimonial, index) => {
      const testimonialCard = document.createElement("div")
      testimonialCard.className = "testimonial-card interactive-card"
      testimonialCard.style.animationDelay = `${index * 0.3}s`

      testimonialCard.innerHTML = `
                <p class="testimonial-quote">"${testimonial.quote}"</p>
                <div class="testimonial-author glow-text">${testimonial.name}</div>
                <div class="testimonial-role">${testimonial.role}</div>
                <div class="testimonial-result highlight-glow">${testimonial.result}</div>
                <div class="card-glow"></div>
            `

      testimonialCard.addEventListener("mouseenter", (e) => {
        this.createHoverParticles(e.target)
      })

      container.appendChild(testimonialCard)
    })
  }

  setupEnhancedAnimations() {
    // Enhanced intersection observer for reveal animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")

          // Animate list items
          const listItems = entry.target.querySelectorAll(".animated-list li")
          listItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("animate")
            }, index * 100)
          })

          // Animate progress bars
          const progressBars = entry.target.querySelectorAll(".progress-bar")
          progressBars.forEach((bar) => {
            const width = bar.dataset.width
            setTimeout(() => {
              bar.style.width = `${width}%`
            }, 500)
          })

          revealObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe reveal elements
    document.querySelectorAll(".reveal-text, .interactive-card, .animated-list").forEach((element) => {
      revealObserver.observe(element)
    })

    // Enhanced counter animations
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const target = Number.parseInt(counter.dataset.count)
          this.animateEnhancedCounter(counter, target)
          statsObserver.unobserve(counter)
        }
      })
    }, observerOptions)

    document.querySelectorAll(".counter-animation").forEach((counter) => {
      statsObserver.observe(counter)
    })
  }

  animateEnhancedCounter(element, target) {
    let current = 0
    const increment = target / 60 // 60 frames for smooth animation
    const duration = 2000
    const stepTime = duration / 60

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
        // Add completion glow effect
        element.style.textShadow = "0 0 30px rgba(245, 158, 11, 0.8)"
        setTimeout(() => {
          element.style.textShadow = "0 0 20px rgba(245, 158, 11, 0.5)"
        }, 500)
      }

      element.textContent = Math.floor(current)

      // Add pulsing effect during counting
      if (current < target) {
        element.style.transform = `scale(${1 + Math.sin(current / 10) * 0.05})`
      } else {
        element.style.transform = "scale(1)"
      }
    }, stepTime)
  }

  setupInteractiveCursor() {
    const cursor = document.getElementById("cursorGlow")
    let mouseX = 0,
      mouseY = 0
    let cursorX = 0,
      cursorY = 0

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      this.mouseX = mouseX
      this.mouseY = mouseY
      this.isMouseMoving = true

      // Clear timeout for mouse stop detection
      clearTimeout(this.mouseStopTimeout)
      this.mouseStopTimeout = setTimeout(() => {
        this.isMouseMoving = false
      }, 100)
    })

    // Smooth cursor following
    const updateCursor = () => {
      const dx = mouseX - cursorX
      const dy = mouseY - cursorY

      cursorX += dx * 0.1
      cursorY += dy * 0.1

      cursor.style.left = `${cursorX - 10}px`
      cursor.style.top = `${cursorY - 10}px`

      // Add trail effect when moving
      if (this.isMouseMoving) {
        this.createCursorTrail(cursorX, cursorY)
      }

      requestAnimationFrame(updateCursor)
    }
    updateCursor()

    // Enhanced cursor interactions
    document.querySelectorAll(".interactive-card, .interactive-btn, .publication-tag").forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(2)"
        cursor.style.background = "radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)"
      })

      element.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)"
        cursor.style.background = "radial-gradient(circle, rgba(74, 158, 255, 0.6) 0%, transparent 70%)"
      })
    })
  }

  createCursorTrail(x, y) {
    if (Math.random() > 0.7) {
      // Reduce frequency
      const trail = document.createElement("div")
      trail.style.cssText = `
                position: fixed;
                left: ${x - 3}px;
                top: ${y - 3}px;
                width: 6px;
                height: 6px;
                background: radial-gradient(circle, rgba(74, 158, 255, 0.6) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                animation: trailFade 1s ease-out forwards;
            `

      document.body.appendChild(trail)

      setTimeout(() => {
        if (trail.parentNode) {
          trail.remove()
        }
      }, 1000)
    }
  }

  setupFloatingOrbs() {
    const orbsContainer = document.getElementById("floatingOrbs")
    const orbCount = 8

    for (let i = 0; i < orbCount; i++) {
      const orb = document.createElement("div")
      orb.style.cssText = `
                position: absolute;
                width: ${Math.random() * 100 + 50}px;
                height: ${Math.random() * 100 + 50}px;
                background: radial-gradient(circle, rgba(${Math.random() > 0.5 ? "74, 158, 255" : "139, 92, 246"}, 0.1) 0%, transparent 70%);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 10 + 10}s ease-in-out infinite alternate;
                animation-delay: ${Math.random() * 5}s;
            `

      orbsContainer.appendChild(orb)
    }

    // Add floating animation
    const style = document.createElement("style")
    style.textContent = `
            @keyframes float {
                0% { transform: translate(0, 0) rotate(0deg); }
                33% { transform: translate(30px, -30px) rotate(120deg); }
                66% { transform: translate(-20px, 20px) rotate(240deg); }
                100% { transform: translate(0, 0) rotate(360deg); }
            }
            
            @keyframes trailFade {
                0% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0); }
            }
        `
    document.head.appendChild(style)
  }

  setupScrollEffects() {
    // Enhanced parallax scrolling
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5

      // Parallax background elements
      const mysticGradient = document.querySelector(".mystic-gradient")
      if (mysticGradient) {
        mysticGradient.style.transform = `translateY(${rate * 0.3}px) rotate(${scrolled * 0.05}deg)`
      }

      const starsContainer = document.querySelector(".stars-container")
      if (starsContainer) {
        starsContainer.style.transform = `translateY(${rate * 0.2}px)`
      }

      // Floating elements parallax
      document.querySelectorAll(".floating-orbs > div").forEach((orb, index) => {
        const speed = (index + 1) * 0.1
        orb.style.transform += ` translateY(${scrolled * speed}px)`
      })
    })

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const targetId = link.getAttribute("href")
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  }

  setupCTAButtons() {
    const primaryCTA = document.querySelector(".cta-primary")
    const secondaryCTA = document.querySelector(".cta-secondary")

    if (primaryCTA) {
      primaryCTA.addEventListener("click", (e) => {
        e.preventDefault()
        this.createButtonExplosion(primaryCTA)
        this.trackEvent("CTA", "Primary Button Click", "Jeremy Watson Calendar")
        setTimeout(() => {
          window.open("https://calendly.com/pressence360-jeremy", "_blank")
        }, 300)
      })

      primaryCTA.addEventListener("mouseenter", () => {
        this.createButtonParticles(primaryCTA)
      })
    }

    if (secondaryCTA) {
      secondaryCTA.addEventListener("click", (e) => {
        e.preventDefault()
        this.createButtonExplosion(secondaryCTA)
        this.trackEvent("CTA", "Secondary Button Click", "Jeremy Watson Email")
        setTimeout(() => {
          window.open(
            "mailto:hello@pressence360.com?subject=Jeremy Watson - Ready to Dominate Taranaki Media&body=Hi, I'm Jeremy Watson and I'm ready to establish my media authority as an independent real estate agent in New Plymouth. Let's discuss how Pressence360 can help me get featured in NZ Herald, Stuff, and other major publications.",
            "_blank",
          )
        }, 300)
      })

      secondaryCTA.addEventListener("mouseenter", () => {
        this.createButtonParticles(secondaryCTA)
      })
    }
  }

  createButtonExplosion(button) {
    const rect = button.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    for (let i = 0; i < 12; i++) {
      const particle = document.createElement("div")
      const angle = (i / 12) * Math.PI * 2
      const velocity = Math.random() * 100 + 50
      const size = Math.random() * 6 + 4

      particle.style.cssText = `
                position: fixed;
                left: ${centerX}px;
                top: ${centerY}px;
                width: ${size}px;
                height: ${size}px;
                background: linear-gradient(45deg, #4a9eff, #8b5cf6);
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                animation: explode 1s ease-out forwards;
            `

      particle.style.setProperty("--dx", `${Math.cos(angle) * velocity}px`)
      particle.style.setProperty("--dy", `${Math.sin(angle) * velocity}px`)

      document.body.appendChild(particle)

      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove()
        }
      }, 1000)
    }

    // Add explosion animation
    if (!document.querySelector("#explosion-styles")) {
      const style = document.createElement("style")
      style.id = "explosion-styles"
      style.textContent = `
                @keyframes explode {
                    0% {
                        transform: translate(0, 0) scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(var(--dx), var(--dy)) scale(0);
                        opacity: 0;
                    }
                }
            `
      document.head.appendChild(style)
    }
  }

  createButtonParticles(button) {
    const rect = button.getBoundingClientRect()
    const particlesContainer = button.querySelector(".btn-particles")

    if (particlesContainer) {
      for (let i = 0; i < 5; i++) {
        const particle = document.createElement("div")
        particle.style.cssText = `
                    position: absolute;
                    left: ${Math.random() * rect.width}px;
                    top: ${Math.random() * rect.height}px;
                    width: 3px;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.8);
                    border-radius: 50%;
                    animation: buttonParticle 2s ease-out forwards;
                `

        particlesContainer.appendChild(particle)

        setTimeout(() => {
          if (particle.parentNode) {
            particle.remove()
          }
        }, 2000)
      }
    }

    // Add button particle animation
    if (!document.querySelector("#button-particle-styles")) {
      const style = document.createElement("style")
      style.id = "button-particle-styles"
      style.textContent = `
                @keyframes buttonParticle {
                    0% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(-30px) scale(0);
                    }
                }
            `
      document.head.appendChild(style)
    }
  }

  setupParticleSystem() {
    // Create ambient particles
    setInterval(() => {
      if (this.particles.length < 20) {
        this.createAmbientParticle()
      }
    }, 2000)
  }

  createAmbientParticle() {
    const particle = {
      element: document.createElement("div"),
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 50,
      vx: (Math.random() - 0.5) * 2,
      vy: -Math.random() * 3 - 1,
      life: 1,
      decay: Math.random() * 0.02 + 0.005,
    }

    particle.element.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: rgba(74, 158, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
        `

    document.body.appendChild(particle.element)
    this.particles.push(particle)
  }

  updateParticles() {
    this.particles.forEach((particle, index) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.life -= particle.decay

      particle.element.style.left = `${particle.x}px`
      particle.element.style.top = `${particle.y}px`
      particle.element.style.opacity = particle.life

      if (particle.life <= 0 || particle.y < -50) {
        particle.element.remove()
        this.particles.splice(index, 1)
      }
    })
  }

  createHoverParticles(element) {
    const rect = element.getBoundingClientRect()

    for (let i = 0; i < 8; i++) {
      const particle = document.createElement("div")
      particle.style.cssText = `
                position: fixed;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + Math.random() * rect.height}px;
                width: 4px;
                height: 4px;
                background: rgba(139, 92, 246, 0.8);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                animation: hoverParticle 1.5s ease-out forwards;
            `

      document.body.appendChild(particle)

      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove()
        }
      }, 1500)
    }

    // Add hover particle animation
    if (!document.querySelector("#hover-particle-styles")) {
      const style = document.createElement("style")
      style.id = "hover-particle-styles"
      style.textContent = `
                @keyframes hoverParticle {
                    0% {
                        opacity: 1;
                        transform: translate(0, 0) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) scale(0);
                    }
                }
            `
      document.head.appendChild(style)
    }
  }

  addCardGlow(card) {
    const glow = card.querySelector(".card-glow")
    if (glow) {
      glow.style.opacity = "1"
    }
  }

  removeCardGlow(card) {
    const glow = card.querySelector(".card-glow")
    if (glow) {
      glow.style.opacity = "0"
    }
  }

  createTagGlow(tag) {
    tag.style.boxShadow = "0 0 20px rgba(74, 158, 255, 0.6)"
    setTimeout(() => {
      tag.style.boxShadow = ""
    }, 1000)
  }

  setupGlitchEffects() {
    const glitchElements = document.querySelectorAll(".glitch-text")

    glitchElements.forEach((element) => {
      element.setAttribute("data-text", element.textContent)

      // Random glitch trigger
      setInterval(() => {
        if (Math.random() > 0.95) {
          element.style.animation = "none"
          setTimeout(() => {
            element.style.animation = "glitch 0.3s ease-in-out"
          }, 10)
        }
      }, 1000)
    })
  }

  setupTypingEffect() {
    const typingElement = document.querySelector(".typing-effect")
    if (typingElement) {
      const text = typingElement.textContent
      typingElement.textContent = ""

      let i = 0
      const typeWriter = () => {
        if (i < text.length) {
          typingElement.textContent += text.charAt(i)
          i++
          setTimeout(typeWriter, 150)
        } else {
          // Remove cursor after typing is complete
          setTimeout(() => {
            typingElement.style.borderRight = "none"
          }, 2000)
        }
      }

      setTimeout(typeWriter, 1000)
    }
  }

  startAnimationLoop() {
    const animate = () => {
      this.updateParticles()
      this.animationFrame = requestAnimationFrame(animate)
    }
    animate()
  }

  trackEvent(category, action, label) {
    console.log(`Analytics: ${category} - ${action} - ${label}`)

    // Declare gtag variable before using it
    const gtag = window.gtag
    if (typeof gtag !== "undefined") {
      gtag("event", action, {
        event_category: category,
        event_label: label,
      })
    }
  }

  addTimeBasedPersonalization() {
    const hour = new Date().getHours()
    let greeting = ""

    if (hour < 12) {
      greeting = "Good morning, Jeremy"
    } else if (hour < 17) {
      greeting = "Good afternoon, Jeremy"
    } else {
      greeting = "Good evening, Jeremy"
    }

    const heroDescription = document.querySelector(".hero-description")
    if (heroDescription && heroDescription.textContent.indexOf("Good") === -1) {
      const originalText = heroDescription.innerHTML
      heroDescription.innerHTML = `<span class="glow-text">${greeting}!</span> ${originalText}`
    }
  }
}

// Initialize the enhanced mystic app
window.mysticJeremyApp = new MysticJeremyWatsonApp()

// Global functions for CTA buttons (backup)
window.openCalendar = () => {
  console.log("Opening calendar via global function...")
  window.open("https://calendly.com/pressence360-jeremy", "_blank")
}

window.openEmail = () => {
  console.log("Opening email via global function...")
  window.open(
    "mailto:hello@pressence360.com?subject=Jeremy Watson - Ready to Dominate Taranaki Media&body=Hi, I'm Jeremy Watson and I'm ready to establish my media authority as an independent real estate agent in New Plymouth. Let's discuss how Pressence360 can help me get featured in NZ Herald, Stuff, and other major publications.",
    "_blank",
  )
}

// Enhanced page title effect
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.title = "✨ Jeremy Watson - Your Media Authority Awaits | Pressence360 ✨"
  }, 3000)
})
