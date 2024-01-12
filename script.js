function theme1set() {
    let x = document.getElementById("theme1-button")
    let y = document.getElementById("theme2-button")
    let z = document.getElementById("theme3-button")

    x.classList.remove("inactive-theme")
    x.classList.add("active-theme")

    y.classList.remove("active-theme")
    y.classList.add("inactive-theme")

    z.classList.remove("active-theme")
    z.classList.add("inactive-theme")

    document.documentElement.setAttribute('data-theme', 'theme1')
}

function theme2set() {
    let x = document.getElementById("theme1-button")
    let y = document.getElementById("theme2-button")
    let z = document.getElementById("theme3-button")

    x.classList.remove("active-theme")
    x.classList.add("inactive-theme")

    y.classList.remove("inactive-theme")
    y.classList.add("active-theme")

    z.classList.remove("active-theme")
    z.classList.add("inactive-theme")

    document.documentElement.setAttribute('data-theme', 'theme2')
}

function theme3set() {
    let x = document.getElementById("theme1-button")
    let y = document.getElementById("theme2-button")
    let z = document.getElementById("theme3-button")

    x.classList.remove("active-theme")
    x.classList.add("inactive-theme")

    y.classList.remove("active-theme")
    y.classList.add("inactive-theme")

    z.classList.remove("inactive-theme")
    z.classList.add("active-theme")

    document.documentElement.setAttribute('data-theme', 'theme3')
}

function inputNumber(num) {
    let x = document.getElementById("calculator-input").value
    document.getElementById("calculator-input").value += num
}

function clearInput() {
    document.getElementById("calculator-input").value = ""
}

function backspace() {
    let x = document.getElementById("calculator-input").value
    console.log(x)
    let res = x.substring(0, x.length - 1);
    document.getElementById("calculator-input").value = res
}

function mathOperator(operator) {
    let x = document.getElementById("calculator-input").value;
    if (x[x.length - 1] != "+" && x[x.length - 1] != "-" && x[x.length - 1] != "*" && x[x.length - 1] != "/"&& x[x.length - 1] != ".") {
        document.getElementById("calculator-input").value += operator;
    } else {
        backspace()
        document.getElementById("calculator-input").value += operator;
    }
}

function calculate() {
    let x = document.getElementById("calculator-input").value;
    let res = eval(x)
    try {
        document.getElementById("calculator-input").value = res;
    } catch (error) {
        document.getElementById("calculator-input").value = "Input Error";
    }

} 