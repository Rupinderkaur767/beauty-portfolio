/* =========================================
   SARGI BEAUTY
   CATEGORY GALLERY DATA
========================================= */

const galleryData = {

    bridal: {
        title: "Bridal Beauty",

        photos: [
            "images/bridal.jpg",
            "images/bridal2.jpg",
            "images/bridal3.jpg",
            "images/bridal4.jpg",
            "images/bridal5.jpg",
            "images/bridal6.jpg"
        ],

        videos: [
            {
                src: "videos/bridal.mp4",
                title: "Bridal Makeup",
                description: "Complete bridal makeup transformation."
            },
            {
                src: "videos/bridal2.mp4",
                title: "Bridal Hairstyle",
                description: "Beautiful bridal hairstyle."
            },
            {
                src: "videos/bridal3.mp4",
                title: "Bridal Look",
                description: "Complete bridal beauty look."
            }
        ]
    },

    hair: {
        title: "Hair Styling",

        photos: [
            "images/hair.jpg",
            "images/hair1.jpg",
            "images/hair2.jpg",
            "images/hair3.jpg",
            "images/hair4.jpg",
            "images/hair5.jpg",
            "images/hair6.jpg"
        ],

        videos: [
            {
                src: "videos/hair.mp4",
                title: "Hair Styling",
                description: "Professional hair styling."
            },
            {
                src: "videos/hair2.mp4",
                title: "Hair Transformation",
                description: "Hair transformation video."
            },
            {
                src: "videos/hair3.mp4",
                title: "Hair Tutorial",
                description: "Beautiful hair styling technique."
            }
        ]
    },

    makeup: {
        title: "Makeup",

        photos: [
            "images/makeup.jpg",
            "images/makeup2.jpg",
            "images/makeup3.jpg",
            "images/makeup4.jpg",
            "images/makeup5.jpg",
            "images/makeup6.jpg"
        ],

        videos: [
            {
                src: "videos/makeup.mp4",
                title: "Makeup Look",
                description: "Professional makeup transformation."
            },
            {
                src: "videos/makeup2.mp4",
                title: "Party Makeup",
                description: "Beautiful party makeup look."
            },
            {
                src: "videos/makeup3.mp4",
                title: "Makeup Transformation",
                description: "Complete makeup transformation."
            }
        ]
    },

    nails: {
        title: "Nail Art",

        photos: [
            "images/nail.jpg",
            "images/nail1.jpg",
            "images/nail2.jpg",
            "images/nail3.jpg",
            "images/nail4.jpg",
            "images/nail5.jpg",
            "images/nail6.jpg"
        ],

        videos: [
            {
                src: "videos/nail1.mp4",
                title: "Nail Art",
                description: "Creative nail art design."
            },
            {
                src: "videos/nail2.mp4",
                title: "Nail Extensions",
                description: "Professional nail extensions."
            },
            {
                src: "videos/nail3.mp4",
                title: "French Tips",
                description: "Elegant French tip nails."
            }
        ]
    },

    skincare: {
        title: "Skin Care",

        photos: [
            "images/skincare.jpg",
            "images/skincare2.jpg",
            "images/skincare3.jpg",
            "images/skincare4.jpg",
            "images/skincare5.jpg",
            "images/skincare6.jpg"
        ],

        videos: [
            {
                src: "videos/skincare.mp4",
                title: "Skin Care",
                description: "Professional skincare service."
            },
            {
                src: "videos/skincare2.mp4",
                title: "Facial",
                description: "Relaxing facial treatment."
            }
        ]
    }
};


/* =========================================
   VARIABLES
========================================= */

let currentCategory = null;

let visiblePhotos = 3;
let visibleVideos = 2;

let currentImageIndex = 0;
let currentPhotos = [];


/* =========================================
   OPEN GALLERY
========================================= */

