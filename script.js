/**
 * Reformation Body Fitness - Core Interactive Script
 * Handles BMI & Calorie Calculator, Live Gym Status, WhatsApp Lead Capture,
 * Modal dialogues, and Smooth Animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  const GYM_PHONE = '917000250548';

  // 1. LIVE GYM OPEN / CLOSED STATUS
  initLiveGymStatus();

  // 2. MOBILE NAVIGATION DRAWER
  initMobileDrawer();

  // 3. BMI & GOAL CALCULATOR
  initBmiCalculator(GYM_PHONE);

  // 4. FREE TRIAL MODAL & PASSCODE GENERATOR
  initTrialModal(GYM_PHONE);

  // 5. FAQ ACCORDION
  initFaqAccordion();

  // 6. PROGRAM CARD QUICK-BOOKING TRIGGERS
  initProgramTriggers();
});

/**
 * Checks current time and updates the live shift badge in real-time
 */
function initLiveGymStatus() {
  const statusEl = document.getElementById('gym-open-status');
  if (!statusEl) return;

  function updateStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 1 = Mon ... 6 = Sat
    const hour = now.getHours();
    const minute = now.getMinutes();
    const timeVal = hour + minute / 60;

    let isOpen = false;
    let statusText = '';

    if (day === 0) {
      // Sunday: 7:00 AM to 11:00 AM
      if (timeVal >= 7.0 && timeVal < 11.0) {
        isOpen = true;
        statusText = '🟢 OPEN NOW (Sunday Batch: 7–11 AM)';
      } else {
        statusText = '🔴 CLOSED (Opens Monday at 6:00 AM)';
      }
    } else {
      // Mon - Sat
      if (timeVal >= 6.0 && timeVal < 11.0) {
        isOpen = true;
        statusText = '🟢 OPEN NOW (Morning Shift: 6–11 AM)';
      } else if (timeVal >= 17.0 && timeVal < 22.0) {
        isOpen = true;
        statusText = '🟢 OPEN NOW (Evening Shift: 5–10 PM)';
      } else if (timeVal < 6.0) {
        statusText = '🟡 OPENS TODAY AT 6:00 AM';
      } else if (timeVal >= 11.0 && timeVal < 17.0) {
        statusText = '🟡 OPENS TODAY AT 5:00 PM (Evening Shift)';
      } else {
        statusText = '🔴 CLOSED FOR THE NIGHT (Opens 6:00 AM)';
      }
    }

    statusEl.textContent = statusText;
  }

  updateStatus();
  setInterval(updateStatus, 60000); // Check every minute
}

/**
 * Mobile Navigation Drawer toggle logic
 */
function initMobileDrawer() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link, .mobile-drawer .open-trial-modal');

  if (!hamburgerBtn || !mobileDrawer) return;

  function openDrawer() {
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close when tapping outside the drawer
  document.addEventListener('click', (e) => {
    if (mobileDrawer.classList.contains('open') && 
        !mobileDrawer.contains(e.target) && 
        !hamburgerBtn.contains(e.target)) {
      closeDrawer();
    }
  });
}

/**
 * Interactive BMI, Daily Calories & Training Track Calculator
 */
