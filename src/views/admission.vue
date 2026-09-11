<template>
  <div class="page">

    <!-- HERO SECTION -->
    <header class="hero">
      <div class="container">
        <p class="eyebrow">Admissions</p>

        <h1>
          Apply, Estimate, Enroll
          <span>(THIS IS FOR CLASS WORK SAMPLE ONLY)</span>
        </h1>

        <p class="lead">
          Start your journey with us. Review the admission requirements,
          estimate your tuition fees, and learn about the application process.
        </p>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="container main">

      <!-- ADMISSION REQUIREMENTS -->
      <section class="card">
        <h2>Admission Requirements</h2>

        <div class="requirements-grid">

          <ul>
            <li>Original Form 138 (Report Card)</li>
            <li>Certificate of Good Moral Character</li>
            <li>PSA Birth Certificate</li>
            <li>2×2 ID Pictures with white background</li>
          </ul>

          <ul>
            <li>Transfer Credentials for transferees</li>
            <li>Completed admission application form</li>
            <li>Valid school identification</li>
            <li>Other documents required by the department</li>
          </ul>

        </div>
      </section>

      <!-- TUITION FEE CALCULATOR -->
      <section class="card">

        <h2>Tuition Fee Calculator</h2>

        <p class="muted">
          Select your program and units to estimate your fees for one
          semester. This is an estimate only — final assessment is issued
          by the Registrar's Office.
        </p>

        <!-- FORM -->
        <div class="form-grid">

          <!-- PROGRAM -->
          <label class="field">
            <span>Program</span>

            <select v-model="program">
              <option>BS Computer Science</option>
              <option>BS Information Technology</option>
              <option>BS Business Administration</option>
              <option>BS Education</option>
              <option>BS Nursing</option>
            </select>
          </label>

          <!-- YEAR LEVEL -->
          <label class="field">
            <span>Year Level</span>

            <select v-model="yearLevel">
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </label>

          <!-- UNITS -->
          <label class="field">

            <span>
              Units this semester: {{ units }}
            </span>

            <input
              type="range"
              min="12"
              max="27"
              v-model="units"
            />

            <div class="range-labels">
              <span>12</span>
              <span>27</span>
            </div>

          </label>

        </div>

        <!-- PAYMENT TERMS -->
        <div class="field payment-terms">

          <span>Payment terms</span>

          <div class="button-group">

            <button
              type="button"
              class="pill"
              :class="{ active: paymentTerms === 'Full payment' }"
              @click="paymentTerms = 'Full payment'"
            >
              Full payment
            </button>

            <button
              type="button"
              class="pill"
              :class="{ active: paymentTerms === '3 installments' }"
              @click="paymentTerms = '3 installments'"
            >
              3 installments
            </button>

            <button
              type="button"
              class="pill"
              :class="{ active: paymentTerms === '5 installments' }"
              @click="paymentTerms = '5 installments'"
            >
              5 installments
            </button>

          </div>

        </div>

        <!-- FEE TABLE -->
        <div class="table-wrap">

          <table>

            <thead>
              <tr>
                <th class="align-left">
                  Schedule of Fees
                </th>

                <th class="align-right">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>

              <!-- TUITION -->
              <tr>
                <td>
                  Tuition Fee
                  ({{ units }} units × ₱650)
                </td>

                <td class="align-right">
                  ₱{{ tuitionFee.toLocaleString() }}
                </td>
              </tr>

              <!-- LABORATORY -->
              <tr>
                <td>
                  Laboratory Fee
                  ({{ units }} units × ₱150)
                </td>

                <td class="align-right">
                  ₱{{ laboratoryFee.toLocaleString() }}
                </td>
              </tr>

              <!-- MISCELLANEOUS -->
              <tr>
                <td>
                  Miscellaneous Fee
                  (8% of tuition)
                </td>

                <td class="align-right">
                  ₱{{ miscellaneousFee.toLocaleString() }}
                </td>
              </tr>

              <!-- OTHER FEES -->
              <tr class="muted-row">
                <td>Registration Fee</td>

                <td class="align-right">
                  ₱750
                </td>
              </tr>

              <tr class="muted-row">
                <td>Library Fee</td>

                <td class="align-right">
                  ₱500
                </td>
              </tr>

              <tr class="muted-row">
                <td>Athletic Fee</td>

                <td class="align-right">
                  ₱350
                </td>
              </tr>

              <tr class="muted-row">
                <td>Medical & Dental Fee</td>

                <td class="align-right">
                  ₱400
                </td>
              </tr>

              <tr class="muted-row">
                <td>Guidance & Testing Fee</td>

                <td class="align-right">
                  ₱300
                </td>
              </tr>

              <tr class="muted-row">
                <td>ID & Insurance Fee</td>

                <td class="align-right">
                  ₱450
                </td>
              </tr>

              <tr class="muted-row">
                <td>Student Organization Fee</td>

                <td class="align-right">
                  ₱250
                </td>
              </tr>

            </tbody>

            <!-- TOTAL -->
            <tfoot>

              <tr class="total-row">

                <td>
                  Total Assessment ({{ yearLevel }})
                </td>

                <td class="align-right">
                  ₱{{ totalAssessment.toLocaleString() }}
                </td>

              </tr>

            </tfoot>

          </table>

        </div>

        <p class="fine-print">
          * Rates shown are sample figures for demonstration purposes.
          Replace with your institution's actual schedule of fees.
        </p>

      </section>

      <!-- ADMISSION PROCESS / REQUIREMENTS / PROGRAMS -->
      <section class="preview-section">

        <div class="preview-header">

          <p class="preview-eyebrow">
            JOIN OUR COMMUNITY
          </p>

          <h2>
            Admissions
          </h2>

        </div>

        <div class="preview-grid">

          <!-- ADMISSION PROCESS -->
          <div class="preview-card">

            <div class="icon-circle">
              📋
            </div>

            <h3>
              Admission Process
            </h3>

            <ol class="step-list">

              <li>
                <span>1</span>
                Submit online application form via the student portal.
              </li>

              <li>
                <span>2</span>
                Take the CPU Placement Examination.
              </li>

              <li>
                <span>3</span>
                Undergo interview with department heads if applicable.
              </li>

              <li>
                <span>4</span>
                Pay enrollment fees and register for classes.
              </li>

            </ol>

            <button
              type="button"
              class="link-btn"
              @click="showApplicationMessage"
            >
              Learn more →
            </button>

          </div>

          <!-- REQUIREMENTS -->
          <div class="preview-card">

            <div class="icon-circle">
              📄
            </div>

            <h3>
              Requirements
            </h3>

            <ul class="check-list">

              <li>
                <span class="check">✓</span>
                Original Form 138 (Report Card)
              </li>

              <li>
                <span class="check">✓</span>
                Certificate of Good Moral Character
              </li>

              <li>
                <span class="check">✓</span>
                PSA Birth Certificate
              </li>

              <li>
                <span class="check">✓</span>
                2×2 ID Pictures
              </li>

              <li>
                <span class="check">✓</span>
                Transfer Credentials for transferees
              </li>

            </ul>

            <button
              type="button"
              class="link-btn"
              @click="showRequirementsMessage"
            >
              View full checklist →
            </button>

          </div>

          <!-- PROGRAMS -->
          <div class="preview-card">

            <div class="icon-circle">
              🎓
            </div>

            <h3>
              Programs Offered
            </h3>

            <p class="muted-text">
              We offer a wide range of programs catering to different
              educational stages.
            </p>

            <div class="program-pills">

              <div class="program-pill">
                Kindergarten & Elementary
              </div>

              <div class="program-pill">
                Junior & Senior High School
              </div>

              <div class="program-pill">
                Undergraduate Programs
              </div>

              <div class="program-pill">
                School of Graduate Studies
              </div>

            </div>

          </div>

        </div>

      </section>

      <!-- CTA -->
      <section class="cta">

        <button
          type="button"
          class="primary-btn"
          @click="startApplication"
        >
          Start Your Application
        </button>

        <p v-if="message" class="message">
          {{ message }}
        </p>

      </section>

    </main>

    <!-- FOOTER -->
    <footer class="site-footer">
      © 2026 University Name. All rights reserved.
    </footer>

  </div>
