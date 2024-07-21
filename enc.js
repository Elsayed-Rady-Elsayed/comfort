const HeaderLogo = document.getElementById("HeaderLogo");
const LandingPageSection = document.getElementById("LandingPageSection");
const LoginPageSection = document.getElementById("LoginPageSection");
const goToLoginSection = document.getElementById("goToLoginSection");
const ContactUsSection = document.getElementById("ContactUsSection");
const ContactUsPage = document.getElementById("ContactUsPage");
const ProductsSection = document.getElementById("ProductsSection");
const ShopBtnSection = document.getElementById("ShopBtnSection");
const FaqPage = document.getElementById("FaqPage");
const GoToFaqPage = document.getElementById("GoToFaqPage");
const contactFromFaq = document.getElementById("contactFromFaq");
const AboutUsSection = document.getElementById("AboutUsSection");
const relaxingPage = document.getElementById("relaxingPage");
const ProductDetails = document.getElementById("ProductDetails");
const goToShopSm = document.getElementById("goToShopSm");
goToLoginSection.onclick = () => {
  LoginPageSection.classList.remove("d-none");
  LandingPageSection.classList.add("d-none");
  ContactUsPage.classList.add("d-none");
  FaqPage.classList.add("d-none");
  ProductsSection.classList.add("d-none");
  relaxingPage.classList.add("d-none");
  AboutUsSection.classList.add("d-none");
  ProductDetails.classList.add("d-none");
};

HeaderLogo.onclick = () => {
  LandingPageSection.classList.remove("d-none");
  LoginPageSection.classList.add("d-none");
  ContactUsPage.classList.add("d-none");
  FaqPage.classList.add("d-none");
  AboutUsSection.classList.add("d-none");
  relaxingPage.classList.add("d-none");
  ProductDetails.classList.add("d-none");
  ProductsSection.classList.add("d-none");
};
contactFromFaq.onclick = () => {
  LoginPageSection.classList.add("d-none");
  LandingPageSection.classList.add("d-none");
  ProductsSection.classList.add("d-none");
  FaqPage.classList.add("d-none");
  relaxingPage.classList.add("d-none");
  AboutUsSection.classList.add("d-none");
  ProductDetails.classList.add("d-none");
  ContactUsPage.classList.remove("d-none");
};
ContactUsSection.onclick = () => {
  LoginPageSection.classList.add("d-none");
  LandingPageSection.classList.add("d-none");
  ProductsSection.classList.add("d-none");
  FaqPage.classList.add("d-none");
  relaxingPage.classList.add("d-none");
  ProductDetails.classList.add("d-none");
  AboutUsSection.classList.add("d-none");
  ContactUsPage.classList.remove("d-none");
};
goToShopSm.onclick = () => {
  LoginPageSection.classList.add("d-none");
  LandingPageSection.classList.add("d-none");
  ContactUsPage.classList.add("d-none");
  ProductDetails.classList.add("d-none");
  relaxingPage.classList.add("d-none");
  FaqPage.classList.add("d-none");
  ProductsSection.classList.remove("d-none");
  AboutUsSection.classList.add("d-none");
};
ShopBtnSection.onclick = () => {
  LoginPageSection.classList.add("d-none");
  LandingPageSection.classList.add("d-none");
  ContactUsPage.classList.add("d-none");
  ProductDetails.classList.add("d-none");
  relaxingPage.classList.add("d-none");
  FaqPage.classList.add("d-none");
  ProductsSection.classList.remove("d-none");
  AboutUsSection.classList.add("d-none");
};

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
    LoginPageSection.classList.add("d-none");
    LandingPageSection.classList.add("d-none");
    ContactUsPage.classList.add("d-none");
    ProductsSection.classList.add("d-none");
    relaxingPage.classList.add("d-none");
    AboutUsSection.classList.add("d-none");
    ProductDetails.classList.add("d-none");

    FaqPage.classList.remove("d-none");
  }
  if (evt.target.classList == "ABOUT US") {
    LoginPageSection.classList.add("d-none");
    LandingPageSection.classList.add("d-none");
    relaxingPage.classList.add("d-none");
    ProductsSection.classList.add("d-none");
    FaqPage.classList.add("d-none");
    ProductDetails.classList.add("d-none");

    ContactUsPage.classList.add("d-none");
    AboutUsSection.classList.remove("d-none");
  }
  if (evt.target.classList == "CONTACT US") {
    LoginPageSection.classList.add("d-none");
    relaxingPage.classList.add("d-none");
    LandingPageSection.classList.add("d-none");
    ProductsSection.classList.add("d-none");
    FaqPage.classList.add("d-none");
    ProductDetails.classList.add("d-none");

    AboutUsSection.classList.add("d-none");
    ContactUsPage.classList.remove("d-none");
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
  if (document.getElementById("press-li-ex").classList.contains("d-flex")) {
    document.getElementById("press-li-ex").classList = "home-links d-none";
  } else {
    document.getElementById("press-li-ex").classList = "home-links d-flex";
    document.getElementById("press-li-ex").classList.remove("d-none");
  }
  homeLinkImages.forEach((element) => {
    let sesction = document.createElement("a");
    let text = document.createElement("p");
    let img = document.createElement("img");
    img.setAttribute("src", element.image);
    text.innerHTML = element.name;
    sesction.appendChild(text);
    sesction.appendChild(img);
    if (element.name === "parallax") {
      sesction.onclick = () => {
        relaxingPage.classList.remove("d-none");
        LoginPageSection.classList.add("d-none");
        LandingPageSection.classList.add("d-none");
        ProductsSection.classList.add("d-none");
        FaqPage.classList.add("d-none");
        AboutUsSection.classList.add("d-none");
        ContactUsPage.classList.add("d-none");
        console.log(relaxingPage.classList);
        ProductDetails.classList.add("d-none");
      };
    } else {
    }
    document.getElementById("press-li-ex").appendChild(sesction);
  });
}

