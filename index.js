// Watchlist elements
const watchList = document.querySelector(".watchlist");
const watchListParagraph = document.querySelector(".watchlist p");
const watchListIcon = document.querySelector(".watchlist i");

const watchListDropdown = document.querySelector(".watchlist-dropdown");
const watchListDropdownParagraph = document.querySelector(
  ".watchlist-dropdown p"
);

// Third Level Elements
const categoryOneUnorderedList = document.querySelector(".category-1 ul");
const categoryOneUnorderedList_LiElements = categoryOneUnorderedList.children;

for (let i = 0; i < categoryOneUnorderedList_LiElements.length; i++) {
  categoryOneUnorderedList_LiElements[i].children[0].innerText;
}

// Third Level Dropdown Elements
const thirdLevelDropdown = document.querySelector(".third-level-dropdown");


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

  if (e.target.matches(".electronics a")) {
    thirdLevelDropdown.style.opacity = "1";
  }

  if (e.target.matches(".motors a")) {
    thirdLevelDropdown.style.opacity = "1";
  }

  if (e.target.matches(".fashion a")) {
    thirdLevelDropdown.style.opacity = "1";
  }

  if (e.target.matches(".collectibles a")) {
    thirdLevelDropdown.style.opacity = "1";
  }

  if (e.target.matches(".sports a")) {
    thirdLevelDropdown.style.opacity = "1";
  }

  if (e.target.matches(".health a")) {
    thirdLevelDropdown.style.opacity = "1";
  }

  if (e.target.matches(".industrial a")) {
    thirdLevelDropdown.style.opacity = "1";
  }

  if (e.target.matches(".garden a")) {
    thirdLevelDropdown.style.opacity = "1";
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.matches(".electronics a")) {
    thirdLevelDropdown.style.opacity = "0";
  }

  if (e.target.matches(".motors a")) {
    thirdLevelDropdown.style.opacity = "0";
  }

  if (e.target.matches(".fashion a")) {
    thirdLevelDropdown.style.opacity = "0";
  }

  if (e.target.matches(".collectibles a")) {
    thirdLevelDropdown.style.opacity = "0";
  }

  if (e.target.matches(".sports a")) {
    thirdLevelDropdown.style.opacity = "0";
  }

  if (e.target.matches(".health a")) {
    thirdLevelDropdown.style.opacity = "0";
  }

  if (e.target.matches(".industrial a")) {
    thirdLevelDropdown.style.opacity = "0";
  }

  if (e.target.matches(".garden a")) {
    thirdLevelDropdown.style.opacity = "0";
  }
})