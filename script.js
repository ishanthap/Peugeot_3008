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

// Load images
/* Style for the carousel container */
.carousel {
    display: flex; /* Arrange images in a row */
    overflow-x: auto; /* Enable horizontal scrolling */
    scroll-snap-type: x mandatory; /* Optional: Makes scrolling snap to each image */
    -webkit-overflow-scrolling: touch; /* For smooth scrolling on iOS */
    margin-bottom: 20px; /* Add some space below the carousel */
}

/* Style for each image in the carousel */
.carousel img {
    width: 100%; /* Adjust as needed - this makes each image take full width of the container initially */
    flex: 0 0 auto; /* Don't grow or shrink, maintain automatic width */
    scroll-snap-align: start; /* Optional: Align the start of each image on scroll */
    margin-right: 10px; /* Add some spacing between images */
}

/* Remove margin from the last image */
.carousel img:last-child {
    margin-right: 0;
}

const carousel = document.getElementById('carousel');
const imageCount = 10; // Change to match your actual images
for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement('img');
    img.src = `photos/car${i}.jpg`;
    img.alt = `Car Image ${i}`;
    carousel.appendChild(img);
}
