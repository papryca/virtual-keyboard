const Key = class {
    constructor(keyCode, additionalText, mainText, rusAdditionalText, rusMainText, cls) {
        this.keyCode = keyCode;

        this.mainText = mainText;
        this.additionalText = additionalText;

        this.rusMainText = rusMainText;
        this.rusAdditionalText = rusAdditionalText;

        this.cls = cls;
    }
};

const keyboardLayout = {
    'Backquote': new Key('Backquote', '`', '~', '`', '~', ['key_regular']),
    'Digit1': new Key('Digit1', '1', '!', '1', '!', ['key_regular']),
    'Digit2': new Key('Digit2', '2', '@', '2', '@', ['key_regular']),
    'Digit3': new Key('Digit3', '3', '#', '3', '#', ['key_regular']),
    'Digit4': new Key('Digit4', '4', '$', '4', '$', ['key_regular']),
    'Digit5': new Key('Digit5', '5', '%', '5', '%', ['key_regular']),
    'Digit6': new Key('Digit6', '6', '^', '6', '^', ['key_regular']),
    'Digit7': new Key('Digit7', '7', '&', '7', '&', ['key_regular']),
    'Digit8': new Key('Digit8', '8', '*', '8', '*', ['key_regular']),
    'Digit9': new Key('Digit9', '9', '(', '9', '(', ['key_regular']),
    'Digit0': new Key('Digit0', '0', ')', '0', ')', ['key_regular']),
    'Minus': new Key('Minus', '-', '_', '-', '_', ['key_regular']),
    'Equal': new Key('Equal', '=', '+', '=', '+', ['key_regular']),
    'Backspace': new Key('Delete', 'Backspace', '', 'Backspace', '', ['key_delete']),

    'Tab': new Key('Tab', 'tab', '', 'tab', '', ['key_tab']),
    'KeyQ': new Key('KeyQ', 'q', 'Q', 'й', 'Й', ['key_regular', 'key_capitalize']),
    'KeyW': new Key('KeyW', 'w', 'W', 'ц', 'Ц', ['key_regular', 'key_capitalize']),
    'KeyE': new Key('KeyE', 'e', 'E', 'у', 'У', ['key_regular', 'key_capitalize']),
    'KeyR': new Key('KeyR', 'r', 'R', 'к', 'К', ['key_regular', 'key_capitalize']),
    'KeyT': new Key('KeyT', 't', 'T', 'е', 'Е', ['key_regular', 'key_capitalize']),
    'KeyY': new Key('KeyY', 'y', 'Y', 'н', 'Н', ['key_regular', 'key_capitalize']),
    'KeyU': new Key('KeyU', 'u', 'U', 'г', 'Г', ['key_regular', 'key_capitalize']),
    'KeyI': new Key('KeyI', 'i', 'I', 'ш', 'Ш', ['key_regular', 'key_capitalize']),
    'KeyO': new Key('KeyO', 'o', 'O', 'щ', 'Щ', ['key_regular', 'key_capitalize']),
    'KeyP': new Key('KeyP', 'p', 'P', 'з', 'З', ['key_regular', 'key_capitalize']),
    'BracketLeft': new Key('BracketLeft', '[', '{', 'х', 'Х', ['key_regular', 'key_capitalize', 'ignore-cap-eng']),
    'BracketRight': new Key('BracketRight', ']', '}', 'ъ', 'Ъ', ['key_regular', 'key_capitalize', 'ignore-cap-eng']),
    'Backslash': new Key('Backslash', '\\', '|', 'ё', 'Ё', ['key_regular', 'key_capitalize', 'ignore-cap-eng']),
    'Delete': new Key('Backspace', 'delete', '', 'delete', '', ['key_backspace']),

    'CapsLock': new Key('CapsLock', 'caps lock', '', 'caps lock', '', ['key_capslock']),
    'KeyA': new Key('KeyA', 'a', 'A', 'ф', 'Ф', ['key_regular', 'key_capitalize']),
    'KeyS': new Key('KeyS', 's', 'S', 'ы', 'Ы', ['key_regular', 'key_capitalize']),
    'KeyD': new Key('KeyD', 'd', 'D', 'в', 'В', ['key_regular', 'key_capitalize']),
    'KeyF': new Key('KeyF', 'f', 'F', 'а', 'А', ['key_regular', 'key_capitalize']),
    'KeyG': new Key('KeyG', 'g', 'G', 'п', 'П', ['key_regular', 'key_capitalize']),
    'KeyH': new Key('KeyH', 'h', 'H', 'р', 'Р', ['key_regular', 'key_capitalize']),
    'KeyJ': new Key('KeyJ', 'j', 'J', 'о', 'О', ['key_regular', 'key_capitalize']),
    'KeyK': new Key('KeyK', 'k', 'K', 'л', 'Л', ['key_regular', 'key_capitalize']),
    'KeyL': new Key('KeyL', 'l', 'L', 'д', 'Д', ['key_regular', 'key_capitalize']),
    'Semicolon': new Key('Semicolon', ';', ':', 'ж', 'Ж', ['key_regular', 'key_capitalize', 'ignore-cap-eng']),
    'Quote': new Key('Quote', '\'', '\"', 'э', 'Э', ['key_regular', 'key_capitalize', 'ignore-cap-eng']),
    'Enter': new Key('Enter', 'Enter', '', 'Enter', '', ['key_return']),

    'ShiftLeft': new Key('ShiftLeft', 'shift', '', 'shift', '', ['key_shift-left']),
    'KeyZ': new Key('KeyZ', 'z', 'Z', 'я', 'Я', ['key_regular', 'key_capitalize']),
    'KeyX': new Key('KeyX', 'x', 'X', 'ч', 'Ч', ['key_regular', 'key_capitalize']),
    'KeyC': new Key('KeyC', 'c', 'C', 'с', 'С', ['key_regular', 'key_capitalize']),
    'KeyV': new Key('KeyV', 'v', 'V', 'м', 'М', ['key_regular', 'key_capitalize']),
    'KeyB': new Key('KeyB', 'b', 'B', 'и', 'И', ['key_regular', 'key_capitalize']),
    'KeyN': new Key('KeyN', 'n', 'N', 'т', 'Т', ['key_regular', 'key_capitalize']),
    'KeyM': new Key('KeyM', 'm', 'M', 'ь', 'Ь', ['key_regular', 'key_capitalize']),
    'Comma': new Key('Comma', ',', '<', 'б', 'Б', ['key_regular', 'key_capitalize', 'ignore-cap-eng']),
    'Period': new Key('Period', '.', '>', 'ю', 'Ю', ['key_regular', 'key_capitalize', 'ignore-cap-eng']),
    'Slash': new Key('Slash', '/', '?', '/', '?', ['key_regular', 'ignore-cap-eng']),
    'ArrowUp': new Key('ArrowUp', '↑', '', '↑', '', ['key_right']),
    'ShiftRight': new Key('ShiftRight', 'shift', '', 'shift', '', ['key_shift-right']),

    'ControlLeft': new Key('ControlLeft', 'control', '', 'control', '', ['key_control']),
    'AltLeft': new Key('AltLeft', 'option', '', 'option', '', ['key_alt']),
    'MetaLeft': new Key('MetaLeft', 'command', '', 'command', '', ['key_command']),
    'Space': new Key('Space', ' ', ' ', ' ', ' ', ['key_regular']),
    'MetaRight': new Key('MetaRight', 'command', '', 'command', '', ['key_command']),
    'AltRight': new Key('AltRight', 'option', '', 'option', '', ['key_alt']),
    'ArrowLeft': new Key('ArrowLeft', '←', '', '←', '', ['key_up']),
    'ArrowDown': new Key('ArrowDown', '↓', '', '↓', '', ['key_down']),
    'ArrowRight': new Key('ArrowRight', '→', '', '→', '', ['key_left']),

};
let header = document.createElement('header');
let headerLogo = document.createElement('h3');

