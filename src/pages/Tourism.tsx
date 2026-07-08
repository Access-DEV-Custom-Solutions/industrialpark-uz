import { Factory, MapPin, Tractor, Wheat, ArrowRight, ClipboardEdit } from "lucide-react";
import "./Tourism.css"; // Ensure this matches your file naming
import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import tour1 from "../assets/slideshow/tour1.jpg";
import tour2 from "../assets/slideshow/tour2.jpg";
import tour3 from "../assets/slideshow/tour3.jpg";
import tour4 from "../assets/slideshow/tour4.jpg";
import tour5 from "../assets/slideshow/tour5.jpg";
import tour6 from "../assets/slideshow/tour6.jpg";
import tour7 from "../assets/slideshow/tour7.jpg";
import tour8 from "../assets/slideshow/tour8.jpg";
import tour9 from "../assets/slideshow/uzmaize1.jpg";
import tour10 from "../assets/slideshow/IMG-20250423-WA0000.jpg";
import tour11 from "../assets/slideshow/IMG-20250423-WA0002.jpg";
import tour12 from "../assets/slideshow/IMG-20250424-WA0036.jpg";
import tour13 from "../assets/slideshow/IMG_20250505_151457.jpg";
import tour14 from "../assets/slideshow/Screenshot_20250513_092934_com.whatsapp.jpg";

// Array grouping all imported assets for slideshow rotation
const slideshowImages = [
  tour1, tour2, tour3, tour4, tour5, tour6, tour7, 
  tour8, tour9, tour10, tour11, tour12, tour13, tour14
];

const tourItems = [
  {
    icon: Tractor,
    title: "Production Tour",
    text: "Move through commercial animal husbandry and crop production zones with guided specialist explanations.",
    badge: "Field Experience"
  },
  {
    icon: Wheat,
    title: "Milling Tour",
    text: "Witness processing pathways as grain moves mechanically through state-of-the-art milling services.",
    badge: "Industrial Processing"
  },
  {
    icon: Factory,
    title: "Processing Unit Visit",
    text: "Step inside the active industrial facility to trace how value-added soybean feed is precision manufactured.",
    badge: "Value Addition"
  },
];

export default function Tourism() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic interval engine for swapping slides every 5000ms
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <main className="tourism-page">
      {/* Premium Hero Banner with full background slideshow layers */}
      <section className="tour-hero">
        
        {/* Render Background Engine */}
        <div className="slideshow-container">
          {slideshowImages.map((image, index) => (
            <div
              key={index}
              className={`slide-layer ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          {/* Solid gradient overlay layers for maximizing layout readability */}
          <div className="tour-hero-overlay"></div>
        </div>

        {/* Content Box carefully floated on top */}
        <div className="tour-hero-container" style={{ position: "relative", zIndex: 3 }}>
          <ScrollReveal>
            <div className="tour-eyebrow">
              <Wheat size={16} className="tour-icon-pulse" />
              <span>Agro Tourism Hub</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.15}>
            <h1>Guided Educational &amp; Commercial Farm Tours</h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p>
              Experience institutional engineering in action. We offer structured, immersive field tours 
              spanning crop production, livestock zones, milling operations, and high-tech feed factories 
              across the University of Zimbabwe ecosystem.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.45}>
            <a href="#tours-catalog" className="tour-btn-secondary">
              View Experiences <ArrowRight size={16} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Tour Modules Catalog */}
      <section className="tour-catalog-section" id="tours-catalog">
        <div className="tour-container">
          <div className="tour-section-header">
            <ScrollReveal>
              <h2>Available Tour Tracks</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>Tailored pathways for industry specialists, student delegations, and independent groups</p>
            </ScrollReveal>
          </div>
          
          <div className="tour-grid">
            {tourItems.map(({ icon: Icon, title, text, badge }, index) => (
              <ScrollReveal key={title} delay={index * 0.05}>
                <article className="tour-card">
                  <div className="tour-card-header">
                    <div className="tour-icon-box">
                      <Icon size={24} />
                    </div>
                    <span className="tour-card-badge">{badge}</span>
                  </div>
                  <div className="tour-card-body">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking / Quotation Call-to-Action Section */}
      <section className="tour-cta-section">
        <ScrollReveal>
          <div className="tour-cta-card">
            <div className="tour-cta-icon-side">
              <MapPin size={32} />
            </div>
            <div className="tour-cta-content">
              <span className="cta-mini-tag">Booking Office</span>
              <h2>Ready to Arrange Your Visit?</h2>
              <p>Delegations, student groups, and individuals can request comprehensive pricing structures, customized itineraries, and scheduling arrangements.</p>
            </div>
            
            <div className="tour-cta-actions" style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
              {/* This link forces browser straight into Gmail web layout, bypassing broken desktop mail apps */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=uzfarm@gmail.com&su=Agro-Tourism Tour Quotation Request" 
                target="_blank"
                rel="noopener noreferrer"
                className="tour-btn-primary"
              >
                <ClipboardEdit size={18} />
                Email: uzfarm@gmail.com
              </a>
              
              <a href="#quote-form" className="tour-btn-secondary-link" style={{ textDecoration: "none" }}>
                Internal Quote Form
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}