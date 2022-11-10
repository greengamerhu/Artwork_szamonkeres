"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
let lista = [];
let nev = document.getElementById('nev');
let ev = document.getElementById('ev');
let ar = document.getElementById('ar');
let magassag = document.getElementById('magassag');
let hibamezo = document.getElementById('hiba');
let jelenlegiEv = new Date().getFullYear();
function nevcheck(nev) {
    let reg = new RegExp('^[a-zA-Z-, ]*$');
    if (nev.length >= 1 && nev != "" && reg.test(nev)) {
        return true;
    }
    return false;
}
function arCheck(ar) {
    if (ar >= 1 && ar != null) {
        return true;
    }
    return false;
}
function evCheck(ev) {
    if (ev <= jelenlegiEv && ev != null) {
        return true;
    }
    return false;
}
function meretCheck(meret) {
    if (meret >= 20 && meret != null) {
        return true;
    }
    return false;
}
function EmtyAllFields() {
    nev.value = " ";
    ar.value = " ";
    ev.value = " ";
    magassag.value = " ";
    hibamezo.textContent = "";
}
function calc() {
}
function checkAll() {
    if (nevcheck(nev.value) && arCheck(parseInt(ar.value)) && evCheck(parseInt(ev.value)) && meretCheck(parseInt(magassag.value))) {
        lista.push(new Statue_1.Statue(nev.value, parseInt(ev.value), parseInt(ar.value), parseInt(magassag.value)));
        EmtyAllFields();
    }
    else {
        hibamezo.textContent = "";
        console.log("valami nem jó");
        if (!nevcheck(nev.value)) {
            hibamezo.textContent = "A név csak ,- karaketereket tartalmazhat";
        }
        else if (!arCheck(parseInt(ar.value))) {
            hibamezo.textContent = "Az ár nem lehet 1 ft-nél kisebb";
        }
        else if (!evCheck(parseInt(ev.value))) {
            hibamezo.textContent = "Az ev  csak " + jelenlegiEv + "- ig mehet";
        }
        else if (!meretCheck(parseInt(magassag.value))) {
            hibamezo.textContent = "a magasság nem lehet negatív";
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    console.log('Loaded');
    document.getElementById("submit").addEventListener('click', () => {
        console.log(nevcheck(nev.value));
        checkAll();
    });
});