</template>


<script setup>
import { ref, computed } from 'vue'

/* PROGRAM */
const program = ref('BS Computer Science')

/* YEAR LEVEL */
const yearLevel = ref('1st Year')

/* UNITS */
const units = ref(21)

/* PAYMENT TERMS */
const paymentTerms = ref('Full payment')

/* MESSAGE */
const message = ref('')


/* TUITION FEE */
const tuitionFee = computed(() => {
  return Number(units.value) * 650
})


/* LABORATORY FEE */
const laboratoryFee = computed(() => {
  return Number(units.value) * 150
})


/* MISCELLANEOUS FEE */
const miscellaneousFee = computed(() => {
  return tuitionFee.value * 0.08
})


/* OTHER FIXED FEES */
const otherFees = 750 + 500 + 350 + 400 + 300 + 450 + 250


/* TOTAL ASSESSMENT */
const totalAssessment = computed(() => {
  return (
    tuitionFee.value +
    laboratoryFee.value +
    miscellaneousFee.value +
    otherFees
  )
})


/* START APPLICATION */
function startApplication() {
  message.value =
    'Application form is ready. This is a class work sample.'
}


/* LEARN MORE */
function showApplicationMessage() {
  message.value =
    'The admission process starts with submitting the online application.'
}


/* REQUIREMENTS */
function showRequirementsMessage() {
  message.value =
    'Please prepare your Form 138, Good Moral Certificate, Birth Certificate, ID pictures, and other required documents.'
}
</script>


