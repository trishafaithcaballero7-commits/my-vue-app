<template>
  <div class="cpu-theme-wrapper">
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-content">
        <div class="eyebrow-container">
          <span class="gold-line"></span>
          <p class="hero-title">ESTABLISHED 1905</p>
        </div>
        
        <h1>
          Exemplary <span class="gold-italic">Christian</span> <br />
          Education for Life.
        </h1>
        
        <p class="description">
          A leading Christian institution in the Philippines, Central Philippine University 
          nurtures intellectual growth and spiritual development through a commitment to 
          <strong class="dark-purple-text">Scientia et Fides</strong> (Science and Faith).
        </p>

        <div class="button-group">
          <button class="button-primary">Explore Academics</button>
          <button class="button-secondary">Request Information</button>
        </div>
      </div>

      <!-- CARD PANEL DISPLAY -->
      <div class="panel-container">
        <div class="panel-back"></div>
        <div class="panel-front">
          <div class="logo-wrapper">
            <img src="../assets/logo2.jpg" alt="CPU Seal" class="seal-image" />
          </div>
          <h2 class="university-name">Central Philippine University</h2>
          <p class="motto">SCIENTIA ET FIDES</p>
          <div class="yellow-line"></div>
          <p class="tagline">"A Heritage of Excellence, A Future of Faith"</p>
        </div>
      </div>
    </section>

    <!-- ADMISSIONS & TUITION CALCULATOR PAGE -->
    <div class="admissions-page">
      <!-- Page header -->
      <header class="admissions-hero">
        <div class="container">
          <p class="eyebrow">Admissions</p>
          <h1>Apply, Estimate, Enroll</h1>
          <p class="lead">
            Welcome to the Central Philippine University admissions hub. Calculate your estimated tuition fees 
            and review key admission requirements below.
          </p>
        </div>
      </header>

      <main class="container main">
        <!-- Admission requirements -->
        <section class="card">
          <h2>Admission Requirements</h2>
          <div class="requirements-grid">
            <ul>
              <li>High School Report Card (Form 138 / SF9)</li>
              <li>Certificate of Good Moral Character</li>
              <li>PSA Birth Certificate (Original & Photocopy)</li>
              <li>2x2 Recent Passport Size Photos (White Background)</li>
            </ul>
            <ul>
              <li>CPU College Entrance Examination Results</li>
              <li>Medical Examination & Clearance Form</li>
              <li>Honorable Dismissal (for Transfer Students)</li>
              <li>Transcript of Records (for Transfer Students)</li>
            </ul>
          </div>
        </section>

        <!-- Tuition calculator -->
        <section class="card">
          <h2>Tuition Fee Calculator</h2>
          <p class="muted">
            Select your program and units to estimate your fees for one semester. This is an estimate only — final assessment is issued by the Registrar's Office.
          </p>

          <div class="form-grid">
            <label class="field">
              <span>Program</span>
              <select>
                <option>BS Computer Science</option>
                <option>BS Information Technology</option>
                <option>BS Business Administration</option>
                <option>BS Education</option>
                <option>BS Nursing</option>
              </select>
            </label>

            <label class="field">
              <span>Year Level</span>
              <select>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>
            </label>

            <label class="field">
              <span>Units this semester: 21</span>
              <input type="range" min="12" max="27" value="21" class="gold-range" />
              <div class="range-labels">
                <span>12</span>
                <span>27</span>
              </div>
            </label>
          </div>

          <div class="field payment-terms">
            <span>Payment terms</span>
            <div class="pill-group">
              <button type="button" class="pill active">Full payment</button>
              <button type="button" class="pill">3 installments</button>
              <button type="button" class="pill">5 installments</button>
            </div>
          </div>

          <!-- Breakdown table -->
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th class="align-left">Schedule of Fees</th>
                  <th class="align-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tuition Fee (21 units × ₱650)</td>
                  <td class="align-right">₱13,650</td>
                </tr>
                <tr>
                  <td>Laboratory Fee (21 units × ₱150)</td>
                  <td class="align-right">₱3,150</td>
                </tr>
                <tr>
                  <td>Miscellaneous Fee (8% of tuition)</td>
                  <td class="align-right">₱1,092</td>
                </tr>
                <tr class="muted-row">
                  <td>Registration Fee</td>
                  <td class="align-right">₱750</td>
                </tr>
                <tr class="muted-row">
                  <td>Library Fee</td>
                  <td class="align-right">₱500</td>
                </tr>
                <tr class="muted-row">
                  <td>Athletic Fee</td>
                  <td class="align-right">₱350</td>
                </tr>
                <tr class="muted-row">
                  <td>Medical & Dental Fee</td>
                  <td class="align-right">₱400</td>
                </tr>
                <tr class="muted-row">
                  <td>Guidance & Testing Fee</td>
                  <td class="align-right">₱300</td>
                </tr>
                <tr class="muted-row">
                  <td>ID & Insurance Fee</td>
                  <td class="align-right">₱450</td>
                </tr>
                <tr class="muted-row">
                  <td>Student Organization Fee</td>
                  <td class="align-right">₱250</td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="total-row">
                  <td>Total Assessment (1st Year)</td>
                  <td class="align-right">₱20,892</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p class="fine-print">
            * Rates shown are sample figures for demonstration purposes.
          </p>
        </section>

        <!-- CTA -->
        <section class="cta">
          <button type="button" class="button-primary large-btn">Start Your Application</button>
        </section>
      </main>

      <footer class="site-footer">
        © 2026 Central Philippine University. All rights reserved.
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
/* ==========================================================
   CPU BRAND COLOR PALETTE:
   - Deep Purple / Royal Navy: #251347
   - CPU Gold / Mustard:       #B68D2C
   - Card Warm Background:     #FAF1D2 to #FFFDF5
   - Neutral Gray/White:       #F8FAFC / #FFFFFF
   ========================================================== */

