const watchList = document.querySelector(".watchlist");
const watchListParagraph = document.querySelector(".watchlist p");
const watchListIcon = document.querySelector(".watchlist i");

const watchListDropdown = document.querySelector(".watchlist-dropdown");
const watchListDropdownParagraph = document.querySelector(
  ".watchlist-dropdown p"
);

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
});
