var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 50);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});

window.addEventListener("load", function () {
          if (!sessionStorage.viewed){
              const loader = document.querySelector(".loader");
              loader.className += " hidden";
              sessionStorage.viewed  = 1;
          }else{
            const loader = document.querySelector(".loader");
            loader.style.display = "none";
          }
});

vino.ir_enableCodeset(1);
const activeUserSlot = vino.act_getCurrentSlotNo(); // The slot for the active user
img = document.getElementById("mii-image");
span = document.getElementById("mii-name");
img.src=vino.act_getMiiImage(activeUserSlot);
span.innerText=vino.act_getName(activeUserSlot);