header.classList.add('header');
headerLogo.classList.add('header__logo');
headerLogo.innerText = "RSS Виртуальная клавиатура";
header.append(headerLogo)
document.body.append(header);


let input = document.createElement('textarea');
input.classList.add('input');
input.type = "text";
document.body.append(input);

let lang = localStorage.getItem("lang");
if (!lang) {
    lang = 'en'
}

let keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard-wrapper', lang);

let capslockActive = false;
let ShiftActive = false;
let ControlActive = false;
let AltActive = false;

for (const [key, value] of Object.entries(keyboardLayout)) {
    let k = value;

    let keyNode = document.createElement('div');
    keyNode.classList.add("key", ...k.cls);
    keyNode.dataset.code = k.keyCode;

    let mainText = document.createElement('p');
    mainText.classList.add("key__symbol");
    mainText.classList.add("key__main-text");
    mainText.classList.add("key__main-text-en");
    mainText.innerText = k.mainText;

    let smallText = document.createElement('p');
    smallText.classList.add("key__symbol");
    smallText.classList.add("key__sub-text");
    smallText.classList.add("key__sub-text-en");
    smallText.innerText = k.additionalText;

    let mainRusText = document.createElement('p');
    mainRusText.classList.add("key__symbol");
    mainRusText.classList.add("key__main-text");
    mainRusText.classList.add("key__main-text-rus");
    mainRusText.innerText = k.rusMainText;

    let smallRusText = document.createElement('p');
    smallRusText.classList.add("key__symbol");
    smallRusText.classList.add("key__sub-text");
    smallRusText.classList.add("key__sub-text-rus");
    smallRusText.innerText = k.rusAdditionalText;

    keyNode.append(mainText);
    keyNode.append(smallText);
    keyNode.append(mainRusText);
    keyNode.append(smallRusText);

    keyboardWrapper.append(keyNode);
}

