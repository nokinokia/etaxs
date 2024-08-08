document.getElementById('copy-button').addEventListener('click', function() {
    const textToCopy = document.getElementById('copy-text').innerText;
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert('Teks disalin ke clipboard!');
    }, function(err) {
        console.error('Salin teks gagal: ', err);
    });
});

window.addEventListener('scroll', function() {
    document.querySelectorAll('.scroll-animate').forEach(function(element) {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.8) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});
