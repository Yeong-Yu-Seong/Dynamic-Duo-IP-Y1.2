//enable search textbox (search function currently not working)
function search(){
    state = document.getElementById('searchbar').style.display;
    if (state == "block"){
        document.getElementById('searchbar').style.display = "none";
    } else {
        document.getElementById('searchbar').style.display = "block";
        document.getElementById('searchbar').value = "";
    }
}
//getting image src and id of clicked item
document.getElementById("accountpic").src = localStorage.getItem("accountpicture");
document.querySelectorAll('.product_image').forEach(img => {
    img.addEventListener('mouseover', function() {
        console.log(this.src);
        localStorage.setItem("image",this.src);
    });
});
function getId(element) {
    console.log('Hovered ID:', element.id);
    localStorage.setItem("product image", element.id);
}
document.getElementById("accountpic").src = localStorage.getItem("accountpicture");