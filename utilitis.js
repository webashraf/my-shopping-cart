
function updateValue(totalPriceId, totalCount, perPrice, isTrue){
    const phoneCOunt = document.getElementById(totalCount);
    let Updatevalue;
    isTrue? Updatevalue = phoneCOunt.value = parseInt(phoneCOunt.value) + 1 : Updatevalue = phoneCOunt.value = parseInt(phoneCOunt.value) - 1;
    document.getElementById(totalPriceId).innerText = Updatevalue * perPrice;
    totalDown()
}
function totalDown(){
    const total = parseInt(document.getElementById('phone-total').innerText) + parseInt(document.getElementById('case-total').innerText)
    document.getElementById('sub-total').innerText = total;

    const text = (total * .15).toFixed(0);
    document.getElementById('text-total').innerText = text;
    console.log(total);
    console.log(text);

    document.getElementById('final-total').innerText = total + parseInt(text);
}
