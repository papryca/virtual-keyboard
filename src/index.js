const Key = class {
    constructor(keyCode, additionalText, mainText, cls) {
        this.keyCode = keyCode;
        this.mainText = mainText;
        this.additionalText = additionalText;
        this.cls = cls;
    }
};

const keyboardLayout = [
    new Key('Backquote', '`', '~', 'key_regular'),
    new Key('Digit1', '1', '!', 'key_regular'),
    new Key('Digit2', '2', '@', 'key_regular'),
    new Key('Digit3', '3', '#', 'key_regular'),
    new Key('Digit4', '4', '$', 'key_regular'),
    new Key('Digit5', '5', '%', 'key_regular'),
    new Key('Digit6', '6', '^', 'key_regular'),
    new Key('Digit7', '7', '&', 'key_regular'),
    new Key('Digit8', '8', '*', 'key_regular'),
    new Key('Digit9', '9', '(', 'key_regular'),
    new Key('Digit0', '0', ')', 'key_regular'),
    new Key('Minus', '-', '_', 'key_regular'),
    new Key('Equal', '=', '+', 'key_regular'),
    new Key('Backspace', 'delete', '', 'key_delete'),

    new Key('Tab', 'tab', '', 'key_tab'),
    new Key('KeyQ', 'q', 'Q', 'key_regular'),
    new Key('KeyW', 'w', 'W', 'key_regular'),
    new Key('KeyE', 'e', 'E', 'key_regular'),
    new Key('KeyR', 'r', 'R', 'key_regular'),
    new Key('KeyT', 't', 'T', 'key_regular'),
    new Key('KeyY', 'y', 'Y', 'key_regular'),
    new Key('KeyU', 'u', 'U', 'key_regular'),
    new Key('KeyI', 'i', 'I', 'key_regular'),
    new Key('KeyO', 'o', 'O', 'key_regular'),
    new Key('KeyP', 'p', 'P', 'key_regular'),
    new Key('BracketLeft', '[', '{', 'key_regular'),
    new Key('BracketRight', ']', '}', 'key_regular'),
    new Key('Backslash', '\\', '|', 'key_regular'),

    new Key('CapsLock', 'caps lock', '', 'key_capslock'),
    new Key('KeyA', 'a', 'A', 'key_regular'),
    new Key('KeyS', 's', 'S', 'key_regular'),
    new Key('KeyD', 'd', 'D', 'key_regular'),
    new Key('KeyF', 'f', 'F', 'key_regular'),
    new Key('KeyG', 'g', 'G', 'key_regular'),
    new Key('KeyH', 'h', 'H', 'key_regular'),
    new Key('KeyJ', 'j', 'J', 'key_regular'),
    new Key('KeyK', 'k', 'K', 'key_regular'),
    new Key('KeyL', 'l', 'L', 'key_regular'),
    new Key('Semicolon', ';', ':', 'key_regular'),
    new Key('Quote', '\'', '\"', 'key_regular'),
    new Key('Enter', 'return', '', 'key_return'),

    new Key('ShiftLeft', 'shift', '', 'key_shift'),
    new Key('KeyZ', 'z', 'Z', 'key_regular'),
    new Key('KeyX', 'x', 'X', 'key_regular'),
    new Key('KeyC', 'c', 'C', 'key_regular'),
    new Key('KeyV', 'v', 'V', 'key_regular'),
    new Key('KeyB', 'b', 'B', 'key_regular'),
    new Key('KeyN', 'n', 'N', 'key_regular'),
    new Key('KeyM', 'm', 'M', 'key_regular'),
    new Key('Comma', ',', '<', 'key_regular'),
    new Key('Period', '.', '>', 'key_regular'),
    new Key('Slash', '/', '?', 'key_regular'),
    new Key('ShiftRight', 'shift', '', 'key_shift'),

    new Key('ControlLeft', 'control', '', 'key_regular'),
    new Key('AltLeft', 'option', '', 'key_regular'),
    new Key('MetaLeft', 'command', '', 'key_command'),
    new Key('Space', '', '', 'key_space'),
    new Key('MetaRight', 'command', '', 'key_command'),
    new Key('AltRight', 'option', '', 'key_regular'),
    new Key('ArrowLeft', '<', '', 'key_up'),
    new Key('ArrowRight', '>', '', 'key_left'),
    new Key('ArrowDown', '\\/', '', 'key_down'),
    new Key('ArrowUp', '^', '', 'key_right'),


];
let header = document.createElement('header');
let headerLogo = document.createElement('h1');

header.classList.add('header');
headerLogo.classList.add('header__logo');
headerLogo.innerText = "RSS Виртуальная клавиатура";
header.append(headerLogo)
document.body.append(header);

let input = document.createElement('input');
input.classList.add('input');
input.type = "text";
document.body.append(input);

let keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard-wrapper')

for (let i = 0; i < keyboardLayout.length; i++) {
    let k = keyboardLayout[i];

    let keyNode = document.createElement('div');
    keyNode.classList.add("key", k.cls);
    keyNode.dataset.code = k.keyCode;

    let mainText = document.createElement('p');
    mainText.classList.add("key__symbol");
    mainText.innerText = k.mainText;

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
    document.querySelector('.keyboard-wrapper .key[data-code="'
        + e.code + '"]').classList.add('color');
})

document.addEventListener('keyup', function (e) {
    document.querySelector('.keyboard-wrapper .key[data-code="'
        + e.code + '"]').classList.remove('color');


})

