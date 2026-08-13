document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Drawer Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            mobileDrawer.classList.toggle('open');
            document.body.style.overflow = mobileDrawer.classList.contains('open') ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // 2. Header Scroll Background Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Menu Filter Tabs Switcher
    const tabBtns = document.querySelectorAll('.tab-btn');
    const categoryBlocks = document.querySelectorAll('.menu-category-block');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetCategory = btn.getAttribute('data-category');

            tabBtns.forEach(b => b.classList.remove('active'));
            categoryBlocks.forEach(block => block.classList.remove('active'));

            btn.classList.add('active');
            const activeBlock = document.getElementById(targetCategory);
            if (activeBlock) {
                activeBlock.classList.add('active');
            }
        });
    });

    // 4. Parallax Effect on Hero Image on Scroll
    const heroImg = document.querySelector('.hero-img');
    if (heroImg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < 800) {
                heroImg.style.transform = `translateY(${scrolled * 0.25}px) scale(1.05)`;
            }
        });
    }

});