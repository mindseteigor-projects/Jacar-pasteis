// IG SITES — PASTELARIA DEMO

const WHATSAPP_NUMBER = '5541995229213';

const WHATSAPP_MESSAGE =
  'Olá! Vi este site demonstrativo e quero um site como este.';


const products = [

  {
    id: 1,
    name: 'Pastel de Carne',
    category: 'Pastéis',
    price: 12.00,
    emoji: '🥟',
    description: 'Pastel crocante com recheio de carne temperada.'
  },

  {
    id: 2,
    name: 'Pastel de Queijo',
    category: 'Pastéis',
    price: 11.00,
    emoji: '🧀',
    description: 'Queijo derretido em uma massa crocante.'
  },

  {
    id: 3,
    name: 'Pastel de Frango',
    category: 'Pastéis',
    price: 12.00,
    emoji: '🍗',
    description: 'Frango temperado com recheio cremoso.'
  },

  {
    id: 4,
    name: 'Pastel de Pizza',
    category: 'Pastéis',
    price: 13.00,
    emoji: '🍕',
    description: 'Presunto, queijo, tomate e orégano.'
  },

  {
    id: 5,
    name: 'Pastel Especial',
    category: 'Pastéis',
    price: 15.00,
    emoji: '🥟',
    description: 'Uma combinação especial de sabores.'
  },

  {
    id: 6,
    name: 'X-Burger',
    category: 'Lanches',
    price: 18.00,
    emoji: '🍔',
    description: 'Hambúrguer, queijo, salada e molho especial.'
  },

  {
    id: 7,
    name: 'X-Salada',
    category: 'Lanches',
    price: 19.00,
    emoji: '🍔',
    description: 'Hambúrguer, queijo, alface, tomate e molho.'
  },

  {
    id: 8,
    name: 'X-Bacon',
    category: 'Lanches',
    price: 22.00,
    emoji: '🥓',
    description: 'Hambúrguer, queijo, bacon crocante e molho.'
  },

  {
    id: 9,
    name: 'Batata Frita',
    category: 'Porções',
    price: 14.00,
    emoji: '🍟',
    description: 'Porção de batatas crocantes.'
  },

  {
    id: 10,
    name: 'Batata com Cheddar',
    category: 'Porções',
    price: 20.00,
    emoji: '🍟',
    description: 'Batata frita com cheddar cremoso.'
  },

  {
    id: 11,
    name: 'Nuggets',
    category: 'Porções',
    price: 16.00,
    emoji: '🍗',
    description: 'Nuggets crocantes para compartilhar.'
  },

  {
    id: 12,
    name: 'Refrigerante Lata',
    category: 'Bebidas',
    price: 6.00,
    emoji: '🥤',
    description: 'Lata gelada de refrigerante.'
  },

  {
    id: 13,
    name: 'Suco Natural',
    category: 'Bebidas',
    price: 8.00,
    emoji: '🧃',
    description: 'Suco natural preparado na hora.'
  },

  {
    id: 14,
    name: 'Água',
    category: 'Bebidas',
    price: 4.00,
    emoji: '💧',
    description: 'Água mineral gelada.'
  },

  {
    id: 15,
    name: 'Milk-shake',
    category: 'Bebidas',
    price: 14.00,
    emoji: '🥤',
    description: 'Milk-shake cremoso em sabores variados.'
  },

  {
    id: 16,
    name: 'Açaí',
    category: 'Sobremesas',
    price: 16.00,
    emoji: '🍓',
    description: 'Açaí cremoso com complementos.'
  },

  {
    id: 17,
    name: 'Pudim',
    category: 'Sobremesas',
    price: 9.00,
    emoji: '🍮',
    description: 'Pudim cremoso com calda de caramelo.'
  },

  {
    id: 18,
    name: 'Brownie',
    category: 'Sobremesas',
    price: 10.00,
    emoji: '🍫',
    description: 'Brownie macio e chocolatudo.'
  }

];


let cart = [];

let selectedCategory = 'Todos';


const productsContainer =
  document.getElementById('products');

const categoriesContainer =
  document.getElementById('categories');

const cartElement =
  document.getElementById('cart');

const cartOverlay =
  document.getElementById('cartOverlay');

const cartItemsContainer =
  document.getElementById('cartItems');

const cartTotal =
  document.getElementById('cartTotal');

const cartCount =
  document.getElementById('cartCount');


function formatPrice(value) {

  return value.toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL'
    }
  );

}


function whatsappUrl(
  message = WHATSAPP_MESSAGE
) {

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

}


