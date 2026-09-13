// ===============================
// IG SITES - PASTELARIA DEMO
// Produtos + imagens + carrinho
// ===============================


// ===============================
// WHATSAPP DA IG SITES
// ===============================

const WHATSAPP_NUMBER = '5541995229213';


// ===============================
// PRODUTOS
// ===============================

const products = [

    // PASTÉIS

    ['pastel', 'Pastel de Carne',
        'Carne temperada, cebola e azeitona.', 12.9, '🥩'],

    ['pastel', 'Pastel de Queijo',
        'Queijo muçarela derretido e orégano.', 11.9, '🧀'],

    ['pastel', 'Pastel de Frango com Catupiry',
        'Frango desfiado, catupiry e temperos.', 13.9, '🍗'],

    ['pastel', 'Pastel de Pizza',
        'Muçarela, presunto, tomate e orégano.', 13.5, '🍕'],

    ['pastel', 'Pastel de Calabresa',
        'Calabresa, muçarela e cebola.', 13.9, '🌭'],

    ['pastel', 'Pastel de Carne com Queijo',
        'Carne temperada e muçarela.', 14.5, '🥩'],

    ['pastel', 'Pastel de Palmito',
        'Palmito cremoso, milho e ervas.', 13.5, '🌽'],

    ['pastel', 'Pastel de Bacon com Queijo',
        'Bacon crocante e muçarela.', 14.9, '🥓'],

    ['pastel', 'Pastel de Chocolate',
        'Chocolate cremoso e açúcar.', 12.5, '🍫'],

    ['pastel', 'Pastel Romeu e Julieta',
        'Goiabada cremosa e queijo.', 12.5, '🍓'],


    // LANCHES

    ['lanche', 'X-Burger',
        'Hambúrguer, queijo, alface, tomate e molho especial.', 18.9, '🍔'],

    ['lanche', 'X-Salada',
        'Hambúrguer, queijo, alface, tomate e maionese.', 20.9, '🍔'],

    ['lanche', 'X-Bacon',
        'Hambúrguer, queijo, bacon e molho da casa.', 23.9, '🥓'],

    ['lanche', 'X-Frango',
        'Frango grelhado, queijo, alface e maionese.', 21.9, '🍗'],

    ['lanche', 'Misto Quente',
        'Presunto e queijo na chapa.', 12.9, '🥪'],


    // PORÇÕES

    ['porcao', 'Batata Frita P',
        'Batata crocante com molho especial.', 15.9, '🍟'],

    ['porcao', 'Batata com Cheddar e Bacon',
        'Batata frita, cheddar cremoso e bacon.', 24.9, '🍟'],

    ['porcao', 'Nuggets',
        '10 unidades crocantes com molho.', 19.9, '🍗'],

    ['porcao', 'Calabresa Acebolada',
        'Calabresa na chapa com cebola.', 25.9, '🌭'],

    ['porcao', 'Anéis de Cebola',
        'Porção crocante com molho da casa.', 18.9, '🧅'],


    // BEBIDAS

    ['bebida', 'Coca-Cola Lata 350ml',
        'Refrigerante gelado.', 6.0, '🥤'],

    ['bebida', 'Coca-Cola Zero 350ml',
        'Refrigerante gelado sem açúcar.', 6.0, '🥤'],

    ['bebida', 'Guaraná Antarctica 350ml',
        'Refrigerante gelado.', 6.0, '🥤'],

    ['bebida', 'Fanta Laranja 350ml',
        'Refrigerante gelado.', 6.0, '🥤'],

    ['bebida', 'Sprite 350ml',
        'Refrigerante gelado.', 6.0, '🥤'],

    ['bebida', 'Água Mineral 500ml',
        'Com ou sem gás.', 4.0, '💧'],

    ['bebida', 'Suco de Laranja 300ml',
        'Suco natural preparado na hora.', 8.5, '🍊'],

    ['bebida', 'Suco de Maracujá 300ml',
        'Suco natural e refrescante.', 8.5, '🥭'],

    ['bebida', 'H2OH! Limão 500ml',
        'Bebida leve e refrescante.', 7.0, '🍋'],

    ['bebida', 'Chá Gelado 300ml',
        'Chá gelado com limão.', 7.5, '🧊']

];


// ===============================
// GERADOR DE IMAGENS
// ===============================

