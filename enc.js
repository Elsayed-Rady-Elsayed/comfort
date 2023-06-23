document.getElementById("menu").onclick = () => {
  if (document.getElementById("sm-menu").style.display == "none") {
    document.getElementById("sm-menu").style.cssText =
      "display:block !important;";
  } else {
    document.getElementById("sm-menu").style.cssText =
      "display:none !important";
    document.getElementById("press-li-ex").style.cssText =
      "display:none !important;";
  }
};
let homeLinkImages = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0749/8304/7476/files/demo_2_360x.jpg?v=1683025027",
    name: "home sofa",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0749/8304/7476/files/demo_3_360x.jpg?v=1683025036",
    name: "dream",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0749/8304/7476/files/demo_4_360x.jpg?v=1683025039",
    name: "interdior",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0749/8304/7476/files/demo_5_360x.jpg?v=1683025044",
    name: "parallax",
  },
];
let productsLink = [
  {
    name: "product layout",
    items: [
      "image slider",
      "image grid",
      "classic image gallary",
      "slider left thumbnail",
      "slider right thumbnail",
      "slider bottom thumbnail",
    ],
  },
  {
    name: "product swatch",
    items: [
      "color swatch",
      "image swatch",
      "squara swatch",
      "circle swatch",
      "options dropdown",
    ],
  },
  {
    name: "product features",
    items: ["dynamic checkout", "stiky add to cart", "image zoom"],
  },
];
let productFeature = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/2_dff37f8c-8b6b-4f83-9194-3d7362fbb55f_360x.jpg?v=1681304938",
    name: "astried cabinet",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/2_0fec99bd-82de-4a41-a01c-19d3278a8010_360x.jpg?v=1681305195",
    name: "sloan cabinet",
  },
];
let pageLink = ["FAQ", "ABOUT US", "CONTACT US"];
let blogLink = [
  "article page 1",
  "article page 2",
  "left sidebar",
  "right sidebar",
];
document.querySelector("#product-btn").onclick = productBtn;
document.querySelector("#sm-menu #product-btn-sm").onclick = productBtn;
document.querySelector("#home-btn").onclick = homeBtn;
document.querySelector("#sm-menu .home-btn-sm").onclick = homeBtn;

