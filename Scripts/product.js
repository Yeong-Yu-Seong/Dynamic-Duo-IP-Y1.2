//setting video
function videolink(){
    if (localStorage.getItem("product image")=="5"){
        window.location.href = "https://sketchfab.com/3d-models/gold-pearl-ring-fabd7da0abb849fe9661eddb186fd6b6";
    } else if (localStorage.getItem("product image")=="6") {
        window.location.href = "home.html";
    } else {
        document.querySelector(".product_image3").removeAttribute("onclick");
    }
}
//setting images and texts based on item clicked
document.getElementById('product_image').src = localStorage.getItem('image');
document.getElementById('product_image2').src = localStorage.getItem('image');
document.getElementById("product_image3").src = localStorage.getItem('image')
if (localStorage.getItem("product image") == "1"){
    document.getElementById("productname").textContent = "Seashell Pearl Drop Earrings";
    document.getElementById("desc").textContent = "The Seashell Pearl Drop Earrings are perfect for anyone who loves the beach. They feature a beautiful cowrie shell hanging from a small gold seashell stud, giving them a natural and elegant look. A tiny pearl bead adds a simple, classy touch. These earrings are great for a relaxed summer outfit or a stylish everyday look, bringing a little bit of the ocean with you wherever you go! 🌊✨";
    document.getElementById("cost").textContent = "$6.50";
} else if (localStorage.getItem("product image") == "2"){
    document.getElementById("productname").textContent = "Golden Seashell Charm Layer";
    document.getElementById("desc").textContent = "This elegant layered necklace features a mix of delicate gold chains adorned with pearl accents and a seashell pendant. Its timeless design combines the charm of the ocean with classic sophistication, making it perfect for beach outings or adding a subtle touch of elegance to any outfit. Lightweight and versatile, it pairs effortlessly with both casual and formal looks.";
    document.getElementById("cost").textContent = "$13";
} else if (localStorage.getItem("product image") == "3"){
    document.getElementById("productname").textContent = "Golden Seashell Charm Necklace";
    document.getElementById("desc").textContent = "The Golden Seashell Charm Necklace is a stunning ocean-inspired piece that brings the beauty of the sea to your style. This layered necklace features two natural seashell pendants, carefully edged in gold detailing, giving them an elegant and unique touch. A baroque pearl charm adds extra sophistication, making this necklace perfect for beach lovers, mermaid-core fashion, or anyone who enjoys nature-inspired jewelry. Whether worn casually or for a special occasion, this necklace will make you feel connected to the ocean's magic. 🌊✨";
    document.getElementById("cost").textContent = "$17";
} else if (localStorage.getItem("product image") == "4"){
    document.getElementById("productname").textContent = "Ocean Whisper Pearl Earrings";
    document.getElementById("desc").textContent = "The Ocean Whisper Pearl Earrings capture the elegance of the sea with their delicate design. Featuring a golden seashell stud and a soft teardrop pearl, these earrings bring a timeless and graceful touch to any outfit. Perfect for beach lovers or anyone who adores simple, classic jewelry, they add a subtle yet sophisticated charm. Whether worn casually or for a special occasion, these earrings are a beautiful reminder of the ocean's serene beauty. 🌊✨";
    document.getElementById("cost").textContent = "$5.50";
} else if (localStorage.getItem("product image") == "5"){
    document.getElementById("product_image3").style.cursor = "pointer";
    document.getElementById("product_image3").src = "Pictures/3df.png";
    document.getElementById("productname").textContent = "Mermaid's Pearl Shell Ring";
    document.getElementById("desc").textContent = "The Mermaid's Pearl Shell Ring is a delicate and enchanting piece inspired by the ocean's beauty. Featuring a spiral seashell at its center, accented with tiny pearls on a golden band, this ring captures the essence of the sea. Its open design adds a unique and elegant touch, making it a perfect choice for beach lovers, mermaid-core fashion, or anyone who enjoys nature-inspired jewelry. Whether worn casually or for a special occasion, this ring brings a bit of ocean magic to your style! 🌊✨";
    document.getElementById("cost").textContent = "$15";
} else if (localStorage.getItem("product image") == "6"){
    document.getElementById("product_image3").style.cursor = "pointer";
    document.getElementById("product_image3").src = "Pictures/3df.png";
    document.getElementById("productname").textContent = "Hidden Pearl Locket Ring";
    document.getElementById("desc").textContent = 'The Hidden Pearl Locket Ring is a unique and elegant piece with a meaningful touch. Designed as a golden seashell locket, this ring opens to reveal a tiny pearl inside, symbolizing hidden treasures and inner beauty. Inside the shell, the engraved words "Todo pasa" (which means Everything passes in Spanish) offer a gentle reminder that all moments, good or bad, are temporary. Perfect for those who love ocean-inspired jewelry with a personal touch, this ring is a beautiful blend of mystery, elegance, and meaning. 🌊✨';
    document.getElementById("cost").textContent = "$16.50";
} else if (localStorage.getItem("product image") == "7"){
    document.getElementById("productname").textContent = "Ocean Shell Open Ring";
    document.getElementById("desc").textContent = "The Ocean Shell Open Ring is a stunning piece inspired by the beauty of the sea. Designed with two textured seashells in a mix of silver and gold tones, this ring brings a unique and stylish look. The open design allows for an adjustable fit, making it comfortable to wear on any finger. Perfect for beach lovers and those who enjoy ocean-inspired jewelry, this ring adds a touch of nature and elegance to any outfit! 🌊✨";
    document.getElementById("cost").textContent = "$5.50";
} else if (localStorage.getItem("product image") == "8"){
    document.getElementById("productname").textContent = "Little Fish Charm Necklace";
    document.getElementById("desc").textContent = "The Little Fish Charm Necklace is a simple yet charming piece inspired by the beauty of the sea. Featuring a delicate fish-shaped pendant in gold or silver, this necklace adds a playful yet elegant touch to any outfit. The fine chain complements the pendant's minimalist design, making it perfect for everyday wear. Whether you love ocean-inspired jewelry or want a symbol of freedom and adventure, this necklace is a unique and stylish choice. 🌊🐟✨";
    document.getElementById("cost").textContent = "$6.50";
} else {
    console.log("error");
}