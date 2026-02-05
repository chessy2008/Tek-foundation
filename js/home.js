// script.js

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// blogpage
document.getElementById('toggleBtn').addEventListener('click', function() {
    document.getElementById('fullStory').style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('hideBtn').addEventListener('click', function() {
    document.getElementById('fullStory').style.display = 'none';
    document.getElementById('toggleBtn').style.display = 'inline-block';
});

  function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
  }






const blogPosts = [
    {
        image: 'blog_1.jpg',
        title: 'Random Act Of Care And Kindness',
        summary: 'Empowering women in underserved areas through unexpected kindness.',
        link: '/article/rack.html'
    },
    {
        image: 'WhatsApp Image 2025-07-12 at 11.59.24_8cdfe642.jpg',
        title: 'Aid A Meal Africa',
        summary: 'Fueling students and women in underserved communities with dignified access to meals.',
        link: '/article/santa.html'
    },
    {
        image: 'blog_3.jpg',
        title: 'Project-Santa',
        summary: 'Bringing festive joy to women-led homes in underserved areas.',
        link: '/article/santa.html'
    },
    {
        image: 'blog_4.jpg',
        title: 'Give For Love',
        summary: 'Supporting mothers of children with disabilities in underserved communities.',
        link: '/article/rack.html'
    }
];

const postsContainer = document.getElementById('blogPosts');

blogPosts.forEach(post => {
    postsContainer.innerHTML += `
    <div class="blog-card">
        <div class="card-image">
            <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="card-content">
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
            <a href="${post.link}" class="read-more">Read More →</a>
        </div>
    </div>`;
});



const animateElements = document.querySelectorAll('.animate');

const revealOnScroll = () => {
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


const voicesSection = document.querySelector('.community-voices');

window.addEventListener('scroll', () => {
  const rect = voicesSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    voicesSection.classList.add('show');
  }
});
