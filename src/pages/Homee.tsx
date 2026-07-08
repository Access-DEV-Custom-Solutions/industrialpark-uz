import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Factory,
  Leaf,
  Sprout,
  Tractor,
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
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
  },
  {
    title: "VakaNyika Processing Unit",
    icon: Factory,
    description:
      "Value addition through processing, milling and manufacturing of premium Nu-Gold products.",
    link: "/processing",
  },
  {
    title: "Farm Tourism",
    icon: Tractor,
    description:
      "Experience agriculture first-hand through guided tours, demonstrations and educational activities.",
    link: "/tourism",
  },
];

const statsData = [
  { value: "500+", label: "Students Trained" },
  { value: "100+", label: "Products" },
  { value: "30+", label: "Research Projects" },
  { value: "20+", label: "Industry Partners" }
];

export default function Homee() {
  const [showHistory, setShowHistory] = useState<boolean>(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${uzLogo})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <ScrollReveal>
            <span className="hero-tag">
              <Leaf size={18} />
              University of Zimbabwe
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.15}>
            <h1>Agro Industrial Park</h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p>
              Transforming Agriculture Through Innovation,
              Research, Value Addition and Industrialisation.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.45}>
            <Link to="/production" className="hero-btn">
              Explore the Park
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="highlights">
        <div className="section-title">
          <ScrollReveal>
            <h2>Our Divisions</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p>
              Explore the three pillars that make the University of Zimbabwe
              Agro Industrial Park a centre of excellence.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="cards">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <Link to={item.link} className="card">
                  <div className="card-icon">
                    <Icon size={35} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span>
                    Learn More
                    <ArrowRight size={17} />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about">
        <div className="about-image">
          <ScrollReveal>
            <img
              src={uzLogo}
              alt="University of Zimbabwe Agro Industrial Park"
            />
          </ScrollReveal>
        </div>

        <div className="about-content">
          <ScrollReveal>
            <span>ABOUT US</span>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h2>
              Building Zimbabwe's Future Through Agriculture
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p>
              The University of Zimbabwe Agro Industrial Park
              integrates production, research, innovation,
              processing and commercialization into one modern
              agricultural ecosystem.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.45}>
            <p>
              Through the UZ Agro Production Unit,
              the VakaNyika Processing Unit and
              Farm Tourism, the park promotes
              food security, value addition,
              entrepreneurship, industrial growth
              and practical education.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.55}>
            <button 
              type="button"
              className="btn-legacy-trigger" 
              onClick={() => setShowHistory(!showHistory)}
              aria-expanded={showHistory}
            >
              <span>Our Institutional Legacy</span>
              {showHistory ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </ScrollReveal>

          {/* The openable history drawer stays un-wrapped to keep layout sizing predictable */}
          <div className={`history-drawer ${showHistory ? "is-open" : ""}`}>
            <div className="history-drawer-inner">
              <p>
                Established as an essential agricultural research hub, the University of Zimbabwe farm has 
                transformed from a core academic teaching field into a fully operational, high-yield Agro-Industrial Park. 
                For decades, it has served as the baseline for crop cultivation testing, livestock genetic research, 
                and innovative resource conservation strategies within Zimbabwe.
              </p>
              <p>
                Today, through the value-addition strategies of units like VakaNyika and the modern Agro-Tourism track, 
                the farm blends scientific engineering with commercial production, distributing high-quality consumer products 
                and industrial commodities nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="stats">
        {statsData.map((stat, index) => (
          <ScrollReveal key={stat.label} delay={index * 0.08}>
            <div className="stat">
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* ================= CTA ================= */}
     
      <section className="cta">
        <ScrollReveal>
          <h2>Experience Innovation in Agriculture</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p>
            Visit the University of Zimbabwe Agro Industrial Park
            and discover how research, production and industry
            come together to shape the future. 
            Located 14km Peg Simon Mazoredze Road
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.35}>
          {/* Swapped <Link> to an external secure anchor <a> tag targeting WhatsApp */}
          <a 
            href="https://wa.me/263773698834?text=Hi,%20I'm%20interested%20in%20booking%20an%20Agro-Tourism%20visit%20to%20the%20University%20of%20Zimbabwe%20Agro%20Industrial%20Park." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-btn"
          >
            Book a Visit
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}