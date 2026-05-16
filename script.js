/* ============================================
   NEXATOOLS.IO — Fixed JavaScript
   All tools functional, IDs aligned to HTML
   ============================================ */
function requirePro(feature) {
  return true; // All features free
}
// ---------- Global State ----------
let invoiceItems = [{ desc: 'Web Development', qty: 1, rate: 150 }];
let scheduledPosts = [];
let currentResumeTemplate = 'classic';
let resumeAccent = '#bf5af2';
let logoBg = '#00e5ff';
let logoTxt = '#000000';
let logoShape = 'circle';
let logoIcon = '🚀';
let logoFontStyle = 'bold';
let logoFontSize = 26;
let qrColor = '#00e5ff';
let qrType = 'url';
let qrStyle = 'basic';
let bcTheme = 'dark';
let currentPlan = 'pro'; // All features unlocked

// ---------- Helper ----------
function $(id) { return document.getElementById(id); }

// ---------- Navigation ----------
window.addEventListener('scroll', () => {
  const nav = $('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

function toggleMobileNav() {
  const mobileNav = $('mobileNav');
  if (mobileNav) mobileNav.classList.toggle('open');
}

function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---------- Pro Modal ----------
function openModal(plan) {
  const modal = $('pro-modal');
  if (!modal) return;

  if (plan === 'business') {
    $('modal-title').textContent = 'Upgrade to Business';
    $('modal-desc').textContent = 'Full team access, custom branding, API & white label — just $15/month.';
    $('modal-cta').textContent = '🛒 Buy Business on Gumroad — $15/month';
    $('modal-cta').href = 'https://storekeeper133.gumroad.com/l/sxjewg';
    $('modal-features').innerHTML = `
      <li>Everything in Pro</li><li>5 team members</li>
      <li>Custom branding & API access</li><li>Bulk export</li>
      <li>White label option</li><li>Priority support</li>`;
  } else {
    $('modal-title').textContent = 'Upgrade to Pro';
    $('modal-desc').textContent = 'Unlock AI tools, remove watermarks, export to PDF just $5/month worldwide.';
    $('modal-cta').textContent = '🛒 Buy on Gumroad $5/month';
    $('modal-cta').href = 'https://storekeeper133.gumroad.com/l/uuppvu';
    $('modal-features').innerHTML = `
      <li>AI-powered resume writer</li><li>PDF & PNG export (no watermark)</li>
      <li>Unlimited QR codes & logos</li><li>Premium design templates</li>
      <li>Priority email support</li>`;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = $('pro-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === $('pro-modal')) closeModal();
}

// ---------- Static Pages Modal ----------
const staticPages = {
  privacy: {
    title: '🔒 Privacy Policy',
    content: `
      <h2 style="font-family:var(--font-display);margin-bottom:16px;">🔒 Privacy Policy</h2>
      <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;margin-bottom:12px;">Last updated: May 2026</p>
      <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;margin-bottom:16px;">NexaTools.io respects your privacy. We do not collect, store, or sell any personal data. All tools run entirely in your browser — nothing is sent to our servers.</p>
      <h4 style="margin-bottom:8px;">What we don't collect</h4>
      <ul style="color:var(--text2);font-size:0.88rem;line-height:2;padding-left:20px;">
        <li>No account or login required</li>
        <li>No form data is stored</li>
        <li>No cookies used for tracking</li>
        <li>No third-party analytics</li>
      </ul>
      <h4 style="margin:16px 0 8px;">Payments</h4>
      <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;">Pro plan payments are handled by Gumroad. We never see your card details.</p>
      <h4 style="margin:16px 0 8px;">Contact</h4>
      <p style="color:var(--text2);font-size:0.88rem;">Questions? Email us at <a href="mailto:pro@nexatools.io" style="color:var(--cyan);">pro@nexatools.io</a></p>
    `
  },
  terms: {
    title: '📋 Terms of Service',
    content: `
      <h2 style="font-family:var(--font-display);margin-bottom:16px;">📋 Terms of Service</h2>
      <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;margin-bottom:16px;">By using NexaTools.io you agree to these terms.</p>
      <h4 style="margin-bottom:8px;">Usage</h4>
      <ul style="color:var(--text2);font-size:0.88rem;line-height:2;padding-left:20px;">
        <li>Tools are provided "as is" — free of charge</li>
        <li>Do not use for illegal or harmful purposes</li>
        <li>Pro features require an active subscription</li>
        <li>We reserve the right to change or remove features</li>
      </ul>
      <h4 style="margin:16px 0 8px;">Pro Subscription</h4>
      <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;">Pro plans are billed monthly via Gumroad. Cancel anytime. No refunds on partial months.</p>
      <h4 style="margin:16px 0 8px;">Liability</h4>
      <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;">NexaTools.io is not liable for any damages arising from use of these tools. Use at your own risk.</p>
      <h4 style="margin:16px 0 8px;">Changes</h4>
      <p style="color:var(--text2);font-size:0.88rem;">We may update these terms at any time. Continued use = acceptance.</p>
    `
  },
  contact: {
    title: '✉️ Contact Us',
    content: `
      <h2 style="font-family:var(--font-display);margin-bottom:16px;">✉️ Contact Us</h2>
      <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;margin-bottom:24px;">We'd love to hear from you — bugs, feedback, or pro support.</p>
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 20px;">
          <div style="font-size:0.7rem;color:var(--muted2);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">General & Pro Support</div>
          <a href="mailto:pro@nexatools.io" style="color:var(--cyan);font-size:0.95rem;">pro@nexatools.io</a>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 20px;">
          <div style="font-size:0.7rem;color:var(--muted2);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Bug Reports</div>
          <a href="mailto:bugs@nexatools.io" style="color:var(--cyan);font-size:0.95rem;">bugs@nexatools.io</a>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 20px;">
          <div style="font-size:0.7rem;color:var(--muted2);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Response Time</div>
          <p style="color:var(--text2);font-size:0.88rem;margin:0;">Usually within 24–48 hours on business days.</p>
        </div>
      </div>
    `
  },
  docs: {
    title: '📖 Documentation',
    content: `
      <h2 style="font-family:var(--font-display);margin-bottom:16px;">📖 Documentation</h2>
      <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;margin-bottom:20px;">Quick guide to all NexaTools features.</p>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <details style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:14px 18px;">
          <summary style="cursor:pointer;font-weight:600;font-size:0.9rem;">📄 Resume Builder</summary>
          <p style="color:var(--text2);font-size:0.85rem;margin-top:10px;line-height:1.7;">Fill in your details, pick a template and accent color. Click "AI Write Summary" to auto-generate your about section. Download via Print button.</p>
        </details>
        <details style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:14px 18px;">
          <summary style="cursor:pointer;font-weight:600;font-size:0.9rem;">🧾 Billing Generator</summary>
          <p style="color:var(--text2);font-size:0.85rem;margin-top:10px;line-height:1.7;">Add your company info, client details, and line items. Click Generate then Print/PDF to save.</p>
        </details>
        <details style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:14px 18px;">
          <summary style="cursor:pointer;font-weight:600;font-size:0.9rem;">📱 QR Code Generator</summary>
          <p style="color:var(--text2);font-size:0.85rem;margin-top:10px;line-height:1.7;">Choose type (URL, WiFi, UPI etc), enter value, pick color and size. QR generates live. Download as PNG.</p>
        </details>
        <details style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:14px 18px;">
          <summary style="cursor:pointer;font-weight:600;font-size:0.9rem;">🎨 Logo Maker</summary>
          <p style="color:var(--text2);font-size:0.85rem;margin-top:10px;line-height:1.7;">Enter brand name, pick icon, colors, shape and font. Logo renders live on canvas. Download as PNG.</p>
        </details>
        <details style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:14px 18px;">
          <summary style="cursor:pointer;font-weight:600;font-size:0.9rem;">🔐 Password Generator</summary>
          <p style="color:var(--text2);font-size:0.85rem;margin-top:10px;line-height:1.7;">Set length, toggle character types, choose how many passwords. Strength meter updates live. Copy with one click.</p>
        </details>
      </div>
    `
  },
  signin: {
    title: '👤 Sign In',
    content: `
      <h2 style="font-family:var(--font-display);margin-bottom:8px;">👤 Sign In</h2>
      <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;margin-bottom:24px;">NexaTools currently does not require an account. All tools are free with no login needed.</p>
      <div style="background:var(--cyan-dim);border:1px solid var(--border3);border-radius:12px;padding:20px;margin-bottom:20px;">
        <div style="font-size:0.85rem;color:var(--cyan);font-weight:600;margin-bottom:6px;">✅ All Features Free</div>
        <p style="color:var(--text2);font-size:0.85rem;line-height:1.7;margin:0;">NexaTools.io ke sab tools bilkul free hain — koi login, koi payment nahin.</p>
      </div>
      <button class="btn btn-cyan" style="width:100%;" onclick="closeStaticModal();scrollToSection('.tools-section')">🚀 Start Using Free Tools</button>
    `
  },

  about: {
    title: '🚀 About NexaTools',
    content: `
      <h2 style="font-family:var(--font-display);margin-bottom:6px;">🚀 About NexaTools.io</h2>
      <p style="color:var(--cyan);font-size:0.8rem;margin-bottom:20px;letter-spacing:1px;text-transform:uppercase;">Built for the future. Free for everyone.</p>

      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:20px;margin-bottom:16px;">
        <div style="font-size:1rem;font-weight:700;margin-bottom:10px;">💡 Our Mission</div>
        <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;">NexaTools.io was built with one goal — to give every person, freelancer, and small business access to professional-grade tools without spending a single rupee. No subscriptions. No hidden fees. No login required.</p>
      </div>

      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:20px;margin-bottom:16px;">
        <div style="font-size:1rem;font-weight:700;margin-bottom:10px;">🛠️ What We Offer</div>
        <ul style="color:var(--text2);font-size:0.88rem;line-height:2.2;padding-left:18px;">
          <li>📄 AI-Powered Resume / CV Builder</li>
          <li>🧾 Professional Invoice & Billing Generator</li>
          <li>📅 Social Media Post Scheduler</li>
          <li>🎨 Logo & Brand Identity Maker</li>
          <li>📱 QR Code Generator (URL, WiFi, UPI & more)</li>
          <li>💼 Business Card Designer</li>
          <li>🔐 Secure Password Generator</li>
        </ul>
      </div>

      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:20px;margin-bottom:16px;">
        <div style="font-size:1rem;font-weight:700;margin-bottom:10px;">🌍 Who We Are</div>
        <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;">NexaTools.io is an independent project created by a passionate developer focused on making powerful tools accessible to everyone worldwide — especially in regions where premium software costs are a barrier.</p>
      </div>

      <div style="background:linear-gradient(135deg,var(--cyan-dim),var(--purple-dim));border:1px solid var(--border3);border-radius:14px;padding:20px;text-align:center;">
        <div style="font-size:1rem;font-weight:700;margin-bottom:8px;">📩 Get in Touch</div>
        <p style="color:var(--text2);font-size:0.85rem;margin-bottom:12px;">Have feedback, a feature request, or just want to say hi?</p>
        <a href="mailto:pro@nexatools.io" style="color:var(--cyan);font-weight:600;font-size:0.9rem;">pro@nexatools.io</a>
      </div>
    `
  },

  privacy: {
    title: '🔒 Privacy Policy',
    content: `
      <h2 style="font-family:var(--font-display);margin-bottom:6px;">🔒 Privacy Policy</h2>
      <p style="color:var(--text2);font-size:0.78rem;margin-bottom:20px;">Last updated: May 2026</p>

      <div style="background:var(--cyan-dim);border:1px solid var(--border3);border-radius:12px;padding:14px 18px;margin-bottom:16px;font-size:0.85rem;color:var(--cyan);">
        ✅ NexaTools.io is a privacy-first platform. We do not collect, store, or sell your personal data.
      </div>

      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">1. Information We Do NOT Collect</div>
          <ul style="color:var(--text2);font-size:0.85rem;line-height:2;padding-left:18px;">
            <li>No account or registration required</li>
            <li>No form data is stored on our servers</li>
            <li>No cookies used for tracking or advertising</li>
            <li>No third-party analytics or tracking scripts</li>
            <li>All tool processing happens in your browser only</li>
          </ul>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">2. Payment Information</div>
          <p style="color:var(--text2);font-size:0.85rem;line-height:1.8;">Pro plan payments are processed securely by Gumroad. NexaTools.io never sees, stores, or processes your credit card or payment details. Gumroad's privacy policy governs payment data.</p>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">3. Third-Party Services</div>
          <p style="color:var(--text2);font-size:0.85rem;line-height:1.8;">We use Google Fonts for typography. Font files are loaded from Google's CDN. Please refer to Google's privacy policy for their data practices.</p>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">4. Children's Privacy</div>
          <p style="color:var(--text2);font-size:0.85rem;line-height:1.8;">NexaTools.io does not knowingly collect any information from children under the age of 13. Our tools are intended for general use by adults and professionals.</p>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">5. Contact</div>
          <p style="color:var(--text2);font-size:0.85rem;">Questions about privacy? Email us: <a href="mailto:pro@nexatools.io" style="color:var(--cyan);">pro@nexatools.io</a></p>
        </div>
      </div>
    `
  },

  terms: {
    title: '📋 Terms & Conditions',
    content: `
      <h2 style="font-family:var(--font-display);margin-bottom:6px;">📋 Terms & Conditions</h2>
      <p style="color:var(--text2);font-size:0.78rem;margin-bottom:20px;">Last updated: May 2026 — Please read carefully before using NexaTools.io.</p>

      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">1. Acceptance of Terms</div>
          <p style="color:var(--text2);font-size:0.85rem;line-height:1.8;">By accessing or using NexaTools.io, you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of the platform immediately.</p>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">2. Use of Tools</div>
          <ul style="color:var(--text2);font-size:0.85rem;line-height:2;padding-left:18px;">
            <li>All tools are provided "as is" — free of charge for personal and commercial use</li>
            <li>You must not use NexaTools.io for illegal, harmful, or fraudulent purposes</li>
            <li>You are solely responsible for the content you create using our tools</li>
            <li>We reserve the right to modify, suspend, or discontinue any feature at any time</li>
          </ul>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">3. Pro Subscription</div>
          <ul style="color:var(--text2);font-size:0.85rem;line-height:2;padding-left:18px;">
            <li>Pro plans are billed monthly via Gumroad</li>
            <li>You may cancel your subscription at any time</li>
            <li>No refunds are provided for partial billing periods</li>
            <li>Pro features activate within 24 hours of verified payment</li>
          </ul>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">4. Intellectual Property</div>
          <p style="color:var(--text2);font-size:0.85rem;line-height:1.8;">All designs, code, and branding of NexaTools.io are the intellectual property of NexaTools.io. You may not copy, reproduce, or redistribute our platform or its code without written permission.</p>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">5. Limitation of Liability</div>
          <p style="color:var(--text2);font-size:0.85rem;line-height:1.8;">NexaTools.io shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our tools. Use at your own risk.</p>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">6. Changes to Terms</div>
          <p style="color:var(--text2);font-size:0.85rem;line-height:1.8;">We reserve the right to update these Terms at any time. Continued use of NexaTools.io after changes are posted constitutes your acceptance of the updated Terms.</p>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">7. Contact</div>
          <p style="color:var(--text2);font-size:0.85rem;">For legal inquiries: <a href="mailto:pro@nexatools.io" style="color:var(--cyan);">pro@nexatools.io</a></p>
        </div>
      </div>
    `
  },

  disclaimer: {
    title: '⚠️ Disclaimer',
    content: `
      <h2 style="font-family:var(--font-display);margin-bottom:6px;">⚠️ Disclaimer</h2>
      <p style="color:var(--text2);font-size:0.78rem;margin-bottom:20px;">Last updated: May 2026</p>

      <div style="background:rgba(255,165,0,0.08);border:1px solid rgba(255,165,0,0.3);border-radius:12px;padding:14px 18px;margin-bottom:16px;font-size:0.85rem;color:#ffa500;">
        ⚠️ Please read this disclaimer before using NexaTools.io for professional or business-critical purposes.
      </div>

      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">1. No Professional Advice</div>
          <p style="color:var(--text2);font-size:0.85rem;line-height:1.8;">NexaTools.io provides general-purpose tools for productivity and design. Nothing on this platform constitutes legal, financial, medical, or professional advice. Always consult a qualified professional for important decisions.</p>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">2. Accuracy of Generated Content</div>
          <p style="color:var(--text2);font-size:0.85rem;line-height:1.8;">Content generated by our AI tools (such as resume summaries) is provided as a starting point only. NexaTools.io does not guarantee the accuracy, completeness, or suitability of any AI-generated content. Always review and verify before using professionally.</p>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">3. Tool Availability</div>
          <p style="color:var(--text2);font-size:0.85rem;line-height:1.8;">We strive to keep all tools available 24/7, but we do not guarantee uninterrupted access. NexaTools.io reserves the right to perform maintenance, updates, or changes at any time without prior notice.</p>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">4. External Links</div>
          <p style="color:var(--text2);font-size:0.85rem;line-height:1.8;">NexaTools.io may contain links to external websites such as Gumroad. We are not responsible for the content, privacy policies, or practices of any third-party websites.</p>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">5. User Responsibility</div>
          <p style="color:var(--text2);font-size:0.85rem;line-height:1.8;">You are fully responsible for how you use the tools and the content you produce. NexaTools.io accepts no liability for any losses, damages, or legal consequences arising from your use of this platform.</p>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 18px;">
          <div style="font-weight:700;margin-bottom:8px;font-size:0.9rem;">6. Contact</div>
          <p style="color:var(--text2);font-size:0.85rem;">Questions? Reach us at: <a href="mailto:pro@nexatools.io" style="color:var(--cyan);">pro@nexatools.io</a></p>
        </div>
      </div>
    `
  },

  contact: {
    title: '✉️ Contact Us',
    content: `
      <h2 style="font-family:var(--font-display);margin-bottom:16px;">✉️ Contact Us</h2>
      <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;margin-bottom:24px;">We'd love to hear from you — bugs, feedback, feature requests, or pro support.</p>
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 20px;">
          <div style="font-size:0.7rem;color:var(--muted2);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">General & Pro Support</div>
          <a href="mailto:pro@nexatools.io" style="color:var(--cyan);font-size:0.95rem;">pro@nexatools.io</a>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 20px;">
          <div style="font-size:0.7rem;color:var(--muted2);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Bug Reports</div>
          <a href="mailto:bugs@nexatools.io" style="color:var(--cyan);font-size:0.95rem;">bugs@nexatools.io</a>
        </div>
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px 20px;">
          <div style="font-size:0.7rem;color:var(--muted2);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Response Time</div>
          <p style="color:var(--text2);font-size:0.88rem;margin:0;">Usually within 24–48 hours on business days.</p>
        </div>
        <div style="background:var(--cyan-dim);border:1px solid var(--border3);border-radius:12px;padding:16px 20px;text-align:center;">
          <div style="font-size:0.85rem;color:var(--cyan);font-weight:600;margin-bottom:6px;">✅ All Tools Free</div>
          <p style="color:var(--text2);font-size:0.82rem;margin-bottom:12px;">Sab features bilkul free hain — koi subscription nahin.</p>
          <button class="btn btn-cyan" style="padding:8px 24px;" onclick="closeStaticModal();scrollToSection('.tools-section')">🚀 Start Building Free</button>
        </div>
      </div>
    `
  }
};

function openStaticModal(page) {
  const modal = $('static-modal');
  const content = $('static-modal-content');
  const data = staticPages[page];
  if (!modal || !content || !data) return;
  content.innerHTML = data.content;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  return false;
}

function closeStaticModal() {
  const modal = $('static-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function closeStaticModalOutside(e) {
  if (e.target === $('static-modal')) closeStaticModal();
}

function openPage(page) {
  if (page === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeModal(); closeStaticModal(); }
});

// ---------- Tool Tabs ----------
function switchTool(toolId, btn) {
  document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const panel = $('panel-' + toolId);
  if (panel) panel.classList.add('active');
  if (btn) btn.classList.add('active');
  if (toolId === 'logo') setTimeout(drawLogo, 80);
  if (toolId === 'bcard') setTimeout(drawBCard, 80);
  if (toolId === 'qr') setTimeout(genQR, 80);
  if (toolId === 'invoice') { if (!$('inv-date').value) $('inv-date').valueAsDate = new Date(); renderItems(); }
  if (toolId === 'scheduler') { if (!$('sch-date').value) $('sch-date').valueAsDate = new Date(); renderCalendar(); renderSchedList(); }
}

// ---------- RESUME BUILDER ----------
function initResume() {
  const accents = ['#bf5af2', '#00e5ff', '#30d158', '#ff453a', '#ffd60a', '#6a9fff'];
  const row = $('r-accent-row');
  if (row) {
    row.innerHTML = accents.map(c =>
      `<div class="swatch${resumeAccent === c ? ' active' : ''}" style="background:${c}" onclick="setResumeAccent('${c}',this)"></div>`
    ).join('');
  }
  buildResume();
}

function setResumeTemplate(tpl, el) {
  const proTemplates = ['bold', 'executive', 'creative', 'neon'];
  if (proTemplates.includes(tpl) && !requirePro('Premium Templates')) return;
  currentResumeTemplate = tpl;
  document.querySelectorAll('#panel-resume .shape-opts .shape-opt').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  buildResume();
}

function setResumeAccent(color, el) {
  resumeAccent = color;
  document.querySelectorAll('#r-accent-row .swatch').forEach(s => s.classList.remove('active'));
  if (el) el.classList.add('active');
  buildResume();
}

function buildResume() {
  const name  = ($('r-name')?.value  || '').trim();
  const title = ($('r-title')?.value || '').trim();
   const fontFamily = $('r-font-family')?.value || 'Georgia';
  const fontStyle  = $('r-font-style')?.value  || 'normal';
  if (!name && !title) { const out=$('resume-out'); if(out) out.innerHTML='<p class="empty-state">Fill the form above — resume will appear here ✨</p>'; return; }
  const email = ($('r-email')?.value || '').trim();
  const phone = ($('r-phone')?.value || '').trim();
  const city  = ($('r-city')?.value  || '').trim();
  const about = ($('r-about')?.value || '').trim();
  const skills= ($('r-skills')?.value|| '').trim();
  const exp   = ($('r-exp')?.value   || '').trim();
  const edu   = ($('r-edu')?.value   || '').trim();
  const proj  = ($('r-proj')?.value  || '').trim();

  const acc = resumeAccent;
  const tpl = currentResumeTemplate;
  const isPro = currentPlan === 'pro' || currentPlan === 'business';
  const contactParts = [email, phone, city].filter(Boolean);

  let html = '';

  // ==================== CLASSIC (FREE) ====================
  if (tpl === 'classic') {
    html = `
    <div style="font-family:Georgia,serif;background:#fff;color:#222;min-height:400px;">
      <div style="background:${acc};padding:32px;color:#fff;">
        <div style="font-size:2rem;font-weight:700;">${name}</div>
        <div style="font-size:1rem;opacity:0.9;margin-top:6px;">${title}</div>
        <div style="font-size:0.78rem;margin-top:8px;opacity:0.8;">${contactParts.join(' · ')}</div>
      </div>
      <div style="padding:28px;">
        ${about ? `<div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:${acc};border-bottom:2px solid ${acc};padding-bottom:4px;margin-bottom:10px;">Summary</div><p style="font-size:0.88rem;line-height:1.7;">${about}</p>` : ''}
        ${skills ? `<div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:${acc};border-bottom:2px solid ${acc};padding-bottom:4px;margin:20px 0 10px;">Skills</div>${skills.split(',').map(s=>`<span style="display:inline-block;background:${acc}22;border:1px solid ${acc}55;color:${acc};padding:3px 12px;border-radius:20px;margin:3px;font-size:0.78rem;">${s.trim()}</span>`).join('')}` : ''}
        ${exp ? `<div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:${acc};border-bottom:2px solid ${acc};padding-bottom:4px;margin:20px 0 10px;">Experience</div><p style="font-size:0.88rem;line-height:1.7;white-space:pre-wrap;">${exp}</p>` : ''}
        ${edu ? `<div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:${acc};border-bottom:2px solid ${acc};padding-bottom:4px;margin:20px 0 10px;">Education</div><p style="font-size:0.88rem;line-height:1.7;white-space:pre-wrap;">${edu}</p>` : ''}
        ${proj ? `<div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:${acc};border-bottom:2px solid ${acc};padding-bottom:4px;margin:20px 0 10px;">Projects</div><p style="font-size:0.88rem;line-height:1.7;white-space:pre-wrap;">${proj}</p>` : ''}
      </div>
    </div>`;

  // ==================== MODERN (PRO) ====================
  } else if (tpl === 'modern') {
    html = `
    <div style="font-family:'Arial',sans-serif;background:#fff;color:#222;min-height:400px;">
      <div style="background:linear-gradient(135deg,#0a0a1a,${acc});padding:36px;color:#fff;position:relative;overflow:hidden;">
        <div style="position:absolute;right:-30px;top:-30px;width:150px;height:150px;background:rgba(255,255,255,0.05);border-radius:50%;"></div>
        <div style="position:absolute;right:30px;bottom:-40px;width:100px;height:100px;background:rgba(255,255,255,0.05);border-radius:50%;"></div>
        <div style="font-size:2.2rem;font-weight:900;letter-spacing:-1px;">${name}</div>
        <div style="font-size:1rem;color:${acc};margin-top:6px;font-weight:600;">${title}</div>
        <div style="display:flex;gap:16px;margin-top:12px;font-size:0.78rem;opacity:0.8;flex-wrap:wrap;">${contactParts.map(c=>`<span>● ${c}</span>`).join('')}</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 2fr;min-height:300px;">
        <div style="background:#f8f8ff;padding:24px;border-right:3px solid ${acc}22;">
          ${skills ? `<div style="font-size:0.65rem;font-weight:800;text-transform:uppercase;letter-spacing:2px;color:${acc};margin-bottom:12px;">Skills</div>${skills.split(',').map(s=>`<div style="background:#fff;border-left:3px solid ${acc};padding:6px 10px;margin-bottom:6px;font-size:0.8rem;border-radius:0 6px 6px 0;">${s.trim()}</div>`).join('')}` : ''}
          ${edu ? `<div style="font-size:0.65rem;font-weight:800;text-transform:uppercase;letter-spacing:2px;color:${acc};margin:16px 0 10px;">Education</div><p style="font-size:0.8rem;line-height:1.6;white-space:pre-wrap;">${edu}</p>` : ''}
        </div>
        <div style="padding:24px;">
          ${about ? `<div style="font-size:0.65rem;font-weight:800;text-transform:uppercase;letter-spacing:2px;color:${acc};margin-bottom:10px;">About</div><p style="font-size:0.88rem;line-height:1.7;margin-bottom:20px;">${about}</p>` : ''}
          ${exp ? `<div style="font-size:0.65rem;font-weight:800;text-transform:uppercase;letter-spacing:2px;color:${acc};margin-bottom:10px;">Experience</div><p style="font-size:0.88rem;line-height:1.7;white-space:pre-wrap;">${exp}</p>` : ''}
          ${proj ? `<div style="font-size:0.65rem;font-weight:800;text-transform:uppercase;letter-spacing:2px;color:${acc};margin-top:16px;margin-bottom:10px;">Projects</div><p style="font-size:0.88rem;line-height:1.7;white-space:pre-wrap;">${proj}</p>` : ''}
        </div>
      </div>
    </div>`;

  // ==================== MINIMAL (PRO) ====================
  } else if (tpl === 'minimal') {
    html = `
    <div style="font-family:'Helvetica',sans-serif;background:#fff;color:#111;min-height:400px;padding:40px;">
      <div style="border-bottom:3px solid ${acc};padding-bottom:20px;margin-bottom:24px;">
        <div style="font-size:2.4rem;font-weight:300;letter-spacing:-1px;color:#111;">${name}</div>
        <div style="font-size:1rem;color:${acc};margin-top:4px;font-weight:500;">${title}</div>
        <div style="font-size:0.78rem;color:#888;margin-top:8px;">${contactParts.join('  ·  ')}</div>
      </div>
      ${about ? `<p style="font-size:0.9rem;line-height:1.8;color:#444;margin-bottom:24px;font-style:italic;">${about}</p>` : ''}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;">
        <div>
          ${skills ? `<div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:#999;margin-bottom:12px;">Skills</div>${skills.split(',').map(s=>`<div style="padding:4px 0;border-bottom:1px solid #f0f0f0;font-size:0.85rem;color:#333;">${s.trim()}</div>`).join('')}` : ''}
        </div>
        <div>
          ${exp ? `<div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:#999;margin-bottom:12px;">Experience</div><p style="font-size:0.85rem;line-height:1.7;color:#333;white-space:pre-wrap;">${exp}</p>` : ''}
          ${edu ? `<div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:#999;margin:16px 0 12px;">Education</div><p style="font-size:0.85rem;line-height:1.7;color:#333;white-space:pre-wrap;">${edu}</p>` : ''}
        </div>
      </div>
      ${proj ? `<div style="margin-top:24px;"><div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:#999;margin-bottom:12px;">Projects</div><p style="font-size:0.85rem;line-height:1.7;white-space:pre-wrap;">${proj}</p></div>` : ''}
    </div>`;

  // ==================== BOLD (PRO) ====================
  } else if (tpl === 'bold') {
    html = `
    <div style="font-family:'Arial Black',sans-serif;background:#0a0a0a;color:#fff;min-height:400px;">
      <div style="padding:36px;border-left:8px solid ${acc};">
        <div style="font-size:2.5rem;font-weight:900;text-transform:uppercase;letter-spacing:-1px;">${name}</div>
        <div style="font-size:1rem;color:${acc};margin-top:6px;font-weight:700;text-transform:uppercase;letter-spacing:2px;">${title}</div>
        <div style="font-size:0.75rem;color:#888;margin-top:10px;">${contactParts.join(' | ')}</div>
      </div>
      <div style="padding:0 36px 36px;">
        ${about ? `<div style="font-size:0.65rem;font-weight:900;text-transform:uppercase;letter-spacing:3px;color:${acc};margin-bottom:10px;">About</div><p style="font-size:0.88rem;line-height:1.7;color:#ccc;">${about}</p>` : ''}
        ${skills ? `<div style="font-size:0.65rem;font-weight:900;text-transform:uppercase;letter-spacing:3px;color:${acc};margin:20px 0 10px;">Skills</div><div>${skills.split(',').map(s=>`<span style="display:inline-block;background:${acc};color:#000;padding:4px 14px;border-radius:4px;margin:3px;font-size:0.78rem;font-weight:700;">${s.trim()}</span>`).join('')}</div>` : ''}
        ${exp ? `<div style="font-size:0.65rem;font-weight:900;text-transform:uppercase;letter-spacing:3px;color:${acc};margin:20px 0 10px;">Experience</div><p style="font-size:0.88rem;line-height:1.7;color:#ccc;white-space:pre-wrap;">${exp}</p>` : ''}
        ${edu ? `<div style="font-size:0.65rem;font-weight:900;text-transform:uppercase;letter-spacing:3px;color:${acc};margin:20px 0 10px;">Education</div><p style="font-size:0.88rem;line-height:1.7;color:#ccc;white-space:pre-wrap;">${edu}</p>` : ''}
        ${proj ? `<div style="font-size:0.65rem;font-weight:900;text-transform:uppercase;letter-spacing:3px;color:${acc};margin:20px 0 10px;">Projects</div><p style="font-size:0.88rem;line-height:1.7;color:#ccc;white-space:pre-wrap;">${proj}</p>` : ''}
      </div>
    </div>`;

  // ==================== EXECUTIVE (PRO) ====================
  } else if (tpl === 'executive') {
    html = `
    <div style="font-family:Georgia,serif;background:#fff;color:#222;min-height:400px;">
      <div style="background:#1a1a2e;padding:40px;text-align:center;position:relative;">
        <div style="width:60px;height:3px;background:${acc};margin:0 auto 20px;"></div>
        <div style="font-size:2.2rem;font-weight:700;color:#fff;letter-spacing:2px;text-transform:uppercase;">${name}</div>
        <div style="font-size:0.85rem;color:${acc};margin-top:8px;letter-spacing:4px;text-transform:uppercase;">${title}</div>
        <div style="width:60px;height:3px;background:${acc};margin:20px auto 0;"></div>
        <div style="font-size:0.75rem;color:#888;margin-top:16px;">${contactParts.join(' · ')}</div>
      </div>
      <div style="padding:36px;max-width:700px;margin:0 auto;">
        ${about ? `<p style="font-size:0.9rem;line-height:1.9;color:#444;text-align:center;font-style:italic;border-bottom:1px solid #eee;padding-bottom:24px;margin-bottom:24px;">"${about}"</p>` : ''}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;">
          <div>
            ${skills ? `<div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:${acc};margin-bottom:14px;padding-bottom:6px;border-bottom:2px solid ${acc};">Core Skills</div>${skills.split(',').map(s=>`<div style="display:flex;align-items:center;gap:8px;padding:5px 0;font-size:0.85rem;border-bottom:1px solid #f5f5f5;"><span style="color:${acc};font-size:1rem;">◆</span>${s.trim()}</div>`).join('')}` : ''}
          </div>
          <div>
            ${exp ? `<div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:${acc};margin-bottom:14px;padding-bottom:6px;border-bottom:2px solid ${acc};">Experience</div><p style="font-size:0.85rem;line-height:1.8;white-space:pre-wrap;">${exp}</p>` : ''}
            ${edu ? `<div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:${acc};margin:16px 0 14px;padding-bottom:6px;border-bottom:2px solid ${acc};">Education</div><p style="font-size:0.85rem;line-height:1.8;white-space:pre-wrap;">${edu}</p>` : ''}
          </div>
        </div>
        ${proj ? `<div style="margin-top:24px;"><div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:${acc};margin-bottom:14px;padding-bottom:6px;border-bottom:2px solid ${acc};">Projects</div><p style="font-size:0.85rem;line-height:1.8;white-space:pre-wrap;">${proj}</p></div>` : ''}
      </div>
    </div>`;

  // ==================== CREATIVE SIDEBAR (PRO) ====================
  } else if (tpl === 'creative') {
    html = `
    <div style="font-family:Arial,sans-serif;background:#fff;display:grid;grid-template-columns:260px 1fr;min-height:500px;">
      <div style="background:linear-gradient(180deg,#1a1a2e,#0d0d20);padding:32px 24px;color:#fff;">
        <div style="width:70px;height:70px;background:${acc};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.8rem;font-weight:900;color:#000;margin-bottom:20px;">${name.charAt(0)}</div>
        <div style="font-size:1.4rem;font-weight:700;line-height:1.2;">${name}</div>
        <div style="font-size:0.8rem;color:${acc};margin-top:6px;">${title}</div>
        <div style="height:2px;background:${acc}44;margin:20px 0;"></div>
        <div style="font-size:0.6rem;text-transform:uppercase;letter-spacing:2px;color:${acc};margin-bottom:10px;">Contact</div>
        ${contactParts.map(c=>`<div style="font-size:0.75rem;color:#aaa;margin-bottom:6px;">● ${c}</div>`).join('')}
        ${skills ? `<div style="height:2px;background:${acc}44;margin:20px 0;"></div><div style="font-size:0.6rem;text-transform:uppercase;letter-spacing:2px;color:${acc};margin-bottom:12px;">Skills</div>${skills.split(',').map(s=>`<div style="margin-bottom:8px;"><div style="font-size:0.75rem;margin-bottom:3px;">${s.trim()}</div><div style="height:3px;background:#333;border-radius:2px;"><div style="height:100%;width:80%;background:${acc};border-radius:2px;"></div></div></div>`).join('')}` : ''}
      </div>
      <div style="padding:32px;">
        ${about ? `<div style="font-size:0.6rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:${acc};margin-bottom:10px;">About Me</div><p style="font-size:0.88rem;line-height:1.7;color:#444;margin-bottom:24px;">${about}</p>` : ''}
        ${exp ? `<div style="font-size:0.6rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:${acc};margin-bottom:14px;">Experience</div><p style="font-size:0.88rem;line-height:1.7;white-space:pre-wrap;color:#333;">${exp}</p>` : ''}
        ${edu ? `<div style="font-size:0.6rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:${acc};margin:20px 0 14px;">Education</div><p style="font-size:0.88rem;line-height:1.7;white-space:pre-wrap;color:#333;">${edu}</p>` : ''}
        ${proj ? `<div style="font-size:0.6rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:${acc};margin:20px 0 14px;">Projects</div><p style="font-size:0.88rem;line-height:1.7;white-space:pre-wrap;color:#333;">${proj}</p>` : ''}
      </div>
    </div>`;

  // ==================== NEON DARK (PRO) ====================
  } else if (tpl === 'neon') {
    html = `
    <div style="font-family:'Courier New',monospace;background:#050510;color:#fff;min-height:400px;padding:36px;">
      <div style="border:1px solid ${acc}44;border-radius:12px;padding:28px;margin-bottom:24px;position:relative;">
        <div style="position:absolute;top:-1px;left:20px;right:20px;height:2px;background:linear-gradient(90deg,transparent,${acc},transparent);"></div>
        <div style="font-size:2rem;font-weight:700;color:#fff;text-shadow:0 0 20px ${acc};">${name}</div>
        <div style="font-size:0.9rem;color:${acc};margin-top:6px;text-shadow:0 0 10px ${acc};">${title}</div>
        <div style="font-size:0.72rem;color:#666;margin-top:10px;">${contactParts.join(' · ')}</div>
      </div>
      ${about ? `<div style="font-size:0.6rem;color:${acc};text-transform:uppercase;letter-spacing:3px;margin-bottom:8px;">// about</div><p style="font-size:0.85rem;line-height:1.7;color:#aaa;margin-bottom:20px;border-left:2px solid ${acc}44;padding-left:16px;">${about}</p>` : ''}
      ${skills ? `<div style="font-size:0.6rem;color:${acc};text-transform:uppercase;letter-spacing:3px;margin-bottom:10px;">// skills</div><div style="margin-bottom:20px;">${skills.split(',').map(s=>`<span style="display:inline-block;background:${acc}15;border:1px solid ${acc}44;color:${acc};padding:4px 12px;border-radius:6px;margin:3px;font-size:0.78rem;">${s.trim()}</span>`).join('')}</div>` : ''}
      ${exp ? `<div style="font-size:0.6rem;color:${acc};text-transform:uppercase;letter-spacing:3px;margin-bottom:8px;">// experience</div><p style="font-size:0.85rem;line-height:1.7;color:#aaa;margin-bottom:20px;white-space:pre-wrap;">${exp}</p>` : ''}
      ${edu ? `<div style="font-size:0.6rem;color:${acc};text-transform:uppercase;letter-spacing:3px;margin-bottom:8px;">// education</div><p style="font-size:0.85rem;line-height:1.7;color:#aaa;white-space:pre-wrap;">${edu}</p>` : ''}
      ${proj ? `<div style="font-size:0.6rem;color:${acc};text-transform:uppercase;letter-spacing:3px;margin:20px 0 8px;">// projects</div><p style="font-size:0.85rem;line-height:1.7;color:#aaa;white-space:pre-wrap;">${proj}</p>` : ''}
      <div style="margin-top:24px;font-size:0.65rem;color:#333;text-align:right;">made with nexatools.io</div>
    </div>`;
  }

  const out = $('resume-out');
  if (out) out.innerHTML = html || '<p class="empty-state">Fill the form above — resume will appear here ✨</p>';
}
function aiWriteResume() {
  const title = $('r-title')?.value?.trim();
  const thinking = $('ai-resume-thinking');
  const btn = document.querySelector('#panel-resume .btn-purple');
  if (!title) { alert('Please enter your Job Title first!'); return; }
  if (btn) btn.disabled = true;
  if (thinking) thinking.style.display = 'flex';
  setTimeout(() => {
    const summaries = {
      default:   `Experienced ${title} with a proven track record...`,
      developer: `Full-stack developer with expertise in modern web technologies...`,
      designer:  `Creative designer blending aesthetics with functionality...`,
      manager:   `Results-oriented manager with experience leading high-performing teams...`
    };
    const tl = title.toLowerCase();
    let summary = summaries.default;
    if (tl.includes('develop') || tl.includes('engineer')) summary = summaries.developer;
    else if (tl.includes('design') || tl.includes('ui') || tl.includes('ux')) summary = summaries.designer;
    else if (tl.includes('manager') || tl.includes('lead')) summary = summaries.manager;
    if ($('r-about')) $('r-about').value = summary;
    buildResume();
    if (btn) btn.disabled = false;
    if (thinking) thinking.style.display = 'none';
  }, 1400);
}

function printResume() {
  const content = $('resume-out')?.innerHTML;
  if (!content || content.includes('empty-state')) { 
    alert('Please fill in your resume details first!'); 
    return; 
  }
  const isPro = currentPlan === 'pro' || currentPlan === 'business';
  const watermark = isPro ? '' : `
    <div style="position:fixed;bottom:20px;right:20px;
    background:rgba(0,0,0,0.08);padding:8px 16px;
    border-radius:8px;font-size:11px;color:#999;
    font-family:Arial,sans-serif;">
    Made with NexaTools.io — Upgrade to Pro to remove
    </div>`;

  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head>
  <title>Resume — NexaTools.io</title>
  <style>
    body{margin:0;padding:0;font-family:Georgia,serif;}
    h2{color:#0a0a1e !important;}
    *{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    @media print{body{margin:0;}}
  </style>
  </head><body>
  ${content}
  ${watermark}
  <script>window.onload=function(){window.print();}<\/script>
  </body></html>`);
  win.document.close();
}
// ---------- Billing GENERATOR ----------
function renderItems() {
  const wrap = $('items-wrap');
  if (!wrap) return;
  wrap.innerHTML = invoiceItems.map((item, i) => `
    <div class="item-row-inp">
      <input placeholder="Description" value="${escHtml(item.desc)}" oninput="invoiceItems[${i}].desc=this.value;generateInvoice()">
      <input type="number" placeholder="Qty" value="${item.qty}" min="1" oninput="invoiceItems[${i}].qty=+this.value||1;generateInvoice()">
      <input type="number" placeholder="Rate $" value="${item.rate}" min="0" oninput="invoiceItems[${i}].rate=+this.value||0;generateInvoice()">
      <button class="remove-btn" onclick="removeItem(${i})">✕</button>
    </div>`).join('');
}

function addItem() {
  invoiceItems.push({ desc: 'New Service', qty: 1, rate: 50 });
  renderItems();
  generateInvoice();
}

function removeItem(i) {
  if (invoiceItems.length === 1) { alert('At least one item required.'); return; }
  invoiceItems.splice(i, 1);
  renderItems();
  generateInvoice();
}
function setInvTemplate(tpl, el) {
  const proTemplates = ['gradient', 'luxury'];
  if (proTemplates.includes(tpl) && !requirePro('Premium Invoice Templates')) return;
  const inp = document.createElement('input');
  inp.id = 'inv-template';
  inp.type = 'hidden';
  inp.value = tpl;
  const old = $('inv-template');
  if (old) old.remove();
  document.body.appendChild(inp);
  document.querySelectorAll('#panel-invoice .shape-opts .shape-opt').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  generateInvoice();
}
function generateInvoice() {
     const invFont  = $('inv-font-family')?.value || 'Arial';
  const invStyle = $('inv-font-style')?.value  || 'normal';
  const from  = $('inv-from')?.value?.trim() || 'Your Company';
  const email = $('inv-email')?.value?.trim() || '';
  const phone = $('inv-phone')?.value?.trim() || '';
  const to    = $('inv-to')?.value?.trim()   || 'Client Name';
  const num   = $('inv-num')?.value?.trim()  || 'INV-001';
  const date  = $('inv-date')?.value         || new Date().toISOString().slice(0, 10);
  const subtotal = invoiceItems.reduce((s, i) => s + (i.qty * i.rate), 0);
  const isPro = currentPlan === 'pro' || currentPlan === 'business';
  const invTpl = $('inv-template')?.value || 'basic';

  const rows = invoiceItems.map(item => `
    <tr>
      <td>${escHtml(item.desc)}</td>
      <td style="text-align:center;">${item.qty}</td>
      <td>$${Number(item.rate).toFixed(2)}</td>
      <td><strong>$${(item.qty * item.rate).toFixed(2)}</strong></td>
    </tr>`).join('');

  let html = '';

  // ==================== BASIC WHITE (FREE) ====================
  if (invTpl === 'basic') {
    html = `
    <div style="font-family:Arial,sans-serif;background:#fff;color:#111;padding:32px;border-radius:8px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:32px;flex-wrap:wrap;gap:20px;">
        <div>
          <div style="font-size:2rem;font-weight:800;color:#6a0dad;">Billing</div>
          <div style="font-size:0.85rem;color:#444;margin-top:6px;">${escHtml(from)}</div>
          ${email ? `<div style="font-size:0.78rem;color:#777;">${escHtml(email)}</div>` : ''}
          ${phone ? `<div style="font-size:0.78rem;color:#777;">${escHtml(phone)}</div>` : ''}
        </div>
        <div style="text-align:right;font-size:0.85rem;color:#555;line-height:1.8;">
          <strong>${escHtml(num)}</strong><br>${date}<br><br>
          <strong>Bill To:</strong><br>${escHtml(to)}
        </div>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
        <thead><tr style="background:#f8f7ff;">
          <th style="padding:10px;text-align:left;font-size:0.75rem;text-transform:uppercase;color:#888;">Description</th>
          <th style="padding:10px;text-align:center;font-size:0.75rem;text-transform:uppercase;color:#888;">Qty</th>
          <th style="padding:10px;text-align:left;font-size:0.75rem;text-transform:uppercase;color:#888;">Rate</th>
          <th style="padding:10px;text-align:left;font-size:0.75rem;text-transform:uppercase;color:#888;">Amount</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div style="text-align:right;font-size:1.4rem;font-weight:800;color:#6a0dad;">Total: $${subtotal.toFixed(2)}</div>
      <div style="margin-top:24px;font-size:0.78rem;color:#aaa;text-align:center;border-top:1px solid #eee;padding-top:12px;">
        Thank you for your business! • ${isPro ? '' : 'Created with NexaTools.io'}
      </div>
    </div>`;

  // ==================== CORPORATE DARK (PRO) ====================
  } else if (invTpl === 'corporate') {
    html = `
    <div style="font-family:Arial,sans-serif;background:#0a0a1a;color:#fff;padding:36px;border-radius:8px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:36px;flex-wrap:wrap;gap:20px;">
        <div>
          <div style="font-size:2.2rem;font-weight:900;background:linear-gradient(135deg,#00e5ff,#bf5af2);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">INVOICE</div>
          <div style="font-size:0.88rem;color:#aaa;margin-top:8px;">${escHtml(from)}</div>
          ${email ? `<div style="font-size:0.78rem;color:#666;">${escHtml(email)}</div>` : ''}
          ${phone ? `<div style="font-size:0.78rem;color:#666;">${escHtml(phone)}</div>` : ''}
        </div>
        <div style="text-align:right;font-size:0.85rem;color:#aaa;line-height:1.8;">
          <div style="background:#1a1a2e;padding:16px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);">
            <strong style="color:#fff;">${escHtml(num)}</strong><br>
            <span style="color:#00e5ff;">${date}</span><br><br>
            <strong style="color:#fff;">Bill To:</strong><br>${escHtml(to)}
          </div>
        </div>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <thead><tr style="background:#1a1a2e;">
          <th style="padding:12px;text-align:left;font-size:0.7rem;text-transform:uppercase;letter-spacing:1px;color:#00e5ff;">Description</th>
          <th style="padding:12px;text-align:center;font-size:0.7rem;text-transform:uppercase;letter-spacing:1px;color:#00e5ff;">Qty</th>
          <th style="padding:12px;text-align:left;font-size:0.7rem;text-transform:uppercase;letter-spacing:1px;color:#00e5ff;">Rate</th>
          <th style="padding:12px;text-align:left;font-size:0.7rem;text-transform:uppercase;letter-spacing:1px;color:#00e5ff;">Amount</th>
        </tr></thead>
        <tbody>${invoiceItems.map(item=>`
          <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
            <td style="padding:12px;font-size:0.88rem;">${escHtml(item.desc)}</td>
            <td style="padding:12px;text-align:center;font-size:0.88rem;">${item.qty}</td>
            <td style="padding:12px;font-size:0.88rem;">$${Number(item.rate).toFixed(2)}</td>
            <td style="padding:12px;font-size:0.88rem;"><strong style="color:#00e5ff;">$${(item.qty*item.rate).toFixed(2)}</strong></td>
          </tr>`).join('')}
        </tbody>
      </table>
      <div style="text-align:right;">
        <div style="display:inline-block;background:linear-gradient(135deg,#00e5ff,#bf5af2);padding:16px 28px;border-radius:8px;">
          <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:1px;color:rgba(0,0,0,0.7);">Total Amount</div>
          <div style="font-size:1.8rem;font-weight:900;color:#000;">$${subtotal.toFixed(2)}</div>
        </div>
      </div>
      <div style="margin-top:24px;font-size:0.75rem;color:#444;text-align:center;border-top:1px solid rgba(255,255,255,0.05);padding-top:16px;">
        Thank you for your business!
      </div>
    </div>`;

  // ==================== GRADIENT PREMIUM (PRO) ====================
  } else if (invTpl === 'gradient') {
    html = `
    <div style="font-family:Georgia,serif;background:#fff;color:#111;border-radius:8px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#667eea,#764ba2);padding:36px;color:#fff;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:20px;">
          <div>
            <div style="font-size:2.5rem;font-weight:700;letter-spacing:-1px;">Invoice</div>
            <div style="font-size:0.88rem;opacity:0.85;margin-top:6px;">${escHtml(from)}</div>
            ${email ? `<div style="font-size:0.78rem;opacity:0.7;">${escHtml(email)}</div>` : ''}
          </div>
          <div style="text-align:right;font-size:0.85rem;opacity:0.9;line-height:1.8;">
            <div style="font-size:1.4rem;font-weight:700;">${escHtml(num)}</div>
            ${date}<br><br>To: <strong>${escHtml(to)}</strong>
          </div>
        </div>
      </div>
      <div style="padding:32px;">
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <thead><tr>
            <th style="padding:12px;text-align:left;font-size:0.75rem;text-transform:uppercase;color:#764ba2;border-bottom:2px solid #764ba2;">Description</th>
            <th style="padding:12px;text-align:center;font-size:0.75rem;text-transform:uppercase;color:#764ba2;border-bottom:2px solid #764ba2;">Qty</th>
            <th style="padding:12px;text-align:left;font-size:0.75rem;text-transform:uppercase;color:#764ba2;border-bottom:2px solid #764ba2;">Rate</th>
            <th style="padding:12px;text-align:left;font-size:0.75rem;text-transform:uppercase;color:#764ba2;border-bottom:2px solid #764ba2;">Amount</th>
          </tr></thead>
          <tbody>${invoiceItems.map(item=>`
            <tr style="border-bottom:1px solid #f0f0f0;">
              <td style="padding:12px;font-size:0.88rem;">${escHtml(item.desc)}</td>
              <td style="padding:12px;text-align:center;">${item.qty}</td>
              <td style="padding:12px;">$${Number(item.rate).toFixed(2)}</td>
              <td style="padding:12px;"><strong style="color:#764ba2;">$${(item.qty*item.rate).toFixed(2)}</strong></td>
            </tr>`).join('')}
          </tbody>
        </table>
        <div style="text-align:right;padding:20px;background:linear-gradient(135deg,#667eea22,#764ba222);border-radius:8px;">
          <div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:1px;color:#764ba2;">Total Due</div>
          <div style="font-size:2rem;font-weight:700;color:#764ba2;">$${subtotal.toFixed(2)}</div>
        </div>
      </div>
    </div>`;

  // ==================== MINIMAL LUXURY (PRO) ====================
  } else if (invTpl === 'luxury') {
    html = `
    <div style="font-family:'Georgia',serif;background:#fafaf8;color:#1a1a1a;padding:48px;border-radius:8px;border:1px solid #e8e8e0;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:48px;flex-wrap:wrap;gap:20px;">
        <div>
          <div style="font-size:0.7rem;letter-spacing:6px;text-transform:uppercase;color:#999;margin-bottom:12px;">Invoice</div>
          <div style="font-size:1.8rem;font-weight:300;letter-spacing:-0.5px;">${escHtml(from)}</div>
          ${email ? `<div style="font-size:0.8rem;color:#888;margin-top:4px;">${escHtml(email)}</div>` : ''}
          ${phone ? `<div style="font-size:0.8rem;color:#888;">${escHtml(phone)}</div>` : ''}
        </div>
        <div style="text-align:right;">
          <div style="font-size:0.7rem;letter-spacing:4px;text-transform:uppercase;color:#999;">Billed To</div>
          <div style="font-size:1.2rem;font-weight:400;margin-top:8px;">${escHtml(to)}</div>
          <div style="font-size:0.8rem;color:#888;margin-top:4px;">${escHtml(num)} · ${date}</div>
        </div>
      </div>
      <div style="height:1px;background:linear-gradient(90deg,#1a1a1a,transparent);margin-bottom:32px;"></div>
      <table style="width:100%;border-collapse:collapse;margin-bottom:32px;">
        <thead><tr>
          <th style="padding:8px 0;text-align:left;font-size:0.65rem;letter-spacing:3px;text-transform:uppercase;color:#999;font-weight:400;border-bottom:1px solid #e8e8e0;">Service</th>
          <th style="padding:8px 0;text-align:center;font-size:0.65rem;letter-spacing:3px;text-transform:uppercase;color:#999;font-weight:400;border-bottom:1px solid #e8e8e0;">Qty</th>
          <th style="padding:8px 0;text-align:left;font-size:0.65rem;letter-spacing:3px;text-transform:uppercase;color:#999;font-weight:400;border-bottom:1px solid #e8e8e0;">Rate</th>
          <th style="padding:8px 0;text-align:right;font-size:0.65rem;letter-spacing:3px;text-transform:uppercase;color:#999;font-weight:400;border-bottom:1px solid #e8e8e0;">Amount</th>
        </tr></thead>
        <tbody>${invoiceItems.map(item=>`
          <tr>
            <td style="padding:14px 0;font-size:0.9rem;border-bottom:1px solid #f0f0e8;">${escHtml(item.desc)}</td>
            <td style="padding:14px 0;text-align:center;font-size:0.9rem;border-bottom:1px solid #f0f0e8;">${item.qty}</td>
            <td style="padding:14px 0;font-size:0.9rem;border-bottom:1px solid #f0f0e8;">$${Number(item.rate).toFixed(2)}</td>
            <td style="padding:14px 0;text-align:right;font-size:0.9rem;border-bottom:1px solid #f0f0e8;">$${(item.qty*item.rate).toFixed(2)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
      <div style="display:flex;justify-content:flex-end;">
        <div style="text-align:right;">
          <div style="font-size:0.65rem;letter-spacing:4px;text-transform:uppercase;color:#999;">Total</div>
          <div style="font-size:2.5rem;font-weight:300;letter-spacing:-1px;margin-top:4px;">$${subtotal.toFixed(2)}</div>
        </div>
      </div>
      <div style="margin-top:48px;font-size:0.72rem;color:#bbb;text-align:center;letter-spacing:2px;text-transform:uppercase;">
        Thank you
      </div>
    </div>`;
  }

const out = $('invoice-out');
  if (out && invoiceGenerated) out.innerHTML = html || '<p class="empty-state">Fill details and click Generate ✨</p>';
}
let invoiceGenerated = false;
function triggerGenerateInvoice() {
  invoiceGenerated = true;
  generateInvoice();
}
function printInvoice() {
  const isPro = currentPlan === 'pro' || currentPlan === 'business';
  const watermark = isPro ? '' : `
    <div style="position:fixed;bottom:20px;right:20px;
    background:rgba(0,0,0,0.08);padding:8px 16px;
    border-radius:8px;font-size:11px;color:#999;
    font-family:Arial,sans-serif;">
    Made with NexaTools.io — Upgrade to Pro to remove
    </div>`;

  const html = $('invoice-out')?.innerHTML;
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head>
  <title>Billing — NexaTools.io</title>
  <style>
    body{font-family:Arial,sans-serif;padding:40px;max-width:820px;margin:auto;color:#222;}
    .inv-brand{font-size:2rem;font-weight:800;color:#6a0dad;}
    .inv-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:28px;}
    .inv-meta{text-align:right;font-size:0.88rem;line-height:1.7;}
    .inv-table{width:100%;border-collapse:collapse;margin:20px 0;}
    .inv-table th,.inv-table td{padding:10px 14px;border-bottom:1px solid #eee;text-align:left;}
    .inv-table th{background:#f7f7f7;font-weight:700;}
    .inv-totals{text-align:right;margin-top:16px;}
    .inv-total-line{font-size:1.5rem;font-weight:800;color:#6a0dad;}
    .inv-note{margin-top:28px;font-size:0.8rem;color:#999;text-align:center;}
    *{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    @media print{body{padding:20px;}}
  </style>
  </head><body>
  ${html}
  ${watermark}
  <script>window.onload=function(){window.print();}<\/script>
  </body></html>`);
  win.document.close();
}

// ---------- SOCIAL MEDIA SCHEDULER ----------
function schedPost() {
  const cap  = $('sch-cap')?.value?.trim();
  const plat = $('sch-plat')?.value;
  const date = $('sch-date')?.value;
  const time = $('sch-time')?.value || '10:00';
  if (!cap)  { alert('Please enter a post caption!'); return; }
  if (!date) { alert('Please select a date!'); return; }
  scheduledPosts.push({ cap, plat, date, time, id: Date.now() });
  if ($('sch-cap')) $('sch-cap').value = '';
  renderSchedList();
  renderCalendar();
}

function removePost(id) {
  scheduledPosts = scheduledPosts.filter(p => p.id !== id);
  renderSchedList();
  renderCalendar();
}

function renderSchedList() {
  const list = $('sched-list');
  if (!list) return;
  if (scheduledPosts.length === 0) { list.innerHTML = '<p class="empty-state">No posts scheduled yet.</p>'; return; }
  const platColors = { Instagram:'#e1306c', Facebook:'#1877f2', 'Twitter/X':'#1da1f2', LinkedIn:'#0a66c2' };
  list.innerHTML = scheduledPosts.slice().reverse().map(p => `
    <div class="sched-item">
      <div>
        <div style="font-size:0.88rem;">${escHtml(p.cap.substring(0,100))}${p.cap.length>100?'…':''}</div>
        <div style="font-size:0.72rem;color:var(--muted2);margin-top:4px;">📅 ${p.date} · ⏰ ${p.time}</div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="background:${platColors[p.plat]||'#555'};color:#fff;font-size:0.65rem;padding:3px 10px;border-radius:20px;">${escHtml(p.plat)}</span>
        <button onclick="removePost(${p.id})">✕</button>
      </div>
    </div>`).join('');
}

function renderCalendar() {
  const grid = $('cal-grid');
  if (!grid) return;
  const now = new Date(), year = now.getFullYear(), month = now.getMonth();

  // Dynamic heading
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const heading = document.querySelector('#panel-scheduler .output-label');
  if(heading) heading.textContent = monthNames[month] + ' ' + year;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = now.getDate();
  const scheduledDays = new Set(scheduledPosts.map(p => {
    const d = new Date(p.date);
    if (d.getFullYear()===year && d.getMonth()===month) return d.getDate();
    return null;
  }).filter(Boolean));
  let cells = '';
  for (let i = 0; i < firstDay; i++) cells += '<div class="cal-cell"></div>';
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === today, hasPosts = scheduledDays.has(d);
    cells += `<div class="cal-cell${isToday?' today':''}${hasPosts?' has-post':''}">${d}${hasPosts?'<span class="cal-dot"></span>':''}</div>`;
  }
  grid.innerHTML = cells;
}

// ---------- LOGO MAKER ----------
function initLogo() {
  const bgColors  = ['#00e5ff','#bf5af2','#30d158','#ffd60a','#0d0d14','#ffffff'];
  const txtColors = ['#ffffff','#000000','#00e5ff','#bf5af2','#30d158'];
  const icons = ['🚀','⚡','💡','🎯','🔥','✨','🌟','💎','🏆','🦋'];
  const bgRow = $('lbg-row');
  if (bgRow) bgRow.innerHTML = bgColors.map(c =>
    `<div class="swatch${logoBg===c?' active':''}" style="background:${c}" onclick="setLogoBg('${c}',this)"></div>`).join('');
  const txtRow = $('ltxt-row');
  if (txtRow) txtRow.innerHTML = txtColors.map(c =>
    `<div class="swatch${logoTxt===c?' active':''}" style="background:${c}" onclick="setLogoTxt('${c}',this)"></div>`).join('');
  const iconsEl = $('l-icons');
  if (iconsEl) iconsEl.innerHTML = icons.map(ic =>
    `<button class="icon-opt${logoIcon===ic?' active':''}" onclick="setLogoIcon('${ic}',this)">${ic}</button>`).join('');
  drawLogo();
}

function setLogoBg(c,el){ logoBg=c; document.querySelectorAll('#lbg-row .swatch').forEach(s=>s.classList.remove('active')); if(el)el.classList.add('active'); drawLogo(); }
function setLogoTxt(c,el){ logoTxt=c; document.querySelectorAll('#ltxt-row .swatch').forEach(s=>s.classList.remove('active')); if(el)el.classList.add('active'); drawLogo(); }
function setLS(shape,el){ logoShape=shape; document.querySelectorAll('#panel-logo .shape-opts .shape-opt').forEach(b=>b.classList.remove('active')); if(el)el.classList.add('active'); drawLogo(); }
function setLogoIcon(ic,el){ logoIcon=ic; document.querySelectorAll('#l-icons .icon-opt').forEach(b=>b.classList.remove('active')); if(el)el.classList.add('active'); drawLogo(); }
function setLogoFontStyle(style,el){ logoFontStyle=style; drawLogo(); }
function setLogoStyle(style, el) {
  const proStyles = ['shadow', 'neon', 'monogram'];
  if (proStyles.includes(style) && !requirePro('Premium Logo Styles')) return;
  const inp = $('logo-style') || document.createElement('input');
  inp.id = 'logo-style';
  inp.type = 'hidden';
  inp.value = style;
  if (!$('logo-style')) document.body.appendChild(inp);
  document.querySelectorAll('#panel-logo .shape-opts .shape-opt').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  drawLogo();
}
function drawLogo() {
  const canvas = $('logo-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = 380, h = 280;
  canvas.width = w;
  canvas.height = h;

  const name     = $('l-name')?.value?.trim() || '';  // ✅ 'NexaTools' hata diya
  const tagline  = $('l-tag')?.value?.trim()  || '';
  const fontFam  = $('l-font-family')?.value  || 'Arial';
  const fontSize = parseInt($('l-font-size')?.value) || 26;
  const cx = w / 2, cy = h / 2;
  const isPro = currentPlan === 'pro' || currentPlan === 'business';
  const logoStyle = $('logo-style')?.value || 'basic';

  ctx.clearRect(0, 0, w, h);

  // ✅ Yeh naya block add karo
  if (!name) {
    ctx.fillStyle = '#0d0d14';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Enter brand name to preview ✨', w/2, h/2);
    return;
  }

  // ... baaki poora code bilkul same rehta hai
  // ==================== BASIC (FREE) ====================
  if (logoStyle === 'basic') {
    ctx.fillStyle = '#0d0d14';
    ctx.fillRect(0, 0, w, h);

    if (logoShape !== 'none') {
      ctx.save();
      ctx.fillStyle = logoBg;
      ctx.shadowBlur = 28;
      ctx.shadowColor = logoBg;
      ctx.beginPath();
      if (logoShape === 'circle') ctx.arc(cx, cy - 10, 88, 0, Math.PI * 2);
      else if (logoShape === 'square') ctx.rect(cx - 78, cy - 88, 156, 156);
      else if (logoShape === 'rounded') {
        const r = 28, x = cx-78, y = cy-88, sw = 156, sh = 156;
        ctx.moveTo(x+r,y); ctx.lineTo(x+sw-r,y); ctx.quadraticCurveTo(x+sw,y,x+sw,y+r);
        ctx.lineTo(x+sw,y+sh-r); ctx.quadraticCurveTo(x+sw,y+sh,x+sw-r,y+sh);
        ctx.lineTo(x+r,y+sh); ctx.quadraticCurveTo(x,y+sh,x,y+sh-r);
        ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y);
      }
      ctx.fill();
      ctx.restore();
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${Math.round(fontSize * 0.9)}px serif`;
    ctx.fillText(logoIcon, cx, cy - 28);

    ctx.fillStyle = logoShape === 'none' ? logoBg : logoTxt;
    ctx.font = `${logoFontStyle} ${fontSize}px '${fontFam}', sans-serif`;
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(name, cx, cy + 28);

    if (tagline) {
      ctx.font = '11px sans-serif';
      ctx.fillStyle = logoShape === 'none' ? logoBg : logoTxt;
      ctx.globalAlpha = 0.65;
      ctx.fillText(tagline, cx, cy + 52);
      ctx.globalAlpha = 1;
    }

  // ==================== GRADIENT (PRO) ====================
  } else if (logoStyle === 'gradient') {
    ctx.fillStyle = '#0d0d14';
    ctx.fillRect(0, 0, w, h);

    if (logoShape !== 'none') {
      const grad = ctx.createRadialGradient(cx, cy-10, 0, cx, cy-10, 90);
      grad.addColorStop(0, logoBg);
      grad.addColorStop(1, logoTxt === '#000000' ? '#bf5af2' : logoTxt);
      ctx.save();
      ctx.fillStyle = grad;
      ctx.shadowBlur = 40;
      ctx.shadowColor = logoBg;
      ctx.beginPath();
      if (logoShape === 'circle') ctx.arc(cx, cy-10, 88, 0, Math.PI*2);
      else if (logoShape === 'square') ctx.rect(cx-78, cy-88, 156, 156);
      else if (logoShape === 'rounded') {
        const r=28,x=cx-78,y=cy-88,sw=156,sh=156;
        ctx.moveTo(x+r,y); ctx.lineTo(x+sw-r,y); ctx.quadraticCurveTo(x+sw,y,x+sw,y+r);
        ctx.lineTo(x+sw,y+sh-r); ctx.quadraticCurveTo(x+sw,y+sh,x+sw-r,y+sh);
        ctx.lineTo(x+r,y+sh); ctx.quadraticCurveTo(x,y+sh,x,y+sh-r);
        ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y);
      }
      ctx.fill();
      ctx.restore();
    }

    const textGrad = ctx.createLinearGradient(cx-60, 0, cx+60, 0);
    textGrad.addColorStop(0, logoBg);
    textGrad.addColorStop(1, '#bf5af2');

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${Math.round(fontSize*0.9)}px serif`;
    ctx.fillStyle = '#fff';
    ctx.fillText(logoIcon, cx, cy-28);

    ctx.fillStyle = logoShape === 'none' ? textGrad : '#fff';
    ctx.font = `${logoFontStyle} ${fontSize}px '${fontFam}', sans-serif`;
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(name, cx, cy+28);

    if (tagline) {
      ctx.font = '11px sans-serif';
      ctx.fillStyle = logoBg;
      ctx.globalAlpha = 0.8;
      ctx.fillText(tagline, cx, cy+52);
      ctx.globalAlpha = 1;
    }

  // ==================== 3D SHADOW (PRO) ====================
  } else if (logoStyle === 'shadow') {
    ctx.fillStyle = '#0d0d14';
    ctx.fillRect(0, 0, w, h);

    if (logoShape !== 'none') {
      // Shadow layers
      for (let i = 8; i > 0; i--) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(0,0,0,${0.1 * i})`;
        if (logoShape === 'circle') ctx.arc(cx+i, cy-10+i, 88, 0, Math.PI*2);
        else ctx.rect(cx-78+i, cy-88+i, 156, 156);
        ctx.fill();
      }
      ctx.save();
      ctx.fillStyle = logoBg;
      ctx.beginPath();
      if (logoShape === 'circle') ctx.arc(cx, cy-10, 88, 0, Math.PI*2);
      else if (logoShape === 'square') ctx.rect(cx-78, cy-88, 156, 156);
      else if (logoShape === 'rounded') {
        const r=28,x=cx-78,y=cy-88,sw=156,sh=156;
        ctx.moveTo(x+r,y); ctx.lineTo(x+sw-r,y); ctx.quadraticCurveTo(x+sw,y,x+sw,y+r);
        ctx.lineTo(x+sw,y+sh-r); ctx.quadraticCurveTo(x+sw,y+sh,x+sw-r,y+sh);
        ctx.lineTo(x+r,y+sh); ctx.quadraticCurveTo(x,y+sh,x,y+sh-r);
        ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y);
      }
      ctx.fill();
      ctx.restore();
    }

    ctx.textAlign = 'center';
    ctx.shadowColor = logoBg;
    ctx.shadowBlur = 15;
    ctx.textBaseline = 'middle';
    ctx.font = `${Math.round(fontSize*0.9)}px serif`;
    ctx.fillStyle = logoTxt;
    ctx.fillText(logoIcon, cx, cy-28);

    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 6;
    ctx.fillStyle = logoShape === 'none' ? logoBg : logoTxt;
    ctx.font = `${logoFontStyle} ${fontSize}px '${fontFam}', sans-serif`;
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(name, cx, cy+28);
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;

    if (tagline) {
      ctx.font = '11px sans-serif';
      ctx.fillStyle = logoBg;
      ctx.globalAlpha = 0.7;
      ctx.fillText(tagline, cx, cy+52);
      ctx.globalAlpha = 1;
    }

  // ==================== NEON GLOW (PRO) ====================
  } else if (logoStyle === 'neon') {
    ctx.fillStyle = '#050510';
    ctx.fillRect(0, 0, w, h);

    // Outer glow ring
    if (logoShape !== 'none') {
      for (let i = 3; i >= 1; i--) {
        ctx.save();
        ctx.strokeStyle = logoBg;
        ctx.lineWidth = i * 4;
        ctx.globalAlpha = 0.1 * (4-i);
        ctx.shadowBlur = 20 * i;
        ctx.shadowColor = logoBg;
        ctx.beginPath();
        if (logoShape === 'circle') ctx.arc(cx, cy-10, 88, 0, Math.PI*2);
        else if (logoShape === 'square') ctx.strokeRect(cx-78, cy-88, 156, 156);
        else if (logoShape === 'rounded') {
          const r=28,x=cx-78,y=cy-88,sw=156,sh=156;
          ctx.moveTo(x+r,y); ctx.lineTo(x+sw-r,y); ctx.quadraticCurveTo(x+sw,y,x+sw,y+r);
          ctx.lineTo(x+sw,y+sh-r); ctx.quadraticCurveTo(x+sw,y+sh,x+sw-r,y+sh);
          ctx.lineTo(x+r,y+sh); ctx.quadraticCurveTo(x,y+sh,x,y+sh-r);
          ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y);
        }
        ctx.stroke();
        ctx.restore();
      }

      ctx.save();
      ctx.strokeStyle = logoBg;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 20;
      ctx.shadowColor = logoBg;
      ctx.beginPath();
      if (logoShape === 'circle') ctx.arc(cx, cy-10, 88, 0, Math.PI*2);
      else if (logoShape === 'square') ctx.strokeRect(cx-78, cy-88, 156, 156);
      ctx.stroke();
      ctx.restore();
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowBlur = 30;
    ctx.shadowColor = logoBg;
    ctx.font = `${Math.round(fontSize*0.9)}px serif`;
    ctx.fillStyle = logoBg;
    ctx.fillText(logoIcon, cx, cy-28);

    ctx.shadowBlur = 20;
    ctx.shadowColor = logoBg;
    ctx.fillStyle = '#fff';
    ctx.font = `${logoFontStyle} ${fontSize}px '${fontFam}', sans-serif`;
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(name, cx, cy+28);
    ctx.shadowBlur = 0;

    if (tagline) {
      ctx.font = '11px sans-serif';
      ctx.fillStyle = logoBg;
      ctx.globalAlpha = 0.7;
      ctx.shadowBlur = 10;
      ctx.shadowColor = logoBg;
      ctx.fillText(tagline, cx, cy+52);
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    }

  // ==================== MONOGRAM (PRO) ====================
  } else if (logoStyle === 'monogram') {
    ctx.fillStyle = '#0d0d14';
    ctx.fillRect(0, 0, w, h);

    const letter = name.charAt(0).toUpperCase();
    const letter2 = name.split(' ')[1]?.charAt(0).toUpperCase() || '';

    // Background shape
    ctx.save();
    ctx.fillStyle = logoBg;
    ctx.shadowBlur = 30;
    ctx.shadowColor = logoBg;
    ctx.beginPath();
    ctx.arc(cx, cy-10, 90, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();

    // Inner ring
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy-10, 78, 0, Math.PI*2);
    ctx.stroke();
    ctx.restore();

    // Monogram letters
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = logoTxt;
    ctx.font = `bold ${fontSize + 14}px '${fontFam}', serif`;
    ctx.fillText(letter2 ? letter + letter2 : letter, cx, cy-10);

    // Brand name below
    ctx.font = `${logoFontStyle} ${fontSize - 4}px '${fontFam}', sans-serif`;
    ctx.fillStyle = '#fff';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(name, cx, cy+90);

    if (tagline) {
      ctx.font = '10px sans-serif';
      ctx.fillStyle = logoBg;
      ctx.globalAlpha = 0.7;
      ctx.fillText(tagline, cx, cy+108);
      ctx.globalAlpha = 1;
    }
  }

  // Watermark for free
  if (!isPro) {
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.font = '10px Arial';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('nexatools.io', w-10, h-8);
  }
}
function dlLogo(){ const canvas=$('logo-canvas'); if(!canvas)return; const a=document.createElement('a'); a.download='logo-nexatools.png'; a.href=canvas.toDataURL('image/png'); a.click(); }

// ---------- QR CODE GENERATOR ----------
function initQR() {
  const colors = ['#00e5ff','#bf5af2','#30d158','#0d0d14','#ff453a','#6a9fff','#ffd60a','#ffffff'];
  const row = $('qr-clr-row');
  if (row) row.innerHTML = colors.map(c =>
    `<div class="swatch${qrColor===c?' active':''}" style="background:${c}" onclick="setQRColor('${c}',this)"></div>`).join('');
  genQR();
}

function setQT(type,el) {
  qrType=type;
  document.querySelectorAll('.qr-tab').forEach(t=>t.classList.remove('active'));
  if(el) el.classList.add('active');
  const labels={url:'Website URL',text:'Text Message',phone:'Phone Number',email:'Email Address',wifi:'WiFi (Name:Password)',upi:'UPI ID'};
  const placeholders={url:'https://nexatools.io',text:'Your message here...',phone:'+1 233 4567899',email:'hello@nexatools.io',wifi:'NetworkName:Password',upi:'merchant@upi'};
  if($('qr-lbl')) $('qr-lbl').textContent = labels[type]||'Value';
  if($('qr-inp')) { $('qr-inp').placeholder=placeholders[type]||'Enter value'; $('qr-inp').value=''; }
  genQR();
}

function setQRColor(c,el){ qrColor=c; document.querySelectorAll('#qr-clr-row .swatch').forEach(s=>s.classList.remove('active')); if(el)el.classList.add('active'); genQR(); }

let qrInstance = null;

function genQR() {
  const ph = $('qr-ph');
  const dlBtn = $('qr-dl-btn');
  const container = $('qr-canvas');
  if (!container) return;

  let input = $('qr-inp')?.value?.trim() || '';
  if (!input) {
    if (ph) ph.style.display = 'block';
    if (dlBtn) dlBtn.style.display = 'none';
    container.innerHTML = '';
    qrInstance = null;
    return;
  }

  if (ph) ph.style.display = 'none';
  if (dlBtn) dlBtn.style.display = 'inline-block';

  let data = input;
  if (qrType === 'phone') data = 'tel:' + input;
  else if (qrType === 'email') data = 'mailto:' + input;
  else if (qrType === 'wifi') {
    const [ssid, pass] = input.split(':');
    data = `WIFI:T:WPA;S:${ssid||''};P:${pass||''};;`;
  } else if (qrType === 'upi') {
    data = `upi://pay?pa=${input}&pn=Merchant&cu=INR`;
  }

  const size = parseInt($('qr-sz')?.value) || 280;
  container.innerHTML = '';

  const darkColor = qrStyle === 'gradient' ? qrColor : qrColor;

  qrInstance = new QRCode(container, {
    text: data,
    width: size,
    height: size,
    colorDark: qrColor,
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });

  // Pro styles — apply after QR renders
  setTimeout(() => {
    const img = container.querySelector('img');
    const cvs = container.querySelector('canvas');
    const target = cvs || img;
    if (!target) return;

    if (qrStyle === 'rounded') {
      target.style.borderRadius = '16px';
      container.style.borderRadius = '20px';
      container.style.overflow = 'hidden';
    } else {
      target.style.borderRadius = '0';
      container.style.borderRadius = '16px';
    }

    if (qrStyle === 'gradient' && cvs) {
      const ctx2 = cvs.getContext('2d');
      const imgData = ctx2.getImageData(0, 0, cvs.width, cvs.height);
      const grad = ctx2.createLinearGradient(0, 0, cvs.width, cvs.height);
      grad.addColorStop(0, qrColor);
      grad.addColorStop(1, '#bf5af2');
      for (let i = 0; i < imgData.data.length; i += 4) {
        if (imgData.data[i] < 50) {
          const x = (i / 4) % cvs.width;
          const y = Math.floor((i / 4) / cvs.width);
          const t = (x + y) / (cvs.width + cvs.height);
          const c1 = hexToRgb(qrColor);
          const c2 = hexToRgb('#bf5af2');
          imgData.data[i]   = Math.round(c1.r + (c2.r - c1.r) * t);
          imgData.data[i+1] = Math.round(c1.g + (c2.g - c1.g) * t);
          imgData.data[i+2] = Math.round(c1.b + (c2.b - c1.b) * t);
        }
      }
      ctx2.putImageData(imgData, 0, 0);
    }

    if (qrStyle === 'logo' && cvs) {
      const ctx2 = cvs.getContext('2d');
      const cx = cvs.width / 2, cy = cvs.height / 2, r = cvs.width * 0.12;
      ctx2.beginPath();
      ctx2.arc(cx, cy, r + 4, 0, Math.PI * 2);
      ctx2.fillStyle = '#ffffff';
      ctx2.fill();
      ctx2.font = `bold ${r * 1.2}px Arial`;
      ctx2.textAlign = 'center';
      ctx2.textBaseline = 'middle';
      ctx2.fillStyle = qrColor;
      ctx2.fillText('N', cx, cy);
    }
  }, 100);
}
function setQRStyle(style, el) {
  if (style !== 'basic' && style !== 'rounded' && !requirePro('Pro QR Styles')) return;
  qrStyle = style;
  document.querySelectorAll('#panel-qr .shape-opts .shape-opt').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  genQR();
}
function dlQR() {
  const container = $('qr-canvas');
  const cvs = container?.querySelector('canvas');
  const img = container?.querySelector('img');
  const src = cvs ? cvs.toDataURL('image/png') : img?.src;
  if (!src) return;
  const a = document.createElement('a');
  a.download = 'qrcode-nexatools.png';
  a.href = src;
  a.click();
}
// ---------- BUSINESS CARD GENERATOR ----------
function drawBCard() {
  const isPro = currentPlan === 'pro' || currentPlan === 'business';
  const canvas = $('bcard-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = isPro ? 700 : 600;
  const h = isPro ? 400 : 340;
  canvas.width = w;
  canvas.height = h;

  const themes = {
    dark:   { bg1: '#0a0a1a', bg2: '#1a1a3e', text: '#ffffff', sub: '#a0a0c0', acc: '#00e5ff', acc2: '#bf5af2' },
    light:  { bg1: '#ffffff', bg2: '#f0f0ff', text: '#0a0a1a', sub: '#606080', acc: '#bf5af2', acc2: '#00e5ff' },
    cyan:   { bg1: '#000d1a', bg2: '#001a35', text: '#ffffff', sub: '#80d8ff', acc: '#00e5ff', acc2: '#00ffcc' },
    purple: { bg1: '#0d0020', bg2: '#1a0040', text: '#ffffff', sub: '#d088ff', acc: '#bf5af2', acc2: '#ff6ec7' },
    gold:   { bg1: '#1a1000', bg2: '#2d1f00', text: '#fff8e1', sub: '#d4af37', acc: '#ffd700', acc2: '#ff8c00' },
    neon:   { bg1: '#000000', bg2: '#0a001a', text: '#ffffff', sub: '#ff00ff', acc: '#00ff88', acc2: '#ff00ff' },
    glass:  { bg1: '#ffffff22', bg2: '#ffffff08', text: '#ffffff', sub: '#ccccff', acc: '#00e5ff', acc2: '#bf5af2' }
  };
  const th = themes[bcTheme] || themes.dark;

  // Font settings
  const fontFamily = $('bc-font-family')?.value || 'Arial';
  const fontStyle  = $('bc-font-style')?.value  || 'bold';

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, th.bg1);
  grad.addColorStop(1, th.bg2);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Pro — extra background pattern
  if (isPro) {
    ctx.globalAlpha = 0.03;
    for (let i = 0; i < w; i += 40) {
      ctx.strokeStyle = th.acc;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, h);
      ctx.stroke();
    }
    for (let i = 0; i < h; i += 40) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(w, i);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  // Top accent line
  const lineGrad = ctx.createLinearGradient(0, 0, w, 0);
  lineGrad.addColorStop(0, th.acc);
  lineGrad.addColorStop(1, th.acc2);
  ctx.fillStyle = lineGrad;
  ctx.fillRect(0, 0, w, isPro ? 6 : 4);

  // Bottom accent line
  ctx.fillStyle = lineGrad;
  ctx.fillRect(0, h - (isPro ? 6 : 4), w, isPro ? 6 : 4);

  // Decorative circles
  ctx.beginPath();
  ctx.arc(w - 60, 60, isPro ? 100 : 80, 0, Math.PI * 2);
  ctx.fillStyle = th.acc + '15';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(w - 60, 60, isPro ? 65 : 50, 0, Math.PI * 2);
  ctx.fillStyle = th.acc + '20';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(40, h - 40, isPro ? 80 : 60, 0, Math.PI * 2);
  ctx.fillStyle = th.acc2 + '10';
  ctx.fill();

  // Pro badge
  if (isPro) {
    ctx.fillStyle = lineGrad;
    ctx.beginPath();
    ctx.roundRect(w - 100, h - 50, 80, 24, 12);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('⚡ PRO', w - 60, h - 34);
  }

  const name    = $('bc-name')?.value?.trim()  || 'Your Name';
  const role    = $('bc-role')?.value?.trim()  || 'Professional Title';
  const company = $('bc-co')?.value?.trim()    || '';
  const email   = $('bc-email')?.value?.trim() || '';
  const phone   = $('bc-phone')?.value?.trim() || '';
  const web     = $('bc-web')?.value?.trim()   || '';

  // Name
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = th.text;
  ctx.font = `${fontStyle} ${isPro ? 36 : 32}px ${fontFamily}, sans-serif`;
  ctx.fillText(name, 40, isPro ? 90 : 80);

  // Accent line under name
  const nameWidth = ctx.measureText(name).width;
  const nameLineGrad = ctx.createLinearGradient(40, 0, 40 + nameWidth, 0);
  nameLineGrad.addColorStop(0, th.acc);
  nameLineGrad.addColorStop(1, th.acc2);
  ctx.fillStyle = nameLineGrad;
  ctx.fillRect(40, isPro ? 98 : 88, nameWidth, isPro ? 3 : 2);

  // Role
  ctx.fillStyle = th.acc;
  ctx.font = `${isPro ? 16 : 14}px Arial, sans-serif`;
  ctx.fillText(role, 40, isPro ? 128 : 116);

  // Company
  if (company) {
    ctx.fillStyle = th.sub;
    ctx.font = `${isPro ? 14 : 12}px Arial, sans-serif`;
    ctx.fillText('● ' + company, 40, isPro ? 155 : 140);
  }

  // Divider
  ctx.strokeStyle = th.acc + '40';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(40, isPro ? 180 : 165);
  ctx.lineTo(w - 40, isPro ? 180 : 165);
  ctx.stroke();

  // Contact details
  let x = 40;
  const y = isPro ? 220 : 200;

  if (email) {
    ctx.fillStyle = th.acc;
    ctx.font = `${isPro ? 13 : 12}px Arial`;
    ctx.fillText('✉ ', x, y);
    ctx.fillStyle = th.text;
    ctx.fillText(email, x + 20, y);
    x += ctx.measureText(email).width + 60;
  }

  if (phone) {
    ctx.fillStyle = th.acc;
    ctx.fillText('☎ ', x, y);
    ctx.fillStyle = th.text;
    ctx.fillText(phone, x + 20, y);
    x += ctx.measureText(phone).width + 60;
  }

  if (web) {
    ctx.fillStyle = th.acc2;
    ctx.fillText('🌐 ', x, y);
    ctx.fillStyle = th.text;
    ctx.fillText(web, x + 24, y);
  }

  ctx.globalAlpha = 1;
}

function setBCTheme(theme, el) {
  const proThemes = ['purple', 'gold', 'neon', 'glass'];
  if (proThemes.includes(theme) && !requirePro('Premium Business Card Themes')) return;
  bcTheme = theme;
  document.querySelectorAll('#panel-bcard .shape-opts .shape-opt').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  drawBCard();
}

function dlBCard() {
  const canvas = $('bcard-canvas');
  if (!canvas) return;
  const a = document.createElement('a');
  a.download = 'business-card-nexatools.png';
  a.href = canvas.toDataURL('image/png');
  a.click();
}
// ---------- PASSWORD GENERATOR ----------
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return {r, g, b};
}

function genPass() {
  const len=parseInt($('pass-len')?.value)||16, upper=$('p-upper')?.checked??true,
    lower=$('p-lower')?.checked??true, nums=$('p-num')?.checked??true,
    syms=$('p-sym')?.checked??false, count=Math.min(Math.max(parseInt($('pass-count')?.value)||1,1),20);
  let chars='';
  if(upper) chars+='ABCDEFGHJKLMNPQRSTUVWXYZ';
  if(lower) chars+='abcdefghijkmnpqrstuvwxyz';
  if(nums)  chars+='23456789';
  if(syms)  chars+='!@#$%^&*()_+-=[]{}|;:,.<>?';
  if(!chars){ if($('pass-out'))$('pass-out').textContent='Select at least one option!'; return; }
  const makePass=()=>{
    let p='';
    if(upper) p+='ABCDEFGHJKLMNPQRSTUVWXYZ'[Math.floor(Math.random()*23)];
    if(lower) p+='abcdefghijkmnpqrstuvwxyz'[Math.floor(Math.random()*23)];
    if(nums)  p+='23456789'[Math.floor(Math.random()*8)];
    if(syms)  p+='!@#$%^&*'[Math.floor(Math.random()*8)];
    while(p.length<len) p+=chars[Math.floor(Math.random()*chars.length)];
    return p.split('').sort(()=>Math.random()-0.5).join('').slice(0,len);
  };
  const passwords=Array.from({length:count},makePass);
  if($('pass-out')) $('pass-out').textContent=passwords[0];
  let strength=0;
  if(len>=10)strength++; if(len>=16)strength++; if(upper&&lower)strength++; if(nums)strength++; if(syms)strength++;
  const fill=$('strength-fill'), txt=$('strength-txt'), pct=(strength/5)*100;
  const labels=['','Weak','Weak','Fair','Strong','Very Strong'], colors=['','#ff453a','#ff453a','#ff9f0a','#30d158','#00e5ff'];
  if(fill){fill.style.width=pct+'%'; fill.style.background=colors[strength]||'#aaa';}
  if(txt){txt.textContent=labels[strength]||''; txt.style.color=colors[strength]||'#aaa';}
}

function copyPass() {
  const pw=$('pass-out')?.textContent?.trim();
  if(!pw||pw==='Click Generate!'||pw==='Select at least one option!'){ genPass(); return; }
  navigator.clipboard.writeText(pw).then(()=>{
    const btn=document.querySelector('#panel-password .btn-ghost');
    if(btn){const orig=btn.textContent; btn.textContent='✅ Copied!'; setTimeout(()=>btn.textContent=orig,1800);}
  }).catch(()=>alert('Copy failed. Please copy manually: '+pw));
}

// ---------- Particle Canvas ----------
function initParticles() {
  const canvas=$('particleCanvas'); if(!canvas)return;
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  const particles=Array.from({length:60},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.5+0.3,vx:(Math.random()-0.5)*0.3,vy:(Math.random()-0.5)*0.3,alpha:Math.random()*0.5+0.1}));
  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0; if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=`rgba(0,229,255,${p.alpha})`; ctx.fill(); });
    requestAnimationFrame(animate);
  }
  animate();
  window.addEventListener('resize',()=>{ canvas.width=window.innerWidth; canvas.height=window.innerHeight; });
}

// ---------- Custom Cursor ----------
function initCursor() {
  const dot=$('cursorDot'), ring=$('cursorRing');
  if(!dot||!ring) return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
  function loop(){
    rx+=(mx-rx)*0.15; ry+=(my-ry)*0.15;
    dot.style.transform=`translate(${mx-4}px,${my-4}px)`;
    ring.style.transform=`translate(${rx-18}px,${ry-18}px)`;
    requestAnimationFrame(loop);
  }
  loop();
}

// ---------- Utility ----------
function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ---------- INIT ----------
window.addEventListener('DOMContentLoaded', () => {
  const today = new Date().toISOString().slice(0,10);
  if($('inv-date')) $('inv-date').value=today;
  if($('sch-date')) $('sch-date').value=today;
  initResume(); renderItems(); generateInvoice();
  renderCalendar(); renderSchedList();
  initLogo(); initQR(); drawBCard(); genPass();
  initParticles(); initCursor();
});
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q').forEach(b => {
    b.classList.remove('open');
    b.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}
