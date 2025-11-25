function initCarousel() {
    const leftCard = document.getElementById('left-card');
    const centerCard = document.getElementById('center-card');
    const rightCard = document.getElementById('right-card');

    if (!leftCard || !centerCard || !rightCard) return;

    const images = [
        'img/emibonnie1.jpg',
        'img/emibonnie2.jpg',
        'img/emibonnie3.jpg',
        'img/emi1.jpg',
        'img/bonnie1.jpg',
        'img/emibonnie4.jpg',
    ];

    let currentIndex = 0;
    let autoInterval = null;
    let resetTimeout = null; // guardamos o timeout atual

    function updateCards() {
        const leftIndex = (currentIndex - 1 + images.length) % images.length;
        const rightIndex = (currentIndex + 1) % images.length;

        leftCard.innerHTML = `<img src="${images[leftIndex]}" alt="Emi e Bonnie">`;
        centerCard.innerHTML = `<img src="${images[currentIndex]}" alt="Emi e Bonnie">`;
        rightCard.innerHTML = `<img src="${images[rightIndex]}" alt="Emi e Bonnie">`;

        leftCard.className = 'image-card side';
        centerCard.className = 'image-card center';
        rightCard.className = 'image-card side';
    }

    function moveNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCards();
        resetAuto();
    }

    function movePrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCards();
        resetAuto();
    }

    function startAuto() {
        autoInterval = setInterval(moveNext, 1000);
    }

    function resetAuto() {
        // limpa o interval e qualquer timeout anterior
        clearInterval(autoInterval);
        if (resetTimeout) clearTimeout(resetTimeout);

        // espera 1s antes de reiniciar o interval
        resetTimeout = setTimeout(() => {
            startAuto();
        }, 1000);
    }

    updateCards();

    document.querySelector('.right-btn').addEventListener('click', moveNext);
    document.querySelector('.left-btn').addEventListener('click', movePrev);

    startAuto();
}