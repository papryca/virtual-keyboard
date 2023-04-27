const Key = class {
    constructor(keyCode, additionalText, mainText,  cls) {
        this.keyCode = keyCode;
        this.mainText = mainText;
        this.additionalText = additionalText;
        this.cls = cls;
    }
};

const keyboardLayout = [
    new Key('192', '`', '~', 'key_regular'),
    new Key('49', '1', '!', 'key_regular'),
    new Key('50', '2', '@', 'key_regular'),
    new Key('51', '3', '#', 'key_regular'),
    new Key('52', '4', '$', 'key_regular'),
    new Key('53', '5', '%', 'key_regular'),
    new Key('54', '6', '^', 'key_regular'),
    new Key('55', '7', '&', 'key_regular'),
    new Key('56', '8', '*', 'key_regular'),
    new Key('57', '9', '(', 'key_regular'),
    new Key('48', '0', ')', 'key_regular'),
    new Key('189', '-', '_', 'key_regular'),
    new Key('187', '=', '+', 'key_regular'),
    new Key('8', 'delete', '', 'key_delete'),

    new Key('9', 'tab', '', 'key_tab'),
    new Key('113', 'q', 'Q', 'key_regular'),
    new Key('119', 'w', 'W', 'key_regular'),
    new Key('101', 'e', 'E', 'key_regular'),
    new Key('114', 'r', 'R', 'key_regular'),
    new Key('116', 't', 'T', 'key_regular'),
    new Key('121', 'y', 'Y', 'key_regular'),
    new Key('117', 'u', 'U', 'key_regular'),
    new Key('105', 'i', 'I', 'key_regular'),
    new Key('111', 'o', 'O', 'key_regular'),
    new Key('112', 'p', 'P', 'key_regular'),
    new Key('112', '[', '{', 'key_regular'),
    new Key('112', ']', '}', 'key_regular'),
    new Key('112', '\\', '|', 'key_regular'),

    new Key('20', 'caps lock', '', 'key_capslock'),
    new Key('97', 'a', 'A', 'key_regular'),
    new Key('115', 's', 'S', 'key_regular'),
    new Key('100', 'd', 'D', 'key_regular'),
    new Key('102', 'f', 'F', 'key_regular'),
    new Key('103', 'g', 'G', 'key_regular'),
    new Key('104', 'h', 'H', 'key_regular'),
    new Key('106', 'j', 'J', 'key_regular'),
    new Key('107', 'k', 'K', 'key_regular'),
    new Key('108', 'l', 'L', 'key_regular'),
    new Key('186', ';', ':', 'key_regular'),
    new Key('222', '\'', '\"', 'key_regular'),
    new Key('13', 'return', '', 'key_return'),

    new Key('16', 'shift', '', 'key_shift'),
    new Key('122', 'z', 'Z', 'key_regular'),
    new Key('120', 'x', 'X', 'key_regular'),
    new Key('99', 'c', 'C', 'key_regular'),
    new Key('118', 'v', 'V', 'key_regular'),
    new Key('98', 'b', 'B', 'key_regular'),
    new Key('110', 'n', 'N', 'key_regular'),
    new Key('109', 'm', 'M', 'key_regular'),
    new Key('188', ',', '<', 'key_regular'),
    new Key('190', '.', '>', 'key_regular'),
    new Key('191', '/', '?', 'key_regular'),
    new Key('16', 'shift', '', 'key_shift'),

    new Key('17', 'control', '', 'key_regular'),
    new Key('18', 'option', '', 'key_regular'),
    new Key('91', 'command', '', 'key_command'),
    new Key('32', '', '', 'key_space'),
    new Key('91', 'command', '', 'key_command'),
    new Key('18', 'option', '', 'key_regular'),
    new Key('38', '<', '', 'key_up'),
    new Key('37', '>', '', 'key_left'),
    new Key('40', '\\/', '', 'key_down'),
    new Key('39', '^', '', 'key_right'),



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
input.type= "text";
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