function createImage(emoji, name) {

    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="600"
         height="420"
         viewBox="0 0 600 420">

        <defs>

            <linearGradient
                id="bg"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
            >

                <stop
                    offset="0%"
                    stop-color="#fff4d6"
                />

                <stop
                    offset="100%"
                    stop-color="#f3c56b"
                />

            </linearGradient>

        </defs>


        <rect
            width="600"
            height="420"
            fill="url(#bg)"
        />


        <circle
            cx="300"
            cy="180"
            r="145"
            fill="#ffffff"
            opacity=".45"
        />


        <text
            x="300"
            y="220"
            text-anchor="middle"
            font-size="110"
        >
            ${emoji}
        </text>


        <rect
            x="28"
            y="335"
            width="544"
            height="54"
            rx="27"
            fill="#211d19"
            opacity=".9"
        />


        <text
            x="300"
            y="370"
            text-anchor="middle"
            fill="#ffffff"
            font-size="21"
            font-weight="700"
            font-family="Arial, sans-serif"
        >
            ${name}
        </text>

    </svg>
    `;


    return 'data:image/svg+xml;charset=UTF-8,' +
        encodeURIComponent(svg);

}


// ===============================
// CRIAR IMAGENS
// ===============================

const img = products.map(product => {

    return createImage(
        product[4],
        product[1]
    );

});


// ===============================
// CARRINHO
// ===============================

let cart = [];
let cat = 'all';


// ===============================
// FORMATAÇÃO DE PREÇO
// ===============================

function money(value) {

    return value.toLocaleString(
        'pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }
    );

}


// ===============================
// MOSTRAR PRODUTOS
// ===============================

function render() {

    const searchInput =
        document.getElementById('search');


    const q = searchInput
        ? searchInput.value.toLowerCase()
        : '';


    const list = products
        .map((product, index) => ({
            product,
            index
        }))

        .filter(item => {

            const categoryOK =
                cat === 'all' ||
                item.product[0] === cat;


            const searchOK =
                item.product[1]
                    .toLowerCase()
                    .includes(q) ||

                item.product[2]
                    .toLowerCase()
                    .includes(q);


            return categoryOK && searchOK;

        });


    const grid =
        document.getElementById('grid');


    if (!list.length) {

        grid.innerHTML = `

            <div
                style="
                    grid-column:1/-1;
                    text-align:center;
                    padding:40px;
                    color:#777;
                "
            >

                <div style="font-size:40px;">
                    🔎
                </div>

                <h3>
                    Nenhum produto encontrado
                </h3>

                <p>
                    Tente buscar outro produto.
                </p>

            </div>

        `;

        return;
    }


    grid.innerHTML = list
        .map(item => {

            const p = item.product;
            const i = item.index;


            return `

                <article class="card">

                    <img
                        src="${img[i]}"
                        alt="${p[1]}"
                    >


                    <div class="card-body">

                        <h3>
                            ${p[1]}
                        </h3>


                        <div class="desc">
                            ${p[2]}
                        </div>


                        <div class="price">
                            ${money(p[3])}
                        </div>


                        <button
                            class="add"
                            onclick="add(${i})"
                        >
                            + Adicionar
                        </button>

                    </div>

                </article>

            `;

        })
        .join('');

}


// ===============================
// ADICIONAR AO CARRINHO
// ===============================

function add(index) {

    cart.push(
        products[index]
    );


    updateCart();


    document
        .getElementById('cart')
        .classList
        .add('show');

}


// ===============================
// ATUALIZAR CARRINHO
// ===============================

function updateCart() {

    const count =
        document.getElementById('count');


    const cartItems =
        document.getElementById('cartItems');


    const total =
        document.getElementById('total');


    count.textContent =
        cart.length;


    if (!cart.length) {

        cartItems.innerHTML = `

            <div
                style="
                    color:#777;
                    font-size:13px;
                "
            >
                Seu carrinho está vazio.
            </div>

        `;

    } else {

        cartItems.innerHTML =
            cart
                .map(product => {

                    return `

                        <div class="cart-row">

                            <span>
                                ${product[1]}
                            </span>

                            <b>
                                ${money(product[3])}
                            </b>

                        </div>

                    `;

                })
                .join('');

    }


    const totalValue =
        cart.reduce(
            (sum, product) =>
                sum + product[3],
            0
        );


    total.textContent =
        money(totalValue);

}


// ===============================
// ABRIR / FECHAR CARRINHO
// ===============================

function toggleCart() {

    document
        .getElementById('cart')
        .classList
        .toggle('show');

}


// ===============================
// FILTRO DE CATEGORIA
// ===============================

function filterCat(
    category,
    button
) {

    cat = category;


    document
        .querySelectorAll('.tabs button')
        .forEach(btn => {

            btn.classList.remove(
                'active'
            );

        });


    button.classList.add(
        'active'
    );


    render();

}


// ===============================
// FINALIZAR / FALAR COM IG SITES
// ===============================

function checkout() {

    if (!cart.length) {

        const message =
            `Olá! Vi o site demonstrativo da IG Sites e gostaria de saber mais sobre a criação de um site para minha empresa.

IG Sites
UM SITE COM A CARA DO SEU NEGÓCIO`;


        const whatsapp =
            'https://wa.me/' +
            WHATSAPP_NUMBER +
            '?text=' +
            encodeURIComponent(message);


        window.open(
            whatsapp,
            '_blank'
        );


        return;
    }


    const items =
        cart
            .map(product => {

                return `• ${product[1]} — ${money(product[3])}`;

            })
            .join('\n');


    const total =
        cart.reduce(
            (sum, product) =>
                sum + product[3],
            0
        );


    const message =
        `Olá! Vi o site demonstrativo da IG Sites e gostaria de saber mais sobre a criação de um site para minha empresa.

Produtos selecionados no exemplo:

${items}

Total demonstrativo: ${money(total)}

IG Sites
UM SITE COM A CARA DO SEU NEGÓCIO`;


    const whatsapp =
        'https://wa.me/' +
        WHATSAPP_NUMBER +
        '?text=' +
        encodeURIComponent(message);


    window.open(
        whatsapp,
        '_blank'
    );

}


// ===============================
// BUSCA
// ===============================

const search =
    document.getElementById('search');


if (search) {

    search.addEventListener(
        'input',
        render
    );

}


// ===============================
// INICIALIZAÇÃO
// ===============================

render();

updateCart();
