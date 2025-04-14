const SpinnerwrapperElement = document.querySelector('.loader-wrapper');

window.addEventListener('load', () => {
    SpinnerwrapperElement.style.opacity ='0';

    setTimeout(() => {
        SpinnerwrapperElement.style.display = 'none';
    },1000);
});