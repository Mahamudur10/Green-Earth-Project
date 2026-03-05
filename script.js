const categoriesContainer = document.getElementById("categoriesContainer");
const treesContainer = document.getElementById("treesContainer");

async function loadCategories() {
    // fetch("https://openapi.programming-hero.com/api/categories")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //     })
    //     .catch((e) => console.log(e));

    // async await
    const res = await fetch("https://openapi.programming-hero.com/api/categories",);
    const data = await res.json();
    // console.log(res);
    console.log(data);
    console.log(categoriesContainer);
    data.categories.forEach((category) => {
        console.log(category);

        const btn = document.createElement("button");
        btn.className = "btn btn-outline w-full";
        btn.textContent = category.category_name;
        categoriesContainer.appendChild(btn);
    });

}
async function loadTrees() {
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    displayTrees(data.plants);
}
function displayTrees(trees) {
    console.log(trees);
    trees.forEach((tree) => {
        console.log(tree);

        const card = document.createElement("div");
        card.className = "card bg-white shadow-sm";
        card.innerHTML = ` <figure>
                            <img src="${tree.image}"
                                alt="${tree.name}" 
                                title="${tree.name}"
                                class="h-48 w-full object-cover"    
                            />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">${tree.name}</h2>
                            <p class="line-clamp-2">A card component has a figure, a body part, and inside body there are title and actions
                                parts</p>
                            <div class="badge badge-success">${tree.category}</div>
                            <div class="flex justify-between">
                                <h2 class="font-bold text-xl text-[#61e290]">$${tree.price}</h2>
                                <button class="btn btn-primary bg-[#61e290] border-none">Cart</button>
                            </div>
                        </div>`;
        treesContainer.appendChild(card);
    });
}

loadCategories();
loadTrees();