document.querySelector("#page-btn").onclick = PageItems;
document.querySelector("#sm-menu #page-btn-sm").onclick = PageItems;
document.querySelector("#sm-menu #blog-btn-sm").onclick = BlogItems;
function PageItems() {
  document.getElementById("press-li-ex").innerHTML = "";
  let ul = document.createElement("ul");
  ul.classList = "page-link";
  pageLink.forEach((e) => {
    let li = document.createElement("li");
    li.innerHTML = e;
    li.classList = e;
    ul.appendChild(li);
  });
  document.getElementById("press-li-ex").appendChild(ul);
  navLinksMenuEx();
}
window.addEventListener("click", (evt) => {
  if (evt.target.classList == "FAQ") {
    window.location.href = "contact/faq.html";
  }
  if (evt.target.classList == "ABOUT US") {
    window.location.href = "contat/faq.html";
  }
  if (evt.target.classList == "CONTACT US") {
    window.location.href = "contact/contactus.html";
  }
});
function BlogItems() {
  document.getElementById("press-li-ex").innerHTML = "";
  let ul = document.createElement("ul");
  ul.classList = "blog-link";
  blogLink.forEach((e) => {
    let li = document.createElement("li");
    li.innerHTML = e;
    ul.appendChild(li);
  });
  document.getElementById("press-li-ex").appendChild(ul);
  navLinksMenuEx();
}
function homeBtn() {
  document.getElementById("press-li-ex").innerHTML = "";
  document.getElementById("press-li-ex").classList = "home-links";
  homeLinkImages.forEach((element) => {
    let sesction = document.createElement("a");
    let text = document.createElement("p");
    let img = document.createElement("img");
    img.setAttribute("src", element.image);
    text.innerHTML = element.name;
    sesction.appendChild(text);
    sesction.appendChild(img);
    if (element.name === "parallax") {
      console.log("link add");
      sesction.href = "realaxPage.html";
    } else {
      arguments.href = "";
    }
    document.getElementById("press-li-ex").appendChild(sesction);
  });
  navLinksMenuEx();
}
function productBtn() {
  document.getElementById("press-li-ex").innerHTML = "";
  document.getElementById("press-li-ex").classList = "product-links";
  productsLink.forEach((element) => {
    let sesction = document.createElement("div");
    let header = document.createElement("h3");
    let ul = document.createElement("ul");
    header.innerHTML = element.name;
    element.items.forEach((e) => {
      let li = document.createElement("li");
      li.innerHTML = e;
      ul.appendChild(li);
    });
    sesction.appendChild(header);
    sesction.appendChild(ul);
    document.getElementById("press-li-ex").appendChild(sesction);
  });
  let fProduct = document.createElement("div");
  fProduct.classList = "fproducts";
  productFeature.forEach((el) => {
    let item = document.createElement("div");
    let text = document.createElement("p");
    let img = document.createElement("img");
    img.setAttribute("src", el.image);
    text.innerHTML = el.name;
    item.appendChild(text);
    item.appendChild(img);
    fProduct.appendChild(item);
  });
  document.getElementById("press-li-ex").appendChild(fProduct);
  navLinksMenuEx();
}
function navLinksMenuEx() {
  if (document.getElementById("press-li-ex").style.display == "none") {
    document.getElementById("press-li-ex").style.cssText =
      "display:flex !important;";
  } else {
    document.getElementById("press-li-ex").style.cssText =
      "display:none !important;";
  }
}
let landingImages = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png",
];
let lcount = 0;
document.getElementById("slide-left").onclick = () => {
  if (lcount < 0) lcount = 2;
  if (lcount > 2) lcount = 0;
  document.querySelector(".landing #land-img").src = landingImages[lcount--];
};
document.getElementById("slide-right").onclick = () => {
  if (lcount < 0) lcount = 2;
  if (lcount > 2) lcount = 0;
  document
    .getElementById("land-img")
    .setAttribute("src", landingImages[lcount++]);
};

let chairs = [
  {
    sold: false,
    name: "Hans Chair",
    old_price: 587.0,
    new_price: 486.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_8a7d6258-aa26-4ae6-ab8f-0818cfb9a373_720x.jpg?v=1681304966",
  },
  {
    sold: false,
    name: "Henry Chair",
    old_price: 576.0,
    new_price: 427.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_9d199f0b-bf7f-4544-b65f-b5a131df644a_720x.jpg?v=1681305096",
  },
  {
    sold: true,
    name: "Grace Chair",
    old_price: "387.00",
    new_price: "287.00",
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_192bdc2e-a0d0-4a5c-9d6c-569e10f13d3b_360x.jpg?v=1681305122",
  },
  {
    sold: false,
    name: "Brain Chair",
    old_price: 999.99,
    new_price: 896.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_6df44943-00e2-43fb-9dd4-681247a2ac1f_720x.jpg?v=1681305111",
  },
];

let tables = [
  {
    sold: false,
    name: "Drawer Vanity Desk",
    new_price: 587.0,
    old_price: 587.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/16_2-410x492_720x.jpg?v=1680963484",
  },
  {
    sold: false,
    name: "Dining Table",
    old_price: 1.099,
    new_price: 986.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_01a367a7-505a-4eed-ad3a-15ab79fc2e36_720x.jpg?v=1681305048",
  },
  {
    sold: false,
    name: "Round Wood",
    old_price: 324.0,
    new_price: 324.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_ae7c502d-5e14-44a7-8eaa-6c63d9a29d9a_720x.jpg?v=1681305138",
  },
  {
    sold: false,
    name: "Lorna Vantiy Table",
    old_price: 376.0,
    new_price: 376.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_3ba50b5d-3d21-4121-8533-eccfc71e9977_720x.jpg?v=1681305190",
  },
];

