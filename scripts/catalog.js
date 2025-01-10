import {
    arrPants,
    arrSkirts,
    arrTops
} from './main.js';

//DECLARE GLOBAL VARIABLES
const categoryNames = ["TOPS", "PANTS", "SKIRTS"];
let n = 0;
const categoryNum = [
    arrTops.length,
    arrPants.length,
    arrSkirts.length
];


//CATALOG JS
const createItemElements = (arr, headingDiv) => {
    arr.forEach((item) => {
        //ITEM ELEMENT
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item", "para");

        //NAME ELEMENT
        const nameDiv = document.createElement("div");
        nameDiv.textContent = item._name;
        nameDiv.classList.add("name");
        itemDiv.appendChild(nameDiv);

        //COMBO ELEMENT
        if (item._combinationNum) {
            const comboDiv = document.createElement("div");
            comboDiv.textContent = item._combinationNum;
            comboDiv.classList.add("combo", "para");
            itemDiv.appendChild(comboDiv);
        }
        
        //BUTTON ELEMENT
        const button = document.createElement("button");
        const showMoreDiv = document.createElement("div");

        if (item._combinationArr) {
            button.classList.add("button-icon");
            button.setAttribute("data-show-more-button", "");
            itemDiv.appendChild(button);
        }

        //APPEND ITEM ELEMENT
        headingDiv.appendChild(itemDiv);

        //SHOW-MORE ELEMENT
        if (item._combinationArr) {
            showMoreDiv.textContent = item._combinationArr;
            showMoreDiv.classList.add("show-more", "para");
            headingDiv.appendChild(showMoreDiv);
        }

        //BUTTON JS
        button.addEventListener("click", () => {
            if (showMoreDiv.style.display === "block") {
                showMoreDiv.style.display = "none";
                button.classList.add("button-icon");
                button.classList.remove("show-more-plus");
            } else {
                showMoreDiv.style.display = "block";
                button.classList.add("show-more-plus");
            }
        });
    });
};

categoryNames.forEach(item => {
    //HEADING ELEMENT
    const headingDiv = document.createElement("div");
    headingDiv.classList.add("title", "heading");
    headingDiv.textContent = `${item} ( ${categoryNum[n]} )`;
    n++;

    const catalog = document.querySelector(".catalog");
    catalog.appendChild(headingDiv);

    //CALL FUNCTION
    if (item === "TOPS") createItemElements(arrTops, headingDiv);
    else if (item === "PANTS") createItemElements(arrPants, headingDiv);
    else if (item === "SKIRTS") createItemElements(arrSkirts, headingDiv);
});