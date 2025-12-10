 /* For Delete Contact */
  let cartbtn = document.querySelectorAll(".cart-delete");
  cartbtn.forEach((eleBtn) => {
    eleBtn.onclick = () => {
      let invoice = eleBtn.closest(".ecommerce-cart");
      invoice.remove();
    };
  });