document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');

    // === Navigation: Set active link ===
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('current');
        }
    });

    // === Newsletter Form Submission ===
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! We'll keep you updated.`);
            this.reset();
        });
    }

    // === Logout Functionality ===
    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // In real app, clear session/token here
            alert('You have been logged out.');
            window.location.href = 'login.html';
        });
    }

    // === Upload Resource Modal ===
    const uploadModal = document.getElementById('upload-modal');
    if (uploadModal) {
        const uploadBtn = document.getElementById('upload-resource');
        const closeBtn = uploadModal.querySelector('.close');

        uploadBtn.addEventListener('click', function () {
            uploadModal.style.display = 'block';
        });

        closeBtn.addEventListener('click', function () {
            uploadModal.style.display = 'none';
        });

        window.addEventListener('click', function (e) {
            if (e.target === uploadModal) {
                uploadModal.style.display = 'none';
            }
        });

        // Upload Form Submission
        const uploadForm = document.getElementById('upload-form');
        if (uploadForm) {
            uploadForm.addEventListener('submit', function (e) {
                e.preventDefault();
                alert('Resource uploaded successfully!');
                uploadModal.style.display = 'none';
                this.reset();
            });
        }
    }

    // === Category Filtering Buttons ===
    const categoryButtons = document.querySelectorAll('.category-button');
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function () {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                console.log(`Filtering by category: ${this.dataset.category}`);
            });
        });
    }

    // === Load User Data on Dashboard ===
    if (currentPage === 'dashboard.html') {
        const username = localStorage.getItem('username') || 'User';
        const userRole = localStorage.getItem('userRole') || 'Student';
        const subjects = localStorage.getItem('subjects') || 'Not set';
        const location = localStorage.getItem('userLocation') || 'Loading...';

        document.getElementById('username').textContent = username;
        document.getElementById('user-role').textContent = userRole;
        document.getElementById('user-subjects').textContent = subjects;
        document.getElementById('user-location').textContent = location;

        // Optional: Simulate loading stats or upcoming sessions
        setTimeout(() => {
            const completedSessions = localStorage.getItem('completedSessions') || 0;
            const volunteerPoints = localStorage.getItem('volunteerPoints') || 0;
            const rating = localStorage.getItem('rating') || 'Not rated yet';

            document.querySelector('#user-stats p:nth-child(1)').textContent = `Completed Sessions: ${completedSessions}`;
            document.querySelector('#user-stats p:nth-child(2)').textContent = `Volunteer Points: ${volunteerPoints}`;
            document.querySelector('#user-stats p:nth-child(3)').textContent = `Rating: ${rating}`;
        }, 500);
    }
});