let lamp = [
  {
    sold: false,
    name: "Wesley Wall Sconce",
    old_price: 435.0,
    new_price: 435.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_a8fdb3d6-f722-44ed-9091-6577e343aa2c_720x.jpg?v=1681304993",
  },
  {
    sold: false,
    name: "Eris Wall Sconce",
    old_price: 652.0,
    new_price: 452.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_6fa77ff2-72e4-4a17-8921-2b18a386c4e3_720x.jpg?v=1681305002",
  },
  {
    sold: false,
    name: "Cordova Wall Sconce",
    old_price: 334.0,
    new_price: 234.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_218f6d0f-092f-4e36-a8d0-03be5e576d5d_720x.jpg?v=1681305089",
  },
  {
    sold: false,
    name: "Cobalt Wall Sconce",
    old_price: 532.0,
    new_price: 432.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_30465232-012a-4a7e-b99c-a69f04347596_720x.jpg?v=1681305204",
  },
];
let cabinet = [
  {
    sold: false,
    name: "Astrid Cabinet",
    old_price: 987.0,
    new_price: 987.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_f52c6f39-cf29-4f45-ac37-896a39bd44a4_720x.jpg?v=1681304938",
  },
  {
    sold: false,
    name: "Sloan Cabinet",
    new_price: 725.0,
    old_price: 625.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_c7140b9b-cb61-4adf-b1f6-fd0f7d0b14df_900x.jpg?v=1681305195",
  },
  {
    sold: false,
    name: "Arelius",
    old_price: 1.199,
    new_price: 1.199,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_f280b148-f758-4354-bbd3-8c64e36f13a5_720x.jpg?v=1681304848",
  },
  {
    sold: true,
    name: "Grier Cabinet",
    new_price: 798.0,
    old_price: 798.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_6a698b28-a074-4aab-83ea-3139176f10ba_720x.jpg?v=1681305108",
  },
];

let products_conatiner = document.getElementById("c-group");
window.addEventListener("load", () => {
  cabinet.forEach((l) => {
    makeProductItem(l);
  });
  document.getElementById("cabinet-link").onclick = () => {
    document.querySelector("#c-group").innerHTML = "";
    cabinet.forEach((l) => {
      makeProductItem(l);
    });
  };
  document.getElementById("chairs").onclick = () => {
    document.querySelector("#c-group").innerHTML = "";
    chairs.forEach((l) => {
      makeProductItem(l);
    });
  };
  document.getElementById("lamp").onclick = () => {
    document.querySelector("#c-group").innerHTML = "";
    lamp.forEach((l) => {
      makeProductItem(l);
    });
  };
  document.getElementById("tables").onclick = () => {
    document.querySelector("#c-group").innerHTML = "";
    tables.forEach((l) => {
      makeProductItem(l);
    });
  };
});
function makeProductItem(list) {
  let card = document.createElement("div");
  let span = document.createElement("span");
  let pName = document.createElement("p");
  let text = document.createElement("div");
  let img = document.createElement("img");
  let PnewPrice = document.createElement("p");
  let PoldPrice = document.createElement("del");
  card.classList = "card border-0 text-center";
  card.id = "card";
  if (list.sold) card.classList.add("opacity-50");
  img.src = list.img;
  text.classList = "text mt-2";
  pName.innerHTML = list.name;
  pName.classList = "opacity-50";
  text.appendChild(pName);
  PoldPrice.innerHTML = "old price $" + list.old_price;
  PoldPrice.classList = "opacity-50 text text-danger";
  PoldPrice.style.cssText = "margin-top: -10px;";
  PnewPrice.innerHTML = "price $" + list.new_price;
  PnewPrice.classList = "opacity-50";
  PnewPrice.style.cssText = "margin-top: 10px";
  span.classList = "position-absolute m-3 text-light px-2";
  span.style.cssText = "background-color: var(--dark-blue)";
  if (list.old_price != list.new_price) {
    span.innerHTML = "Offer";
    span.style.cssText = "background-color: var(--red)";
    if (list.sold) {
      span.innerHTML = "Sold Out";
      span.style.cssText = "background-color: var(--dark-blue) !important;";
    }
    text.appendChild(PoldPrice);
  } else {
    span.innerHTML = "New In";
    if (list.sold) {
      span.innerHTML = "Sold Out";
      span.style.cssText = "background-color: var(--dark-blue) !important;";
    }
  }
  card.appendChild(span);
  text.appendChild(PnewPrice);
  card.appendChild(img);
  card.appendChild(text);
  document.querySelector("#c-group").appendChild(card);
}
let seconds = 59;
let minutes = 59;
setInterval(() => {
  if (minutes == 0) minutes = 60;
  if (seconds == 0) seconds = 60;
  document.getElementById("seconds-count").innerHTML = seconds;
  seconds--;
  if (seconds == 0) {
    seconds = 60;
    minutes--;
    document.getElementById("count-minutes").innerHTML = minutes;
  }
}, 1000);
document.querySelector("#c-group").addEventListener("click", (e) => {
  console.log(e.target);
  cabinet.forEach((el) => {
    if (e.target.src == el.img) {
      window.localStorage.setItem("img", el.img);
      window.localStorage.setItem("name", el.name);
      window.localStorage.setItem("price", el.new_price);
    }
  });
  chairs.forEach((el) => {
    if (e.target.src == el.img) {
      window.localStorage.setItem("img", el.img);
      window.localStorage.setItem("name", el.name);
      window.localStorage.setItem("price", el.new_price);
    }
  });
  tables.forEach((el) => {
    if (e.target.src == el.img) {
      window.localStorage.setItem("img", el.img);
      window.localStorage.setItem("name", el.name);
      window.localStorage.setItem("price", el.new_price);
    }
  });
  lamp.forEach((el) => {
    if (e.target.src == el.img) {
      window.localStorage.setItem("img", el.img);
      window.localStorage.setItem("name", el.name);
      window.localStorage.setItem("price", el.new_price);
    }
  });
  window.location.href = "product page.html";
});
document.getElementById("cart").onclick = () => {
  $("#cart-part").fadeToggle();
};