@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.cpu-theme-wrapper {
  font-family: 'Plus Jakarta Sans', Arial, sans-serif;
  color: #333333;
  background-color: #ffffff;
}

/* --- HERO SECTION --- */
.hero {
  min-height: 640px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 100px;
  background-color: #ffffff;
  overflow: hidden;
  gap: 40px;
}

.hero-content {
  max-width: 540px;
}

.eyebrow-container {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.gold-line {
  display: inline-block;
  width: 30px;
  height: 2px;
  background-color: #b68d2c;
}

.hero-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 2px;
  color: #b68d2c;
  margin: 0;
  text-transform: uppercase;
}

.hero-content h1 {
  font-family: 'Cinzel', 'Lora', Georgia, serif;
  font-size: 3.4rem;
  font-weight: 700;
  color: #251347;
  line-height: 1.15;
  margin: 16px 0 24px;
}

.gold-italic {
  font-family: 'Lora', Georgia, serif;
  font-style: italic;
  font-weight: 600;
  color: #b68d2c;
}

.hero-content .description {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #4a4a4a;
  margin-bottom: 32px;
}

.dark-purple-text {
  color: #251347;
  font-weight: 700;
}

.button-group {
  display: flex;
  align-items: center;
  gap: 16px;
}

.button-primary {
  padding: 14px 28px;
  border: 1.5px solid #251347;
  border-radius: 6px;
  background: #251347;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.button-primary:hover {
  background: #180a33;
  border-color: #180a33;
  box-shadow: 0 4px 12px rgba(37, 19, 71, 0.2);
}

.button-secondary {
  padding: 14px 28px;
  border: 1.5px solid #251347;
  border-radius: 6px;
  background: #ffffff;
  color: #251347;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.button-secondary:hover {
  background: #f4f0fa;
}

/* --- CARD PANEL DISPLAY --- */
.panel-container {
  position: relative;
  width: 440px;
  height: 480px;
}

.panel-back {
  position: absolute;
  top: 0;
  right: 0;
  width: 420px;
  height: 480px;
  background: #b68d2c;
  border-radius: 28px;
  opacity: 0.15;
}