function openGallery(category) {

    const data = galleryData[category];

    if (!data) {
        console.error("Category not found:", category);
        return;
    }

    currentCategory = category;

    visiblePhotos = 3;
    visibleVideos = 2;

    const title =
        document.getElementById("galleryTitle");

    if (title) {
        title.textContent = data.title;
    }

    renderPhotos();
    renderVideos();

    const modal =
        document.getElementById("galleryModal");

    if (modal) {
        modal.classList.add("active");
    }

    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE GALLERY
========================================= */

function closeGallery() {

    stopAllVideos();

    const modal =
        document.getElementById("galleryModal");

    if (modal) {
        modal.classList.remove("active");
    }

    document.body.style.overflow = "";
}


/* =========================================
   RENDER PHOTOS
========================================= */

function renderPhotos() {

    const container =
        document.getElementById("modalPhotos");

    if (!container || !currentCategory) {
        return;
    }

    const data =
        galleryData[currentCategory];

    if (!data) return;

    container.innerHTML = "";

    currentPhotos = data.photos;

    const photosToShow =
        data.photos.slice(0, visiblePhotos);

    photosToShow.forEach((photo, index) => {

        const img =
            document.createElement("img");

        img.src = photo;

        img.alt =
            `${data.title} photo ${index + 1}`;

        img.className =
            "modal-photo";

        img.loading = "lazy";

        img.onclick = function () {
            openImageViewer(index);
        };

        container.appendChild(img);
    });


    const moreButton =
        document.getElementById("morePhotosBtn");

    if (moreButton) {

        if (visiblePhotos >= data.photos.length) {
            moreButton.classList.add("hidden");
        } else {
            moreButton.classList.remove("hidden");
        }

    }
}


/* =========================================
   MORE PHOTOS
========================================= */

function showMorePhotos() {

    visiblePhotos += 3;

    renderPhotos();
}


/* =========================================
   RENDER VIDEOS
========================================= */

function renderVideos() {

    const container =
        document.getElementById("modalVideos");

    if (!container || !currentCategory) {
        console.error("Video container not found.");
        return;
    }

    const data =
        galleryData[currentCategory];

    if (!data) {
        console.error("Video category not found.");
        return;
    }

    container.innerHTML = "";

    const videosToShow =
        data.videos.slice(0, visibleVideos);


    videosToShow.forEach((video, index) => {

        /* CARD */

        const card =
            document.createElement("div");

        card.className =
            "modal-video-card";


        /* VIDEO */

        const videoElement =
            document.createElement("video");

        videoElement.className =
            "gallery-video";

        videoElement.controls = true;

        videoElement.playsInline = true;

        videoElement.preload = "metadata";

        videoElement.setAttribute(
            "controlsList",
            "nodownload"
        );


        /* SOURCE */

        const source =
            document.createElement("source");

        source.src =
            video.src;

        source.type =
            "video/mp4";

        videoElement.appendChild(source);


        /* INFO */

        const info =
            document.createElement("div");

        info.className =
            "modal-video-info";

        info.innerHTML = `
            <h4>${video.title}</h4>
            <p>${video.description}</p>
        `;


        /* ERROR MESSAGE */

        const errorText =
            document.createElement("p");

        errorText.className =
            "video-error-text";

        errorText.textContent = "";


        /* APPEND */

        card.appendChild(videoElement);

        card.appendChild(info);

        card.appendChild(errorText);

        container.appendChild(card);


        /* VIDEO LOADED */

        videoElement.addEventListener(
            "loadedmetadata",
            function () {

                console.log(
                    "✅ Video loaded:",
                    video.src
                );

            }
        );


        /* VIDEO ERROR */

        videoElement.addEventListener(
            "error",
            function () {

                console.error(
                    "❌ Video failed to load:",
                    video.src
                );

                errorText.textContent =
                    "Video load nahi ho rahi. File name aur videos folder check karein.";

            }
        );

    });


    /* MORE VIDEOS BUTTON */

    const moreButton =
        document.getElementById("moreVideosBtn");

    if (moreButton) {

        if (
            visibleVideos >=
            data.videos.length
        ) {

            moreButton.classList.add("hidden");

        } else {

            moreButton.classList.remove("hidden");

        }

    }
}


/* =========================================
   MORE VIDEOS
========================================= */

function showMoreVideos() {

    visibleVideos += 2;

    renderVideos();
}


/* =========================================
   IMAGE VIEWER
========================================= */

function openImageViewer(index) {

    if (!currentPhotos.length) {
        return;
    }

    currentImageIndex = index;

    const image =
        document.getElementById("viewerImage");

    if (image) {

        image.src =
            currentPhotos[currentImageIndex];

    }

    const viewer =
        document.getElementById("imageViewer");

    if (viewer) {

        viewer.classList.add("active");

    }
}


/* =========================================
   CLOSE IMAGE VIEWER
========================================= */

function closeImageViewer() {

    const viewer =
        document.getElementById("imageViewer");

    if (viewer) {

        viewer.classList.remove("active");

    }
}


/* =========================================
   NEXT IMAGE
========================================= */

function nextImage() {

    if (!currentPhotos.length) {
        return;
    }

    currentImageIndex++;

    if (
        currentImageIndex >=
        currentPhotos.length
    ) {

        currentImageIndex = 0;

    }

    const image =
        document.getElementById("viewerImage");

    if (image) {

        image.src =
            currentPhotos[currentImageIndex];

    }
}


/* =========================================
   PREVIOUS IMAGE
========================================= */

function previousImage() {

    if (!currentPhotos.length) {
        return;
    }

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex =
            currentPhotos.length - 1;

    }

    const image =
        document.getElementById("viewerImage");

    if (image) {

        image.src =
            currentPhotos[currentImageIndex];

    }
}


/* =========================================
   STOP ALL VIDEOS
========================================= */

function stopAllVideos() {

    const videos =
        document.querySelectorAll(
            "#modalVideos video"
        );

    videos.forEach(video => {

        video.pause();

        video.currentTime = 0;

    });
}


/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

const galleryModal =
    document.getElementById("galleryModal");

if (galleryModal) {

    galleryModal.addEventListener(
        "click",
        function (event) {

            if (event.target === this) {

                closeGallery();

            }

        }
    );
}


/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeGallery();

            closeImageViewer();

        }

    }
);
