(function () {
  const $ = id => document.getElementById(id);

  // Magic Loading & Animation System
  let isCalculating = false;

  function startCalculationMagic() {
    if (isCalculating) return;
    isCalculating = true;

    const calculateBtn = $('calculateBtn');
    const analysisPanel = $('results');
    const rows = document.querySelectorAll('.breakdown-row');
    
    // Button loading state
    calculateBtn.classList.add('loading');
    calculateBtn.querySelector('.btn-text').textContent = 'Analyzing...';
    
    // Show results panel first
    setTimeout(() => {
      analysisPanel.classList.add('show');
      
      // Smooth scroll to results after panel appears
      setTimeout(() => {
        analysisPanel.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }, 300);
    }, 400);
    
    // Reset all rows to calculating state
    rows.forEach(row => {
      row.classList.remove('show');
      row.classList.add('calculating');
    });
    
    // Staggered reveal of calculations
    const revealSequence = [
      { selector: '#monthlyRevenue', delay: 800 },
      { selector: '#adjustedRetention', delay: 1100 },
      { selector: '#ltv', delay: 1500 },
      { selector: '#meetingsNeeded', delay: 1900 },
      { selector: '#meetingCosts', delay: 2200 },
      { selector: '#setupCosts', delay: 2500 },
      { selector: '#totalCAC', delay: 2900 },
      { selector: '#netProfit', delay: 3300 },
      { selector: '#payback', delay: 3700 }
    ];
    
    revealSequence.forEach(({ selector, delay }) => {
      setTimeout(() => {
        const element = $(selector.replace('#', ''));
        const row = element.closest('.breakdown-row');
        row.classList.remove('calculating');
        row.classList.add('show');
        
        // Subtle pop animation
        element.style.transform = 'scale(1.05)';
        setTimeout(() => {
          element.style.transform = 'scale(1)';
        }, 200);
        
      }, delay);
    });
    
    // Show narrative after all calculations are revealed
    setTimeout(() => {
      const narrativeSection = document.querySelector('.sales-narrative');
      narrativeSection.classList.add('show');
    }, 4000);
    
    // Finish calculation
    setTimeout(() => {
      calculateBtn.classList.remove('loading');
      calculateBtn.querySelector('.btn-text').textContent = 'Recalculate ROI';
      isCalculating = false;
    }, 4200);
  }

  // Input handling for live updates (but no auto-calculation)
  const inputs = ["charge", "retention", "closeRate", "costPerMeeting", "setupFee", "conservative"]
    .map(id => $(id));

  // Just store values, don't auto-calculate
  inputs.forEach(el => {
    // No auto-calculation on input changes
  });

  function calculate() {
    const charge = +$("charge").value || 0;
    let retention = +$("retention").value || 0;
    const closeRate = (+$("closeRate").value || 0) / 100;
    const costPerMeeting = +$("costPerMeeting").value || 0;
    const setupFee = +$("setupFee").value || 0;
    const conservative = $("conservative").checked;

    const originalRetention = retention;
    if (conservative) retention = retention * 0.8;

    const ltv = charge * retention;
    const meetingsToCloseOne = closeRate ? 1 / closeRate : 0;
    const meetingCAC = meetingsToCloseOne * costPerMeeting;
    const totalCAC = meetingCAC + setupFee;
    const payback = charge ? (totalCAC / charge).toFixed(1) : "---";
    const netProfit = ltv - totalCAC;

    // Update all breakdown values
    $("monthlyRevenue").textContent = format(charge);
    $("adjustedRetention").textContent = conservative ? 
      `${retention.toFixed(1)} months (${originalRetention} × 0.8)` : 
      `${retention} months`;
    $("ltv").textContent = format(ltv);
    $("meetingsNeeded").textContent = closeRate ? `${Math.round(meetingsToCloseOne)} meetings` : "---";
    $("meetingCosts").textContent = format(meetingCAC);
    $("setupCosts").textContent = format(setupFee);
    $("totalCAC").textContent = format(totalCAC);
    $("netProfit").textContent = netProfit > 0 ? format(netProfit) : format(netProfit);
    $("payback").textContent = payback === "Infinity" ? "---" : `${payback} months`;

    // Generate sales narrative
    generateSalesNarrative(charge, originalRetention, retention, conservative, ltv, meetingsToCloseOne, meetingCAC, setupFee, totalCAC, netProfit, payback);
    
    // Update setup fee heading
    updateSetupFeeHeading(setupFee);
  }

  function generateSalesNarrative(charge, originalRetention, adjustedRetention, conservative, ltv, meetingsNeeded, meetingCAC, setupFee, totalCAC, netProfit, payback) {
    const narrativeElement = $("narrativeText");
    
    let narrative = `<p>So here's what this looks like: A customer pays you <span class="highlight">${format(charge)}</span> per month, and you said they typically stay for <span class="highlight">${originalRetention} months</span>.`;
    
    if (conservative) {
      narrative += ` Since we're being conservative with cold traffic, we've adjusted that down to <span class="highlight">${adjustedRetention.toFixed(1)} months</span>.`;
    }
    
    narrative += ` This means your customer lifetime value is <span class="highlight">${format(ltv)}</span>.</p>`;
    
    narrative += `<p>Now, to get that customer through cold outreach: Based on your <span class="highlight">${((meetingsNeeded ? 1 / meetingsNeeded : 0) * 100).toFixed(0)}% close rate</span>, you'll need about <span class="emphasis">${Math.round(meetingsNeeded)} qualified meetings</span> to close one deal. At <span class="highlight">$300 per meeting</span>, that's <span class="highlight">${format(meetingCAC)}</span> in meeting costs.`;
    
    narrative += ` Add the <span class="highlight">${format(setupFee)} one-time setup</span>, and your total investment to acquire this customer is <span class="highlight">${format(totalCAC)}</span>.</p>`;
    
    if (netProfit > 0) {
      narrative += `<p><span class="profit">Bottom line: You invest ${format(totalCAC)} and get back ${format(ltv)} — that's a profit of ${format(netProfit)} from just your first customer.</span> You'll break even in month ${payback}, and everything after that is pure profit.</p>`;
    } else {
      narrative += `<p><span class="emphasis">With these numbers, you'd need ${Math.abs(payback)} months to break even.</span> You might want to look at improving your close rate or adjusting your pricing to make this more profitable.</p>`;
    }
    
    narrative += `<p>And remember — this is just <span class="emphasis">one customer</span>. Scale this to 10, 20, or 50 customers, and you can see how the numbers start to look pretty attractive.</p>`;
    
    narrativeElement.innerHTML = narrative;
  }

  function updateSetupFeeHeading(setupFee) {
    const headingElement = $("setupFeeHeading");
    headingElement.textContent = `What does the ${format(setupFee)} setup fee cover?`;
  }

  function format(n){
    return n ? "$" + n.toLocaleString() : "---";
  }

  // Initialize with default calculation
  function initializeCalculator() {
    // Hide results panel initially
    const analysisPanel = $('results');
    analysisPanel.classList.remove('show');
    
    // Hide narrative initially
    const narrativeSection = document.querySelector('.sales-narrative');
    narrativeSection.classList.remove('show');
    
    // Hide all calculation rows initially
    const rows = document.querySelectorAll('.breakdown-row');
    rows.forEach(row => {
      row.classList.remove('show');
    });
    
    // Add calculate button event
    $('calculateBtn').addEventListener('click', () => {
      // Hide narrative first (in case of recalculation)
      narrativeSection.classList.remove('show');
      calculate();
      startCalculationMagic();
    });
  }

  // Clean CTA button
  $("contactBtn").onclick = (e) => {
    e.preventDefault();
    
    // Simple button feedback
    const button = e.target.closest('.execute-button');
    button.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
      button.style.transform = 'scale(1)';
      window.location.href = "mailto:sales@yourdomain.com?subject=Free Cold Outbound Test Campaign - ROI Calculator";
    }, 150);
  };

  // No mouse particle effects for clean design

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch(e.key) {
        case 'Enter':
          e.preventDefault();
          $("contactBtn").click();
          break;
        case 'r':
          e.preventDefault();
          // Reset to defaults
          $("charge").value = 1000;
          $("retention").value = 9;
          $("closeRate").value = 10;
          $("costPerMeeting").value = 300;
          $("setupFee").value = 2000;
          $("conservative").checked = true;
          calculate();
          break;
      }
    }
  });

  // Initialize calculator
  initializeCalculator();

  // No audio context needed

})();