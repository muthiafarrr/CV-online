alert("Welcome to My Project");

// Contoh: mengganti warna teks saat mouse berada di atas teks
document.querySelectorAll('section h2').forEach(header => {
    header.addEventListener('mouseover', function() {
        this.style.color = 'red';
    });

    header.addEventListener('mouseout', function() {
        this.style.color = 'initial';
    });
});

// Anda bisa menambahkan lebih banyak fungsionalitas sesuai kebutuhan
