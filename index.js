localStorage.setItem('lang', 'eng');
let keyMousePress;
//alert(localStorage.getItem('lang') );

//document.addEventListener('keypress', (e) => console.log('111 ' + e.code));
//let charButton;

let wrapper = document.createElement('main');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

let textArea;
textArea = document.createElement('textarea');
textArea.classList.add('input_area');
document.querySelector('.wrapper').appendChild(textArea);
textArea.id = 'textArea';
textArea.addEventListener('pressButton', e => {
    if (e.charButton === 'Enter') {
        textArea.value += '\n';
    } else if (e.charButton === 'Backspace') {
        textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    } else if (e.charButton === 'Del') {
        textArea.value = textArea.value.slice(1, textArea.value.length);
    } else if (e.charButton === 'Tab') {
        textArea.value += '\t';
    } else {
        textArea.value += e.charButton;
    }
});

let keyBoard = document.createElement('div');
keyBoard.classList.add('keyboard');
document.querySelector('.wrapper').appendChild(keyBoard);

const setButton = (gridArea, arr, typeButton) => {
    let tmp = document.createElement('div');
    tmp.classList.add(gridArea);
    tmp.classList.add('button');
    if (typeButton === 'fn') {
        tmp.classList.add('buttonFn');
    }
    tmp.arrChar = arr;
    tmp.innerHTML = tmp.arrChar[1];
    tmp.currChar = tmp.arrChar[1];
    return tmp;
};

let kbd = document.querySelector('.keyboard');

