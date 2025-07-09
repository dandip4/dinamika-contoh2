// News Detail JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Memastikan konten terlihat saat halaman dimuat
    document.querySelector('.news-detail-section').style.display = 'block';
    document.querySelector('.news-detail-section').style.opacity = '1';

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            performSearch();
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
    }

    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            window.location.href = `news-list.html?search=${encodeURIComponent(searchTerm)}`;
        }
    }

    // Category links
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
        if (link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const category = this.textContent.split('(')[0].trim();
                window.location.href = `news-list.html?category=${encodeURIComponent(category)}`;
            });
        }
    });

    // Recent post links
    const recentPostItems = document.querySelectorAll('.recent-post-item');
    recentPostItems.forEach(item => {
        if (item) {
            item.addEventListener('click', function() {
                this.style.cursor = 'pointer';
            });
        }
    });

    // Share buttons functionality
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const platform = this.classList.contains('share-facebook') ? 'facebook' :
                               this.classList.contains('share-twitter') ? 'twitter' :
                               this.classList.contains('share-linkedin') ? 'linkedin' :
                               this.classList.contains('share-whatsapp') ? 'whatsapp' : '';
                shareContent(platform);
            });
        }
    });

    function shareContent(platform) {
        const titleElement = document.querySelector('.news-title');
        const excerptElement = document.querySelector('.news-excerpt');
        
        if (!titleElement || !excerptElement) return;
        
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(titleElement.textContent);
        const text = encodeURIComponent(excerptElement.textContent);

        let shareUrl = '';
        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                break;
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${title}%20${url}`;
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor) {
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
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            if (link) {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            }
        });
    }

    // Menangani gambar konten tanpa animasi yang bisa menyebabkan hilang
    const contentImages = document.querySelectorAll('.content-image');
    if (contentImages.length > 0) {
        contentImages.forEach(image => {
            if (image) {
                // Memastikan gambar terlihat
                image.style.opacity = '1';
                image.style.visibility = 'visible';
                image.style.display = 'block';
                
                // Hanya menambahkan efek hover sederhana
                const img = image.querySelector('img');
                if (img) {
                    img.style.transition = 'transform 0.3s ease';
                    image.addEventListener('mouseenter', () => {
                        img.style.transform = 'scale(1.02)';
                    });
                    image.addEventListener('mouseleave', () => {
                        img.style.transform = 'scale(1)';
                    });
                }
            }
        });
    }

    // Efek hover untuk recent post items
    if (recentPostItems.length > 0) {
        recentPostItems.forEach(item => {
            if (item) {
                item.style.transition = 'transform 0.3s ease';
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateX(5px)';
                });
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateX(0)';
                });
            }
        });
    }

    // Loading state untuk search button
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const originalContent = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            setTimeout(() => {
                this.innerHTML = originalContent;
            }, 1000);
        });
    }
}); 