const foodItems = [
    { name: "Pollo a la Brasa", desc: "Speziato e croccante", price: "€ 15.00", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=400" },
    { 
        name: "Arroz de Mariscos", 
        desc: "Frutti di mare freschi", 
        price: "€ 18.00", 
        img: "arroz de mariscoz.avif" 
    },
    { name: "Ceviche Clásico", desc: "Pescado, limone e aji", price: "€ 16.50", img: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?q=80&w=400" },
    { 
        name: "Leche de Tigre", 
        desc: "L'elisir della vita", 
        price: "€ 9.00", 
        img: "leche de tigre.jpg" 
    },
    { name: "Chuleta Mixta", desc: "Carni pregiate alla griglia", price: "€ 22.00", img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=400" },
    { 
        name: "Arroz Chaufa", 
        desc: "Fusion Perù-Cina", 
        price: "€ 14.00", 
        img: "chaufa.avif" 
    }
];

const drinkItems = [
    { name: "Pisco Sour", desc: "Il re del Perù", price: "€ 10.00", img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=400" },
    { name: "Caipirinha", desc: "Lime e freschezza", price: "€ 9.00", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400" },
    { name: "Aperol Spritz", desc: "L'eleganza italiana", price: "€ 8.50", img: "https://images.unsplash.com/photo-1560508180-03f285f67ded?q=80&w=400" },
    { name: "Cerveza Fresca", desc: "Cusqueña artigianale", price: "€ 5.00", img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=400" }
];

const dessertItems = [
    { name: "Torta de Chocolate", desc: "Cacao puro 70%", price: "€ 7.00", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400" },
    { name: "Torta 3 Leches", desc: "Dolce e cremosa", price: "€ 6.50", img: "https://images.unsplash.com/photo-1464347744102-11db6282f854?q=80&w=400" },
    { name: "Torta Helada", desc: "Tradizione rinfrescante", price: "€ 6.00", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=400" }
];

function createCard(item) {
    return `
        <div class="modern-card reveal">
            <div class="product-img-container">
                <img src="${item.img}" class="prod-img" alt="${item.name}">
            </div>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="price">${item.price}</div>
        </div>
    `;
}

function init() {
    document.getElementById('food-grid').innerHTML = foodItems.map(item => createCard(item)).join('');
    document.getElementById('drinks-grid').innerHTML = drinkItems.map(item => createCard(item)).join('');
    document.getElementById('desserts-grid').innerHTML = dessertItems.map(item => createCard(item)).join('');

    ScrollReveal().reveal('.reveal', {
        distance: '50px',
        duration: 1000,
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        interval: 100,
        origin: 'bottom'
    });
}

document.addEventListener('DOMContentLoaded', init);