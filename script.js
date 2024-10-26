function saleStep() {
    let step = document.getElementById("step").value
    let sale = document.getElementById("sale")
    sale.innerHTML = step + "%"
    //console.log(step)
}

function course() {
    let select = document.getElementById("select").value
    let coursePriceElement = document.getElementById("coursePrice")
    let step = document.getElementById("step").value
    let benifit = document.getElementById("benifit")
    
    let mainPrice = document.getElementById("mainPrice")
    
    console.log(step)

    let PYTHON_PRICE = 12000000;
    let UX_PRICE = 16000000;
    let FRONT_PRICE = 14000000;
    let bestPrice = 0; 

    if (select === "Python") {
        bestPrice = PYTHON_PRICE
    } else if (select ==="Front") {
        bestPrice = FRONT_PRICE
    } else if (select === "Ux") {
        bestPrice = UX_PRICE
    } else {
        coursePriceElement.value = "";
        mainPrice.value = "";
        benifit.value = "";
        return
    }
    mainPrice.value = bestPrice

    
    let finalPrice = bestPrice * (100 - step) / 100;
    let benifitPrice = bestPrice * step / 100;
    
    coursePriceElement.value = finalPrice;
    benifit.innerHTML = benifitPrice;

    saleStep()
    console.log(select, coursePrice)
}

coursePrice