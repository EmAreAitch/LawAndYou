const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
  if (mobileMenu.classList.contains('max-h-0')) {
    mobileMenu.classList.remove('max-h-0');
    mobileMenu.classList.add('max-h-screen');
  } else {
    mobileMenu.classList.add('max-h-0');
    mobileMenu.classList.remove('max-h-screen');
  }
});

const testimonials = [
    {
        quote: "Law You went above and beyond to handle my case with professionalism and care. From the very first consultation, I felt heard and supported.",
        name: "pipop",
        handle: "@NOT_PIPO",
        image: "https://placehold.co/64x64/888888/ffffff?text=P"
    },
    {
        quote: "The entire legal team was incredibly knowledgeable and responsive. They kept me informed throughout the entire process and achieved an outcome beyond my expectations.",
        name: "sarah_johnson",
        handle: "@SARAH_LEGAL",
        image: "https://placehold.co/64x64/A8763D/ffffff?text=S"
    },
    {
        quote: "Professional, efficient, and compassionate. They handled my complex case with expertise and made what seemed impossible, possible. Highly recommend!",
        name: "mike_chen",
        handle: "@MIKE_REVIEWS",
        image: "https://placehold.co/64x64/0E2635/ffffff?text=M"
    }
];

let currentIndex = 0;
const dots = document.querySelectorAll('.testimonial-dot');
const quote = document.getElementById('testimonial-quote');
const customerImage = document.getElementById('customer-image');
const customerName = document.getElementById('customer-name');
const customerHandle = document.getElementById('customer-handle');

function updateTestimonial(index) {
    // Fade out
    quote.style.opacity = '0';
    customerImage.style.opacity = '0';
    customerName.style.opacity = '0';
    customerHandle.style.opacity = '0';

    setTimeout(() => {
        // Update content
        quote.innerHTML = `<span class="text-6xl text-primary">"</span>${testimonials[index].quote}`;
        customerImage.src = testimonials[index].image;
        customerName.textContent = testimonials[index].name;
        customerHandle.textContent = testimonials[index].handle;

        // Fade in
        quote.style.opacity = '1';
        customerImage.style.opacity = '1';
        customerName.style.opacity = '1';
        customerHandle.style.opacity = '1';
    }, 150);

    // Update dots
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.remove('bg-gray-medium', 'hover:bg-gray-dark');
            dot.classList.add('bg-accent');
        } else {
            dot.classList.remove('bg-accent');
            dot.classList.add('bg-gray-medium', 'hover:bg-gray-dark');
        }
    });

    currentIndex = index;
}

// Add click event listeners to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateTestimonial(index);
    });
});