function initBmiCalculator(phone) {
  const heightSlider = document.getElementById('calc-height');
  const weightSlider = document.getElementById('calc-weight');
  const heightVal = document.getElementById('height-val');
  const weightVal = document.getElementById('weight-val');
  const ageInput = document.getElementById('calc-age');
  const genderBtns = document.querySelectorAll('.gender-btn');
  const goalChips = document.querySelectorAll('.goal-chip');

  const bmiScoreEl = document.getElementById('bmi-score');
  const bmiStatusEl = document.getElementById('bmi-status');
  const meterIndicator = document.getElementById('meter-indicator');
  const recProgramName = document.getElementById('rec-program-name');
  const recProgramDesc = document.getElementById('rec-program-desc');
  const recCalories = document.getElementById('rec-calories');
  const recFrequency = document.getElementById('rec-frequency');
  const whatsappBtn = document.getElementById('calc-whatsapp-btn');

  if (!heightSlider || !weightSlider) return;

  let state = {
    height: parseInt(heightSlider.value, 10),
    weight: parseInt(weightSlider.value, 10),
    age: parseInt(ageInput ? ageInput.value : 24, 10),
    gender: 'Male',
    goal: 'Fat Loss & Toning'
  };

  function recalculate() {
    const hMeters = state.height / 100;
    const bmi = (state.weight / (hMeters * hMeters)).toFixed(1);
    const bmiNum = parseFloat(bmi);

    bmiScoreEl.textContent = bmi;

    let category = '';
    let categoryColor = '#25d366';
    let meterPercent = 50;

    if (bmiNum < 18.5) {
      category = 'Underweight';
      categoryColor = '#00d2ff';
      meterPercent = Math.max(8, (bmiNum / 18.5) * 25);
    } else if (bmiNum <= 24.9) {
      category = 'Normal & Healthy';
      categoryColor = '#25d366';
      meterPercent = 25 + ((bmiNum - 18.5) / (24.9 - 18.5)) * 30;
    } else if (bmiNum <= 29.9) {
      category = 'Overweight';
      categoryColor = '#ffb703';
      meterPercent = 55 + ((bmiNum - 25.0) / (29.9 - 25.0)) * 25;
    } else {
      category = 'Obese Range';
      categoryColor = '#ff2a5f';
      meterPercent = Math.min(95, 80 + ((bmiNum - 30.0) / 10.0) * 15);
    }

    bmiStatusEl.textContent = category;
    bmiStatusEl.style.color = categoryColor;
    if (meterIndicator) {
      meterIndicator.style.left = `${meterPercent}%`;
    }

    // Basal Metabolic Rate (BMR) Mifflin-St Jeor Formula
    let bmr = 10 * state.weight + 6.25 * state.height - 5 * state.age;
    bmr = state.gender === 'Male' ? bmr + 5 : bmr - 161;

    let targetCalories = Math.round(bmr * 1.35);
    let programTitle = '';
    let programExplanation = '';
    let frequency = '4–5 Days/Week';

    if (state.goal === 'Fat Loss & Toning') {
      targetCalories = Math.round(targetCalories - 450);
      programTitle = 'Strength Training & Caloric Deficit Protocol';
      programExplanation = 'Compound resistance lifts 4 days a week combined with 20 mins Zumba/HIIT cardio to shred body fat while retaining lean muscle tone.';
    } else if (state.goal === 'Muscle Hypertrophy') {
      targetCalories = Math.round(targetCalories + 350);
      programTitle = 'Hypertrophy & Progressive Overload Split';
      programExplanation = 'Dedicated Push-Pull-Legs split focusing on mechanical tension, progressive weights, and a slight protein surplus.';
      frequency = '5 Days/Week';
    } else if (state.goal === 'Zumba & Dance Fitness') {
      targetCalories = Math.round(targetCalories - 300);
      programTitle = 'Dance Cardio & Core Endurance';
      programExplanation = 'High-calorie burn evening Zumba batches to boost cardiovascular stamina, agility, and mental wellness.';
      frequency = '3–4 Days/Week';
    } else if (state.goal === 'Functional & Stamina') {
      targetCalories = Math.round(targetCalories - 200);
      programTitle = 'Functional HIIT & Turf Circuit';
      programExplanation = 'Kettlebell complexes, battle ropes, and sled conditioning to build athletic power and cardiovascular conditioning.';
      frequency = '4 Days/Week';
    } else {
      // Yoga & Mobility
      programTitle = 'Mobility, Flexibility & Core Strength';
      programExplanation = 'Postural alignment, flexibility drills, and deep breathing routines to relieve stiff joints and build durable stability.';
      frequency = '3–5 Days/Week';
    }

    recProgramName.textContent = programTitle;
    recProgramDesc.textContent = programExplanation;
    recCalories.textContent = `~${targetCalories.toLocaleString()} kcal`;
    recFrequency.textContent = frequency;

    // Prepare WhatsApp URL
    const msg = `Hi Reformation Body Fitness! 👋%0A%0AI used your website's Fitness Calculator:%0A• *Height/Weight:* ${state.height}cm / ${state.weight}kg%0A• *BMI:* ${bmi} (${category})%0A• *Goal:* ${state.goal}%0A• *Recommended Program:* ${programTitle}%0A%0AI'd like to book a Free Trial and consult with a trainer for this program!`;
    whatsappBtn.href = `https://wa.me/${phone}?text=${msg}`;
  }

  // Event Listeners for controls
  heightSlider.addEventListener('input', (e) => {
    state.height = parseInt(e.target.value, 10);
    heightVal.textContent = `${state.height} cm`;
    recalculate();
  });

  weightSlider.addEventListener('input', (e) => {
    state.weight = parseInt(e.target.value, 10);
    weightVal.textContent = `${state.weight} kg`;
    recalculate();
  });

  if (ageInput) {
    ageInput.addEventListener('input', (e) => {
      state.age = parseInt(e.target.value, 10) || 24;
      recalculate();
    });
  }

  genderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      genderBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.gender = btn.dataset.gender;
      recalculate();
    });
  });

  goalChips.forEach(chip => {
    chip.addEventListener('click', () => {
      goalChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.goal = chip.dataset.goal;
      recalculate();
    });
  });

  recalculate();
}

