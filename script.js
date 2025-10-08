// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      // Animate skill bars
      if(entry.target.classList.contains('skills')){
        document.querySelectorAll('.skill-fill').forEach(bar=>{
          bar.style.width = bar.dataset.width;
        });
      }
    }
  });
},{threshold:0.2});

// Observe all animatable elements
document.querySelectorAll('.section-title, .profile-header, .skill, .timeline, .project-card, .testimonial, form').forEach(el=>{
  observer.observe(el);
});

// Form Feedback
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');
form.addEventListener('submit', e=>{
  e.preventDefault();
  feedback.textContent = `Thank you, ${form.fullname.value}! Your message has been sent.`;
  form.reset();
});
