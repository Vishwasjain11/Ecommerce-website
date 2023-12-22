const nav = document.getElementById('navbar');
const bar = document.getElementById('bar');

if (bar) {
        bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}