//enabling certain inputs when clicked in either credit card or paylah
function enableText() {
    document.getElementById('number').disabled = false;
    document.getElementById('cv').disabled = false;
    document.getElementById("cardoption").style.display = "block";
    document.getElementById("qr").style.display = "none";
}
//disabling certain inputs when clicked paynow
function disableText() {
    document.getElementById('number').disabled = true;
    document.getElementById('cv').disabled = true;
    document.getElementById("cardoption").style.display = "none";
    document.getElementById("qr").style.display = "block";
}
//getting payment details
function paymentdata(event){
    event.preventDefault();

    var address = document.getElementById("address").value;
    var postal = document.getElementById("postal").value;
    var card = document.getElementById("number").value;
    var cv = document.getElementById("cv").value;
    localStorage.setItem('address',address);
    localStorage.setItem('postal',postal);
    localStorage.setItem('number',card);
    localStorage.setItem('cv',cv);
    window.location.href="loading.html";
}
const form = document.getElementById('paymentdetails');
const submitButton = form.querySelector('button');

form.addEventListener('input', () => {
  const isFormValid = form.checkValidity();
  submitButton.disabled = !isFormValid;
});
// setting text
document.getElementById("product_image").src = localStorage.getItem("image")
if (localStorage.getItem("product image") == "1"){
    document.getElementById("itemname").textContent = "Seashell Pearl Drop Earrings";
    document.getElementById("cost").textContent = "$6.50";
} else if (localStorage.getItem("product image") == "2"){
    document.getElementById("itemname").textContent = "Golden Seashell Charm Layer";
    document.getElementById("cost").textContent = "$13";
} else if (localStorage.getItem("product image") == "3"){
    document.getElementById("itemname").textContent = "Golden Seashell Charm Necklace";
    document.getElementById("cost").textContent = "$17";
} else if (localStorage.getItem("product image") == "4"){
    document.getElementById("itemname").textContent = "Ocean Whisper Pearl Earrings";
    document.getElementById("cost").textContent = "$5.50";
} else if (localStorage.getItem("product image") == "5"){
    document.getElementById("itemname").textContent = "Mermaid's Pearl Shell Ring";
    document.getElementById("cost").textContent = "$15";
} else if (localStorage.getItem("product image") == "6"){
    document.getElementById("itemname").textContent = "Hidden Pearl Locket Ring";
    products_bought.push("Hidden Pearl Locket Ring");
    document.getElementById("cost").textContent = "$16.50";
} else if (localStorage.getItem("product image") == "7"){
    document.getElementById("itemname").textContent = "Ocean Shell Open Ring";
    document.getElementById("cost").textContent = "$5.50";
} else if (localStorage.getItem("product image") == "8"){
    document.getElementById("itemname").textContent = "Little Fish Charm Necklace";
    document.getElementById("cost").textContent = "$6.50";
} else {
    console.log("error");
}