let K1_1 = setButton('k1-1', ['Backquote', '`', '~', 'ё', '']);
kbd.appendChild(K1_1);
let K1_2 = setButton('k1-2', ['Digit1', '1', '!', '1', '!']);
kbd.appendChild(K1_2);
let K1_3 = setButton('k1-3', ['Digit2', '2', '@', '2', '"']);
kbd.appendChild(K1_3);
let K1_4 = setButton('k1-4', ['Digit3', '3', '#', '3', '№']);
kbd.appendChild(K1_4);
let K1_5 = setButton('k1-5', ['Digit4', '4', '$', '4', ';']);
kbd.appendChild(K1_5);
let K1_6 = setButton('k1-6', ['Digit5', '5', '%', '5', '%']);
kbd.appendChild(K1_6);
let K1_7 = setButton('k1-7', ['Digit6', '6', '^', '6', ':']);
kbd.appendChild(K1_7);
let K1_8 = setButton('k1-8', ['Digit7', '7', '&', '7', '?']);
kbd.appendChild(K1_8);
let K1_9 = setButton('k1-9', ['Digit8', '8', '*', '8', '*']);
kbd.appendChild(K1_9);
let K1_10 = setButton('k1-10', ['Digit9', '9', '(', '9', '(']);
kbd.appendChild(K1_10);
let K1_11 = setButton('k1-11', ['Digit0', '0', ')', '0', ')']);
kbd.appendChild(K1_11);
let K1_12 = setButton('k1-12', ['Minus', '-', '_', '-', '_']);
kbd.appendChild(K1_12);
let K1_13 = setButton('k1-13', ['Equal', '=', '+', '=', '+']);
kbd.appendChild(K1_13);
let K1_14 = setButton('k1-14', ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'], 'fn');
kbd.appendChild(K1_14);

let K2_1 = setButton('k2-1', ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'], 'fn');
kbd.appendChild(K2_1);
let K2_2 = setButton('k2-2', ['KeyQ', 'q', 'Q', 'й', 'Й']);
kbd.appendChild(K2_2);
let K2_3 = setButton('k2-3', ['KeyW', 'w', 'W', 'ц', 'Ц']);
kbd.appendChild(K2_3);
let K2_4 = setButton('k2-4', ['KeyE', 'e', 'E', 'у', 'У']);
kbd.appendChild(K2_4);
let K2_5 = setButton('k2-5', ['KeyR', 'r', 'R', 'к', 'К']);
kbd.appendChild(K2_5);
let K2_6 = setButton('k2-6', ['KeyT', 't', 'T', 'е', 'Е']);
kbd.appendChild(K2_6);
let K2_7 = setButton('k2-7', ['KeyY', 'y', 'Y', 'н', 'Н']);
kbd.appendChild(K2_7);
let K2_8 = setButton('k2-8', ['KeyU', 'u', 'U', 'г', 'Г']);
kbd.appendChild(K2_8);
let K2_9 = setButton('k2-9', ['KeyI', 'i', 'I', 'ш', 'Ш']);
kbd.appendChild(K2_9);
let K2_10 = setButton('k2-10', ['KeyO', 'o', 'O', 'щ', 'Щ']);
kbd.appendChild(K2_10);
let K2_11 = setButton('k2-11', ['KeyP', 'p', 'P', 'з', 'З']);
kbd.appendChild(K2_11);
let K2_12 = setButton('k2-12', ['BracketLeft', '[', '{', 'х', 'Х']);
kbd.appendChild(K2_12);
let K2_13 = setButton('k2-13', ['BracketRight', ']', '}', 'ъ', 'Ъ']);
kbd.appendChild(K2_13);
let K2_14 = setButton('k2-14', ['Delete', 'Del', 'Del', 'Del', 'Del'], 'fn');
kbd.appendChild(K2_14);
let K2_15 = setButton('k2-15', ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'], 'fn');
kbd.appendChild(K2_15);

let K3_1 = setButton('k3-1', ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], 'fn');
kbd.appendChild(K3_1);
let K3_2 = setButton('k3-2', ['KeyA', 'a', 'A', 'ф', 'Ф']);
kbd.appendChild(K3_2);
let K3_3 = setButton('k3-3', ['KeyS', 's', 'S', 'ы', 'Ы']);
kbd.appendChild(K3_3);
let K3_4 = setButton('k3-4', ['KeyD', 'd', 'D', 'в', 'В']);
kbd.appendChild(K3_4);
let K3_5 = setButton('k3-5', ['KeyF', 'f', 'F', 'а', 'А']);
kbd.appendChild(K3_5);
let K3_6 = setButton('k3-6', ['KeyG', 'g', 'G', 'п', 'П']);
kbd.appendChild(K3_6);
let K3_7 = setButton('k3-7', ['KeyH', 'h', 'H', 'р', 'Р']);
kbd.appendChild(K3_7);
let K3_8 = setButton('k3-8', ['KeyJ', 'j', 'J', 'о', 'О']);
kbd.appendChild(K3_8);
let K3_9 = setButton('k3-9', ['KeyK', 'k', 'K', 'л', 'Л']);
kbd.appendChild(K3_9);
let K3_10 = setButton('k3-10', ['KeyL', 'l', 'L', 'д', 'Д']);
kbd.appendChild(K3_10);
let K3_11 = setButton('k3-11', ['Semicolon', ';', ':', 'ж', 'Ж']);
kbd.appendChild(K3_11);
let K3_12 = setButton('k3-12', ['Quote', "'", '"', 'э', 'Э']);
kbd.appendChild(K3_12);
let K3_13 = setButton('k3-13', ['BackSlash', '\\', '|', '\\', '/']);
kbd.appendChild(K3_13);

let K4_1 = setButton('k4-1', ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'], 'fn');
kbd.appendChild(K4_1);
let K4_2 = setButton('k4-2', ['IntlBackSlash', '\\', '|', '\\', '/']);
kbd.appendChild(K4_2);
let K4_3 = setButton('k4-3', ['KeyZ', 'z', 'Z', 'я', 'Я']);
kbd.appendChild(K4_3);
let K4_4 = setButton('k4-4', ['KeyX', 'x', 'X', 'ч', 'Ч']);
kbd.appendChild(K4_4);
let K4_5 = setButton('k4-5', ['KeyC', 'c', 'C', 'с', 'С']);
kbd.appendChild(K4_5);
let K4_6 = setButton('k4-6', ['KeyV', 'v', 'V', 'м', 'М']);
kbd.appendChild(K4_6);
let K4_7 = setButton('k4-7', ['KeyB', 'b', 'B', 'и', 'И']);
kbd.appendChild(K4_7);
let K4_8 = setButton('k4-8', ['KeyN', 'n', 'N', 'т', 'Т']);
kbd.appendChild(K4_8);
let K4_9 = setButton('k4-9', ['KeyM', 'm', 'M', 'ь', 'Ь']);
kbd.appendChild(K4_9);
let K4_10 = setButton('k4-10', ['Comma', ',', '<', 'б', 'Б']);
kbd.appendChild(K4_10);
let K4_11 = setButton('k4-11', ['Period', '.', '>', 'ю', 'Ю']);
kbd.appendChild(K4_11);
let K4_12 = setButton('k4-12', ['Slash', '/', '?', '.', ',']);
kbd.appendChild(K4_12);
let K4_13 = setButton('k4-13', ['ArrowUp', '↑', '↑', '↑', '↑'], 'fn');
kbd.appendChild(K4_13);
let K4_14 = setButton('k4-14', ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'], 'fn');
kbd.appendChild(K4_14);

let K5_1 = setButton('k5-1', ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], 'fn');
kbd.appendChild(K5_1);
let K5_2 = setButton('k5-2', ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'], 'fn');
kbd.appendChild(K5_2);
let K5_3 = setButton('k5-3', ['Space', ' ', ' ', ' ', ' '], 'fn');
kbd.appendChild(K5_3);
let K5_4 = setButton('k5-4', ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'], 'fn');
kbd.appendChild(K5_4);
let K5_5 = setButton('k5-5', ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], 'fn');
kbd.appendChild(K5_5);
let K5_6 = setButton('k5-6', ['ArrowLeft', '←', '←', '←', '←'], 'fn');
kbd.appendChild(K5_6);
let K5_7 = setButton('k5-7', ['ArrowDown', '↓', '↓', '↓', '↓'], 'fn');
kbd.appendChild(K5_7);
let K5_8 = setButton('k5-8', ['ArrowRight', '→', '→', '→', '→'], 'fn');
kbd.appendChild(K5_8);

let allKey = kbd.querySelectorAll('.button');
let changeKey = (num) => {
    allKey.forEach(el => {
        el.innerHTML = el.arrChar[num];
        el.currChar = el.arrChar[num];
    });
}

//--------------------------------------------------------

kbd.addEventListener('mousedown', e => {
    keyMousePress = e.target;
    if (keyMousePress.classList.contains('k3-1')) {
        keyMousePress.classList.add('buttonPress');
        keyMousePress.classList.toggle('buttonCapsPress');
        if (keyMousePress.classList.contains('buttonCapsPress')) {
            changeKey(2);
        } else {
            changeKey(1);
        }
        //        console.log('caps ');
    } else if (keyMousePress.classList.contains('k4-1') || keyMousePress.classList.contains('k4-14')) {
        keyMousePress.classList.add('buttonPress');
        changeKey(2);
    } else if (keyMousePress.classList.contains('button')) {

        //        console.log('+ ' + keyMousePress);
        //        keyMousePress.innerHTML = e.target.arrChar[1];
        keyMousePress.classList.add('buttonPress');
        if (!e.target.classList.contains('buttonFn') || e.target.classList.contains('k4-13') || e.target.classList.contains('k5-6') || e.target.classList.contains('k5-7') || e.target.classList.contains('k5-8') || e.target.classList.contains('k5-3') || e.target.classList.contains('k1-14') || e.target.classList.contains('k2-14') || e.target.classList.contains('k2-15') || e.target.classList.contains('k2-1')

        ) {
            let event = new Event('pressButton', {
                bubbles: true
            });
            event.charButton = e.target.currChar;
            textArea.dispatchEvent(event);
        };
    };
});

document.addEventListener('mouseup', e => {

    if (keyMousePress) {
        if (keyMousePress.classList.contains('k4-1') || keyMousePress.classList.contains('k4-14')) {
            changeKey(1);
            keyMousePress.classList.remove('buttonPress');
        } else {
            keyMousePress.classList.remove('buttonPress');
        }

    };
});

window.addEventListener('keypress', (e) => console.log('111 ' + e.code));