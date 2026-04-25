const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#subscribeForm');
const message = document.querySelector('#formMessage');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(form).get('email');
  message.textContent = `Thanks — ${email} has been added to the Saltyngget list.`;
  form.reset();
});
