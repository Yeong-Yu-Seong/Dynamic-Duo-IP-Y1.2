class item {
    constructor(img, productname) {
      this.img = img;
      this.item = productname;
      this.cartContainer = document.querySelector('.boughtproducts');
      this.events();
    }

    getTemplate() {
      const template = `<div class="item">
                    <img src="${this.img}" alt="" />
                    <div class="iteminfo">
                        <p>${this.item}</p>
                        <div class="delivery">
                            <p>Delivery Status: </p>
                            <p>Order Placed</p>
                        </div>
                    </div>
                </div> `;
      return template;
    }

    events() {
      this.updateCart();
    }

    updateCart() {
      const template = this.getTemplate();
      let newItemDiv = document.createElement('div');
      this.cartContainer.append(newItemDiv);
      newItemDiv.outerHTML = template;
    }
  }

// sample img, price (You can set different values for img, price when you want to create new one, this static content is just for example)
const img = localStorage.getItem("image");

if (localStorage.getItem("product image") == "1"){
    var itemname = "Seashell Pearl Drop Earrings";
} else if (localStorage.getItem("product image") == "2"){
    var itemname = "Golden Seashell Charm Layer";
} else if (localStorage.getItem("product image") == "3"){
    var itemname = "Golden Seashell Charm Necklace";
} else if (localStorage.getItem("product image") == "4"){
    var itemname = "Ocean Whisper Pearl Earrings";
} else if (localStorage.getItem("product image") == "5"){
    var itemname = "Mermaid's Pearl Shell Ring";
} else if (localStorage.getItem("product image") == "6"){
    var itemname = "Hidden Pearl Locket Ring";
} else if (localStorage.getItem("product image") == "7"){
    var itemname = "Ocean Shell Open Ring";
} else if (localStorage.getItem("product image") == "8"){
    var itemname = "Little Fish Charm Necklace";
} else {
    console.log("error");
}
const productname = itemname

function addItem(){
  new item (img, productname);
}