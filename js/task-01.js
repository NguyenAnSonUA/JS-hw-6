const categories = document.querySelector('#categories');
const allList = categories.querySelectorAll('.item');
console.log("Number of categories:", `${allList.length}`);

allList.forEach((item) => console.log(`Category: ${item.firstElementChild.textContent}`));

