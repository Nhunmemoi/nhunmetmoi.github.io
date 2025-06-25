// JavaScript để đếm thời gian đã trôi qua kể từ ngày 26/11/2023
// Đặt ngày/giờ BẮT ĐẦU của bạn ở đây
// Định dạng: 'YYYY-MM-DDT HH:MM:SS' (Năm-Tháng-NgàyT Giờ:Phút:Giây)
// Ngày 26/11/2023 lúc 00:00:00 (đầu ngày)
const startDate = new Date('2023-11-26T00:00:00').getTime(); 

const updateElapsedTime = setInterval(function() {
    const now = new Date().getTime();
    const elapsedTime = now - startDate; // Khoảng thời gian đã trôi qua

    // Đảm bảo thời gian không bị âm nếu startDate là ngày trong tương lai
    if (elapsedTime < 0) {
        document.getElementById('elapsedTimeDisplay').innerHTML = "Chờ đợi ngày đặc biệt bắt đầu...";
        return; 
    }

    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    document.getElementById('elapsedTimeDisplay').innerHTML = `Chúng ta đã ở bên nhau: ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;

}, 1000); // Cập nhật mỗi 1 giây (1000 mili giây)


// JavaScript cho hiệu ứng trái tim bay
function createHeart() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.width = Math.random() * 20 + 10 + 'px'; /* Kích thước ngẫu nhiên */
    heart.style.height = heart.style.width;
    heart.style.left = Math.random() * 100 + 'vw'; /* Vị trí ngang ngẫu nhiên */
    heart.style.animationDuration = Math.random() * 4 + 4 + 's'; /* Thời gian bay ngẫu nhiên */
    heart.style.animationDelay = Math.random() * 2 + 's'; /* Độ trễ ngẫu nhiên */
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000); // Xóa trái tim sau khi hoàn thành animation
}

setInterval(createHeart, 300); // Tạo trái tim mới mỗi 300ms


// JavaScript để thêm ảnh vào thư viện ảnh
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('photoGallery');
    // Đổi tên file ảnh của bạn tại đây. Đảm bảo các ảnh nằm trong thư mục 'images'
    const imageNames = [
        'lan_dau_xem_phim.jpg', 
        'lan_dau_di_VT.jpg', 
        'anh_ky_niem_3.jpg', 
        'anh_ky_niem_4.jpg', 
        'anh_ky_niem_5.jpg',
        // Thêm các tên file ảnh khác của bạn vào đây
    ];
    
    // Xóa ảnh placeholder (nếu có) và thêm ảnh thực tế
    gallery.innerHTML = ''; 
    imageNames.forEach(name => {
        const img = document.createElement('img');
        img.src = `images/${name}`; // Đường dẫn đến thư mục ảnh
        img.alt = 'Kỷ niệm của chúng ta';
        gallery.appendChild(img);
    });
});