document.body.append(keyboardWrapper);

let info = document.createElement('p');
info.classList.add('info');
info.innerText = 'Клавиатура создана в операционной системе macOS'
document.body.append(info)

let language = document.createElement('p');
language.classList.add('info');
language.innerText = 'Для переключения языка комбинация: левые ctrl + alt'
document.body.append(language)


let inp = document.getElementsByClassName('input')[0]
document.addEventListener('keydown', function (e) {
    e.preventDefault();
    let keyboard = keyboardLayout[e.code];
    if (keyboard.cls.some((item) => item === 'key_regular')) {
        if (keyboardWrapper.classList.contains('en')) {
            if (capslockActive) {
                let keyEn = keyboard.cls.some((item) => item === 'ignore-cap-eng');
                if (capslockActive && ShiftActive) {
                    if (keyEn) {
                        inp.value = inp.value + keyboard.additionalText;
                    } else {
                        inp.value = inp.value + keyboard.additionalText;
                    }
                } else {
                    if (keyEn) {
                        inp.value = inp.value + keyboard.mainText;
                    } else {
                        inp.value = inp.value + keyboard.mainText;
                    }
                }
            } else {
                let keyEn = keyboard.cls.some((item) => item === 'ignore-cap-eng')
                if (keyEn) {
                    if (ShiftActive) {
                        inp.value = inp.value + keyboard.mainText;
                    } else {
                        inp.value = inp.value + keyboard.additionalText;
                    }

                } else {
                    if (ShiftActive) {
                        inp.value = inp.value + keyboard.mainText;
                    } else {
                        inp.value = inp.value + keyboard.additionalText;
                    }

                }

            }
        } else {
            if (capslockActive) {
                if (capslockActive && ShiftActive) {
                    inp.value = inp.value + keyboard.rusAdditionalText;
                } else if (ShiftActive) {
                    inp.value = inp.value + keyboard.rusAdditionalText;

                } else {
                    inp.value = inp.value + keyboard.rusMainText;
                }

            } else {
                if (capslockActive && ShiftActive) {
                    inp.value = inp.value + keyboard.rusMainText;
                } else if (ShiftActive) {
                    inp.value = inp.value + keyboard.rusMainText;
                } else {
                    inp.value = inp.value + keyboard.rusAdditionalText;
                }

            }
        }
    }
    if (e.code === "Backspace") {
        let cursor = input.selectionStart;
        let before = input.value.slice(0, cursor);
        let after = input.value.slice(cursor + 1);
        input.value = before + after;
        input.setSelectionRange(cursor, cursor);
    }

    if (e.code === "Enter") {
        input.value = input.value + '\n'
    }
    if (e.code === "Tab") {
        e.preventDefault();
        input.value = input.value + '\t'
    }
    if (e.code === "ArrowLeft") {
        input.value = input.value + this.additionalText;
    }
    if (e.code === "ArrowRight") {
        input.value = input.value + this.additionalText;
    }
    if (e.code === "ArrowDown") {
        input.value = input.value + this.additionalText;
    }
    if (e.code === "ArrowUp") {
        input.value = input.value + this.additionalText;
    }
    if (e.code === "CapsLock") {
        keyboardWrapper.classList.toggle("capslock-active");
        capslockActive = !capslockActive;
    }
    if (e.code === "ShiftLeft") {
        keyboardWrapper.classList.toggle("shift-active");
        ShiftActive = true;
    }
    if (e.code === "ShiftRight") {
        keyboardWrapper.classList.toggle("shift-active");
        ShiftActive = true;
    }
    if (e.code === "ControlLeft") {
        ControlActive = true;
    }
    if (e.code === "AltLeft") {
        AltActive = true;
    }
    if (ControlActive && AltActive) {
        keyboardWrapper.classList.toggle('en');
        keyboardWrapper.classList.toggle('ru');

        let lang = localStorage.getItem("lang");
        if (lang === 'en') {
            localStorage.setItem('lang', 'ru')
        } else {
            localStorage.setItem('lang', 'en')
        }
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

        if (keyboardWrapper.classList.contains('en')) {
            if (capslockActive) {
                let keyEn = key.cls.some((item) => item === 'ignore-cap-eng');

                if (keyEn) {
                    inp.value = inp.value + key.mainText;
                } else {
                    inp.value = inp.value + key.mainText;
                }
            } else {
                let keyEn = key.cls.some((item) => item === 'ignore-cap-eng')
                if (keyEn) {
                    if (ShiftActive) {
                        inp.value = inp.value + key.mainText;
                    } else {
                        inp.value = inp.value + key.additionalText;
                    }

                } else {
                    if (ShiftActive) {
                        inp.value = inp.value + key.mainText;
                    } else {
                        inp.value = inp.value + key.additionalText;
                    }
                }
            }
        } else {
            if (capslockActive) {
                if (ShiftActive) {
                    inp.value = inp.value + key.rusAdditionalText;
                } else {
                    inp.value = inp.value + key.rusMainText;
                }
            } else {
                if (ShiftActive) {
                    inp.value = inp.value + key.rusMainText;
                } else {
                    inp.value = inp.value + key.rusAdditionalText;
                }

            }
        }

    })
});


