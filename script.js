function showMessage() {
    const surprise = document.getElementById('surprise');
    surprise.classList.toggle('hidden');
    setTimeout(() => {
        window.location.href = 'https://www.youtube.com/watch?v=z6L8q62AfBM'; // Cambia esta URL por la que desees
    }, 30000); // Redirige después de 30 segundos
}