.panel-front {
  position: absolute;
  top: 15px;
  left: -20px;
  width: 430px;
  height: 460px;
  background: linear-gradient(145deg, #FAF1D2 0%, #FFFDF5 100%);
  border-radius: 28px;
  box-shadow: 0 20px 40px rgba(37, 19, 71, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 30px;
  box-sizing: border-box;
}

.logo-wrapper {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.seal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.university-name {
  margin: 0;
  font-family: 'Cinzel', 'Lora', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #251347;
  line-height: 1.25;
}

.motto {
  margin: 10px 0 0;
  font-size: 0.8rem;
  letter-spacing: 3px;
  font-weight: 700;
  color: #b68d2c;
  text-transform: uppercase;
}

.yellow-line {
  width: 50px;
  height: 3px;
  margin: 18px 0;
  background: #b68d2c;
  border-radius: 2px;
}

.tagline {
  margin: 0;
  font-family: 'Lora', Georgia, serif;
  font-size: 1.05rem;
  font-style: italic;
  color: #4a4a4a;
}

/* --- ADMISSIONS & CALCULATOR PAGE --- */
.admissions-page {
  background-color: #f8fafc;
  padding-bottom: 40px;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
}

.admissions-hero {
  background-color: #251347;
  color: #ffffff;
  padding: 50px 0;
  border-bottom: 4px solid #b68d2c;
}

.admissions-hero .eyebrow {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #b68d2c;
  font-weight: 700;
  margin: 0 0 8px;
}

.admissions-hero h1 {
  font-family: 'Cinzel', Georgia, serif;
  font-size: 2.2rem;
  margin: 0 0 12px;
  color: #ffffff;
}

.admissions-hero .lead {
  max-width: 640px;
  color: #dcd3eb;
  margin: 0;
  line-height: 1.6;
}

.main {
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.card {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.card h2 {
  font-family: 'Cinzel', Georgia, serif;
  font-size: 1.4rem;
  color: #251347;
  margin: 0 0 16px;
}

.muted {
  font-size: 14px;
  color: #64748b;
  margin: 0 0 24px;
}

.requirements-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  font-size: 14px;
}

.requirements-grid ul {
  margin: 0;
  padding-left: 20px;
  color: #475569;
  line-height: 1.9;
}

.requirements-grid li::marker {
  color: #b68d2c;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 24px;
}

.field {
  display: block;
  font-size: 14px;
}

.field > span {
  display: block;
  font-weight: 600;
  color: #251347;
  margin-bottom: 8px;
}

select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background-color: #ffffff;
  font-size: 14px;
  color: #334155;
  outline: none;
  transition: border-color 0.2s ease;
}

select:focus {
  border-color: #b68d2c;
}

.gold-range {
  accent-color: #b68d2c;
}

input[type="range"] {
  width: 100%;
  margin-top: 12px;
}

.range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #94a3b8;
  margin-top: 4px;
}

.payment-terms {
  margin-bottom: 24px;
}

.pill-group {
  display: flex;
  gap: 10px;
}

.pill {
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  border: 1.5px solid #cbd5e1;
  background-color: #ffffff;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pill.active {
  background-color: #251347;
  border-color: #251347;
  color: #ffffff;
  font-weight: 600;
}

.pill:hover:not(.active) {
  border-color: #b68d2c;
  color: #251347;
}

.table-wrap {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

thead {
  background-color: #f7f4ec;
  color: #251347;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.5px;
}

th,
td {
  padding: 12px 18px;
  text-align: left;
}

.align-right {
  text-align: right;
}

.align-left {
  text-align: left;
}

tbody tr {
  border-top: 1px solid #f1f5f9;
}

.muted-row {
  color: #64748b;
}

.total-row {
  background-color: #f7f4ec;
  border-top: 2px solid #b68d2c;
  font-weight: 700;
  color: #251347;
  font-size: 15px;
}

.fine-print {
  font-size: 12px;
  color: #94a3b8;
  margin: 16px 0 0;
}

.cta {
  text-align: center;
  padding: 16px 0;
}

.large-btn {
  padding: 16px 36px;
  font-size: 1rem;
}

.site-footer {
  border-top: 1px solid #e2e8f0;
  padding: 24px;
  text-align: center;
  font-size: 13px;
  color: #94a3b8;
  background-color: #ffffff;
}

/* RESPONSIVE STYLES */
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    padding: 40px 24px;
    text-align: center;
  }
  .hero-content {
    max-width: 100%;
  }
  .eyebrow-container {
    justify-content: center;
  }
  .button-group {
    justify-content: center;
  }
  .panel-container {
    width: 100%;
    max-width: 400px;
    height: 440px;
  }
  .panel-back {
    width: 100%;
  }
  .panel-front {
    width: 100%;
    left: 0;
  }
  .form-grid, .requirements-grid {
    grid-template-columns: 1fr;
  }
}
</style>
