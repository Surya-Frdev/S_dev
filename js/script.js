const headerScroll = document.getElementById('headerScroll');

window.addEventListener('scroll', () => {
    let screenSize = window.innerWidth; // Get screen width dynamically

    if (window.scrollY > 50) {
        headerScroll.classList.add('scrolled');
        headerScroll.style.padding = "30px 0";
        headerScroll.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    } else {
        if (screenSize < 768) {
            headerScroll.style.padding = "30px 0";
        } else {
            headerScroll.classList.remove('scrolled');
            headerScroll.style.padding = "30px 0";
        }
        headerScroll.style.boxShadow = "none"; // Reset shadow when scrolling back up
    }
});



document.addEventListener('DOMContentLoaded', () => {
    // Hero section animation
    const heroSection = document.getElementById('heroSection');
    if (heroSection) {
        heroSection.classList.add('animate');
    }

    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const userName = document.getElementById('userName').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (userName.length < 6) {
                alert('Name must be at least 6 characters long.');
                return false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return false;
            }

            alert('Form submitted successfully!');
            document.getElementById('userName').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            return true;
        });
    }

        const menuToggle = document.querySelector('#menu-toggle');
        const responsiveBar = document.querySelector('.responsive-bar');
    
        // Create a backdrop element
        const backdrop = document.createElement('div');
        backdrop.classList.add('backdrop');
        document.body.appendChild(backdrop); // Add the backdrop to the body
    
        if (menuToggle && responsiveBar) {
            // Handle menu toggle change
            menuToggle.addEventListener('change', function () {
                const isMenuVisible = this.checked;
                responsiveBar.style.display = isMenuVisible ? 'flex' : 'none';
                backdrop.style.display = isMenuVisible ? 'block' : 'none';
    
                // Toggle the no-scroll class on the body
                if (isMenuVisible) {
                    document.body.classList.add('no-scroll');
                } else {
                    document.body.classList.remove('no-scroll');
                }
            });
    
            // Close the menu only when clicking anchor tags inside the responsive bar
            const responsiveLinks = responsiveBar.querySelectorAll('a');
            responsiveLinks.forEach((link) => {
                link.addEventListener('click', () => {
                    menuToggle.checked = false; // Uncheck the toggle
                    responsiveBar.style.display = 'none';
                    backdrop.style.display = 'none';
                    document.body.classList.remove('no-scroll'); // Enable scrolling
                });
            });
    
            // Prevent closing the menu when clicking outside
            backdrop.addEventListener('click', (event) => {
                // Do nothing when clicking on the backdrop itself
                event.stopPropagation();
            });
    
            // Allow menu toggle to close the menu
            menuToggle.addEventListener('click', () => {
                if (menuToggle.checked) {
                    document.body.classList.add('no-scroll');
                } else {
                    responsiveBar.style.display = 'none';
                    backdrop.style.display = 'none';
                    document.body.classList.remove('no-scroll');
                }
            });
        } else {
            console.error('Menu toggle or responsive bar element not found.');
        }    
});
