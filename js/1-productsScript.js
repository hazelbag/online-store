//set parameters for each declared
function productItem(img, name, price, id) {
  this.img = img;
  this.name = name;
  this.price = price;
  this.id = id;
}

//set items info, price, image and id
let item1 = new productItem(
  "Images/HomePG-Thumb/trek-marlin-5-2020-sample.jpg",
  "Trek Marlin 5 - 2020",
  7499.99,
  "marlin520"
);
let item2 = new productItem(
  "Images/HomePG-Thumb/trek-roscoe-7-2019-sample.jpg",
  "Trek Roscoe 7 - 2019",
  13999.99,
  "roscoe719"
);
let item3 = new productItem(
  "Images/HomePG-Thumb/trek-roscoe-7-2020-sample.jpg",
  "Trek Roscoe 7 - 2020",
  17999.99,
  "roscoe720"
);
let item4 = new productItem(
  "Images/HomePG-Thumb/trek-roscoe-8-2020-sample.jpg",
  "Trek Roscoe 8 - 2020",
  24699.99,
  "roscoe820"
);
let item5 = new productItem(
  "Images/Gear/garmin-edge-530.jpg",
  "Garmin Edge 530 Standalone",
  4939.99,
  "edge530SA"
);
let item6 = new productItem(
  "Images/Gear/garmin-edge-1030-bundle.jpg",
  "Garmin Edge 1030 Bundle",
  9099.99,
  "edge1030B"
);
let item7 = new productItem(
  "Images/Gear/osprey-raven-10l-hydration.jpg",
  "Hydration Pack 10 Litre",
  1499.99,
  "hydro10l"
);
let item8 = new productItem(
  "Images/Gear/osprey-raven-14-hydration.jpg",
  "Hydration Pack 14 Litre",
  2279.99,
  "hydro14l"
);

let item9 = new productItem(
  "Images/Shipping/delivery-truck.png",
  "Click and Collect Delivery",
  0,
  "Click&Collect"
);
let item10 = new productItem(
  "Images/Shipping/delivery-truck.png",
  "Standard Delivery",
  499.00,
  "standardDel"
);
let item11 = new productItem(
  "Images/Shipping/delivery-truck.png",
  "Next Day Delivery",
  799.00,
  "NextDayDel"
);
let item12 = new productItem(
  "Images/Shipping/delivery-truck.png",
  "Weekend Delivery",
  999.00,
  "WeekendDel"
);

//set the arrays of each item and the cart
let myProductItem = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12];
let myCartItem = [];

//function to save to cart(localStorage) on click and to alert the user of the current cart total
function saveToCart(myItem) {
  myCartItem.push(myItem);
  localStorage.setItem("myCartItem", JSON.stringify(myCartItem));
  let total = Number(localStorage.getItem("total"));
  if (total === null) {
    localStorage.setItem("total", myItem.price);
  } else {
    total += Number(myItem.price);
    localStorage.setItem("total", total.toFixed(2));
  }
  alert('You added ' + myItem.name + ' to your cart. Your total is ' + total.toFixed(2))
}

//set the items to display in the appropriate section of the html page
let count = 0;
myProductItem.forEach(item => {
  count++;
  document.getElementById(item.id).innerHTML +=
    '<img src="' +
    item.img +
    '" alt="Trek Marlin 5">' +
    "<br>" +
    item.name +
    "<br>" +
    "R" +
    item.price;

  //save to cart and count
  let buyButton = document.getElementById("cart" + count);
  buyButton.onclick = e => {
    saveToCart(item);
  };
});