import {
  products as products,
  cabinet as cabinet,
  lamp as lamp,
  chairs as chairs,
  tables as tables,
  homeLinkImages as homeLinkImages,
  blogLink as blogLink,
  pageLink as pageLink,
  productFeature as productFeature,
  productsLink as productsLink,
} from "./data.js";

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
let cardCarry = document.getElementById("card-carry");
let products_conatiner = document.getElementById("c-group");

let seconds = 59;
let minutes = 59;

let card;
let arr = [];

function GoToTop() {
  window.scroll(0, 0);
}

goToLoginSection.onclick = () => {
  LoginPageSection.classList.remove("d-none");
  LandingPageSection.classList.add("d-none");
  ContactUsPage.classList.add("d-none");
  FaqPage.classList.add("d-none");
  ProductsSection.classList.add("d-none");
  relaxingPage.classList.add("d-none");
  AboutUsSection.classList.add("d-none");
  ProductDetails.classList.add("d-none");
  GoToTop();
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
  GoToTop();
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
  GoToTop();
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
  GoToTop();
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
  GoToTop();
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
  GoToTop();
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
    GoToTop();

    FaqPage.classList.remove("d-none");
  }
  if (evt.target.classList == "ABOUT US") {
    LoginPageSection.classList.add("d-none");
    LandingPageSection.classList.add("d-none");
    relaxingPage.classList.add("d-none");
    ProductsSection.classList.add("d-none");
    FaqPage.classList.add("d-none");
    ProductDetails.classList.add("d-none");
    GoToTop();
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
    GoToTop();
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
        GoToTop();
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
      GoToTop();
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
      GoToTop();
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
      GoToTop();
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
      GoToTop();
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

try {
  let getCart = JSON.parse(window.localStorage.getItem("item"));
  getCart.forEach((element) => {
    console.log(element);
    arr.push(element);
    cartItemdInsertcard(element);
  });
} catch (e) {
  console.log(e);
}

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
          GoToTop();
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

let cart = [];
let arr2 = [];
try {
  let getCart = JSON.parse(window.localStorage.getItem("item"));
  getCart.forEach((element) => {
    arr2.push(element);
    cartItemdInsert(element);
  });
} catch {}
function cartItemdInsert(el) {
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
const img = window.localStorage.getItem("img");
const name = window.localStorage.getItem("name");
const price = window.localStorage.getItem("price");
// window.localStorage.setItem("item", JSON.stringify([]));
let oldCart = [...JSON.parse(window.localStorage.getItem("item"))];
document.getElementById("add-to-cart").onclick = () => {
  oldCart = [];
  oldCart.push({
    img: img,
    name: name,
    price: price,
  });
  window.localStorage.setItem("item", JSON.stringify(oldCart));
  window.location.reload();
};
document.getElementById("buy-now").onclick = () => {
  window.location.href = "shipping.html";
};
