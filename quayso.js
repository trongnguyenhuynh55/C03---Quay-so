"use strict";
exports.__esModule = true;
function quay() {
    var min = document.getElementById("min");
    var min1 = Number(min.value);
    var max = document.getElementById("max");
    var max1 = Number(max.value);
    if (min1 > max1) {
        var ketqua = document.getElementById("result");
        ketqua.innerHTML = "Sai ui, moi ban chon dung!";
    }
    else {
        var a = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
        var ketqua = document.getElementById("result");
        ketqua.innerHTML = String(a);
    }
}