function productBtn() {
  document.getElementById("press-li-ex").innerHTML = "";
  if (document.getElementById("press-li-ex").classList.contains("d-flex")) {
    document.getElementById("press-li-ex").classList = "product-links d-none";
  } else {
    document.getElementById("press-li-ex").classList = "product-links d-flex";
  }
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
}
function navLinksMenuEx() {
  if (document.getElementById("press-li-ex").classList.contains("d-none")) {
    document.getElementById("press-li-ex").classList.remove("d-none");
  } else {
    document.getElementById("press-li-ex").classList.add("d-none");
  }
}
let landingImages = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png",
];
// let lcount = 0;
// document.getElementById("slide-left").onclick = () => {
//   if (lcount < 0) lcount = 2;
//   if (lcount > 2) lcount = 0;
//   document.querySelector(".landing #land-img").src = landingImages[lcount--];
// };
// document.getElementById("slide-right").onclick = () => {
//   if (lcount < 0) lcount = 2;
//   if (lcount > 2) lcount = 0;
//   document
//     .getElementById("land-img")
//     .setAttribute("src", landingImages[lcount++]);
// };

let chairs = [
  {
    sold: false,
    name: "Hans Chair",
    old_price: 587.0,
    price: 486.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_8a7d6258-aa26-4ae6-ab8f-0818cfb9a373_720x.jpg?v=1681304966",
  },
  {
    sold: false,
    name: "Henry Chair",
    old_price: 576.0,
    price: 427.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_9d199f0b-bf7f-4544-b65f-b5a131df644a_720x.jpg?v=1681305096",
  },
  {
    sold: true,
    name: "Grace Chair",
    old_price: "387.00",
    price: "287.00",
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_192bdc2e-a0d0-4a5c-9d6c-569e10f13d3b_360x.jpg?v=1681305122",
  },
  {
    sold: false,
    name: "Brain Chair",
    old_price: 999.99,
    price: 896.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_6df44943-00e2-43fb-9dd4-681247a2ac1f_720x.jpg?v=1681305111",
  },
];

let tables = [
  {
    sold: false,
    name: "Drawer Vanity Desk",
    new_price: 587.0,
    price: 587.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/16_2-410x492_720x.jpg?v=1680963484",
  },
  {
    sold: false,
    name: "Dining Table",
    old_price: 1.099,
    price: 986.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_01a367a7-505a-4eed-ad3a-15ab79fc2e36_720x.jpg?v=1681305048",
  },
  {
    sold: false,
    name: "Round Wood",
    old_price: 324.0,
    price: 324.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_ae7c502d-5e14-44a7-8eaa-6c63d9a29d9a_720x.jpg?v=1681305138",
  },
  {
    sold: false,
    name: "Lorna Vantiy Table",
    old_price: 376.0,
    price: 376.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_3ba50b5d-3d21-4121-8533-eccfc71e9977_720x.jpg?v=1681305190",
  },
];