/**
 * Modal Popup for Generating Free 1-Day Trial Passes
 */
function initTrialModal(phone) {
  const modal = document.getElementById('trial-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const openBtns = document.querySelectorAll('.open-trial-modal');
  const form = document.getElementById('trial-form');
  const voucherCodeEl = document.getElementById('voucher-code');
  const interestSelect = document.getElementById('trial-interest');

  if (!modal || !form) return;

  function generatePasscode() {
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const code = `RB-VIP-${randomDigits}`;
    if (voucherCodeEl) voucherCodeEl.textContent = code;
    return code;
  }

  function openModal(preselectedProgram) {
    generatePasscode();
    if (preselectedProgram && interestSelect) {
      for (let i = 0; i < interestSelect.options.length; i++) {
        if (interestSelect.options[i].text.toLowerCase().includes(preselectedProgram.toLowerCase())) {
          interestSelect.selectedIndex = i;
          break;
        }
      }
    }
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const prog = btn.getAttribute('data-program');
      openModal(prog);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Handle Form Submission -> Direct to WhatsApp with voucher
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('trial-name').value.trim();
    const userPhone = document.getElementById('trial-phone').value.trim();
    const shift = document.getElementById('trial-shift').value;
    const interest = document.getElementById('trial-interest').value;
    const code = voucherCodeEl ? voucherCodeEl.textContent : 'RB-VIP-PASS';

    const waMessage = `Hi Reformation Body Fitness! 🎟️%0A%0AI'd like to claim my *Free 1-Day Trial Pass*:%0A• *Name:* ${encodeURIComponent(name)}%0A• *Phone:* ${encodeURIComponent(userPhone)}%0A• *Preferred Shift:* ${encodeURIComponent(shift)}%0A• *Interested In:* ${encodeURIComponent(interest)}%0A• *Voucher Passcode:* *${encodeURIComponent(code)}*%0A%0APlease confirm my session slot. Thank you!`;

    const waUrl = `https://wa.me/${phone}?text=${waMessage}`;
    window.open(waUrl, '_blank');
    closeModal();
    form.reset();
  });
}

/**
 * Collapsible Accordion for FAQ
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(other => {
        other.classList.remove('active');
        const btn = other.querySelector('.faq-question');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Connects program buttons to the modal with pre-filled context
 */
function initProgramTriggers() {
  const programBtns = document.querySelectorAll('.program-card .btn');
  programBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // The open-trial-modal class triggers modal with data-program
    });
  });
}