document.addEventListener('keyup', function (e) {
    document.querySelector('.keyboard-wrapper .key[data-code="'
        + e.code + '"]').classList.remove('color');

    if (e.code === "ControlLeft") {
        ControlActive = false;
    }
    if (e.code === "AltLeft") {
        AltActive = false;
    }

    if (e.code === "ShiftLeft") {
        keyboardWrapper.classList.remove("shift-active");
        ShiftActive = false;
    }

    if (e.code === "ShiftRight") {
        keyboardWrapper.classList.remove("shift-active");
        ShiftActive = false;
    }
});

const deleteBackspace = () => {
    let enter = document.querySelector('.keyboard-wrapper .key[data-code="Delete"]');
    enter.addEventListener('click', () => {
        let cursor = input.selectionStart;
        let before = input.value.slice(0, cursor-1);
        let after = input.value.slice(cursor);
        input.value = before + after;
        input.setSelectionRange(cursor -1, cursor);
        // input.value = input.value.slice(0, input.value.length - 1)
    })
};
deleteBackspace();

const deleteLastSymbol = () => {
    let del = document.querySelector('.keyboard-wrapper .key[data-code="Backspace"]')
    del.addEventListener('click', () => {
        let cursor = input.selectionStart;
        let before = input.value.slice(0, cursor);
        let after = input.value.slice(cursor + 1);
        console.log(before)
        input.value = before + after;
        input.setSelectionRange(cursor, cursor);

    })
};
deleteLastSymbol();

const enter = () => {
    let enter = document.querySelector('.keyboard-wrapper .key[data-code="Enter"]');
    enter.addEventListener('click', () => {
        input.value = input.value + '\n'
    });
};
enter();


const tab = () => {
    let enter = document.querySelector('.keyboard-wrapper .key[data-code="Tab"]');
    enter.addEventListener('click', () => {
        input.value = input.value + '\t'
    });
};
tab();

const arrowLeft = () => {
    let arrow = document.querySelector('.keyboard-wrapper .key[data-code="ArrowLeft"]');
    arrow.addEventListener('click', () => {
        input.value = input.value + this.additionalText;
    })
};
arrowLeft();

const arrowRight = () => {
    let arrow = document.querySelector('.keyboard-wrapper .key[data-code="ArrowRight"]');
    arrow.addEventListener('click', () => {
        input.value = input.value + this.additionalText;
    })
};
arrowRight();

let arrowDown = () => {
    let arrow = document.querySelector('.keyboard-wrapper .key[data-code="ArrowDown"]');
    arrow.addEventListener('click', () => {
        input.value = input.value + this.additionalText;
    });
};
arrowDown();

const arrowUp = () => {
    let arrow = document.querySelector('.keyboard-wrapper .key[data-code="ArrowUp"]');
    arrow.addEventListener('click', () => {
        input.value = input.value + this.additionalText;
    });
};
arrowUp();

const caps = () => {
    let caps = document.querySelector('.keyboard-wrapper .key[data-code="CapsLock"]');
    caps.addEventListener('click', () => {
        keyboardWrapper.classList.toggle("capslock-active");
        caps.classList.toggle('color')
        capslockActive = !capslockActive;
    });
};
caps();

const shift = () => {
    let shiftL = document.querySelector('.keyboard-wrapper .key[data-code="ShiftLeft"]');
    let shiftR = document.querySelector('.keyboard-wrapper .key[data-code="ShiftRight"]');

    let down = (e) => {
        keyboardWrapper.classList.add("shift-active");
        ShiftActive = true;
    };

    let up = (e) => {
        keyboardWrapper.classList.remove("shift-active");
        ShiftActive = false;
    };

    shiftL.addEventListener('mousedown', down);
    shiftR.addEventListener('mousedown', down);

    shiftL.addEventListener('mouseup', up);
    shiftR.addEventListener('mouseup', up);
};
shift();

//if (e.code === "ShiftLeft") {
//         keyboardWrapper.classList.toggle("shift-active");
//         ShiftActive = true;
//     }
//     if (e.code === "ShiftRight") {
//         keyboardWrapper.classList.toggle("shift-active");
//         ShiftActive = true;
//     }
