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


// copy function

const copyAvailable = document.getElementById("copy")
let copyCount = 2;

function copyNumber(copyBtnId, numberId) {
    const copyBtn = document.getElementById(copyBtnId);
    const numberBtn = document.getElementById(numberId);
    copyBtn.addEventListener("click", function () {
        const number = numberBtn.textContent.trim();

        navigator.clipboard.writeText(number).then(function () {
            alert("Copied: " + number);
            copyCount++;
            copyAvailable.textContent = `${copyCount} Copy`;

        })
    })

}


copyNumber("copy-btn-1", "num-1");
copyNumber("copy-btn-2", "num-2");
copyNumber("copy-btn-3", "num-3");
copyNumber("copy-btn-4", "num-4");
copyNumber("copy-btn-5", "num-5");
copyNumber("copy-btn-6", "num-6");
copyNumber("copy-btn-7", "num-7");
copyNumber("copy-btn-8", "num-8");
copyNumber("copy-btn-9", "num-9");
