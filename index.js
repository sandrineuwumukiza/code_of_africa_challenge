

    const imageCards = document.querySelectorAll('.image-cards');

    imageCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const know = card.querySelector('.know_more');
            know.style.opacity = '1';
        });

        card.addEventListener('mouseout', () => {
            const know = card.querySelector('.know_more');
            know.style.opacity = '0';
        });
    });

