// Homepage Tag Filtering and Interactive Features
document.addEventListener('DOMContentLoaded', function() {
  // Tag filtering functionality
  const tagFilters = document.querySelectorAll('.tag-filter');
  const projectItems = document.querySelectorAll('.project-item');
  
  tagFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      const selectedTag = this.getAttribute('data-tag');
      
      // Update active filter button
      tagFilters.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects
      projectItems.forEach(item => {
        const itemTags = item.getAttribute('data-tags').trim().split(' ');
        
        if (selectedTag === 'all' || itemTags.includes(selectedTag)) {
          item.classList.remove('hidden');
          // Add fade-in animation
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add loading animation for images
  const images = document.querySelectorAll('.featured-image, .project-image');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    
    // Set initial opacity for smooth loading
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
  });
  
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe project items for scroll animations
  projectItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
  });
  
  // Add hover effects for better UX
  const featuredItems = document.querySelectorAll('.featured-item, .project-item');
  featuredItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});
