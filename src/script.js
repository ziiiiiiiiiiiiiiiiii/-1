document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.business-card');

    card.addEventListener('click', function() {
        this.classList.toggle('hover');
    });

    const photoLink = document.getElementById('photo-link');
    const modal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('photo');
    const closeBtn = document.querySelector('.close');

    // 點擊「我的照片」時顯示圖片
    photoLink.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        modalImg.src = 'images/IMG_4917.jpg'; // 確保這裡的路徑正確
    });

    // 點擊關閉按鈕時隱藏圖片
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 點擊模態框外部時隱藏圖片
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});