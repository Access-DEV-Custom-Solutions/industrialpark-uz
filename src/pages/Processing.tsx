import { useState } from "react";

import {
  Factory,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
  Leaf,
  ShoppingBasket,
  CheckCircle2,
  PackageCheck,
  X,
} from "lucide-react";

import { processingProducts } from "../data/siteData";
import processing from "../assets/processing-bg.jpg";

import "./Processing.css";
import ScrollReveal from "./ScrollReveal";

export default function Processing() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof processingProducts)[number] | null
  >(null);

  return (
    <main className="production-page">

      {/* ================= HERO ================= */}
      <section
        className="prod-hero processing-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(5, 25, 55, 0.95),
              rgba(5, 35, 70, 0.75),
              rgba(5, 35, 70, 0.45)
            ),
            url(${processing})
          `,
        }}
      >

        <div className="prod-hero-container">

          <ScrollReveal>
            <div className="prod-eyebrow">
              <Factory size={17} />
              <span>VakaNyika Processing Unit</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="prod-hero-kicker">
              PROCESS • ADD VALUE • BUILD INDUSTRY
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <h1>
              From raw materials
              <span>to products that create value.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="prod-hero-description">
              The VakaNyika Processing Unit transforms agricultural production
              into quality food, livestock feed and consumer products through
              innovation, value addition and practical industrial production.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="prod-hero-actions">

              <a
                href="#processing-products"
                className="prod-btn-primary"
              >
                Explore Our Products
                <ArrowRight size={17} />
              </a>

              <a
                href="tel:+263773698834"
                className="prod-btn-secondary"
              >
                <PhoneCall size={17} />
                Product Enquiries
              </a>

            </div>
          </ScrollReveal>

        </div>

        <div className="prod-hero-bottom">

          <div>
            <strong>Value Added</strong>
            <span>From farm to product</span>
          </div>

          <div>
            <strong>Innovative</strong>
            <span>Research-driven processing</span>
          </div>

          <div>
            <strong>Local</strong>
            <span>Zimbabwean production</span>
          </div>

        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="production-intro processing-intro">

        <div className="production-intro-inner">

          <ScrollReveal>
            <div className="intro-icon">
              <PackageCheck size={28} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div>

              <span className="prod-section-label">
                VALUE ADDITION IN ACTION
              </span>

              <h2>
                Turning agricultural production into opportunity.
              </h2>

            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p>
              The VakaNyika Processing Unit connects agriculture with
              manufacturing, food production and entrepreneurship. Through
              processing and value addition, locally produced raw materials
              are transformed into products that serve households, businesses
              and the wider agricultural sector.
            </p>
          </ScrollReveal>

        </div>

      </section>


      {/* ================= PROCESSING JOURNEY ================= */}
      <section className="processing-journey">

        <div className="processing-journey-container">

          <div className="section-header">

            <ScrollReveal>
              <span className="prod-section-label">
                THE VAKANYIKA VALUE CHAIN
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2>
                From agriculture to industry.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p>
                Our processing ecosystem creates a connection between
                agricultural production, technology, manufacturing and markets.
               
              </p>
            </ScrollReveal>

          </div>

          <div className="processing-steps">

            <ScrollReveal>
              <div className="processing-step">

                <div className="processing-step-icon">
                  <Leaf size={24} />
                </div>

                <h3>Produce</h3>

                <p>
                  Agricultural raw materials are produced through farming
                  and livestock systems.
                </p>

              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="processing-step">

                <div className="processing-step-icon">
                  <Factory size={24} />
                </div>

                <h3>Process</h3>

                <p>
                  Raw materials are transformed through modern processing
                  and manufacturing activities.
                </p>

              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="processing-step">

                <div className="processing-step-icon">
                  <PackageCheck size={24} />
                </div>

                <h3>Add Value</h3>

                <p>
                  Processing creates quality products, employment opportunities
                  and commercial value.
                </p>

              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="processing-step">

                <div className="processing-step-icon">
                  <ShoppingBasket size={24} />
                </div>

                <h3>Reach Markets</h3>

                <p>
                  Finished products reach consumers, businesses and
                  agricultural markets.
                </p>

              </div>
            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}
      <section
        className="catalog-section"
        id="processing-products"
      >

        <div className="catalog-container">

          <div className="section-header">

            <ScrollReveal>
              <span className="prod-section-label">
                VAKANYIKA PRODUCTS
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2>
                Products created through value addition.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p>
                Explore a growing range of food products, baked goods,
                cooking products and livestock feeds produced through the
                VakaNyika Processing Unit.
              </p>
            </ScrollReveal>

          </div>


          <div className="catalog-toolbar">

            <div className="catalog-count">

              <ShoppingBasket size={18} />

              <span>
                {processingProducts.length} product categories
              </span>

            </div>

            <span className="availability-label">

              <span className="availability-dot"></span>

              Product availability may vary

            </span>

          </div>


          <div className="gallery-grid">

            {processingProducts.map((item, index) => (

              <ScrollReveal
                key={item.name}
                delay={index * 0.05}
              >

                <article className="product-card processing-card">

                  <div className="product-image-wrapper">

                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />

                    <span className="product-badge processing-badge">

                      <Factory size={13} />

                      Value Added

                    </span>

                    {/* CLICKABLE EXPLORE OVERLAY */}
                    <button
                      type="button"
                      className="product-image-overlay"
                      onClick={() => setSelectedProduct(item)}
                      aria-label={`Explore ${item.name}`}
                    >

                      <span className="explore-product-text">

                        Explore Product

                        <ArrowRight size={15} />

                      </span>

                    </button>

                  </div>


                  <div className="product-info">

                    <div className="product-title-row">

                      <h3>
                        {item.name}
                      </h3>

                      <CheckCircle2
                        size={18}
                        className="product-check"
                      />

                    </div>

                    <p>
                      Produced through the VakaNyika Processing Unit
                      as part of the University of Zimbabwe Agro Industrial Park.
                    </p>

                  </div>

                </article>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PRODUCT PREVIEW MODAL ================= */}
      {selectedProduct && (

        <div
          className="product-modal-backdrop"
          onClick={() => setSelectedProduct(null)}
        >

          <div
            className="product-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="product-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product preview"
            >
              <X size={22} />
            </button>


            <div className="product-modal-image">

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />

            </div>


            <div className="product-modal-content">

              <span className="product-modal-label">
                VAKANYIKA PRODUCT
              </span>

              <h2>
                {selectedProduct.name}
              </h2>

              <p>
                This product is part of the VakaNyika Processing Unit's
                value-added agricultural production portfolio.
              </p>

              <p>
                Through local processing, agricultural raw materials are
                transformed into quality products that support food
                production, livestock development, entrepreneurship and
                industrial growth.
              </p>

              <a
                href="tel:+263773698834"
                className="prod-btn-primary product-modal-button"
              >
                <PhoneCall size={17} />
                Enquire About This Product
              </a>

            </div>

          </div>

        </div>

      )}


      {/* ================= CTA ================= */}
      <section className="prod-cta-section">

        <ScrollReveal>

          <div className="prod-cta-card processing-cta">

            <div className="prod-cta-icon">
              <Factory size={28} />
            </div>

            <div className="prod-cta-content">

              <span>
                PRODUCT ENQUIRIES
              </span>

              <h2>
                Interested in our value-added products?
              </h2>

              <p>
                Contact the VakaNyika Processing Unit for product availability,
                bulk orders, commercial enquiries and more information about
                our processing activities.
              </p>

            </div>

            <a
              href="tel:+263773698834"
              className="prod-btn-primary"
            >

              <PhoneCall size={18} />

              Contact VakaNyika

            </a>

          </div>

        </ScrollReveal>

      </section>

    </main>
  );
}