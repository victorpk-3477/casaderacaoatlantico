    let currentIndex = 0;
    const items = document.querySelectorAll('.carrossel-item');
    const totalItems = items.length;
    const container = document.querySelector('.carrossel-container');

    function updateCarousel() {
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    document.querySelector('.next').addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    // Passa automaticamente a cada 3 segundos
    let autoSlide = setInterval(nextSlide, 3000);

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 3000);
    };
