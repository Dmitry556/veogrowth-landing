
import { generateSitemap } from './generateSitemap';

// Function to run all pre-build scripts
const runPreBuildScripts = async () => {
  console.log('Running pre-build scripts...');
  
  // Generate sitemap
  await generateSitemap();
  
  console.log('Pre-build scripts completed successfully!');
};

// Execute the scripts
runPreBuildScripts().catch(error => {
  console.error('Error running pre-build scripts:', error);
  process.exit(1);
});