document.getElementById("fav").onclick = () => {
  $("#fav-part").fadeToggle();
};
document.getElementById("search").onclick = () => {
  $("#search-part").animate({
    top: "0%",
  });
};
document.getElementById("close-search").onclick = () => {
  document.getElementById("search-part").style.cssText = "top:-30% !important;";
  document.getElementById("overlay").style.cssText = "display:none !important;";
};
$(window).on("scroll", () => {
  let sc = $(window).scrollTop();
  if (sc > 800) {
    $("#goTop").fadeIn();
  } else {
    $("#goTop").fadeOut();
  }
});
$("#goTop").on("click", () => {
  $(window).scrollTop(0);
});
document.getElementById("cart").onclick = () => {
  $("#cart-part").fadeToggle();
};
document.getElementById("fav").onclick = () => {
  $("#fav-part").fadeToggle();
};
document.getElementById("search").onclick = () => {
  $("#search-part").animate({
    top: "0%",
  });
};
document.getElementById("close-search").onclick = () => {
  document.getElementById("search-part").style.cssText = "top:-30% !important;";
  document.getElementById("overlay").style.cssText = "display:none !important;";
};

let arr = [];
try {
  let getCart = JSON.parse(window.localStorage.getItem("item"));
  getCart.forEach((element) => {
    console.log(element);
    arr.push(element);
    cartItemdInsertcard(element);
  });
} catch {}
function cartItemdInsertcard(el) {
  let card = document.createElement("div");
  card.classList = "item d-flex m-3 gap-2";
  let img = document.createElement("img");
  img.src = el.img;
  img.classList = "w-50";
  card.appendChild(img);
  let text = document.createElement("div");
  text.classList = "text w-50";
  let name = document.createElement("div");
  name.classList = "name fw-bold opacity-75 mt-2";
  name.innerHTML = el.name;
  text.appendChild(name);
  let price = document.createElement("div");
  price.classList = "price fw-light mt-2";
  price.innerHTML = el.price;
  text.appendChild(price);
  let btn = document.createElement("button");
  btn.classList = "border-1 border border-dark mt-2 text-danger";
  btn.style.cssText = "width: 80px; height: 40px";
  btn.innerHTML = "Delete";
  let i = document.createElement("i");
  i.classList = "fa-regular fa-trash-can";
  btn.appendChild(i);
  text.appendChild(btn);
  card.appendChild(text);
  document.getElementById("cart-part").appendChild(card);
}
