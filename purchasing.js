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
// store data in restdb
item_id = localStorage.getItem("product image");
if (item_id == "1"){
    item = "Seashell Pearl Drop Earrings";
} else if (item_id == "2"){
    item = "Golden Seashell Charm Layer";
} else if (item_id == "3"){
    item = "Golden Seashell Charm Necklace";
} else if (item_id == "4"){
    item = "Ocean Whisper Pearl Earrings";
} else if (item_id == "5"){
    item = "Mermaid's Pearl Shell Ring";
} else if (item_id == "6"){
    item = "Hidden Pearl Locket Ring";
} else if (item_id == "7"){
    item = "Ocean Shell Open Ring";
} else if (item_id == "8"){
    item = "Little Fish Charm Necklace";
} else {
    console.log("error");
}
localStorage.setItem('item',item);
function addData(event){
    event.preventDefault();
    const url = "https://database-2efb.restdb.io/rest/purchase-details?max=2";
    const headers = {
      "Content-Type": "application/json",
      "x-apikey": "67a072a8417fee72abb30f3f"
        };
    let address = document.getElementById("address").value;
    let postal = document.getElementById("postal").value;
    let item_id = localStorage.getItem("product image");
    let item_img = localStorage.getItem("image")
    if (document.getElementById('number').disabled == false && document.getElementById('cv').disabled == false) {
        let number = document.getElementById("number").value;
        let cv = document.getElementById("cv").value;
        body= JSON.stringify({
            Address:address,
            Postal:postal,
            Card:number,
            CV:cv,
            Item: item,
            Item_Id: item_id,
            Item_Img: item_img,
            email: localStorage.getItem("email")
        });
      } else {
        body = JSON.stringify({
            Address:address,
            Postal:postal,
            Item: item,
            Item_Id: item_id,
            Item_Img: item_img,
            email: localStorage.getItem("email")
    });}
    fetch(url, {
        method: "POST",
        headers: headers,
        body: body
      })
      .then(res => res.json())
      .then(data => console.log(data));
      setTimeout(function() {
        console.log('setting window location');
        window.location.href = "loading.html";
      }, 3000);
}
// disabling and enabling submit button
const form = document.getElementById('paymentdetails');
const submitButton = form.querySelector('button');

form.addEventListener('input', () => {
  const isFormValid = form.checkValidity();
  submitButton.disabled = !isFormValid;
});
// setting text
document.getElementById("product_image").src = localStorage.getItem("image");
if (localStorage.getItem("product image") == "1"){
    document.getElementById("itemname").textContent = "Seashell Pearl Drop Earrings";
    document.getElementById("cost").textContent = "$35";
} else if (localStorage.getItem("product image") == "2"){
    document.getElementById("itemname").textContent = "Golden Seashell Charm Layer";
    document.getElementById("cost").textContent = "$42.50";
} else if (localStorage.getItem("product image") == "3"){
    document.getElementById("itemname").textContent = "Golden Seashell Charm Necklace";
    document.getElementById("cost").textContent = "$55.50";
} else if (localStorage.getItem("product image") == "4"){
    document.getElementById("itemname").textContent = "Ocean Whisper Pearl Earrings";
    document.getElementById("cost").textContent = "$30";
} else if (localStorage.getItem("product image") == "5"){
    document.getElementById("itemname").textContent = "Mermaid's Pearl Shell Ring";
    document.getElementById("cost").textContent = "$68";
} else if (localStorage.getItem("product image") == "6"){
    document.getElementById("itemname").textContent = "Hidden Pearl Locket Ring";
    document.getElementById("cost").textContent = "$41.95";
} else if (localStorage.getItem("product image") == "7"){
    document.getElementById("itemname").textContent = "Ocean Shell Open Ring";
    document.getElementById("cost").textContent = "$29.99";
} else if (localStorage.getItem("product image") == "8"){
    document.getElementById("itemname").textContent = "Little Fish Charm Necklace";
    document.getElementById("cost").textContent = "$15";
} else {
    console.log("error");
}