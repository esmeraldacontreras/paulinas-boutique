// =====================================
// PAULINA'S - INVENTARIO DE PRODUCTOS
// =====================================

const productos = [

    // BLUSAS

    {
        nombre: "Blusa amarilla",
        categoria: "blusas",
        imagen: "images/blusa1.jpg",
        precio: 15,
        tallas: "S"
    },

    {
        nombre: "Blusa coral",
        categoria: "blusas",
        imagen: "images/blusa2.jpg",
        precio: 15,
        tallas: "M"
    },

    {
        nombre: "Blusa beige",
        categoria: "blusas",
        imagen: "images/blusa3.jpg",
        precio: 15,
        tallas: "XL"
    },

    // JEANS

    {
        nombre: "Skinny Jean",
        categoria: "pantalones",
        imagen: "images/jeans3.jpg",
        precio: 20,
        tallas: "5/6 y 9/10"
    },

    {
        nombre: "Jean acampanado",
        categoria: "pantalones",
        imagen: "images/jeans1.jpg",
        precio: 25,
        tallas: "5/6 y 9/10"
    },

    // PALAZZOS

    {
        nombre: "Palazzo estampado 1",
        categoria: "pantalones",
        imagen: "images/pantalon1.jpg",
        precio: 10,
        tallas: "L y XL"
    },

    {
        nombre: "Palazzo estampado 2",
        categoria: "pantalones",
        imagen: "images/pantalon2.jpg",
        precio: 10,
        tallas: "L y XL"
    },

    {
        nombre: "Palazzo estampado 3",
        categoria: "pantalones",
        imagen: "images/pantalon3.jpg",
        precio: 10,
        tallas: "L y XL"
    },

    {
        nombre: "Palazzo estampado 4",
        categoria: "pantalones",
        imagen: "images/pantalon4.jpg",
        precio: 10,
        tallas: "L y XL"
    },

    {
        nombre: "Palazzo estampado 5",
        categoria: "pantalones",
        imagen: "images/pantalon5.jpg",
        precio: 10,
        tallas: "L y XL"
    },

    {
        nombre: "Palazzo estampado 6",
        categoria: "pantalones",
        imagen: "images/pantalon6.jpg",
        precio: 10,
        tallas: "L y XL"
    }

];

// =====================================
// MOSTRAR PRODUCTOS
// =====================================

const contenedor = document.getElementById("lista-productos");

function mostrarProductos(categoria = "todos") {

    contenedor.innerHTML = "";

    const filtrados = productos.filter(producto =>
        categoria === "todos" ||
        producto.categoria === categoria
    );

    filtrados.forEach(producto => {

        const tarjeta = document.createElement("article");

        tarjeta.className = "producto";

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">

            <h3>${producto.nombre}</h3>

            <p class="precio">
                $${producto.precio.toFixed(2)}
            </p>

            <p>Tallas: ${producto.tallas}</p>

            <p class="disponibilidad">Disponible</p>

            <a
                href="https://wa.me/50364316058?text=${encodeURIComponent("Hola, me interesa " + producto.nombre)}"
                class="boton-whatsapp"
                target="_blank"
                rel="noopener noreferrer">
                Consultar por WhatsApp
            </a>
        `;

        contenedor.appendChild(tarjeta);

    });

}

// =====================================
// FILTROS DE CATEGORÍAS
// =====================================

const botones = document.querySelectorAll(".categoria");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        botones.forEach(b =>
            b.classList.remove("activa")
        );

        boton.classList.add("activa");

        mostrarProductos(boton.dataset.categoria);

    });

});

// CARGAR CATÁLOGO

mostrarProductos();

