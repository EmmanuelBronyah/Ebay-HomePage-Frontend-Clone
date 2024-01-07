import * as categories from "./text.js";

// Second Level
const secondLevel = document.querySelector(".second-level");

// Fourth Level
const fourthLevel = document.querySelector(".fourth-level");

// Watchlist elements
const watchList = document.querySelector(".watchlist");
const watchListParagraph = document.querySelector(".watchlist p");
const watchListIcon = document.querySelector(".watchlist i");

const watchListDropdown = document.querySelector(".watchlist-dropdown");
const watchListDropdownParagraph = document.querySelector(
  ".watchlist-dropdown p"
);

// Third Level Unordered Li Elements
const categoryOneUnorderedList_LiElements =
  document.querySelector(".category-1 ul").children;
const categoryTwoUnorderedList_LiElements =
  document.querySelector(".category-2 ul").children;

// Third Level Dropdown Element
const thirdLevelDropdown = document.querySelector(".third-level-dropdown");

// Third level Dropdown Image
const image = document.querySelector(".category-image img");

document.addEventListener("click", (e) => {
  const isWatchList = e.target.matches(".watchlist");
  const isWatchListParagraph = e.target.matches(".watchlist p");
  const isWatchListIcon = e.target.matches(".watchlist i");

  if (isWatchList || isWatchListParagraph || isWatchListIcon) {
    watchList.classList.toggle("active");
    watchListDropdown.classList.toggle("active");
  }
});

document.addEventListener("mouseover", (e) => {
  if (
    e.target === watchListDropdown ||
    e.target === watchListDropdownParagraph ||
    e.target === watchList ||
    e.target === watchListParagraph ||
    e.target === watchListIcon
  ) {
    return;
  } else {
    watchList.classList.remove("active");
    watchListDropdown.classList.remove("active");
  }

  function changeTextAndImage(
    categoryOneArrayOfText,
    categoryTwoArrayOfText,
    imageUrl
  ) {
    for (let i = 0; i < categoryOneUnorderedList_LiElements.length; i++) {
      let link = categoryOneUnorderedList_LiElements[i].children[0];
      link.innerText = categoryOneArrayOfText[i];
    }

    for (let i = 0; i < categoryTwoUnorderedList_LiElements.length; i++) {
      let link = categoryTwoUnorderedList_LiElements[i].children[0];
      link.innerText = categoryTwoArrayOfText[i];
    }

    image.src = imageUrl;

    thirdLevelDropdown.style.opacity = "1";
  }

  if (e.target.matches(".electronics a")) {
    changeTextAndImage(
      categories.electronicsCategoryOne,
      categories.electronicsCategoryTwo,
      categories.electronicsImage
    );
  }

  if (e.target.matches(".motors a")) {
    changeTextAndImage(
      categories.motorsCategoryOne,
      categories.motorsCategoryTwo,
      categories.motorsImage
    );
  }

  if (e.target.matches(".fashion a")) {
    changeTextAndImage(
      categories.fashionCategoryOne,
      categories.fashionCategoryTwo,
      categories.fashionImage
    );
  }

  if (e.target.matches(".collectibles a")) {
    changeTextAndImage(
      categories.collectiblesCategoryOne,
      categories.collectiblesCategoryTwo,
      categories.collectiblesImage
    );
  }

  if (e.target.matches(".sports a")) {
    changeTextAndImage(
      categories.sportsCategoryOne,
      categories.sportsCategoryTwo,
      categories.sportsImage
    );
  }

  if (e.target.matches(".health a")) {
    changeTextAndImage(
      categories.healthCategoryOne,
      categories.healthCategoryTwo,
      categories.healthImage
    );
  }

  if (e.target.matches(".industrial a")) {
    changeTextAndImage(
      categories.industrialCategoryOne,
      categories.industrialCategoryTwo,
      categories.industrialImage
    );
  }

  if (e.target.matches(".garden a")) {
    changeTextAndImage(
      categories.homeCategoryOne,
      categories.homeCategoryTwo,
      categories.homeImage
    );
  }

  // Remove Third Level Dropdown when the mouse cursor enters the second level
  if (e.target === secondLevel) {
    thirdLevelDropdown.style.opacity = "0";
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target === fourthLevel) {
    thirdLevelDropdown.style.opacity = "0";
  }
});