<style scoped>

/* =========================
   GLOBAL
========================= */

* {
  box-sizing: border-box;
}

.page {
  min-height: 100vh;
  background-color: #f8fafc;
  color: #334155;
  font-family: Arial, Helvetica, sans-serif;
}


/* =========================
   CONTAINER
========================= */

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}


/* =========================
   HERO
========================= */

.hero {
  background-color: #0f172a;
  color: #ffffff;
  padding: 50px 0;
}

.eyebrow {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #94a3b8;
  margin: 0 0 10px;
  font-weight: 600;
}

.hero h1 {
  font-size: 34px;
  margin: 0 0 16px;
  line-height: 1.2;
}

.hero h1 span {
  display: block;
  font-size: 15px;
  color: #94a3b8;
  margin-top: 10px;
  font-weight: normal;
}

.lead {
  max-width: 700px;
  color: #cbd5e1;
  margin: 0;
  line-height: 1.7;
  font-size: 15px;
}


/* =========================
   MAIN
========================= */

.main {
  padding: 45px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}


/* =========================
   CARD
========================= */

.card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 28px;
  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
}

.card h2 {
  font-size: 22px;
  margin: 0 0 18px;
  color: #251347;
}


/* =========================
   MUTED TEXT
========================= */

.muted {
  font-size: 14px;
  color: #64748b;
  margin: 0 0 26px;
  line-height: 1.6;
}


/* =========================
   REQUIREMENTS
========================= */

.requirements-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  font-size: 14px;
}

.requirements-grid ul {
  margin: 0;
  padding-left: 22px;
  color: #475569;
  line-height: 1.9;
}

.requirements-grid li {
  margin-bottom: 5px;
}


/* =========================
   FORM
========================= */

.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 26px;
}

.field {
  display: block;
  font-size: 14px;
}

.field > span {
  display: block;
  font-weight: 600;
  color: #475569;
  margin-bottom: 8px;
}

select {
  width: 100%;
  padding: 11px 13px;
  border: 1px solid #cbd5e1;
  border-radius: 7px;
  background-color: #ffffff;
  font-size: 14px;
  color: #334155;
}

select:focus {
  outline: none;
  border-color: #251347;
}


/* =========================
   RANGE
========================= */

input[type="range"] {
  width: 100%;
  margin-top: 14px;
  cursor: pointer;
}

.range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #94a3b8;
  margin-top: 5px;
}


/* =========================
   PAYMENT TERMS
========================= */

