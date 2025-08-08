const menuButton = document.getElementById('menu-button');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.page-section');
const darkToggle = document.getElementById('darkToggle');
const htmlEl = document.documentElement;
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
});

// Set initial icon
function setDarkModeIcon() {
    const isDark = htmlEl.classList.contains('dark');
    sunIcon.classList.toggle('hidden', !isDark);
    moonIcon.classList.toggle('hidden', isDark);
}

darkToggle.addEventListener('click', () => {
    htmlEl.classList.toggle('dark');
    setDarkModeIcon();
});

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const sectionId = btn.getAttribute('data-section');
        sections.forEach(section => {
            section.classList.toggle('hidden', section.id !== sectionId);
        });

        // If on mobile, close menu after click
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuOpen.classList.remove('hidden');
            menuClose.classList.add('hidden');
        }
    });
});

setDarkModeIcon();