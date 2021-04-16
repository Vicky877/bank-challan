function Twoth() {

    value = 2000;
    id = document.getElementById('a').value;
    var val = value * id;
    document.getElementById('Twoth').value = val;

    if (id == "") {
        id = 0;
        id = parseInt(id);

    }



    value1 = 500;
    id1 = (document.getElementById('b').value);
    var val1 = value1 * id1;
    document.getElementById('id-fiveh').value = val1;

    if (id1 == "") {
        id1 = 0;
        id1 = parseInt(id1);
        console.clear();
    }

    value2 = 200;
    id2 = (document.getElementById('c').value);
    var val2 = value2 * id2;
    document.getElementById('id-thu').value = val2;
    if (id2 == "") {
        id2 = 0;
        id2 = parseInt(id2);
    }


    value3 = 100;
    id3 = (document.getElementById('d').value);
    var val3 = value3 * id3;
    document.getElementById('id-hun').value = val3;
    if (id3 == "") {
        id3 = 0;
        id3 = parseInt(id3);
    }

    value4 = 50;
    id4 = (document.getElementById('e').value);
    var val4 = value4 * id4;
    document.getElementById('id-fifty').value = val4;

    if (id4 == "") {
        id4 = 0;
        id4 = parseInt(id4);
    }

    value5 = 10;
    id5 = (document.getElementById('f').value);
    var val5 = value5 * id5;
    document.getElementById('id-ten').value = val5;

    if (id5 == "") {
        id5 = 0;
        id5 = parseInt(id5);
    }

    value6 = 5;
    id6 = (document.getElementById('g').value);
    var val6 = value6 * id6;
    document.getElementById('id-five').value = val6;

    if (id6 == "") {
        id6 = 0;
        id6 = parseInt(id6);
    }

    value7 = 1;
    val7 = (document.getElementById('coin').value);





    totaln = parseInt(id) + parseInt(id1) + parseInt(id2) + parseInt(id3) + parseInt(id4) + parseInt(id5) + parseInt(id6);

    document.getElementById('total-notes').value = totaln;

    totala = parseInt(val) + parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6) + parseInt(val7);

    document.getElementById('totalamt').value = totala;

}

function newtab() {
    window.close();
}

document.body.addEventListener('keyup', function(e) {
    var code = e.keyCode;
    console.log(code);
    if (keycode === 13) {
        var conform = confirm("yes");
        if (conform == true) {
            window.location.reload();
        }
    }
})