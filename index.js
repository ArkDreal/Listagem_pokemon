const btnNightMode = document.querySelector('#btn-night-mode');
btnNightMode.addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('night-mode');
});