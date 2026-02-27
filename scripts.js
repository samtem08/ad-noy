// 3. Mobile Menu Toggle Logic
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Change icon between menu and x
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });

    // Close menu when clicking outside of the menu/toggle
    document.addEventListener('click', (e) => {
        if (!navMenu.classList.contains('active')) {
            return;
        }

        const clickedInsideMenu = navMenu.contains(e.target);
        const clickedToggle = mobileToggle.contains(e.target);

        if (!clickedInsideMenu && !clickedToggle) {
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    });
}

// 4. Form Submission Simulation
const contactForm = document.querySelector('.contact-form form');
const toast = document.getElementById('success-toast');

if (contactForm && toast) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        
        // Show toast
        toast.style.display = 'flex';
        contactForm.reset();

        // Hide toast after 4 seconds
        setTimeout(() => {
            toast.style.display = 'none';
        }, 4000);
    });
}

// Show "Other Project Type" input when needed
const projectTypeSelect = document.getElementById('project-type');
const otherProjectGroup = document.getElementById('other-project-group');
const otherProjectInput = document.getElementById('other-project-type');

if (projectTypeSelect && otherProjectGroup && otherProjectInput) {
    const syncProjectTypeField = () => {
        const showOther = projectTypeSelect.value === 'other';
        otherProjectGroup.style.display = showOther ? 'block' : 'none';
        otherProjectInput.required = showOther;
        if (!showOther) {
            otherProjectInput.value = '';
        }
    };

    projectTypeSelect.addEventListener('change', syncProjectTypeField);
    syncProjectTypeField();
}
