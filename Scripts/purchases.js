const API_URL = 'https://database-2efb.restdb.io/rest/purchase-details';
    const API_KEY = "67a072a8417fee72abb30f3f";

    function fetchProduct() {
        // Get logged-in user's email (or user ID) from localStorage
        const userEmail = localStorage.getItem("email"); // Assuming email is stored in localStorage

        if (!userEmail) {
            console.error("User not logged in.");
            document.getElementById("boughtproducts").innerHTML = "<p>Please log in to view your purchases.</p>";
            return;
        }

        // Fetch purchase details from RestDB
        fetch(`${API_URL}?q={"email": "${userEmail}"}`, { // Filtering by user email
            method: "GET",
            headers: { "x-apikey": API_KEY }
        })
        .then(response => response.json())
        .then(data => {
            const boughtItemsDiv = document.getElementById("boughtproducts");
            boughtItemsDiv.innerHTML = ""; // Clear previous content

            // update the purchases container items one by one
            if (data.length > 0) {
                data.forEach(product => {
                    const productHTML = `
                        <div class="item">
                            <img src="${product.Item_Img}" alt="Product Image">
                            <div class="iteminfo">
                                <p>${product.Item}</p>
                                <div class="delivery">
                                    <p>Delivery Status: Order placed</p>
                                </div>
                            </div>
                        </div>
                    `;
                    boughtItemsDiv.innerHTML += productHTML;
                });
            } else {
                boughtItemsDiv.innerHTML = "<p>No purchases found.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("boughtproducts").innerHTML = "<p>Error loading purchases.</p>";
        });
    }

    fetchProduct(); // Call the function when page loads