// ---------- BLOG ----------
const blogPosts = {
  'resume-tips': `
    <h2 style="font-family:var(--font-display);margin-bottom:8px;">📄 Top 10 Resume Tips for Students</h2>
    <p style="color:var(--text2);font-size:0.78rem;margin-bottom:20px;">📅 May 2026 · 5 min read</p>
    <div style="display:flex;flex-direction:column;gap:14px;">
      ${['Keep it to 1 page — recruiters spend only 6 seconds on a resume.','Use action words: Managed, Created, Improved, Developed.','Add your LinkedIn and GitHub links.','Tailor your resume for every job — no generic resumes.','Put your most impressive achievement at the top.','Use a clean readable font — Arial or Georgia.','Quantify results: "Increased sales by 30%" not just "Increased sales".','Include relevant projects if you have no work experience.','Proofread 3 times — spelling mistakes are instant rejection.','Use NexaTools Resume Builder for a professional template — free!'].map((tip, i) => `
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:14px 16px;display:flex;gap:12px;align-items:flex-start;">
          <span style="color:var(--cyan);font-weight:700;font-size:0.9rem;min-width:24px;">${i+1}.</span>
          <span style="color:var(--text2);font-size:0.88rem;line-height:1.7;">${tip}</span>
        </div>`).join('')}
    </div>
    <div style="margin-top:20px;text-align:center;">
      <button class="btn btn-cyan" onclick="closeBlogModal();switchTool('resume',document.querySelector('.tab-btn'))">📄 Try Resume Builder Free →</button>
    </div>`,

  'invoice-guide': `
    <h2 style="font-family:var(--font-display);margin-bottom:8px;">🧾 Free Invoice Generator for Freelancers</h2>
    <p style="color:var(--text2);font-size:0.78rem;margin-bottom:20px;">📅 May 2026 · 4 min read</p>
    <div style="display:flex;flex-direction:column;gap:12px;">
      <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;">As a freelancer in Pakistan, sending professional invoices builds trust with international clients. Here's how to do it free:</p>
      ${['Open NexaTools Billing Generator tab.','Enter your name/company and client details.','Add your services with quantity and rate.','Select invoice template — Basic is free.','Click Generate then Print/Save as PDF.','Send PDF to your client via email or WhatsApp.'].map((step, i) => `
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:14px 16px;display:flex;gap:12px;align-items:flex-start;">
          <span style="background:var(--cyan);color:#000;font-weight:700;font-size:0.8rem;min-width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;">${i+1}</span>
          <span style="color:var(--text2);font-size:0.88rem;line-height:1.7;">${step}</span>
        </div>`).join('')}
    </div>
    <div style="margin-top:20px;text-align:center;">
      <button class="btn btn-cyan" onclick="closeBlogModal();switchTool('invoice',document.querySelector('.tab-btn:nth-child(2)'))">🧾 Try Invoice Generator Free →</button>
    </div>`,

  'ai-tools': `
    <h2 style="font-family:var(--font-display);margin-bottom:8px;">⚡ Best Free AI Tools for Freelancers 2026</h2>
    <p style="color:var(--text2);font-size:0.78rem;margin-bottom:20px;">📅 May 2026 · 6 min read</p>
    <div style="display:flex;flex-direction:column;gap:12px;">
      ${[['📄 AI Resume Builder','Create professional resumes in minutes with AI-written summaries.'],['🧾 Invoice Generator','Send professional invoices to clients worldwide — free.'],['🎨 Logo Maker','Design a stunning logo for your brand without a designer.'],['📱 QR Code Generator','Create QR codes for your website, WiFi, UPI and more.'],['💼 Business Card','Design and download a professional business card instantly.'],['🔐 Password Generator','Generate ultra-secure passwords for all your accounts.']].map(([title, desc]) => `
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:14px 16px;">
          <div style="font-weight:700;margin-bottom:4px;">${title}</div>
          <div style="color:var(--text2);font-size:0.85rem;">${desc}</div>
        </div>`).join('')}
    </div>
    <div style="margin-top:20px;text-align:center;">
      <button class="btn btn-cyan" onclick="closeBlogModal();scrollToSection('.tools-section')">🚀 Try All Tools Free →</button>
    </div>`,

  'qr-guide': `
    <h2 style="font-family:var(--font-display);margin-bottom:8px;">📱 How to Create QR Codes Free</h2>
    <p style="color:var(--text2);font-size:0.78rem;margin-bottom:20px;">📅 May 2026 · 4 min read</p>
    <div style="display:flex;flex-direction:column;gap:12px;">
      <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;">QR codes are used everywhere — restaurant menus, business cards, payment links. Create yours free in seconds:</p>
      ${[['URL QR Code','Share your website link instantly.'],['WiFi QR Code','Let guests connect to WiFi without typing passwords.'],['UPI Payment QR','Accept payments directly via QR code.'],['Email QR Code','Let people email you with one scan.'],['Text QR Code','Share any message or information.']].map(([type, use]) => `
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
          <span style="font-weight:700;color:var(--cyan);">${type}</span>
          <span style="color:var(--text2);font-size:0.85rem;">${use}</span>
        </div>`).join('')}
    </div>
    <div style="margin-top:20px;text-align:center;">
      <button class="btn btn-cyan" onclick="closeBlogModal();switchTool('qr',document.querySelector('.tab-btn:nth-child(5)'))">📱 Generate QR Code Free →</button>
    </div>`,

  'logo-guide': `
    <h2 style="font-family:var(--font-display);margin-bottom:8px;">🎨 Create a Professional Logo Free</h2>
    <p style="color:var(--text2);font-size:0.78rem;margin-bottom:20px;">📅 May 2026 · 5 min read</p>
    <div style="display:flex;flex-direction:column;gap:12px;">
      <p style="color:var(--text2);font-size:0.88rem;line-height:1.8;">A great logo builds trust instantly. Here's how to create one free in under 5 minutes:</p>
      ${['Open NexaTools Logo Maker tab.','Enter your brand name and tagline.','Pick an icon that represents your business.','Choose background color and text color.','Select shape — Circle, Square or Rounded.','Adjust font style and size.','Preview updates live — no waiting.','Click Download PNG to save your logo.'].map((step, i) => `
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:14px 16px;display:flex;gap:12px;align-items:flex-start;">
          <span style="color:var(--cyan);font-weight:700;min-width:24px;">${i+1}.</span>
          <span style="color:var(--text2);font-size:0.88rem;line-height:1.7;">${step}</span>
        </div>`).join('')}
    </div>
    <div style="margin-top:20px;text-align:center;">
      <button class="btn btn-cyan" onclick="closeBlogModal();switchTool('logo',document.querySelector('.tab-btn:nth-child(4)'))">🎨 Make Your Logo Free →</button>
    </div>`,

  'student-tools': `
    <h2 style="font-family:var(--font-display);margin-bottom:8px;">🎓 Top Free Tools Every Student Needs</h2>
    <p style="color:var(--text2);font-size:0.78rem;margin-bottom:20px;">📅 May 2026 · 5 min read</p>
    <div style="display:flex;flex-direction:column;gap:12px;">
      ${[['📄 Resume Builder','Build a job-ready resume before graduation — free.'],['🔐 Password Generator','Secure all your student accounts with strong passwords.'],['📱 QR Code Generator','Share your portfolio or LinkedIn with a QR code.'],['🎨 Logo Maker','Create a logo for your student startup or project.'],['💼 Business Card','Design a card for networking events and job fairs.'],['🧾 Invoice Generator','Earn freelancing income and send professional invoices.']].map(([tool, desc]) => `
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:14px 16px;">
          <div style="font-weight:700;margin-bottom:4px;">${tool}</div>
          <div style="color:var(--text2);font-size:0.85rem;">${desc}</div>
        </div>`).join('')}
    </div>
    <div style="margin-top:20px;text-align:center;">
      <button class="btn btn-cyan" onclick="closeBlogModal();scrollToSection('.tools-section')">🚀 Try All Tools Free →</button>
    </div>`
};

function openBlogModal(post) {
  const modal = $('blog-modal');
  const content = $('blog-modal-content');
  if (!modal || !content || !blogPosts[post]) return;
  content.innerHTML = blogPosts[post];
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBlogModal() {
  const modal = $('blog-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function closeBlogModalOutside(e) {
  if (e.target === $('blog-modal')) closeBlogModal();
}
