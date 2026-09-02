const bannerAreas = document.querySelectorAll(".banner");

fetch("./database.json")

.then(response => response.json())

.then(data => {

    const companyLogo = document.querySelector(".company-logo");

    companyLogo.src = data.companyLogo.image;


    const cart = data.svg.find(item => item.id === 3);

    const cartSvg = document.querySelector(".cart-svg");

    cartSvg.src = cart.src;


    const searchSvgArea = document.querySelector(".search-icon");

    const searchIcon = data.svg.find(item => item.id === 2);

    searchSvgArea.src = searchIcon.src;


    data.banners.forEach((banner, index) => {
        const bannerArea = bannerAreas[index];

        bannerArea.src = Object.values(banner)[1];

    });

    const inventoryBtn = document.querySelector(".add-to-cart");
    let inventoryPopup = document.querySelector(".inventory-popup");
    inventoryBtn.addEventListener("click", ()=> {
        let popupActive =inventoryPopup.classList.add("in-active")
        document.body.style.overflow = "hidden";

    })
    // ===============================
    // SORT ITEMS
    // ===============================

    let cardArea = document.querySelector(".product-hero-item");

    data.sortItems.forEach((sortItem) => {

        let card = document.createElement("div");

        card.className = "product-hero-card";


        let imgArea = document.createElement("img");

        imgArea.src = sortItem.image;


        let titleArea = document.createElement("p");

        titleArea.className = "title";

        titleArea.textContent = sortItem.title;


        cardArea.appendChild(card);

        card.append(imgArea, titleArea);

    });


    // ===============================
    // COLLECTOR 1
    // ===============================

    let firstCollectorArea =
        document.querySelector(".first-collector-img");

    let firstCollectorImage =
        data.collectors.find(item => item.id === 2);

    firstCollectorArea.src =
        firstCollectorImage.src;


    // ===============================
    // TWO SIDE CARDS
    // ===============================

    let twoSideCardsArea =
        document.querySelector(".pc-two-side-items");


    data.twoSides.forEach(twoSide => {

        let tsc = document.createElement("div");

        tsc.className = "two-side-card";


        let titleWrapper =
            document.createElement("div");

        titleWrapper.className =
            "title-wrapper";


        let imgAreaTSC =
            document.createElement("img");

        imgAreaTSC.src =
            twoSide.img;


        let titleAreaTSC =
            document.createElement("p");

        titleAreaTSC.textContent =
            twoSide.title;


        let specTitleAreaTSC =
            document.createElement("strong");

        specTitleAreaTSC.className =
            "spec-title";

        specTitleAreaTSC.textContent =
            twoSide.specTitle;


        twoSideCardsArea.appendChild(tsc);

        tsc.append(
            imgAreaTSC,
            titleWrapper
        );

        titleWrapper.append(
            titleAreaTSC,
            specTitleAreaTSC
        );

    });


    // ===============================
    // NEW PRODUCTS
    // ===============================

    let newProductsItemsArea =
        document.querySelector(".new-products-items");


    data.newProducts.forEach(newProduct => {

        let newProductCard =
            document.createElement("div");

        newProductCard.className =
            "new-product-card products";


        let newProductName =
            document.createElement("p");

        newProductName.className =
            "new-product-name";

        newProductName.textContent =
            newProduct.name;


        let newProductPrice =
            document.createElement("p");

        newProductPrice.className =
            "new-product-price";

        newProductPrice.textContent =
            newProduct.price.toLocaleString("fa-IR")
            + " تومان";


        let newProductImage =
            document.createElement("img");

        newProductImage.className =
            "new-product-image";

        newProductImage.src =
            newProduct.image;


        let newProductAddtocart =
            document.createElement("img");

        newProductAddtocart.className =
            "add-to-cart-img";

        newProductAddtocart.src =
            data.svg.find(item => item.id === 4).src;


        newProductsItemsArea.appendChild(
            newProductCard
        );

        newProductCard.append(
            newProductImage,
            newProductPrice,
            newProductName,
            newProductAddtocart
        );

    });


    // ===============================
    // COLLECTOR 2
    // ===============================

    let bannerThirdArea =
        document.querySelector(".second-collector-img");

    let bannetThirdImage =
        data.collectors.find(item => item.id === 1);

    bannerThirdArea.src =
        bannetThirdImage.src;


    // ===============================
    // MODDED CASES
    // ===============================

    let moddedCasesArea =
        document.querySelector(".custom-builds-items");


    data.modedItems.forEach(moddedItem => {

        let moddedCasesCards =
            document.createElement("div");

        moddedCasesCards.className =
            "modded-case-card products";


        let moddedCaseImg =
            document.createElement("img");

        moddedCaseImg.src =
            moddedItem.image;

        moddedCaseImg.className =
            "modded-case-img";


        let moddedCasePrice =
            document.createElement("p");

        moddedCasePrice.textContent =
            moddedItem.price.toLocaleString("fa-IR")
            + " تومان";

        moddedCasePrice.className =
            "modded-case-price";


        let moddedCaseName =
            document.createElement("p");

        moddedCaseName.textContent =
            moddedItem.name;

        moddedCaseName.className =
            "modded-case-name";


        let moddedCaseAddToCard =
            document.createElement("img");

        moddedCaseAddToCard.className =
            "add-to-cart-img";

        moddedCaseAddToCard.src =
            data.svg.find(item => item.id === 4).src;


        moddedCasesArea.appendChild(
            moddedCasesCards
        );

        moddedCasesCards.append(
            moddedCaseImg,
            moddedCasePrice,
            moddedCaseName,
            moddedCaseAddToCard
        );

    });


    // ===============================
    // COLLECTOR 3
    // ===============================

    let thirdCollectorArea =
        document.querySelector(".third-collector-img");

    let thirdCollectorImage =
        data.collectors.find(item => item.id === 4);

    thirdCollectorArea.src =
        thirdCollectorImage.src;


    // ===============================
    // MONITORS
    // ===============================

    let monitorItemsArea =
        document.querySelector(".monitor-products-items");


    data.monitorsItems.forEach(monitor => {

        let monitorItemscard =
            document.createElement("div");

        monitorItemscard.className =
            "monitor-item-card products";
            


        let monitorItemImg =
            document.createElement("img");

        monitorItemImg.src =
            monitor.image;

        monitorItemImg.className =
            "monitor-item-img";


        let monitorItemsPrice =
            document.createElement("p");

        monitorItemsPrice.textContent =
            monitor.price.toLocaleString("fa-IR")
            + " تومان";

        monitorItemsPrice.className =
            "monitor-item-price";


        let monitorItemName =
            document.createElement("p");

        monitorItemName.textContent =
            monitor.name;

        monitorItemName.className =
            "monitor-item-name";


        let monitorItemsAddToCard =
            document.createElement("img");

        monitorItemsAddToCard.className =
            "add-to-cart-img";

        monitorItemsAddToCard.src =
            data.svg.find(item => item.id === 4).src;


        monitorItemsArea.appendChild(
            monitorItemscard
        );

        monitorItemscard.append(
            monitorItemImg,
            monitorItemsPrice,
            monitorItemName,
            monitorItemsAddToCard
        );


    });
let searchBar = document.querySelector(".search-bar-input");
let products = document.querySelectorAll(
    ".new-product-card, .modded-case-card, .monitor-item-card"
);
let searchbtn = document.querySelector(".search-icon");
let searchbarPopup = document.querySelector(".search-bar-popup");
searchbtn.addEventListener("click", () => {
    let searchBarValue = searchBar.value.toLowerCase().trim()
    searchbarPopup.innerHTML = "";
    let found = false
    if(searchBarValue === ""){
        searchbarPopup.classList.remove("active")
        searchbarPopup.style.display = "none";
        return;
    }

    products.forEach(product => {
        let name = product.querySelector(
    ".new-product-name, .modded-case-name, .monitor-item-name");

        if (name){
            let text = name.textContent.toLowerCase()
            if(text.includes(searchBarValue)){
                found = true
                let result = document.createElement("div")
                result.textContent = name.textContent
                searchbarPopup.appendChild(result)

                result.addEventListener("click", ()=>{

                    product.classList.add("highlight-product");
                        setTimeout(()=>{
                        product.classList.remove("highlight-product");
                        },4500);

            product.scrollIntoView({
                behavior: "smooth",
                block: "center"
                
           });


    searchbarPopup.style.display = "none";



});
                
        }
    }
})
if (!found){
    let notFound = document.createElement("div")
    notFound.textContent = ` هیج محصولی با اسم  "${searchBar.value}" پیدا نشد  `
    searchbarPopup.appendChild(notFound)
}
    if(searchbarPopup.children.length > 0){

        searchbarPopup.style.display = "block";

    }

    else{

        searchbarPopup.style.display = "none";

    }
})

const inventoryPopupBtn = document.querySelector(".shopping-cart");
let inventory = []
inventoryPopupBtn.addEventListener("click", () => {

    let itemContainerArea =
        document.querySelector(".inventory-items");

    itemContainerArea.innerHTML = "";

    inventory.forEach(item => {

        let itemContainer =
            document.createElement("div");

        itemContainer.className =
            "inventory-item-container";

        let itemName =
            document.createElement("p");

        itemName.className =
            "inventory-item-name";

        itemName.textContent =
            `اسم محصول : ${item.productNameFI}`;

        let itemPrice =
            document.createElement("p");

        itemPrice.className =
            "inventory-item-price";

        itemPrice.textContent =
            item.productPriceFI;

        let itemNumber =
            document.createElement("p");

        itemNumber.className =
            "inventory-item-number";

        itemNumber.textContent =
            `محصول شماره ${item.productNumber}`;

        

        itemContainerArea.appendChild(itemContainer);

        itemContainer.append(
            itemNumber,
            itemName,
            itemPrice
        );
    });
    let closepopbtn = document.querySelector(".close-btn");
    closepopbtn.addEventListener("click" , ()=>{
        inventoryPopup.classList.remove("in-active")
        document.body.style.overflow = ""
    })
});

// =====================================================
// FLYING ADD TO CART
// =====================================================

let quantity = 0;
const cartIcon = document.querySelector(".cart-svg");

document.querySelectorAll(".add-to-cart-img").forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.closest(
            ".new-product-card, .modded-case-card, .monitor-item-card"
        );

        quantity++
        console.log(inventory);
        const cartquantity = document.querySelector(".cart-items-quantity");
        
        cartquantity.textContent = quantity

        const productImg = card.querySelector(
            ".new-product-image, .modded-case-img, .monitor-item-img"
        );
        const productName = card.querySelector(
            ".new-product-name, .modded-case-name, .monitor-item-name"
        );
        const productPrice = card.querySelector(
            ".new-product-price, .modded-case-price, .monitor-item-price"
        );

        const productNameFI = productName.textContent;
        const productPriceFI = productPrice.textContent;
        const productNumber = quantity

        

            

        inventory.push({productNumber, productNameFI, productPriceFI});
        const start = productImg.getBoundingClientRect();
        const end = cartIcon.getBoundingClientRect();

        const clone = productImg.cloneNode(true);

        clone.style.position = "fixed";
        clone.style.left = start.left + "px";
        clone.style.top = start.top + "px";
        clone.style.width = start.width + "px";
        clone.style.height = start.height + "px";
        clone.style.zIndex = "9999";
        clone.style.pointerEvents = "none";
        clone.style.objectFit = "contain";
        clone.style.transition =
    "   all 15.2s cubic-bezier(.2,.8,.2,1)";

        document.body.appendChild(clone);

requestAnimationFrame(() => {

    clone.style.left =
        end.left + end.width / 2 - start.width / 4 + "px";

    clone.style.top =
        end.top + end.height / 2 - start.height / 4 + "px";

    clone.style.width = start.width / 2 + "px";
    clone.style.height = start.height / 2 + "px";

    clone.style.transform = "rotate(10deg)";
});

        setTimeout(() => {
            clone.remove();
        }, 1200);

    });

});
    
    // ===============================
    // FOOTER LOGO
    // ===============================

    let logoneeded =
        document.querySelector(".company-logo-footer");

    logoneeded.src =
        companyLogo.src;


    // =====================================================
    // TWO SIDE CARD MOUSE EFFECT
    // =====================================================

    const twoSideCards =
        document.querySelectorAll(".two-side-card");


    twoSideCards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;


            card.style.setProperty(
                "--mouse-x",
                `${x}px`
            );

            card.style.setProperty(
                "--mouse-y",
                `${y}px`
            );


            card.classList.add("card-hover");

        });


        card.addEventListener("mouseleave", () => {

            card.classList.remove("card-hover");

        });

    });

});


