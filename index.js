const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const menu_btn = document.querySelector("#menu_btn");

function toggle_menu() {
    nav.classList.toggle("active");
}

document.addEventListener("click", function(event) {
    if (!nav.contains(event.target) && !menu_btn.contains(event.target)) {
        nav.classList.remove("active");
    }
});


// service scroll animation
const box = document.querySelectorAll('.box');
window.addEventListener('scroll', checkboxes);
checkboxes();
function checkboxes() {
    const triggerBottom = window.innerHeight * 1;
    box.forEach((box) => {
        const boxTops = box.getBoundingClientRect().top;
        if (boxTops < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}

// card scroll animation
const more_service_card = document.querySelectorAll('.more-service-card');

window.addEventListener('scroll', checkbox);

checkbox();

function checkbox() {
    const triggerButton = window.innerHeight * 1;

    more_service_card.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerButton) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

// JavaScript code for image modal and carousel
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("photoModal");
    var modalImg = document.getElementById("modalImg");
    var prevBtn = document.getElementById("prevPhoto");
    var nextBtn = document.getElementById("nextPhoto");

    // Get all images and add event listeners
    var images = document.querySelectorAll(".ourWorks .item");
    images.forEach(function(img) {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    // Close the modal when clicking the close button
    var closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Navigate to the previous image
    prevBtn.addEventListener("click", function() {
        var currentIndex = Array.from(images).findIndex(function(img) {
            return img.src === modalImg.src;
        });
        var prevIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[prevIndex].src;
    });

    // Navigate to the next image
    nextBtn.addEventListener("click", function() {
        var currentIndex = Array.from(images).findIndex(function(img) {
            return img.src === modalImg.src;
        });
        var nextIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[nextIndex].src;
    });
});