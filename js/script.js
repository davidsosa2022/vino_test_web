const activeUserSlot = vino.act_getCurrentSlotNo();
img = document.getElementById("mii-image");
img.src=vino.act_getMiiImage(activeUserSlot);


// Abstracted IR codes
const IR_CODES = {
    POWER: 0,
    CHANNEL_UP: 1,
    CHANNEL_DOWN: 2,
    VOLUME_UP: 3,
    VOLUME_DOWN: 4,
    NUMBER_ONE: 11,
    NUMBER_TWO: 12,
    NUMBER_THREE: 13,
    NUMBER_FOUR: 14,
    NUMBER_FIVE: 15,
    NUMBER_SIX: 16,
    NUMBER_SEVEN: 17,
    NUMBER_EIGHT: 18,
    NUMBER_NINE: 19,
    NUMBER_ZERO: 20,
    INPUT: 52
};

vino.ir_enableCodeset(1); // Enable IR protocol code set

// Helper functions
function toggleTVPower() {
    vino.ir_send(IR_CODES.POWER, 0);
}

function changeInput() {
    vino.ir_send(IR_CODES.INPUT, 0);
}

function increaseVolume() {
    vino.ir_send(IR_CODES.VOLUME_UP, 0);
}

function decreaseVolume() {
    vino.ir_send(IR_CODES.VOLUME_DOWN, 0);
}

function increaseChannel() {
    vino.ir_send(IR_CODES.CHANNEL_UP, 0);
}

function decreaseChannel() {
    vino.ir_send(IR_CODES.CHANNEL_DOWN, 0);
}

function muteSound() {
    vino.ir_muteOneShotSound(true);
}
//IR code by jonbarrow, aka Pretendo leader
//Custom functions by davidjoaq, start here:

function sound1() {
    vino.soundPlayEx('SE_COMMON_SELECT', 1);
}