// =====================================================
// SLIDER
// =====================================================

let currentSlide = 0;

let dots =
    document.querySelectorAll(".dot");


function showSlide(index) {

    bannerAreas.forEach(
        banner => banner.classList.remove("active")
    );

    dots.forEach(
        dot => dot.classList.remove("active")
    );


    bannerAreas[index].classList.add("active");

    dots[index].classList.add("active");

}


let slideInterval;


function startSlider() {

    slideInterval = setInterval(() => {

        currentSlide++;


        if (
            currentSlide >= bannerAreas.length
        ) {

            currentSlide = 0;

        }


        showSlide(currentSlide);

    }, 3000);

}


startSlider();


dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

        clearInterval(slideInterval);

        startSlider();

    });

});

// =====================================================
// DIGITAL CANVAS
// =====================================================

const canvas =
    document.getElementById("digitalCanvas");

const ctx =
    canvas.getContext("2d");


let width;
let height;


const mouse = {

    x: null,
    y: null

};


const nodes = [];

const particles = [];


const NODE_COUNT = 45;

const PARTICLE_COUNT = 120;

const CONNECTION_DISTANCE = 160;


// =====================================================
// CANVAS RESIZE
// =====================================================

function resizeCanvas() {

    const dpr =
        window.devicePixelRatio || 1;


    width =
        window.innerWidth;

    height =
        window.innerHeight;


    canvas.width =
        width * dpr;

    canvas.height =
        height * dpr;


    canvas.style.width =
        width + "px";

    canvas.style.height =
        height + "px";


    ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


// =====================================================
// MOUSE
// =====================================================

window.addEventListener(
    "mousemove",
    (e) => {

        mouse.x =
            e.clientX;

        mouse.y =
            e.clientY;

    }
);


window.addEventListener(
    "mouseleave",
    () => {

        mouse.x = null;

        mouse.y = null;

    }
);


// =====================================================
// CREATE NODES
// =====================================================

for (
    let i = 0;
    i < NODE_COUNT;
    i++
) {

    nodes.push({

        x:
            Math.random() *
            window.innerWidth,

        y:
            Math.random() *
            window.innerHeight,

        vx:
            (Math.random() - 0.5)
            * 0.7,

        vy:
            (Math.random() - 0.5)
            * 0.7,

        radius:
            Math.random() * 2 + 1,

        pulse:
            Math.random() *
            Math.PI *
            2

    });

}


// =====================================================
// CREATE PARTICLES
// =====================================================

for (
    let i = 0;
    i < PARTICLE_COUNT;
    i++
) {

    particles.push({

        x:
            Math.random() *
            window.innerWidth,

        y:
            Math.random() *
            window.innerHeight,

        size:
            Math.random() * 1.5 + 0.3,

        speed:
            Math.random() * 0.35 + 0.05,

        alpha:
            Math.random() * 0.5 + 0.1

    });

}


// =====================================================
// DRAW PARTICLES
// =====================================================

function drawParticles() {

    particles.forEach((particle) => {

        particle.y -=
            particle.speed;


        if (particle.y < 0) {

            particle.y = height;

            particle.x =
                Math.random() * width;

        }


        ctx.beginPath();


        ctx.fillStyle =
            `rgba(
                160,
                100,
                255,
                ${particle.alpha}
            )`;


        ctx.arc(

            particle.x,

            particle.y,

            particle.size,

            0,

            Math.PI * 2

        );


        ctx.fill();

    });

}


// =====================================================
// UPDATE NODES
// =====================================================

function updateNodes() {

    nodes.forEach((node) => {

        node.x += node.vx;

        node.y += node.vy;

        node.pulse += 0.03;


        // =========================
        // BOUNDARY
        // =========================

        if (node.x <= 0) {

            node.x = 0;

            node.vx =
                Math.abs(node.vx);

        }


        if (node.x >= width) {

            node.x = width;

            node.vx =
                -Math.abs(node.vx);

        }


        if (node.y <= 0) {

            node.y = 0;

            node.vy =
                Math.abs(node.vy);

        }


        if (node.y >= height) {

            node.y = height;

            node.vy =
                -Math.abs(node.vy);

        }


        // =========================
        // MOUSE
        // =========================

        if (mouse.x !== null) {

            const dx =
                node.x - mouse.x;

            const dy =
                node.y - mouse.y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            const radius = 180;


            if (distance < radius) {

                const force =
                    (radius - distance)
                    / radius;


                node.x +=
                    dx *
                    force *
                    0.015;


                node.y +=
                    dy *
                    force *
                    0.015;

            }

        }


        // جلوگیری از خارج شدن Node
        node.x =
            Math.max(
                0,
                Math.min(width, node.x)
            );


        node.y =
            Math.max(
                0,
                Math.min(height, node.y)
            );

    });

}


// =====================================================
// DRAW CONNECTIONS
// =====================================================

function drawConnections() {

    for (
        let i = 0;
        i < nodes.length;
        i++
    ) {

        for (
            let j = i + 1;
            j < nodes.length;
            j++
        ) {

            const nodeA =
                nodes[i];

            const nodeB =
                nodes[j];


            const dx =
                nodeA.x - nodeB.x;

            const dy =
                nodeA.y - nodeB.y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance <
                CONNECTION_DISTANCE
            ) {

                const opacity =
                    1 -
                    distance /
                    CONNECTION_DISTANCE;


                ctx.beginPath();


                ctx.moveTo(
                    nodeA.x,
                    nodeA.y
                );


                ctx.lineTo(
                    nodeB.x,
                    nodeB.y
                );


                ctx.strokeStyle =
                    `rgba(
                        145,
                        85,
                        255,
                        ${opacity * 1}
                    )`;


                ctx.lineWidth = 0.7;

                ctx.stroke();

            }

        }

    }

}


