document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById('gallery-container');

    // Array of image objects with titles
    const images = [
        { src: 'img/draw1.jpg', alt: 'Drawing 1', title: 'Lost Samurai' },
        { src: 'img/draw2.jpg', alt: 'Drawing 2', title: 'Karl Kopinski (Recreation) ' },
        { src: 'img/draw3.jpg', alt: 'Drawing 3', title: 'Joestar' },
        { src: 'img/draw4.jpg', alt: 'Drawing 4', title: 'Nightwing' },
        { src: 'img/draw5.jpg', alt: 'Drawing 5', title: 'Selfie' },
        { src: 'img/draw6.jpg', alt: 'Drawing 6', title: 'Miyamoto Musashi Praying' },
        { src: 'img/draw7.jpg', alt: 'Drawing 7', title: 'Lady Potrait' },
        { src: 'img/draw8.jpg', alt: 'Drawing 8', title: 'Takuna' },
        { src: 'img/draw9.jpg', alt: 'Drawing 9', title: 'Leornado' },
        { src: 'img/draw10.jpg', alt: 'Drawing 10', title: 'Hulk' },
        { src: 'img/draw11.jpg', alt: 'Drawing 11', title: 'GhostRider' },
        { src: 'img/draw12.jpg', alt: 'Drawing 12', title: 'Cold in the Sea' },
        { src: 'img/draw13.jpg', alt: 'Drawing 13', title: 'Fitpic' },
        { src: 'img/draw14.jpg', alt: 'Drawing 14', title: 'Batman V superman' },
        { src: 'img/draw15.jpg', alt: 'Drawing 15', title: 'Lookbook' },
        { src: 'img/draw16.jpg', alt: 'Drawing 16', title: 'Ginger Ebony' },
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