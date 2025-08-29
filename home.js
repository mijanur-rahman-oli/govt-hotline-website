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


// calling function

const coinCount = document.getElementById("coin");
const historyBox = document.getElementById("history");
let coins = 100;

function calling(callButtonId, numberId, serviceNo) {

    const callBtn = document.getElementById(callButtonId);
    const numberBtn = document.getElementById(numberId);
    const serviceBtn = document.getElementById(serviceNo);

    callBtn.addEventListener("click", function () {
        if (coins < 20) {
            alert("❌ Not enough coins to make a call");
            return;
        }
        const number = numberBtn.textContent.trim();
        const service = serviceBtn.textContent.trim();
        coins = coins - 20;
        coinCount.textContent = coins;
        alert(`📞Calling ${service} at ${number} `);

        const li = document.createElement("li");
        li.className = "flex justify-between items-center p-2 bg-gray-50";
        li.innerHTML = `
  <div class="flex flex-col">
      <span class="break-words font-semibold ">${service}</span>
      <span class="text-gray-500">${number}</span>
  </div>

  <span class="text-black text-md whitespace-nowrap">
      ${new Date().toLocaleTimeString()}
  </span>
`;

        historyBox.prepend(li);

    });

}


calling("call-btn-1", "num-1", "service-1");
calling("call-btn-2", "num-2", "service-2");
calling("call-btn-3", "num-3", "service-3");
calling("call-btn-4", "num-4", "service-4");
calling("call-btn-5", "num-5", "service-5");
calling("call-btn-6", "num-6", "service-6");
calling("call-btn-7", "num-7", "service-7");
calling("call-btn-8", "num-8", "service-8");
calling("call-btn-9", "num-9", "service-9");


// history clear

document.getElementById("clear-history-btn").addEventListener("click", function () {
    historyBox.innerHTML = "";
});
