const categoriesList = document.querySelectorAll("ul#categories");
const totalElements = categoriesList.children.length;
console.log(`Number of categories: ${totalElements}`);
categoriesList.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryElements = category.querySelectorAll("li").length;
    console.log('Category : ${categoryName}');
    console.log('Elements: ${categoryElements}');
  }
  );