"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openResume = () => {
    window.open("https://drive.google.com/drive/folders/1T5hvgq_7KQj0YxJyZNGCIEwOndIUPmue", "_blank")
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        borderBottomColor: "var(--color-border-secondary)",
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-bold text-primary">
            Dawood Shahid
          </motion.div>

          <div className="flex items-center space-x-8">
            {["about", "experience", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-200 hover:text-accent ${
                  activeSection === section ? "text-accent" : "text-secondary"
                }`}
              >
                {section}
              </button>
            ))}
            <button onClick={openResume} className="btn-primary px-4 py-2 rounded-lg transition-colors duration-200">
              View Resume
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
