const heartBtn = document.querySelectorAll(".button-heart");
const cartBtn = document.querySelectorAll(".button-cart-shopping");

heartBtn.forEach(function (heartBtn) {
  var switchButton = 1;
  heartBtn.addEventListener("click", function (event) {
    if (switchButton === 1) {
      event.preventDefault();
      heartBtn.classList.add("active-heart-btn");
      heartBtn.classList.remove("btn-outline-danger");
      switchButton = 2;
    } else if (switchButton === 2) {
      event.preventDefault();
      heartBtn.classList.add("btn-outline-danger");
      heartBtn.classList.remove("active-heart-btn");
      switchButton = 1;
    }
  });
});

cartBtn.forEach(function (cartBtn) {
  cartBtn.addEventListener("click", function (event) {
    event.preventDefault();
    cartBtn.classList.add("click-cart-shop-btn");
    cartBtn.classList.remove("btn-outline-primary");

    setTimeout(() => {
      cartBtn.classList.add("btn-outline-primary");
      cartBtn.classList.remove("click-cart-shop-btn");
    }, 500);
  });
});
