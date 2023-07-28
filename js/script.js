var allProducts = document.querySelectorAll(".Products .product-1")

var content = document.querySelector("#content")

var cart = document.querySelector("#my-cart")

var lina = document.querySelector("#price-1")

var totalPrice = 0

var x = 1

var y = 1
 allProducts.forEach(function (item){
    item.onclick = function (){
        cart.innerHTML = "Your Cart"
        totalPrice  +=   +(item.getAttribute("price"))
        content.innerHTML += item.textContent + "" + "<br>"  
        lina.innerHTML = "Total Price :" + " " +"$" + " "  + totalPrice + "<br>" + x 
        x++;
     }
 })