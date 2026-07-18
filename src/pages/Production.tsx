import { useState } from "react";
import {
Sprout,
PhoneCall,
ArrowRight,
Leaf,
ShoppingBasket,
CheckCircle2,
X,
} from "lucide-react";

import { farmProduce } from "../data/siteData";
import uzoffice from "../assets/uzoffice.jpg";

import "./Production.css";
import ScrollReveal from "./ScrollReveal";

type FilterCategory = "All" | "Vegetables" | "Crops" | "Livestock";

const filterCategories: FilterCategory[] = [
"All",
"Vegetables",
"Crops",
"Livestock",
];

export default function Production() {
const [activeFilter, setActiveFilter] =
useState<FilterCategory>("All");

const [selectedProduct, setSelectedProduct] =
useState<(typeof farmProduce)[number] | null>(null);

const filteredProduce =
activeFilter === "All"
? farmProduce
: farmProduce.filter(
(item) => item.category === activeFilter
);

return ( <main className="production-page">


  {/* ================= HERO ================= */}
  <section
    className="prod-hero"
    style={{
      backgroundImage: `
        linear-gradient(
          90deg,
          rgba(5, 25, 55, 0.94),
          rgba(5, 35, 70, 0.72),
          rgba(5, 35, 70, 0.42)
        ),
        url(${uzoffice})
      `,
    }}
  >

    <div className="prod-hero-container">

      <ScrollReveal>
        <div className="prod-eyebrow">
          <Sprout size={17} />
          <span>UZ Agro Production Unit</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <p className="prod-hero-kicker">
          GROW • HARVEST • SUPPLY
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <h1>
          Fresh from the
          <span>University of Zimbabwe Farm.</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <p className="prod-hero-description">
          From vegetables and root crops to green maize and livestock
          products, our Production Unit delivers fresh agricultural
          outputs while supporting research, education and food security.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.5}>
        <div className="prod-hero-actions">

          <a
            href="#farm-produce"
            className="prod-btn-primary"
          >
            Browse Farm Outputs
            <ArrowRight size={17} />
          </a>

          <a
            href="tel:+263773698834"
            className="prod-btn-secondary"
          >
            <PhoneCall size={17} />
            Contact the Farm
          </a>

        </div>
      </ScrollReveal>

    </div>

    <div className="prod-hero-bottom">

      <div>
        <strong>Fresh</strong>
        <span>Farm-produced</span>
      </div>

      <div>
        <strong>Local</strong>
        <span>Zimbabwean agriculture</span>
      </div>

      <div>
        <strong>Purposeful</strong>
        <span>Production meets research</span>
      </div>

    </div>

  </section>


  {/* ================= INTRODUCTION ================= */}
  <section className="production-intro">

    <div className="production-intro-inner">

      <ScrollReveal>
        <div className="intro-icon">
          <Leaf size={28} />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div>

          <span className="prod-section-label">
            OUR PRODUCTION ECOSYSTEM
          </span>

          <h2>
            Agriculture that feeds,
            teaches and creates value.
          </h2>

        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <p>
          The Production Unit is an important part of the University
          of Zimbabwe Agro Industrial Park. It combines practical
          agricultural production with education, research and
          commercial opportunities.
        </p>
      </ScrollReveal>

    </div>

  </section>


  {/* ================= CATALOG ================= */}
  <section
    className="catalog-section"
    id="farm-produce"
  >

    <div className="catalog-container">

      <div className="section-header">

        <ScrollReveal>
          <span className="prod-section-label">
            FARM OUTPUTS
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2>
            Current Farm Produce
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p>
            Explore fresh agricultural products currently produced
            at the University of Zimbabwe Farm.
          </p>
        </ScrollReveal>

      </div>


      {/* ================= FILTERS ================= */}
      <div className="production-filters">

        {filterCategories.map((category) => (

          <button
            key={category}
            type="button"
            className={
              activeFilter === category
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setActiveFilter(category)}
          >

            {category}

          </button>

        ))}

      </div>


      {/* ================= TOOLBAR ================= */}
      <div className="catalog-toolbar">

        <div className="catalog-count">

          <ShoppingBasket size={18} />

          <span>
            Showing {filteredProduce.length} product
            {filteredProduce.length !== 1 ? "s" : ""}
          </span>

        </div>


        <span className="availability-label">

          <span className="availability-dot"></span>

          Availability varies seasonally

        </span>

      </div>


      {/* ================= PRODUCT CARDS ================= */}
      <div className="gallery-grid">

        {filteredProduce.map((item, index) => (

          <ScrollReveal
            key={item.name}
            delay={index * 0.05}
          >

            <article
              className="product-card clickable-product-card"
              onClick={() => setSelectedProduct(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSelectedProduct(item);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${item.name}`}
            >

              <div className="product-image-wrapper">

                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />


                <span className="product-badge">

                  <Leaf size={13} />

                  {item.status}

                </span>


                <div className="product-image-overlay">

                  <span>

                    View Details

                    <ArrowRight size={15} />

                  </span>

                </div>

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
                  {item.description}
                </p>


                <span className="product-category">

                  {item.category}

                </span>

              </div>

            </article>

          </ScrollReveal>

        ))}

      </div>

    </div>

  </section>


  {/* ================= CTA ================= */}
  <section className="prod-cta-section">

    <ScrollReveal>

      <div className="prod-cta-card">

        <div className="prod-cta-icon">
          <PhoneCall size={28} />
        </div>


        <div className="prod-cta-content">

          <span>
            COMMERCIAL ORDERS
          </span>

          <h2>
            Looking for fresh farm produce?
          </h2>

          <p>
            Contact the UZ Farm directly for current availability,
            pricing, commercial orders and farm produce enquiries.
          </p>

        </div>


        <a
          href="tel:+263773236670"
          className="prod-btn-primary"
        >

          <PhoneCall size={18} />

          Contact UZ Farm

        </a>

      </div>

    </ScrollReveal>

  </section>


  {/* ================= PRODUCT DETAILS MODAL ================= */}
  {selectedProduct && (

    <div
      className="product-modal-backdrop"
      onClick={() => setSelectedProduct(null)}
    >

      <div
        className="product-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >

        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="product-modal-close"
          onClick={() => setSelectedProduct(null)}
          aria-label="Close product details"
        >

          <X size={22} />

        </button>


        {/* PRODUCT IMAGE */}
        <div className="product-modal-image">

          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
          />

          <span className="product-modal-status">

            <Leaf size={14} />

            {selectedProduct.status}

          </span>

        </div>


        {/* PRODUCT DETAILS */}
        <div className="product-modal-content">

          <span className="product-modal-category">

            {selectedProduct.category}

          </span>


          <h2 id="product-modal-title">

            {selectedProduct.name}

          </h2>


          <p>

            {selectedProduct.description}

          </p>


          <div className="product-modal-info">

            <div>

              <span>Production Unit</span>

              <strong>
                University of Zimbabwe Farm
              </strong>

            </div>


            <div>

              <span>Availability</span>

              <strong>
                {selectedProduct.status}
              </strong>

            </div>

          </div>


          {/* ORDER BUTTON */}
          <a
            href={`https://wa.me/263773698834?text=Hi,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(
              selectedProduct.name
            )}%20from%20the%20University%20of%20Zimbabwe%20Agro%20Industrial%20Park.`}
            target="_blank"
            rel="noopener noreferrer"
            className="product-order-btn"
          >

            <PhoneCall size={18} />

            Contact to Order

          </a>

        </div>

      </div>

    </div>

  )}

</main>


);
}
