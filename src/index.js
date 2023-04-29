const Key = class {
    constructor(keyCode, additionalText, mainText, cls) {
        this.keyCode = keyCode;
        this.mainText = mainText;
        this.additionalText = additionalText;
        this.cls = cls;
    }
};

const keyboardLayout = {
    'Backquote': new Key('Backquote', '`', '~', 'key_regular'),
    'Digit1': new Key('Digit1', '1', '!', 'key_regular'),
    'Digit2': new Key('Digit2', '2', '@', 'key_regular'),
    'Digit3': new Key('Digit3', '3', '#', 'key_regular'),
    'Digit4': new Key('Digit4', '4', '$', 'key_regular'),
    'Digit5': new Key('Digit5', '5', '%', 'key_regular'),
    'Digit6': new Key('Digit6', '6', '^', 'key_regular'),
    'Digit7': new Key('Digit7', '7', '&', 'key_regular'),
    'Digit8': new Key('Digit8', '8', '*', 'key_regular'),
    'Digit9': new Key('Digit9', '9', '(', 'key_regular'),
    'Digit0': new Key('Digit0', '0', ')', 'key_regular'),
    'Minus': new Key('Minus', '-', '_', 'key_regular'),
    'Equal': new Key('Equal', '=', '+', 'key_regular'),
    'Backspace': new Key('Backspace', 'Backspace', '', 'key_delete'),

    'Tab': new Key('Tab', 'tab', '', 'key_tab'),
    'KeyQ': new Key('KeyQ', 'q', 'Q', 'key_regular'),
    'KeyW': new Key('KeyW', 'w', 'W', 'key_regular'),
    'KeyE': new Key('KeyE', 'e', 'E', 'key_regular'),
    'KeyR': new Key('KeyR', 'r', 'R', 'key_regular'),
    'KeyT': new Key('KeyT', 't', 'T', 'key_regular'),
    'KeyY': new Key('KeyY', 'y', 'Y', 'key_regular'),
    'KeyU': new Key('KeyU', 'u', 'U', 'key_regular'),
    'KeyI': new Key('KeyI', 'i', 'I', 'key_regular'),
    'KeyO': new Key('KeyO', 'o', 'O', 'key_regular'),
    'KeyP': new Key('KeyP', 'p', 'P', 'key_regular'),
    'BracketLeft': new Key('BracketLeft', '[', '{', 'key_regular'),
    'BracketRight': new Key('BracketRight', ']', '}', 'key_regular'),
    'Backslash': new Key('Backslash', '\\', '|', 'key_regular'),
    'Delete': new Key('Backspace', 'delete', '', 'key_regular'),

    'CapsLock': new Key('CapsLock', 'caps lock', '', 'key_capslock'),
    'KeyA': new Key('KeyA', 'a', 'A', 'key_regular'),
    'KeyS': new Key('KeyS', 's', 'S', 'key_regular'),
    'KeyD': new Key('KeyD', 'd', 'D', 'key_regular'),
    'KeyF': new Key('KeyF', 'f', 'F', 'key_regular'),
    'KeyG': new Key('KeyG', 'g', 'G', 'key_regular'),
    'KeyH': new Key('KeyH', 'h', 'H', 'key_regular'),
    'KeyJ': new Key('KeyJ', 'j', 'J', 'key_regular'),
    'KeyK': new Key('KeyK', 'k', 'K', 'key_regular'),
    'KeyL': new Key('KeyL', 'l', 'L', 'key_regular'),
    'Semicolon': new Key('Semicolon', ';', ':', 'key_regular'),
    'Quote': new Key('Quote', '\'', '\"', 'key_regular'),
    'Enter': new Key('Enter', 'Enter', '', 'key_return'),

    'ShiftLeft': new Key('ShiftLeft', 'shift', '', 'key_shift-left'),
    'KeyZ': new Key('KeyZ', 'z', 'Z', 'key_regular'),
    'KeyX': new Key('KeyX', 'x', 'X', 'key_regular'),
    'KeyC': new Key('KeyC', 'c', 'C', 'key_regular'),
    'KeyV': new Key('KeyV', 'v', 'V', 'key_regular'),
    'KeyB': new Key('KeyB', 'b', 'B', 'key_regular'),
    'KeyN': new Key('KeyN', 'n', 'N', 'key_regular'),
    'KeyM': new Key('KeyM', 'm', 'M', 'key_regular'),
    'Comma': new Key('Comma', ',', '<', 'key_regular'),
    'Period': new Key('Period', '.', '>', 'key_regular'),
    'Slash': new Key('Slash', '/', '?', 'key_regular'),
    'ArrowUp': new Key('ArrowUp', '↑', '', 'key_right'),
    'ShiftRight': new Key('ShiftRight', 'shift', '', 'key_shift-right'),

    'ControlLeft': new Key('ControlLeft', 'control', '', 'key_control'),
    'AltLeft': new Key('AltLeft', 'option', '', 'key_alt'),
    'MetaLeft': new Key('MetaLeft', 'command', '', 'key_command'),
    'Space': new Key('Space', ' ', ' ', 'key_regular'),
    'MetaRight': new Key('MetaRight', 'command', '', 'key_command'),
    'AltRight': new Key('AltRight', 'option', '', 'key_alt'),
    'ArrowLeft': new Key('ArrowLeft', '←', '', 'key_up'),
    'ArrowDown': new Key('ArrowDown', '↓', '', 'key_down'),
    'ArrowRight': new Key('ArrowRight', '→', '', 'key_left'),

};
let header = document.createElement('header');
let headerLogo = document.createElement('h1');

