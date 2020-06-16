console.log("JS Loaded!");

let results = document.querySelector(".results");
const recipeSearch = document.getElementById("recipe-search");
recipeSearch.addEventListener("submit", function(event) {
  event.preventDefault();

  const recipe = document.getElementById("recipe-index").value;

  const cleanedRecipe = recipe.trim().toLowerCase();

  results.classList = "";

  if (
    cleanedRecipe === "chicken" ||
    cleanedRecipe === "chicken breast" ||
    cleanedRecipe === "chicken thigh"
  ) {
    results.classList.add("chicken");
    console.log("chicken success");
    results.innerHTML =
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg";
  } else if (
    cleanedRecipe === "pasta" ||
    cleanedRecipe === "spaghetti" ||
    cleanedRecipe === "penne"
  ) {
    results.classList.add("pasta");
    results.innerHTML =
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg";
  } else if (
    cleanedRecipe === "cauliflower" ||
    cleanedRecipe === "cauliflour" ||
    cleanedRecipe === "this smells like farts"
  ) {
    document.body.classList.add("cauliflower");
  } else if (
    cleanedRecipe === "ground beef" ||
    cleanedRecipe === "beef ground"
  ) {
    document.body.classList.add("ground beef");
  }

  recipeSearchCapture.reset();
});
