const tabs = {
  links: {
    tab: document.getElementById("pills-links-tab"),
    pane: document.getElementById("pills-links"),
  },
  shop: {
    tab: document.getElementById("pills-shop-tab"),
    pane: document.getElementById("pills-shop"),
  },
};

function transitionTab(from, to, direction) {
  const fromPane = tabs[from].pane;
  const toPane = tabs[to].pane;

  fromPane.classList.remove(
    "slide-in-left",
    "slide-in-right",
    "slide-out-left",
    "slide-out-right",
    "slide-in"
  );
  toPane.classList.remove(
    "slide-in-left",
    "slide-in-right",
    "slide-out-left",
    "slide-out-right",
    "slide-in"
  );

  if (direction === "left") {
    fromPane.classList.add("slide-out-left");
    toPane.classList.add("slide-in-right");
  } else {
    fromPane.classList.add("slide-out-right");
    toPane.classList.add("slide-in-left");
  }

  toPane.classList.add("active");
  void toPane.offsetWidth;

  setTimeout(() => {
    fromPane.classList.remove("active");
    fromPane.classList.remove("slide-out-left", "slide-out-right");
    toPane.classList.add("slide-in");
  }, 20);

  setTimeout(() => {
    toPane.classList.remove("slide-in-left", "slide-in-right", "slide-in");
  }, 600);
}

document.addEventListener("DOMContentLoaded", () => {
  tabs.links.tab.addEventListener("click", (e) => {
    e.preventDefault();
    transitionTab("shop", "links", "right");
  });

  tabs.shop.tab.addEventListener("click", (e) => {
    e.preventDefault();
    transitionTab("links", "shop", "left");
  });

  const toShopBtn = document.getElementById("toShopTab");
  if (toShopBtn) {
    toShopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      transitionTab("links", "shop", "left");
    });
  }
});