let lamp = [
  {
    sold: false,
    name: "Wesley Wall Sconce",
    old_price: 435.0,
    price: 435.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_a8fdb3d6-f722-44ed-9091-6577e343aa2c_720x.jpg?v=1681304993",
  },
  {
    sold: false,
    name: "Eris Wall Sconce",
    old_price: 652.0,
    price: 452.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_6fa77ff2-72e4-4a17-8921-2b18a386c4e3_720x.jpg?v=1681305002",
  },
  {
    sold: false,
    name: "Cordova Wall Sconce",
    old_price: 334.0,
    price: 234.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_218f6d0f-092f-4e36-a8d0-03be5e576d5d_720x.jpg?v=1681305089",
  },
  {
    sold: false,
    name: "Cobalt Wall Sconce",
    old_price: 532.0,
    price: 432.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_30465232-012a-4a7e-b99c-a69f04347596_720x.jpg?v=1681305204",
  },
];
let cabinet = [
  {
    sold: false,
    name: "Astrid Cabinet",
    old_price: 987.0,
    price: 987.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_f52c6f39-cf29-4f45-ac37-896a39bd44a4_720x.jpg?v=1681304938",
  },
  {
    sold: false,
    name: "Sloan Cabinet",
    new_price: 725.0,
    price: 625.0,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_c7140b9b-cb61-4adf-b1f6-fd0f7d0b14df_900x.jpg?v=1681305195",
  },
  {
    sold: false,
    name: "Arelius",
    old_price: 1.199,
    price: 1.199,
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_f280b148-f758-4354-bbd3-8c64e36f13a5_720x.jpg?v=1681304848",
  },
  {
    sold: true,
    name: "Grier Cabinet",
    price: 798.0,
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
  PnewPrice.innerHTML = "price $" + list.price;
  PnewPrice.classList = "opacity-50";
  PnewPrice.style.cssText = "margin-top: 10px";
  span.classList = "position-absolute m-3 text-light px-2";
  span.style.cssText = "background-color: var(--dark-blue)";
  if (list.old_price != list.price) {
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
      window.localStorage.setItem("price", el.price);
      LoginPageSection.classList.add("d-none");
      relaxingPage.classList.add("d-none");
      LandingPageSection.classList.add("d-none");
      ProductsSection.classList.add("d-none");
      FaqPage.classList.add("d-none");
      ProductDetails.classList.remove("d-none");
      AboutUsSection.classList.add("d-none");
      ContactUsPage.classList.add("d-none");
      let img = window.localStorage.getItem("img");
      let name = window.localStorage.getItem("name");
      let price = window.localStorage.getItem("price");
      console.log(name);
      document.querySelector(".product-sm img").src = img;
      document.querySelector(".product-sm .dtails .price").innerHTML =
        "$" + price;
      document.querySelector(".product-sm .dtails .name").innerHTML = name;
    }
  });
  chairs.forEach((el) => {
    if (e.target.src == el.img) {
      window.localStorage.setItem("img", el.img);
      window.localStorage.setItem("name", el.name);
      window.localStorage.setItem("price", el.price);
      LoginPageSection.classList.add("d-none");
      relaxingPage.classList.add("d-none");
      LandingPageSection.classList.add("d-none");
      ProductsSection.classList.add("d-none");
      FaqPage.classList.add("d-none");
      ProductDetails.classList.remove("d-none");
      AboutUsSection.classList.add("d-none");
      ContactUsPage.classList.add("d-none");
      let img = window.localStorage.getItem("img");
      let name = window.localStorage.getItem("name");
      let price = window.localStorage.getItem("price");
      console.log(name);
      document.querySelector(".product-sm img").src = img;
      document.querySelector(".product-sm .dtails .price").innerHTML =
        "$" + price;
      document.querySelector(".product-sm .dtails .name").innerHTML = name;
    }
  });
  tables.forEach((el) => {
    if (e.target.src == el.img) {
      window.localStorage.setItem("img", el.img);
      window.localStorage.setItem("name", el.name);
      window.localStorage.setItem("price", el.price);
      LoginPageSection.classList.add("d-none");
      relaxingPage.classList.add("d-none");
      LandingPageSection.classList.add("d-none");
      ProductsSection.classList.add("d-none");
      FaqPage.classList.add("d-none");
      ProductDetails.classList.remove("d-none");
      AboutUsSection.classList.add("d-none");
      ContactUsPage.classList.add("d-none");
      let img = window.localStorage.getItem("img");
      let name = window.localStorage.getItem("name");
      let price = window.localStorage.getItem("price");
      console.log(name);
      document.querySelector(".product-sm img").src = img;
      document.querySelector(".product-sm .dtails .price").innerHTML =
        "$" + price;
      document.querySelector(".product-sm .dtails .name").innerHTML = name;
    }
  });
  lamp.forEach((el) => {
    if (e.target.src == el.img) {
      window.localStorage.setItem("img", el.img);
      window.localStorage.setItem("name", el.name);
      window.localStorage.setItem("price", el.price);
      LoginPageSection.classList.add("d-none");
      relaxingPage.classList.add("d-none");
      LandingPageSection.classList.add("d-none");
      ProductsSection.classList.add("d-none");
      FaqPage.classList.add("d-none");
      ProductDetails.classList.remove("d-none");
      AboutUsSection.classList.add("d-none");
      ContactUsPage.classList.add("d-none");
      let img = window.localStorage.getItem("img");
      let name = window.localStorage.getItem("name");
      let price = window.localStorage.getItem("price");
      console.log(name);
      document.querySelector(".product-sm img").src = img;
      document.querySelector(".product-sm .dtails .price").innerHTML =
        "$" + price;
      document.querySelector(".product-sm .dtails .name").innerHTML = name;
    }
  });
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
$("#show-answer1").click(() => {
  $("#answer1").slideToggle();
});
$("#show-answer2").click(() => {
  $("#answer2").slideToggle();
});
$("#show-answer3").click(() => {
  $("#answer3").slideToggle();
});
$("#contact").hover(() => {
  console.log("gff");
  $(this).css({
    backgroundColor: "black",
  });
});
let products = [
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_f280b148-f758-4354-bbd3-8c64e36f13a5_540x.jpg?v=1681304848",
    name: "Arelius",
    price: 1199,
    sale: false,
    newIn: true,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/2_ba63627d-d2a0-4ce7-a7da-0041cbfc10ce_540x.jpg?v=1681304922",
    name: "Arnold Sideboard",
    price: 899,
    sale: false,
    newIn: false,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_f52c6f39-cf29-4f45-ac37-896a39bd44a4_540x.jpg?v=1681304938",
    name: "Astrid Cabinet",
    price: 987,
    sale: false,
    newIn: true,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_540x.jpg?v=1681304798",
    name: "Benz Sofa",
    price: 568,
    sale: false,
    newIn: true,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_8a7d6258-aa26-4ae6-ab8f-0818cfb9a373_540x.jpg?v=1681304966",
    name: "Brian Chair",
    price: 999,
    sale: true,
    newIn: false,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/3_0eb03cdc-0985-4e95-9d07-31ac882c91fa_540x.jpg?v=1681304980",
    name: "Brioni Up",
    price: 1099,
    sale: false,
    newIn: false,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_a8fdb3d6-f722-44ed-9091-6577e343aa2c_720x.jpg?v=1681304993",
    name: "Cobalt Wall Sconce",
    price: 398,
    sale: true,
    newIn: false,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_6fa77ff2-72e4-4a17-8921-2b18a386c4e3_540x.jpg?v=1681305002",
    name: "Cordova Wall Sconce",
    price: 334,
    sale: true,
    newIn: true,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_01a367a7-505a-4eed-ad3a-15ab79fc2e36_540x.jpg?v=1681305048",
    name: "Dining Table",
    price: 1099,
    sale: true,
    newIn: false,
    sold: true,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_b09368bb-0297-408e-9146-09d882f35aca_540x.jpg?v=1681305079",
    name: "Drawer Vanity Desk",
    price: 587,
    sale: false,
    newIn: false,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_218f6d0f-092f-4e36-a8d0-03be5e576d5d_540x.jpg?v=1681305089",
    name: "Eris Wall Sconceius",
    price: 654,
    sale: false,
    newIn: false,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_9d199f0b-bf7f-4544-b65f-b5a131df644a_540x.jpg?v=1681305096",
    name: "Grace Chair",
    price: 387,
    sale: true,
    newIn: true,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_6a698b28-a074-4aab-83ea-3139176f10ba_540x.jpg?v=1681305108",
    name: "Grier Cabinet",
    price: 1199,
    sale: false,
    newIn: false,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_6df44943-00e2-43fb-9dd4-681247a2ac1f_720x.jpg?v=1681305111",
    name: "Hans Chair",
    price: 587,
    sale: true,
    newIn: false,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_30465232-012a-4a7e-b99c-a69f04347596_540x.jpg?v=1681305204",
    name: "Wesley Wall Sconce",
    price: 435,
    sale: false,
    newIn: false,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_c7140b9b-cb61-4adf-b1f6-fd0f7d0b14df_540x.jpg?v=1681305195",
    name: "Sloan Cabinet",
    price: 725,
    sale: false,
    newIn: true,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/16_2-410x492_720x.jpg?v=1680963484",
    name: "Simple Coffee Table",
    price: 625.0,
    sale: false,
    newIn: true,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_3ba50b5d-3d21-4121-8533-eccfc71e9977_720x.jpg?v=1681305190",
    name: "Round Wood",
    price: 324.0,
    sale: false,
    newIn: false,
    sold: true,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_10a67611-3a1a-451e-8bae-16a0e78c2bea_720x.jpg?v=1681305179",
    name: "Pebble Rubble",
    price: 1399.0,
    sale: false,
    newIn: true,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0749/8304/7476/products/1_eaff482b-2ff9-4b89-9397-d06474973fd4_720x.jpg?v=1681304812",
    name: "Navy Blue Sofa",
    price: 1299.0,
    sale: true,
    newIn: false,
    sold: false,
    desc: "Functional and stylish cabinet, the perfect storage solution for any room in your home. Made with high-quality materials, this cabinet is designed to last for years and features a spacious...",
  },
];
let cardCarry = document.getElementById("card-carry");
let card;
window.addEventListener("load", () => {
  products.forEach((e) => {
    card = document.createElement("div");
    card.classList = "card-item position-relative m-2";
    let banner = document.createElement("div");
    banner.classList = "banner position-absolute text-light m-3 px-2";
    if (e.newIn) {
      banner.style.background = "#144171";
      banner.innerHTML = "New In";
      card.appendChild(banner);
    }
    if (e.sale) {
      banner.style.backgroundColor = "red";
      banner.innerHTML = "On Sale";
      card.appendChild(banner);
    }
    if (e.sold) {
      banner.style.backgroundColor = "black";
      banner.innerHTML = "Sold Out";
      card.appendChild(banner);
      card.classList.add("opacity-75");
    }
    let img = document.createElement("img");
    img.src = e.img;
    img.classList = "p-img";
    img.style.maxWidth = "100%";
    card.append(img);
    let text = document.createElement("div");
    text.classList = "text mt-3 opacity-75";
    let p1 = document.createElement("p");
    p1.innerHTML = e.name;
    let p2 = document.createElement("p");
    p2.innerHTML = "$" + e.price;
    card.appendChild(p1);
    if (e.sale) {
      let p3 = document.createElement("p");
      p3.innerHTML = e.price - e.price * 0.5;
      p2.style.cssText =
        "opacity:.3 !important;text-decoration:line-through;display:inline;";
      card.appendChild(p2);
      p3.style.color = "red";
      p3.style.cssText = "color:red;display:inline;margin:0 10px";
      card.appendChild(p3);
    } else {
      card.appendChild(p2);
    }

    cardCarry.appendChild(card);
  });
});

setTimeout(() => {
  document.addEventListener("click", (evt) => {
    if (evt.target.classList == "p-img") {
      let img = evt.target.src;
      products.forEach((e) => {
        if (e.img == img) {
          window.localStorage.setItem("img", e.img);
          window.localStorage.setItem("name", e.name);
          window.localStorage.setItem("price", e.price);
          LoginPageSection.classList.add("d-none");
          relaxingPage.classList.add("d-none");
          LandingPageSection.classList.add("d-none");
          ProductsSection.classList.add("d-none");
          FaqPage.classList.add("d-none");
          ProductDetails.classList.remove("d-none");
          AboutUsSection.classList.add("d-none");
          ContactUsPage.classList.add("d-none");
          let img = window.localStorage.getItem("img");
          let name = window.localStorage.getItem("name");
          let price = window.localStorage.getItem("price");
          console.log(name);
          document.querySelector(".product-sm img").src = img;
          document.querySelector(".product-sm .dtails .price").innerHTML =
            "$" + price;
          document.querySelector(".product-sm .dtails .name").innerHTML = name;
        }
      });
    }
  });
}, 3000);
