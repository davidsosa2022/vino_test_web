const vino_polyfill = {
    ir_enableCodeset: (arg) => {
        if (arg == 1) window.vinoPolyfillIrEnabled = true;
        else if (arg == 0) window.vinoPolyfillIrEnabled = false;
    },
    ir_send: (code, what) => {
        alert("sent ir code",code)
    },
    act_getName: (slot) => {
        return "jan Luna"
    },
    act_getMiiImage: (slot) => {
        return "https://images-ext-2.discordapp.net/external/VtboU7WYAw1bRcrVuxbszi24pzSQ1i5Dmirry2x_JCo/http/mii-images.account.nintendo.net/2tq2mk2xki89y_normal_face.png"
    },
    act_getCurrentSlotNo: () => { return 0 },
    memo_open: () => {
        alert("opened olive memo")
    }
}

if (!globalThis.vino) {
    globalThis.vino = vino_polyfill
}

vino.ir_enableCodeset(1);
const activeUserSlot = vino.act_getCurrentSlotNo(); // The slot for the active user
img = document.getElementById("mii-image");
span = document.getElementById("mii-name");
img.src=vino.act_getMiiImage(activeUserSlot);
span.innerText=vino.act_getName(activeUserSlot);
