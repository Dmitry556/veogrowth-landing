
// Performance monitoring script
// This is loaded after the initial page render to avoid blocking critical content

// Track interaction metrics
function trackInteractionMetrics() {
  let firstInteractionTime = 0;
  
  function onFirstInteraction() {
    if (firstInteractionTime === 0) {
      firstInteractionTime = performance.now();
      console.log(`⚡ Time to First Interaction: ${Math.round(firstInteractionTime)}ms`);
      
      // Remove event listeners after first interaction is tracked
      ['click', 'keydown', 'scroll', 'touchstart'].forEach(type => {
        document.removeEventListener(type, onFirstInteraction, { capture: true });
      });
    }
  }
  
  // Listen for user interactions
  ['click', 'keydown', 'scroll', 'touchstart'].forEach(type => {
    document.addEventListener(type, onFirstInteraction, { capture: true, passive: true });
  });
}

// Track resource loading
function trackResourceLoading() {
  const resources = performance.getEntriesByType('resource');
  let totalSize = 0;
  let imageSize = 0;
  let scriptSize = 0;
  let cssSize = 0;
  let fontSize = 0;
  
  resources.forEach(resource => {
    // Some resources don't have transferSize
    const size = resource.transferSize || 0;
    totalSize += size;
    
    // Categorize by resource type
    if (resource.name.match(/\.(jpe?g|png|gif|svg|webp)/i)) {
      imageSize += size;
    } else if (resource.name.match(/\.(js)/i)) {
      scriptSize += size;
    } else if (resource.name.match(/\.(css)/i)) {
      cssSize += size;
    } else if (resource.name.match(/\.(woff2?|ttf|otf)/i)) {
      fontSize += size;
    }
  });
  
  // Log resource sizes in KB
  console.log('📦 Resource Sizes:');
  console.log(`📦 Total: ${Math.round(totalSize / 1024)}KB`);
  console.log(`🖼️ Images: ${Math.round(imageSize / 1024)}KB`);
  console.log(`📜 Scripts: ${Math.round(scriptSize / 1024)}KB`);
  console.log(`🎨 CSS: ${Math.round(cssSize / 1024)}KB`);
  console.log(`🔤 Fonts: ${Math.round(fontSize / 1024)}KB`);
}

// Start monitoring
trackInteractionMetrics();

// Track resources after everything has loaded
window.addEventListener('load', () => {
  setTimeout(trackResourceLoading, 2000);
});
