import { Factory, ArrowRight, ShoppingBag, Mail } from "lucide-react";
import { processingProducts } from "../data/siteData";
import nugoldLogo from "../assets/nugold-logo.jpg";
import processingBg from "../assets/processing-bg.jpg"; 
import "./Processing.css";
import ScrollReveal from "./ScrollReveal";

export default function Processing() {
  return (
    <main className="processing-page">
      {/* Hero Section */}
      <section 
        className="proc-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.85)), url(${processingBg})`,
        }}
      >
        <div className="proc-hero-container">
          <ScrollReveal>
            <div className="logo-badge-wrapper">
              <img className="proc-section-logo" src={nugoldLogo} alt="Nu-Gold Brand Logo" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.15}>
            <div className="proc-eyebrow">
              <Factory size={16} className="proc-icon-spin" />
              <span>VakaNyika Factory Unit</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <h1>Nu-Gold Processed Products</h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.45}>
            <p>
              Value addition meets industrial excellence. The VakaNyika (VN) Processing Unit 
              manufactures premium cooking oil, high-grade animal feed, nutritious sweet potato NutriLoaf, 
              and fresh confectionery products—all proudly branded under the Nu-Gold seal of quality.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.6}>
            <a href="#nugold-products" className="proc-btn-secondary">
              Explore Range <ArrowRight size={16} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="catalog-section processing" id="nugold-products">
        <div className="catalog-container">
          <div className="section-header">
            <ScrollReveal>
              <h2>Our Processed Range</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>Locally manufactured, globally standard value-added commodities</p>
            </ScrollReveal>
          </div>
          
          <div className="gallery-grid product-grid">
            {processingProducts.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 0.05}>
                <article className="product-card processed-card">
                  <div className="product-image-wrapper">
                    <img src={item.image} alt={item.name} loading="lazy" />
                    <span className="product-badge gold-badge">Nu-Gold Premium</span>
                  </div>
                  <div className="product-info processed-info">
                    <div className="title-area">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modern B2B/Wholesale CTA */}
      <section className="proc-cta-section">
        <ScrollReveal>
          <div className="proc-cta-card">
            <div className="proc-cta-content">
              <h2>Bulk &amp; Wholesale Supply</h2>
              <p>Partner with VakaNyika Factory for commercial supply lines of stock feeds, cooking oil, and bakery batches.</p>
            </div>
            
            <div className="proc-cta-actions">
              <a 
                href="https://wa.me/263788064126?text=Hi,%20I'm%20interested%20in%20placing%20a%20wholesale%20bulk%20order%20inquiry%20for%20VakaNyika%20products." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="proc-btn-primary"
              >
                <ShoppingBag size={18} />
                Place Order Inquiries
              </a>

              {/* Email Contact Action Link */}
              <a 
                href="mailto:sales@vnagro.uz" 
                className="proc-btn-email"
              >
                <Mail size={18} />
                Email Factory Unit
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}