.payment-terms {
  margin-bottom: 26px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.pill {
  padding: 8px 15px;
  border-radius: 7px;
  font-size: 14px;
  border: 1px solid #cbd5e1;
  background-color: #ffffff;
  color: #475569;
  cursor: pointer;
  transition: 0.2s;
}

.pill:hover {
  border-color: #251347;
}

.pill.active {
  background-color: #0f172a;
  border-color: #0f172a;
  color: #ffffff;
}


/* =========================
   TABLE
========================= */

.table-wrap {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  min-width: 650px;
}

thead {
  background-color: #f1f5f9;
  color: #64748b;
  text-transform: uppercase;
  font-size: 12px;
}

th,
td {
  padding: 12px 16px;
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

tbody tr:hover {
  background-color: #f8fafc;
}

.muted-row {
  color: #64748b;
}

.total-row {
  background-color: #f8fafc;
  border-top: 2px solid #e2e8f0;
  font-weight: 700;
  color: #251347;
}


/* =========================
   FINE PRINT
========================= */

.fine-print {
  font-size: 12px;
  color: #94a3b8;
  margin: 16px 0 0;
}


/* =========================
   ADMISSIONS PREVIEW
========================= */

.preview-section {
  background-color: #f7f8fa;
  border-radius: 14px;
  padding: 35px;
}

.preview-header {
  margin-bottom: 25px;
}

.preview-eyebrow {
  font-size: 12px;
  letter-spacing: 0.08em;
  color: #b68d2c;
  font-weight: 700;
  margin: 0 0 7px;
}

.preview-header h2 {
  color: #251347;
  margin: 0;
  font-size: 28px;
}


/* =========================
   PREVIEW GRID
========================= */

.preview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}


/* =========================
   PREVIEW CARD
========================= */

.preview-card {
  background: #ffffff;
  border-radius: 14px;
  padding: 28px 22px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
}


/* =========================
   ICON
========================= */

.icon-circle {
  width: 46px;
  height: 46px;
  background: #f4f0fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 16px;
}


/* =========================
   PREVIEW HEADINGS
========================= */

.preview-card h3 {
  font-family: Georgia, serif;
  color: #251347;
  font-size: 1.3rem;
  margin: 0 0 17px;
}


/* =========================
   STEP LIST
========================= */

.step-list,
.check-list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  font-size: 0.9rem;
  color: #4a4a4a;
}

.step-list li {
  display: flex;
  gap: 12px;
  margin-bottom: 13px;
  line-height: 1.5;
}

.step-list li span {
  background: #b68d2c;
  color: white;
  width: 21px;
  height: 21px;
  min-width: 21px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
}


/* =========================
   CHECK LIST
========================= */

.check-list li {
  display: flex;
  gap: 10px;
  margin-bottom: 11px;
  line-height: 1.4;
}

.check {
  color: #2e7d32;
  font-weight: bold;
}


/* =========================
   PROGRAMS
========================= */

.muted-text {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 17px;
  line-height: 1.5;
}

.program-pills {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.program-pill {
  border: 1px solid #eaeaea;
  padding: 12px 15px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  color: #251347;
  background: #ffffff;
}


/* =========================
   LINK BUTTON
========================= */

.link-btn {
  margin-top: auto;
  color: #251347;
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: none;
  background: transparent;
  border: none;
  padding: 0;
  text-align: left;
  cursor: pointer;
}

.link-btn:hover {
  text-decoration: underline;
}


/* =========================
   CTA
========================= */

.cta {
  text-align: center;
  padding: 15px 0 25px;
}

.primary-btn {
  background-color: #0f172a;
  color: #ffffff;
  border: none;
  padding: 13px 26px;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.primary-btn:hover {
  background-color: #1e293b;
  transform: translateY(-1px);
}


/* =========================
   MESSAGE
========================= */

.message {
  margin: 15px auto 0;
  max-width: 600px;
  background: #f4f0fa;
  color: #251347;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
}


/* =========================
   FOOTER
========================= */

.site-footer {
  border-top: 1px solid #e2e8f0;
  padding: 25px;
  text-align: center;
  font-size: 13px;
  color: #94a3b8;
  background: #ffffff;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 850px) {

  .preview-grid {
    grid-template-columns: 1fr;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

}


@media (max-width: 640px) {

  .container {
    padding: 0 16px;
  }

  .hero {
    padding: 35px 0;
  }

  .hero h1 {
    font-size: 27px;
  }

  .main {
    padding: 30px 16px;
  }

  .card {
    padding: 20px;
  }

  .requirements-grid {
    grid-template-columns: 1fr;
  }

  .preview-section {
    padding: 25px 18px;
  }

  .button-group {
    flex-direction: column;
  }

  .pill {
    width: 100%;
  }

}

</style>