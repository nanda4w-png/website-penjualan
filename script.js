const cartCount = document.getElementById("cart-count");
const toast = document.getElementById("toast");
const addButtons = document.querySelectorAll(".add-btn");

let itemCount = 0;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    itemCount += 1;
    cartCount.textContent = itemCount;

    const product = button.closest(".product-item");
    const name = product.dataset.name;
    showToast(`${name} ditambahkan ke keranjang`);
  });
});