// =====================================================
// DRAW NODES
// =====================================================

function drawNodes() {

    nodes.forEach((node) => {

        const pulse =
            Math.sin(node.pulse) * 2;


        const gradient =
            ctx.createRadialGradient(

                node.x,
                node.y,

                0,

                node.x,
                node.y,

                25 + pulse

            );


        gradient.addColorStop(
            0,
            "rgba(180, 120, 255, 0.8)"
        );


        gradient.addColorStop(
            0.35,
            "rgba(145, 85, 255, 0.25)"
        );


        gradient.addColorStop(
            1,
            "rgba(145, 85, 255, 0)"
        );


        ctx.beginPath();


        ctx.fillStyle =
            gradient;


        ctx.arc(

            node.x,

            node.y,

            25 + pulse,

            0,

            Math.PI * 2

        );


        ctx.fill();


        // CORE

        ctx.beginPath();


        ctx.fillStyle =
            "#ffffff";


        ctx.arc(

            node.x,

            node.y,

            node.radius,

            0,

            Math.PI * 2

        );


        ctx.fill();

    });

}


// =====================================================
// MOUSE GLOW
// =====================================================

function drawMouseGlow() {

    if (mouse.x === null)
        return;


    const gradient =
        ctx.createRadialGradient(

            mouse.x,
            mouse.y,

            0,

            mouse.x,
            mouse.y,

            250

        );


    gradient.addColorStop(
        0,
        "rgba(140, 70, 255, 0.08)"
    );


    gradient.addColorStop(
        1,
        "rgba(140, 70, 255, 0)"
    );


    ctx.beginPath();


    ctx.fillStyle =
        gradient;


    ctx.arc(

        mouse.x,
        mouse.y,

        250,

        0,
        Math.PI * 2

    );


    ctx.fill();

}


// =====================================================
// ANIMATION
// =====================================================

function animate() {

    ctx.fillStyle =
        "#050505";


    ctx.fillRect(

        0,
        0,
        width,
        height

    );


    drawParticles();

    updateNodes();

    drawConnections();

    drawNodes();

    drawMouseGlow();


    requestAnimationFrame(
        animate
    );

}


animate();

