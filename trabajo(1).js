// Mobile menu toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-times');
            this.querySelector('i').classList.toggle('fa-bars');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if(this.classList.contains('filter-btn')) return;
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if(navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    document.querySelector('.menu-toggle i').classList.remove('fa-times');
                    document.querySelector('.menu-toggle i').classList.add('fa-bars');
                }
            });
        });

        // Gallery filter
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active button
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                const galleryItems = document.querySelectorAll('.gallery-item');
                
                if(filter === 'all') {
                    galleryItems.forEach(item => item.style.display = 'block');
                } else {
                    galleryItems.forEach(item => {
                        if(item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                }
            });
        });

        // Scroll animation
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            
            // Add shadow to header when scrolling
            if(scrollPosition > 20) {
                document.querySelector('header').style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                document.querySelector('header').style.boxShadow = 'none';
            }
        });