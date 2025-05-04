// Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.add('hidden'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.remove('hidden');
    });
});



const carousel = document.getElementById('carousel');
const imageCount = 26; // Change to match your actual images
for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement('img');
    img.src = `photos/car${i}.jpg`;
    img.alt = `Car Image ${i}`;
    carousel.appendChild(img);
}
