//calling the total from localStorage and setting to an integar
var cartValue = parseFloat(localStorage.getItem("total"));

//calling the cart items stored as an object from localstorage
let myCartItem = localStorage.getItem("myCartItem");
myCartItem = JSON.parse(myCartItem);

//setting each item to each
myCartItem.forEach(element => {
  console.log(element);
});

//setting the count of items in the cart using .length feature
var cartCount = (document.getElementById("cartCount").innerHTML =
  "You have " +
  "<strong>" +
  myCartItem.length +
  "</strong>" +
  " item(s) in your cart");

//creating table with headings and setting each item from localStorage to the table to be presented on the cart page
$(document).ready(function() {
  var html = "<table border='1|1'>";
  html += `<tr>
    <th>Picture</th>
    <th>Product Name</th>
    <th>Price</th>
    </tr>`;
  for (var i = 0; i < myCartItem.length; i++) {
    html += "<tr>";
    html += "<td>" + '<img src="' + myCartItem[i].img + '">' + "</td>";
    html += "<td>" + "<strong>" + myCartItem[i].name + "</strong>" + "</td>";
    html +=
      "<td>" + "<strong>" + "R" + myCartItem[i].price + "</strong>" + "</td>";
    html += "</tr>";
  }

  html += "</table>";
  $("#cartSection").html(html);
});

//setting the cart value to innerHTML and using to fixed method with 2 decimals
document.getElementById("total-cart").innerHTML =
  "<br> Your cart total is: R" + cartValue.toFixed(2);

//declare the coupon code for the page
var coupon = "10OFF";

//check the coupon code to ensure it is valid whn entered and append the cartValue if valid with 10% off,
//else if not valid, show the cart value without discount on it.
function check() {
  checkType = document.getElementById("coup").value;
  console.log(checkType);
  var coupon = "10OFF";
  if (coupon != checkType) {
    document.getElementById("error").innerHTML = "ERROR TRY AGAIN";
  } else {
    document.getElementById("error").innerHTML = "SUCCESS";
    cartValue *= 0.9;
    document.getElementById("total-cart").innerHTML =
      "<br> Your cart total is: R" + cartValue.toFixed(2);
  }
}

//submitting the order, will generate a unique reference number for the order and will clear the local storage when submit has been clicked
function submitOrder() {
  alert(
    "Your order has been received, your unique reference number is " +
      (Math.floor(Math.random() * 90000) + 10000)
  );
  localStorage.clear();
}

//clear local storage and reload page function button
function clearContent() {
  localStorage.clear();
  window.location.reload();
}
