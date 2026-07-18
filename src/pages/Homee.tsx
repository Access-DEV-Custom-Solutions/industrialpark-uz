import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Factory,
  Leaf,
  Sprout,
  Tractor,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  GraduationCap,
  Handshake,
} from "lucide-react";

import "./Home.css";
import uzLogo from "../assets/uzlogo.jpg";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  {
    title: "UZ Agro Production Unit",
    icon: Sprout,
    description:
      "High-quality crop and livestock production supporting research, education and national food security.",
    link: "/production",
    tag: "PRODUCTION",
  },
  {
    title: "VakaNyika Processing Unit",
    icon: Factory,
    description:
      "Value addition through processing, milling and manufacturing of premium Nu-Gold products.",
    link: "/processing",
    tag: "VALUE ADDITION",
  },
  {
    title: "Farm Tourism",
    icon: Tractor,
    description:
      "Experience agriculture first-hand through guided tours, demonstrations and educational activities.",
    link: "/tourism",
    tag: "EXPERIENCE",
  },
];

const statsData = [
  { value: "500+", label: "Students Trained" },
  { value: "100+", label: "Products Developed" },
  { value: "30+", label: "Research Projects" },
  { value: "20+", label: "Industry Partners" },
];

const ecosystemItems = [
  {
    icon: FlaskConical,
    title: "Research & Innovation",
    description:
      "Transforming research and scientific knowledge into practical agricultural and industrial solutions.",
  },
  {
    icon: GraduationCap,
    title: "Skills Development",
    description:
      "Creating practical opportunities for students, entrepreneurs and professionals to develop industry-ready skills.",
  },
  {
    icon: Handshake,
    title: "Industrial Partnerships",
    description:
      "Connecting academia, industry and enterprise to accelerate value creation and economic development.",
  },
];

export default function Homee() {
  const [showHistory, setShowHistory] = useState<boolean>(false);

  return (
    <main className="home-page">

      {/* ================= HERO ================= */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${uzLogo})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-grid-pattern"></div>

        <div className="hero-content">
          <ScrollReveal>
            <span className="hero-tag">
              <Leaf size={17} />
              University of Zimbabwe
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="hero-eyebrow">
              RESEARCH • PRODUCTION • INNOVATION
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <h1>
              Agro
              <span>Industrial</span>
              Park
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="hero-description">
              Transforming agriculture through innovation, research,
              value addition and industrialisation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="hero-actions">
              <Link to="/production" className="hero-btn primary-btn">
                Explore the Park
                <ArrowRight size={18} />
              </Link>

              <a href="#about" className="hero-btn secondary-btn">
                Discover More
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="hero-bottom-label">
          <span>SCROLL TO EXPLORE</span>
          <ArrowRight size={16} />
        </div>
      </section>


      {/* ================= QUICK ACCESS ================= */}
      <section className="quick-access">
        <div className="quick-access-inner">

          <div className="quick-intro">
            <span>OUR ECOSYSTEM</span>
            <h2>Where agriculture meets innovation.</h2>
          </div>

          <div className="quick-items">
            <div className="quick-item">
              <Sprout size={22} />
              <div>
                <strong>Production</strong>
                <span>Growing the future</span>
              </div>
            </div>

            <div className="quick-item">
              <Factory size={22} />
              <div>
                <strong>Processing</strong>
                <span>Creating value</span>
              </div>
            </div>

            <div className="quick-item">
              <FlaskConical size={22} />
              <div>
                <strong>Research</strong>
                <span>Driving innovation</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ================= HIGHLIGHTS ================= */}
      <section className="highlights">
        <div className="section-title">
          <ScrollReveal>
            <span className="section-label">EXPLORE THE PARK</span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2>Three divisions. One ecosystem.</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p>
              Discover the three pillars that connect production,
              value addition, education and innovation at the University
              of Zimbabwe Agro Industrial Park.
            </p>
          </ScrollReveal>
        </div>

        <div className="cards">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <Link to={item.link} className="card">

                  <div className="card-top">
                    <span className="card-tag">{item.tag}</span>

                    <div className="card-arrow">
                      <ArrowRight size={19} />
                    </div>
                  </div>

                  <div className="card-icon">
                    <Icon size={32} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span className="card-link">
                    Explore division
                    <ArrowRight size={16} />
                  </span>

                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="about" id="about">

        <div className="about-image-wrapper">
          <ScrollReveal>
            <div className="about-image">

              <img
                src={uzLogo}
                alt="University of Zimbabwe Agro Industrial Park"
              />

              <div className="about-image-overlay"></div>

              <div className="about-image-badge">
                <span>UZ</span>
                <p>Knowledge<br />into impact</p>
              </div>

            </div>
          </ScrollReveal>
        </div>

        <div className="about-content">

          <ScrollReveal>
            <span className="section-label">ABOUT THE PARK</span>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h2>
              Building Zimbabwe's future through agriculture.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p>
              The University of Zimbabwe Agro Industrial Park integrates
              production, research, innovation, processing and
              commercialisation into one modern agricultural ecosystem.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p>
              Through the UZ Agro Production Unit, the VakaNyika
              Processing Unit and Farm Tourism, the park promotes food
              security, value addition, entrepreneurship, industrial
              growth and practical education.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <button
              type="button"
              className="btn-legacy-trigger"
              onClick={() => setShowHistory(!showHistory)}
              aria-expanded={showHistory}
            >
              <span>Our Institutional Legacy</span>

              {showHistory ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>
          </ScrollReveal>

          <div className={`history-drawer ${showHistory ? "is-open" : ""}`}>
            <div className="history-drawer-inner">
              <p>
                Established as an essential agricultural research hub,
                the University of Zimbabwe farm has transformed from a
                core academic teaching field into a fully operational,
                high-yield Agro Industrial Park.
              </p>

              <p>
                For decades, it has served as a foundation for crop
                cultivation testing, livestock genetic research and
                innovative resource conservation strategies within Zimbabwe.
              </p>

              <p>
                Today, through value-addition strategies such as VakaNyika
                and modern Agro-Tourism, the farm blends scientific
                engineering with commercial production.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ================= ECOSYSTEM ================= */}
      <section className="ecosystem">

        <div className="section-title ecosystem-title">
          <ScrollReveal>
            <span className="section-label">OUR APPROACH</span>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h2>From knowledge to impact.</h2>
          </ScrollReveal>
        </div>

        <div className="ecosystem-grid">

          {ecosystemItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="ecosystem-card">

                  <div className="ecosystem-number">
                    0{index + 1}
                  </div>

                  <Icon size={30} />

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>
              </ScrollReveal>
            );
          })}

        </div>

      </section>


      {/* ================= STATISTICS ================= */}
      <section className="stats">

        <div className="stats-heading">
          <span>OUR IMPACT</span>
          <h2>Growing possibilities.</h2>
        </div>

        <div className="stats-grid">

          {statsData.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.08}>

              <div className="stat">

                <h2>{stat.value}</h2>

                <p>{stat.label}</p>

              </div>

            </ScrollReveal>
          ))}

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="cta">

        <div className="cta-content">

          <ScrollReveal>
            <span className="section-label">VISIT THE PARK</span>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h2>
              Experience innovation
              <span> in agriculture.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p>
              Visit the University of Zimbabwe Agro Industrial Park
              and discover how research, production and industry come
              together to shape the future.
            </p>
          </ScrollReveal>

          {/* ================= LOCATION ================= */}
