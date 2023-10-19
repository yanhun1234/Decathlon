if (typeof Storage !== "undefined") {
    for (let i = 1; i <= 12; i++) {
        if (!localStorage[`a_${i}`]) {
            localStorage[`a_${i}`] = 0;
        }
    }
}

async function incrementLocalStorage(key) {
    if (typeof Storage !== "undefined") {
        if (localStorage[key]) {
            localStorage[key] = Number(localStorage[key]) + 1;
        } else {
            localStorage[key] = 0;
        }
    }
}

async function a_1() {
    await incrementLocalStorage("a_1");
}

async function a_2() {
    await incrementLocalStorage("a_2");
}
async function a_3() {
    await incrementLocalStorage("a_3");
}

async function a_4() {
    await incrementLocalStorage("a_4");
}
async function a_5() {
    await incrementLocalStorage("a_5");
}

async function a_6() {
    await incrementLocalStorage("a_6");
}async function a_7() {
    await incrementLocalStorage("a_7");
}

async function a_8() {
    await incrementLocalStorage("a_8");
}async function a_9() {
    await incrementLocalStorage("a_9");
}

async function a_10() {
    await incrementLocalStorage("a_10");
}async function a_11() {
    await incrementLocalStorage("a_11");
}

async function a_12() {
    await incrementLocalStorage("a_12");
}
