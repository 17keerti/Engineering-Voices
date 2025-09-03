// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
});

// Play episode button functionality
document.querySelectorAll('.btn-play').forEach(button => {
    button.addEventListener('click', function() {
        const episodeTitle = this.closest('.episode-card').querySelector('h3').textContent;
        const guestName = this.closest('.episode-card').querySelector('.guest-name').textContent;
        
        // Show a modal or alert (for demo purposes)
        showEpisodeModal(episodeTitle, guestName);
    });
});

// Episode modal function
function showEpisodeModal(title, guest) {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'episode-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                <p><strong>Guest:</strong> ${guest}</p>
                <p>This is a demo website. In a real implementation, this would play the actual podcast episode or redirect to your podcast platform.</p>
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="window.open('https://open.spotify.com', '_blank')">
                        <i class="fab fa-spotify"></i> Listen on Spotify
                    </button>
                    <button class="btn btn-secondary" onclick="window.open('https://podcasts.apple.com', '_blank')">
                        <i class="fab fa-apple"></i> Listen on Apple Podcasts
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    // Add modal content styles
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: white;
        border-radius: 20px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        transform: translateY(20px);
        transition: transform 0.3s ease;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    `;
    
    // Add modal header styles
    const modalHeader = modal.querySelector('.modal-header');
    modalHeader.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #e2e8f0;
    `;
    
    // Add close button styles
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.style.cssText = `
        font-size: 1.5rem;
        cursor: pointer;
        color: #718096;
        transition: color 0.3s ease;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    `;
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.color = '#667eea';
        closeBtn.style.background = '#f7fafc';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.color = '#718096';
        closeBtn.style.background = 'transparent';
    });
    
    // Add modal actions styles
    const modalActions = modal.querySelector('.modal-actions');
    modalActions.style.cssText = `
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
        flex-wrap: wrap;
    `;
    
    // Add button styles
    modalActions.querySelectorAll('.btn').forEach(btn => {
        btn.style.cssText = `
            flex: 1;
            min-width: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        `;
    });
    
    // Add to page
    document.body.appendChild(modal);
    
    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'translateY(0)';
    }, 10);
    
    // Close functionality
    const closeModal = () => {
        modal.style.opacity = '0';
        modalContent.style.transform = 'translateY(20px)';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// Submit story and suggest guest buttons
document.querySelectorAll('.story-actions .btn').forEach(button => {
    button.addEventListener('click', function() {
        const action = this.textContent.trim();
        showContactModal(action);
    });
});

// Contact modal function
function showContactModal(action) {
    const modal = document.createElement('div');
    modal.className = 'contact-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${action}</h3>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                <p>This is a demo website. In a real implementation, this would open a contact form or email client.</p>
                <p>For now, you can reach us at: <strong>hello@engineeringvoices.com</strong></p>
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="window.open('mailto:hello@engineeringvoices.com', '_blank')">
                        <i class="fas fa-envelope"></i> Send Email
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Apply same modal styles as episode modal
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: white;
        border-radius: 20px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        transform: translateY(20px);
        transition: transform 0.3s ease;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    `;
    
    const modalHeader = modal.querySelector('.modal-header');
    modalHeader.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #e2e8f0;
    `;
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.style.cssText = `
        font-size: 1.5rem;
        cursor: pointer;
        color: #718096;
        transition: color 0.3s ease;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    `;
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.color = '#667eea';
        closeBtn.style.background = '#f7fafc';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.color = '#718096';
        closeBtn.style.background = 'transparent';
    });
    
    const modalActions = modal.querySelector('.modal-actions');
    modalActions.style.cssText = `
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'translateY(0)';
    }, 10);
    
    const closeModal = () => {
        modal.style.opacity = '0';
        modalContent.style.transform = 'translateY(20px)';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// Simple intersection observer for subtle animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.episode-card, .guest-card, .org-card');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Add subtle animation to stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(20px)';
        stat.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        stat.style.animationDelay = `${index * 0.2}s`;
        observer.observe(stat);
    });
});

// Enhanced hover effects for organization cards
document.querySelectorAll('.org-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.12)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
    });
});

// Enhanced episode card interactions
document.querySelectorAll('.episode-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const image = this.querySelector('.episode-image');
        if (image) {
            image.style.transform = 'scale(1.02)';
            image.style.transition = 'transform 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const image = this.querySelector('.episode-image');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});

// Simple loading animation for the page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Simple scroll-triggered animations for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat-number');
            stats.forEach((stat, index) => {
                const finalValue = stat.textContent;
                const numericValue = parseInt(finalValue);
                
                if (!isNaN(numericValue)) {
                    setTimeout(() => {
                        animateNumber(stat, 0, numericValue, 1500);
                    }, index * 200);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Simple number counting animation
function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current + '+';
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Observe stats section
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Simple parallax effect to floating cards
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        const speed = 0.3 + (index * 0.05);
        const yPos = -(scrolled * speed);
        card.style.transform = `translateY(${yPos}px)`;
    });
});