<section className="location-section">

  <div className="location-content">

    <ScrollReveal>
      <span className="section-label">
        FIND US
      </span>
    </ScrollReveal>

    <ScrollReveal delay={0.15}>
      <h2>
        Visit the Agro Industrial Park.
      </h2>
    </ScrollReveal>

    <ScrollReveal delay={0.25}>
      <p>
        Located along Peg Simon Mazorodze Road, the University of Zimbabwe
        Agro Industrial Park brings together agricultural production,
        research, processing, innovation and education.
      </p>
    </ScrollReveal>

    <ScrollReveal delay={0.35}>
      <div className="location-details">

        <div>
          <strong>Location</strong>
          <span>
            University of Zimbabwe Farm
          </span>
        </div>

        <div>
          <strong>Address</strong>
          <span>
            Peg Simon Mazorodze Road, Harare, Zimbabwe
          </span>
        </div>

      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.45}>
      <a
        href="https://maps.app.goo.gl/zjxj56TLrhBB7gaT8"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-btn primary-btn"
      >
        Get Directions
        <ArrowRight size={18} />
      </a>
    </ScrollReveal>

  </div>


  <ScrollReveal delay={0.2}>
    <div className="map-container">

      <iframe
        src="https://www.google.com/maps?q=-17.7102953,31.0131926&z=16&output=embed"
        title="University of Zimbabwe Agro Industrial Park Location"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

    </div>
  </ScrollReveal>

</section>
          <ScrollReveal delay={0.4}>
            <a
              href="https://wa.me/263773236670?text=Hi,%20I'm%20interested%20in%20booking%20an%20Agro-Tourism%20visit%20to%20the%20University%20of%20Zimbabwe%20Agro%20Industrial%20Park."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn primary-btn"
            >
              Book a Visit
              <ArrowRight size={18} />
            </a>
          </ScrollReveal>

        </div>

      </section>

    </main>
  );
}