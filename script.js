
const body = document.querySelector("body");
const menuOpenBtn = document.getElementById("menu-open-button");
const menuCloseBtn = document.getElementById("menu-close-button");

menuOpenBtn.addEventListener("click", () => {
  body.classList.add("show-mobile-menu");
});

menuCloseBtn.addEventListener("click", () => {
  body.classList.remove("show-mobile-menu");
});

// ---------- TAB FUNCTIONALITY ----------
function showMenu(menuId) {
  const tabs = document.querySelectorAll('.tab');
  const menus = document.querySelectorAll('.menu-items');

  // Remove active class from all tabs & menus
  tabs.forEach(tab => tab.classList.remove('active'));
  menus.forEach(menu => menu.classList.remove('active'));

  // Add active class to selected tab & menu
  document.querySelector(`.tab[onclick="showMenu('${menuId}')"]`).classList.add('active');
  document.getElementById(menuId).classList.add('active');
}

// ---------- CART FUNCTIONALITY ----------
let cart = [];

// Optional: cart counter element
const cartCounter = document.createElement('div');
cartCounter.id = 'cart-counter';
cartCounter.style.position = 'fixed';
cartCounter.style.top = '20px';
cartCounter.style.right = '20px';
cartCounter.style.backgroundColor = '#ff5a8a';
cartCounter.style.color = '#fff';
cartCounter.style.padding = '8px 12px';
cartCounter.style.borderRadius = '25px';
cartCounter.style.fontWeight = 'bold';
cartCounter.style.zIndex = '1000';
cartCounter.textContent = 'Cart: 0';
document.body.appendChild(cartCounter);

// Function to show temporary notification
function showNotification(itemName) {
  const notification = document.createElement('div');
  notification.textContent = `${itemName} added to cart!`;
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = '#ff85a2';
  notification.style.color = '#fff';
  notification.style.padding = '10px 15px';
  notification.style.borderRadius = '20px';
  notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  notification.style.zIndex = '1000';
  notification.style.opacity = '0';
  notification.style.transition = 'opacity 0.5s ease';
  document.body.appendChild(notification);

  // Fade in
  setTimeout(() => { notification.style.opacity = '1'; }, 10);
  // Fade out and remove after 2s
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 500);
  }, 2000);
}

// Add event listeners to all Add to Cart buttons
function initCartButtons() {
  const buttons = document.querySelectorAll('.card button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      const itemName = card.querySelector('h3').textContent;
      cart.push(itemName);

      // Update cart counter
      cartCounter.textContent = `Cart: ${cart.length}`;

      // Show notification
      showNotification(itemName);

      console.log('Current Cart:', cart);
    });
  });
}

// Initialize buttons on page load
initCartButtons();