header.classList.add('header');
headerLogo.classList.add('header__logo');
headerLogo.innerText = "RSS Виртуальная клавиатура";
header.append(headerLogo)
document.body.append(header);

let input = document.createElement('textarea');
input.classList.add('input');
input.type = "text";
document.body.append(input);

let keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard-wrapper')

for (const [key, value] of Object.entries(keyboardLayout)) {
    let k = value;

    let keyNode = document.createElement('div');
    keyNode.classList.add("key", k.cls);
    keyNode.dataset.code = k.keyCode;

    let mainText = document.createElement('p');
    mainText.classList.add("key__symbol");
    mainText.innerText = k.mainText;
    if((k.keyCode.charAt(k.keyCode.length-1) ===k.keyCode.charAt(k.keyCode.length-1).toUpperCase()) && isNaN(k.keyCode.charAt(k.keyCode.length-1)) ){
        mainText.classList.add('hidden')
    }

    let smallText = document.createElement('p');
    smallText.classList.add("key__symbol");
    smallText.innerText = k.additionalText;


    keyNode.append(mainText);
    keyNode.append(smallText);

    keyboardWrapper.append(keyNode);
}

document.body.append(keyboardWrapper);

let inp = document.getElementsByClassName('input')[0]
document.addEventListener('keydown', function (e) {
    let key = e.key;
    if (/^[a-zA-Z0-9`~!@#№$%:,^&.*;()_\-+={}|"'<>?\/\[\]]$/.test(key)) {
        inp.value = inp.value + key;
    }
    if (e.code === "Backspace") {
        input.value = input.value.slice(0, input.value.length - 1)
    }
    if (e.code === "Enter") {
        input.value = input.value + '\n'
    }
    if (e.code === "Tab") {
        e.preventDefault();
        input.value = input.value + '\t'
    }
    if (e.code === "ArrowLeft") {
        input.value = input.value + '←';
    }
    if (e.code === "ArrowRight") {
        input.value = input.value + '→';
    }
    if (e.code === "ArrowDown") {
        input.value = input.value + '↓';
    }
    if (e.code === "ArrowUp") {
        input.value = input.value + '↑';
    }
    document.querySelector('.keyboard-wrapper .key[data-code="'
        + e.code + '"]').classList.add('color');
});
document.querySelectorAll('.key_regular').forEach(btn => {
    if (btn.getAttribute("data-code") === 'Space') {
        btn.classList.add("key_space")
    }
    btn.addEventListener('click', function (e) {
        e.currentTarget.getAttribute('data-code');
        let key = keyboardLayout[e.currentTarget.getAttribute('data-code')];
        inp.value = inp.value + key.additionalText;
    })
});


document.addEventListener('keyup', function (e) {
    document.querySelector('.keyboard-wrapper .key[data-code="'
        + e.code + '"]').classList.remove('color');
});


(function deleteLastSymbol() {
    let del = document.querySelector('.keyboard-wrapper .key[data-code="Backspace"]')
    del.onclick = function () {
        input.value = input.value.slice(0, input.value.length - 1)
    }
})();

(function enter() {
    let enter = document.querySelector('.keyboard-wrapper .key[data-code="Enter"]');
    enter.onclick = function () {
        input.value = input.value + '\n'
    }
})();
(function enter() {
    let enter = document.querySelector('.keyboard-wrapper .key[data-code="Tab"]');
    enter.onclick = function () {
        input.value = input.value + '\t'
    }
})();
(function arrow() {
    let arrow = document.querySelector('.keyboard-wrapper .key[data-code="ArrowLeft"]');
    arrow.onclick = function () {
        input.value = input.value + '←';
    }
})();
(function arrow() {
    let arrow = document.querySelector('.keyboard-wrapper .key[data-code="ArrowRight"]');
    arrow.onclick = function () {
        input.value = input.value + '→';
    }
})();
(function arrow() {
    let arrow = document.querySelector('.keyboard-wrapper .key[data-code="ArrowDown"]');
    arrow.onclick = function () {
        input.value = input.value + '↓';
    }
})();

(function arrow() {
    let arrow = document.querySelector('.keyboard-wrapper .key[data-code="ArrowUp"]');
    arrow.onclick = function () {
        input.value = input.value + '↑';
    }
})();