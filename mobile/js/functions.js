function reloadPage() {
    location.reload();
}

function g() {
    var greatings =
        [
            'hallo, ',
            '¡hola, ',
            '你好, ',
            'ciao, ',
            'hi, ',
            'こんにちは, ',
            'saluton, ',
            '안녕하세요, ',
            'привет, ',
            'alo, ',
            'salut, ',
            'γεια, ',
            'გამარჯობა, ',
            'cześć, ',
            'kaixo, ',
            'hei, ',
            'ola, ',
            'здравей, '
        ];
    var max = greatings.length, min = 0;
    var r = Math.floor(Math.random() * (max - min)) + min;

    return greatings[r];
}

function allowEdit() {
    if(document.getElementById('disabledButton').disabled) {
        document.getElementById('disabledButton').disabled = false;
        document.getElementById('hiddenButton').style.visibility = 'visible';
    } else {
        document.getElementById('disabledButton').disabled = true;
        document.getElementById('hiddenButton').style.visibility = 'hidden';
    }
}