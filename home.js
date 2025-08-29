// heart count
const heartAvailable = document.getElementById("heart");
let heartCount = 0;

function CountHeart(clciked) {
    const heartBtn = document.getElementById(clciked);

    heartBtn.addEventListener("click", function () {
        heartCount++;
        heartAvailable.textContent = heartCount;
    });
}


CountHeart("heart-btn-1");
CountHeart("heart-btn-2");
CountHeart("heart-btn-3");
CountHeart("heart-btn-4");
CountHeart("heart-btn-5");
CountHeart("heart-btn-6");
CountHeart("heart-btn-7");
CountHeart("heart-btn-8");
CountHeart("heart-btn-9");
