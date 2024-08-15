document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById('gallery-container');

    // Array of image objects with titles
    const images = [
        { src: 'img/draw1.jpg', alt: 'Drawing 1', title: 'Beautiful Drawing 1' },
        { src: 'img/draw2.jpg', alt: 'Drawing 2', title: 'Beautiful Drawing 2' },
        { src: 'img/draw3.jpg', alt: 'Drawing 3', title: 'Beautiful Drawing 3' },
        { src: 'img/draw4.jpg', alt: 'Drawing 4', title: 'Beautiful Drawing 4' },
        { src: 'img/draw5.jpg', alt: 'Drawing 5', title: 'Beautiful Drawing 5' },
        { src: 'img/draw6.jpg', alt: 'Drawing 6', title: 'Beautiful Drawing 6' },
        { src: 'img/draw7.jpg', alt: 'Drawing 7', title: 'Beautiful Drawing 7' },
        { src: 'img/draw8.jpg', alt: 'Drawing 8', title: 'Beautiful Drawing 8' },
        { src: 'img/draw9.jpg', alt: 'Drawing 9', title: 'Beautiful Drawing 9' },
        { src: 'img/draw10.jpg', alt: 'Drawing 10', title: 'Beautiful Drawing 10' },
        { src: 'img/draw11.jpg', alt: 'Drawing 11', title: 'Beautiful Drawing 11' },
        { src: 'img/draw12.jpg', alt: 'Drawing 12', title: 'Beautiful Drawing 12' },
        { src: 'img/draw13.jpg', alt: 'Drawing 13', title: 'Beautiful Drawing 13' },
        { src: 'img/draw14.jpg', alt: 'Drawing 14', title: 'Beautiful Drawing 14' },
        { src: 'img/draw15.jpg', alt: 'Drawing 15', title: 'Beautiful Drawing 15' },
        { src: 'img/draw16.jpg', alt: 'Drawing 16', title: 'Beautiful Drawing 16' },
    ];

    // Loop through the array and create image elements
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.title = image.title; // Add title for hover tooltip
        imgElement.classList.add('gallery-img'); // Optional: add a class for additional styling

        // Add click event to open lightbox
        imgElement.addEventListener('click', () => {
            openLightbox(image.src, image.alt, image.title);
        });

        galleryContainer.appendChild(imgElement);
    });

    // Lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close');

    // Function to open lightbox
    function openLightbox(src, alt, title) {
        lightbox.style.display = 'block';
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightboxCaption.innerText = title; // Set caption in lightbox
    }

    // Function to close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});