function renderCategories() {

  const categories = [
    'Todos',
    ...new Set(
      products.map(
        product => product.category
      )
    )
  ];


  categoriesContainer.innerHTML =
    categories.map(category => `

      <button
        class="category ${category === selectedCategory ? 'active' : ''}"
        data-category="${category}"
      >
        ${category}
      </button>

    `).join('');


  categoriesContainer
    .querySelectorAll('.category')
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          selectedCategory =
            button.dataset.category;

          renderCategories();

          renderProducts();

        }
      );

    });

}


function renderProducts() {

  const filteredProducts =
    selectedCategory === 'Todos'
      ? products
      : products.filter(
          product =>
            product.category === selectedCategory
        );


  productsContainer.innerHTML =
    filteredProducts.map(product => `

      <article class="product-card">

        <div
          class="product-image"
          aria-hidden="true"
        >
          ${product.emoji}
        </div>


        <div class="product-info">

          <span class="product-category">
            ${product.category}
          </span>

          <h3>
            ${product.name}
          </h3>

          <p>
            ${product.description}
          </p>


          <div class="product-bottom">

            <strong>
              ${formatPrice(product.price)}
            </strong>

            <button
              class="add-product"
              data-id="${product.id}"
            >
              Adicionar
            </button>

          </div>

        </div>

      </article>

    `).join('');


  productsContainer
    .querySelectorAll('.add-product')
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          addToCart(
            Number(button.dataset.id)
          );

        }
      );

    });

}


function addToCart(productId) {

  const existing =
    cart.find(
      item => item.id === productId
    );


  if (existing) {

    existing.quantity += 1;

  } else {

    const product =
      products.find(
        item => item.id === productId
      );


    if (!product) return;


    cart.push({
      ...product,
      quantity: 1
    });

  }


  renderCart();

  openCart();

}


function updateQuantity(
  productId,
  change
) {

  const item =
    cart.find(
      product => product.id === productId
    );


  if (!item) return;


  item.quantity += change;


  if (item.quantity <= 0) {

    cart =
      cart.filter(
        product => product.id !== productId
      );

  }


  renderCart();

}


function getCartTotal() {

  return cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

}


function getCartCount() {

  return cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

}


function renderCart() {

  const count =
    getCartCount();


  cartCount.textContent =
    count;


  cartTotal.textContent =
    formatPrice(
      getCartTotal()
    );


  if (!cart.length) {

    cartItemsContainer.innerHTML = `

      <div class="empty-cart">

        <div>🛒</div>

        <p>
          Seu carrinho está vazio.
        </p>

        <span>
          Adicione alguns produtos para testar o site.
        </span>

      </div>

    `;

    return;

  }


  cartItemsContainer.innerHTML =
    cart.map(item => `

      <div class="cart-item">

        <div class="cart-item-icon">
          ${item.emoji}
        </div>


        <div class="cart-item-info">

          <strong>
            ${item.name}
          </strong>

          <span>
            ${formatPrice(item.price)}
          </span>


          <div class="quantity">

            <button
              data-action="decrease"
              data-id="${item.id}"
              aria-label="Diminuir quantidade"
            >
              −
            </button>

            <b>
              ${item.quantity}
            </b>

            <button
              data-action="increase"
              data-id="${item.id}"
              aria-label="Aumentar quantidade"
            >
              +
            </button>

          </div>

        </div>


        <strong>
          ${formatPrice(
            item.price *
            item.quantity
          )}
        </strong>

      </div>

    `).join('');


  cartItemsContainer
    .querySelectorAll('[data-action]')
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          const id =
            Number(
              button.dataset.id
            );


          const change =
            button.dataset.action === 'increase'
              ? 1
              : -1;


          updateQuantity(
            id,
            change
          );

        }
      );

    });

}


function openCart() {

  cartElement.classList.add('open');

  cartOverlay.classList.add('active');

}


function closeCart() {

  cartElement.classList.remove('open');

  cartOverlay.classList.remove('active');

}


function checkout() {

  let message =
    WHATSAPP_MESSAGE;


  if (cart.length) {

    const items =
      cart.map(item =>
        `• ${item.quantity}x ${item.name} — ${formatPrice(item.price * item.quantity)}`
      ).join('\n');


    message +=
      `\n\nItens selecionados no site demonstrativo:\n${items}\n\nTotal demonstrativo: ${formatPrice(getCartTotal())}`;

  }


  window.open(
    whatsappUrl(message),
    '_blank',
    'noopener,noreferrer'
  );

}


document
  .getElementById('openCart')
  .addEventListener(
    'click',
    openCart
  );


document
  .getElementById('closeCart')
  .addEventListener(
    'click',
    closeCart
  );


cartOverlay.addEventListener(
  'click',
  closeCart
);


document
  .getElementById('checkout')
  .addEventListener(
    'click',
    checkout
  );


renderCategories();

renderProducts();

renderCart();
