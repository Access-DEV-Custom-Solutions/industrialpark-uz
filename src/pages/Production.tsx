import { Sprout, PhoneCall, ArrowRight } from "lucide-react";
import { farmProduce } from "../data/siteData";
import uzoffice from "../assets/uzoffice.jpg";
import "./Production.css"; 
import ScrollReveal from "./ScrollReveal";

export default function Production() {
  return (
    <main className="production-page">
      {/* Hero Section */}
      <section 
        className="prod-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.85)), url(${uzoffice})`,
        }}
      >
        <div className="prod-hero-container">
          <ScrollReveal>
            <div className="prod-eyebrow">
              <Sprout size={16} className="prod-icon-pulse" />
              <span>Production Unit</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.15}>
            <h1>Farm Produce &amp; Livestock Outputs</h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p>
              The Production Unit introduces the park through premium farm outputs:
              vegetables, root crops, green maize, and livestock products raised
              responsibly on the University of Zimbabwe farm. Come and buy your fresh from the soil produce!
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.45}>
            <a href="#farm-produce" className="prod-btn-secondary">
              Browse Catalog <ArrowRight size={16} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="catalog-section" id="farm-produce">
        <div className="catalog-container">
          <div className="section-header">
            <ScrollReveal>
              <h2>Current Outputs</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>Fresh, sustainable, and locally harvested daily</p>
            </ScrollReveal>
          </div>
          
          <div className="gallery-grid">
            {farmProduce.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 0.05}>
                <article className="product-card">
                  <div className="product-image-wrapper">
                    <img src={item.image} alt={item.name} loading="lazy" />
                    <span className="product-badge">Fresh</span>
                  </div>
                  <div className="product-info">
                    <h3>{item.name}</h3>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Footer Banner */}
      <section className="prod-cta-section">
        <ScrollReveal>
          <div className="prod-cta-card">
            <div className="prod-cta-content">
              <h2>Direct Farm Access</h2>
              <p>Get in touch directly with the UZ farm for commercial orders, pricing, and daily fresh availability.</p>
            </div>
            <a href="tel:+263773698834" className="prod-btn-primary">
              <PhoneCall size={18} />
              Contact UZ Farm
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}