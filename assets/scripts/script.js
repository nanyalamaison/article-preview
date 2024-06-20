const shareBtn = document.getElementById('share-btn');

function toggleColor(e) {
    shareBtn.classList.toggle('active');
    console.log('clicked');
}

shareBtn.addEventListener('click', toggleColor);
