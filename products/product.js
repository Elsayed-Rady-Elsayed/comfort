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
        }
      });
      window.location.href = "../product page.html";
    }
  });
}, 3000);
