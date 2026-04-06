document.addEventListener('DOMContentLoaded', function() {
    // Distance slider display
    const distanceSlider = document.getElementById('distance');
    const distanceValue = document.getElementById('distance-value');
    
    if (distanceSlider && distanceValue) {
        distanceSlider.addEventListener('input', function() {
            distanceValue.textContent = `${this.value} km`;
        });
    }
    
    // Filter form submission
    const filterForm = document.getElementById('filter-form');
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            findMatches();
        });
    }
    
    // Initial load of matches
    findMatches();
});

function findMatches() {
    const matchesContainer = document.getElementById('matches-container');
    if (!matchesContainer) return;
    
    // Show loading state
    matchesContainer.innerHTML = '<div class="no-matches">Finding matches...</div>';
    
    // Simulate API call delay
    setTimeout(() => {
        // Mock data - in real app, this would come from an API
        const mockMatches = [
            {
                name: "Sarah Johnson",
                university: "University of Colombo",
                subjects: "Mathematics, Physics",
                distance: "2.5 km",
                rating: "4.8",
                availability: "Weekday evenings"
            },
            {
                name: "David Perera",
                university: "University of Moratuwa",
                subjects: "Computer Science, English",
                distance: "3.1 km",
                rating: "4.5",
                availability: "Weekend mornings"
            },
            {
                name: "Priya Fernando",
                university: "University of Kelaniya",
                subjects: "Biology, Chemistry",
                distance: "1.8 km",
                rating: "4.9",
                availability: "Weekday afternoons"
            }
        ];
        
        // Clear container
        matchesContainer.innerHTML = '';
        
        if (mockMatches.length === 0) {
            matchesContainer.innerHTML = '<div class="no-matches">No matches found with your current filters.</div>';
            return;
        }
        
        // Add matches to the page
        mockMatches.forEach(match => {
            const matchCard = document.createElement('div');
            matchCard.className = 'match-card';
            
            matchCard.innerHTML = `
                <div class="match-info">
                    <h4>${match.name}</h4>
                    <p><strong>University:</strong> ${match.university}</p>
                    <p><strong>Subjects:</strong> ${match.subjects}</p>
                    <p><strong>Distance:</strong> ${match.distance} | <strong>Rating:</strong> ${match.rating}/5</p>
                    <p><strong>Availability:</strong> ${match.availability}</p>
                </div>
                <div class="match-actions">
                    <button class="button_1">Message</button>
                    <button class="button_1">Request Session</button>
                </div>
            `;
            
            matchesContainer.appendChild(matchCard);
        });
    }, 1000);
}

// === Logout Functionality ===
const logoutBtn = document.getElementById('logout');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Clear stored user data
        localStorage.removeItem('username');
        localStorage.removeItem('userRole');
        localStorage.removeItem('subjects');
        localStorage.removeItem('userLocation');

        // Optionally clear other data
        // localStorage.clear(); // Clears everything

        alert('You have been logged out.');
        window.location.href = 'login.html';
    });
}