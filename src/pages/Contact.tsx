import { Carrot, Mail, ExternalLink } from "lucide-react";
import "./Contact.css"; // Ensure this matches your file structure
import ScrollReveal from "./ScrollReveal";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
      {/* Fixed: Replaced your placeholder web link string with valid SVG vector node paths */}
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
      <path d="M16.3 2c.4 2.5 1.8 4 4.2 4.2v3.5a7.7 7.7 0 0 1-4.1-1.2v6.4c0 4.1-2.5 7.1-6.6 7.1A6.4 6.4 0 0 1 3.5 15.6c0-3.9 3.4-7 7.3-6.2v3.7c-1.8-.6-3.6.7-3.6 2.6 0 1.5 1.1 2.7 2.6 2.7 1.7 0 2.8-1 2.8-3.1V2h3.7Z" />
    </svg>
  );
}

export default function Contact() {
  // Direct Web Link forces browser straight into Gmail web layout bypassing broken desktop configurations
  const GMAIL_COMPOSE_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=uzagroindustrialpark@gmail.com&su=Agro-Industrial Park Inquiry";

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section 
        className="contact-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=2000')`,
        }}
      >
        <div className="contact-hero-container">
          <ScrollReveal>
            <div className="contact-eyebrow">
              <Carrot size={16} className="contact-icon-bounce" />
              <span>Get In Touch</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.15}>
            <h1>Connect With Our Hub</h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p>
              Have inquiries regarding premium farm produce, Nu-Gold commodities, heavy milling operations, 
              or corporate educational tourism? Access our operational channels directly below.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Split Interface Section */}
      <section className="contact-interface-section" id="contact">
        <div className="contact-container">
          <div className="contact-split-layout">
            
            {/* Left Side: Context Info */}
            <div className="contact-info-panel">
              <ScrollReveal>
                <span className="panel-tag">Direct Lines</span>
                <h2>Reach Out Directly</h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.15}>
                <p>
                  Connect directly with administrative coordinators at the University of Zimbabwe 
                  Agro Industrial Park. Whether sourcing commercial wholesale items or individual requests, 
                  our team will assist with routing your message.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="office-notice">
                  <p><strong>Note:</strong> Bulk wholesale orders and tourism group bookings require a formal quote request via our active communication channels.</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Side: Modern Touch Interaction Cards */}
            <div className="contact-cards-panel">
              
              {/* Email Action Card */}
              <ScrollReveal delay={0.1}>
                <a 
                  href={GMAIL_COMPOSE_URL} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-contact-card email-card"
                >
                  <div className="card-icon-wrapper">
                    <Mail size={24} />
                  </div>
                  <div className="card-details">
                    <h3>Official Email Inquiry</h3>
                    <p>uzagroindustrialpark@gmail.com</p>
                    <span className="card-action-text">Compose in Gmail <ExternalLink size={14} /></span>
                  </div>
                </a>
              </ScrollReveal>

              {/* Social Channels Sub-Grid */}
              <div className="social-channels-grid">
                
                {/* Facebook Card */}
                <ScrollReveal delay={0.25}>
                  <a 
                    href="https://www.facebook.com/UniversityofZimbabwe" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="interactive-contact-card social-card fb"
                  >
                    <div className="card-icon-wrapper">
                      <FacebookIcon />
                    </div>
                    <div className="card-details">
                      <h3>Facebook</h3>
                      <p>@UniversityofZimbabwe</p>
                      <span className="card-action-text">Follow Page</span>
                    </div>
                  </a>
                </ScrollReveal>

                {/* TikTok Card */}
                <ScrollReveal delay={0.35}>
                  <a 
                    href="https://www.tiktok.com/search?q=University%20of%20Zimbabwe" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="interactive-contact-card social-card tt"
                  >
                    <div className="card-icon-wrapper">
                      <TikTokIcon />
                    </div>
                    <div className="card-details">
                      <h3>TikTok</h3>
                      <p>UZ Agro-Industrial Content</p>
                      <span className="card-action-text">Watch Videos</span>
                    </div>
                  </a>
                </ScrollReveal>

              </div> {/* End Social Channels Sub-Grid */}

            </div> {/* End Right Side Panel */}

          </div>
        </div>
      </section>
    </main>
  );
}