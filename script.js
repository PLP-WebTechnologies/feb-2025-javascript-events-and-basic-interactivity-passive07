// step 1. creat a new element
const newParagraph = document.createElement("p");
newParagraph.textContent ="This is a new Paragraph";

// step 2. create a list with multiple items
const list = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
 const item = document.createElement("li");
 item.textContent = `Item ${i}`;
 list.appendChild(item);
}


// step 3: Add new element to the DOM
const contentDiv = document.getElementById("content");

// append the new paragraph at the end 
contentDiv.appendChild(newParagraph);

//append the list at the end
contentDiv.appendChild(list);

// step 4: Remove an element (after some time)
// lets say we want to remove the first paragraph (created above)
 const firstParagraph = contentDiv.querySelector("p");
 firstParagraph.remove(); //modern method to remove an element
