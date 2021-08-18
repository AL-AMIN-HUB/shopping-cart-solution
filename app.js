// case functin
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update caseTotal
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
};

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;

    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10; //Here you have to specify the percentage tax.
    const totalPrice = subtotal + tax;

    // update on the html

    // tax

    // method best
    document.getElementById('subTotal-number').innerText = subtotal;

    document.getElementById('total-tax').innerText = tax;
    document.getElementById('Total-price').innerText = totalPrice;

    // method 2
    /*  const subTotalNumber = document.getElementById('subTotal-number');
     subTotalNumber.innerText = subtotal; */
}


// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, true);

});

document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, false);
})

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function() {
    updateProductNumber('case', 59, true);

});
document.getElementById('case-minus').addEventListener('click', function() {
    updateProductNumber('case', 59, false);
});