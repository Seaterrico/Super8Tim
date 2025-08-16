const video = document.querySelector('.super8Video');

video.addEventListener('mouseenter', () => {
    video.setAttribute('controls', true);
});

video.addEventListener('mouseleave', () => {
    video.removeAttribute('controls');
});