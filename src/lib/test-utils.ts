// Test utilities for the portfolio application

export const testContactForm = () => {
  const form = document.querySelector('#contact form') as HTMLFormElement;
  if (!form) {
    console.error('Contact form not found');
    return false;
  }

  // Test form validation
  const nameInput = form.querySelector('input[name="name"]') as HTMLInputElement;
  const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement;
  const messageInput = form.querySelector('textarea[name="message"]') as HTMLTextAreaElement;

  if (!nameInput || !emailInput || !messageInput) {
    console.error('Form inputs not found');
    return false;
  }

  console.log('✓ Contact form structure is correct');
  return true;
};

export const testNavigation = () => {
  const navLinks = document.querySelectorAll('nav button, nav a');
  const sections = ['home', 'about', 'projects', 'contact'];
  
  let allSectionsExist = true;
  sections.forEach(section => {
    const element = document.querySelector(`#${section}`);
    if (!element) {
      console.error(`Section #${section} not found`);
      allSectionsExist = false;
    }
  });

  if (allSectionsExist) {
    console.log('✓ All navigation sections exist');
  }

  return allSectionsExist && navLinks.length > 0;
};

export const testAccessibility = () => {
  const issues = [];

  // Check for alt attributes on images
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.alt) {
      issues.push(`Image ${index + 1} missing alt attribute`);
    }
  });

  // Check for proper heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let hasH1 = false;
  headings.forEach(heading => {
    if (heading.tagName === 'H1') {
      hasH1 = true;
    }
  });

  if (!hasH1) {
    issues.push('No H1 heading found');
  }

  if (issues.length === 0) {
    console.log('✓ Basic accessibility checks passed');
    return true;
  } else {
    console.error('Accessibility issues found:', issues);
    return false;
  }
};

export const runAllTests = () => {
  console.log('Running portfolio tests...');
  
  const results = {
    contactForm: testContactForm(),
    navigation: testNavigation(),
    accessibility: testAccessibility()
  };

  const allPassed = Object.values(results).every(result => result === true);
  
  if (allPassed) {
    console.log('🎉 All tests passed!');
  } else {
    console.log('❌ Some tests failed. Check the console for details.');
  }

  return results;
};

// Make available in development console
if (typeof window !== 'undefined') {
  (window as any).portfolioTests = {
    testContactForm,
    testNavigation,
    testAccessibility,
    runAllTests
  };
}