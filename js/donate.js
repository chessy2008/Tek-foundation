const modal = document.getElementById('modal');
  const openBtn = document.querySelector('.open-modal-btn');
  const closeBtn = document.getElementById('close-btn');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
   // Close when clicking outside modal content
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

  function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
  }
