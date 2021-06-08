window.addEventListener("load", () => {
    h = 0;
    m = 0;
    s = 0;
    mls = 0;
    timeStarted = 0;
    btnStart = document.getElementById("btn-start");
    btnStop = document.getElementById("btn-stop");
    btnReset = document.getElementById("btn-reset");
    event();
});

function event() {
    btnStart.addEventListener("click", start);
    btnStop.addEventListener("click", stop);
    btnReset.addEventListener("click", reset);
}

function write() {
    let ht, mt, st, mlst;
    mls++;

    if (mls > 99) { s++; mls = 0; }
    if (s > 59) { m++; s = 0; }
    if (m > 59) { h++; m = 0; }
    if (h > 24) { h = 0 }

    /* El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará -
    En resumen el slice lo uso para asignarle un 0 cuando solo es de un digito. por ejemplo si el segundo es 1 entonces con " ('0' + 1).slice(-2) "  me retornara como resultado 
    "01" si tiene 2 dígitos no le agrega el "0".*/
    mlst = ('0' + mls).slice(-2);
    st = ('0' + s).slice(-2);
    mt = ('0' + m).slice(-2);
    ht = ('0' + h).slice(-2);

    time.innerHTML = `${ht}:${mt}:${st}:${mlst}`;
}

function start() {
    write();
    timeStarted = setInterval(write, 10);
    btnStart.removeEventListener("click", start);
}

function stop() {
    clearInterval(timeStarted);
    btnStart.addEventListener("click", start);
}

function reset() {
    clearInterval(timeStarted);
    time.innerHTML = "00:00:00.00";
    h = 0, m = 0, s = 0, mls = 0
    btnStart.addEventListener("click", start);
}