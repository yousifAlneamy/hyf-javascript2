'use strict'
//1-Open a new js file and start by declaring an array that contains 10 strings. These strings should be 
//of book titles you have read(or made up) and be lowercase without spaces or special characters so that
//you can use these later as Id's. (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).
let myBooks = [
    "sapiens:_a_brief_history_of_humankind",
    "homo_deus:_a_brief_history_of_tomorrow",
    "the_selfish_gene",
    "the_future_of_mind",
    "undeniable:_evolution_science_of_creation",
    "why_the_west_is_best",
    "the_story_of_human_body",
    "a_brief_history_of_time",
    "the_physicist_and_the_philosopher",
    "guns_germs_and_steel"
];
console.log(myBooks + "\n____________________________");
//3.Make a function (or functions) that generate a ul with li elements for each book ID in the array 
//using a for loop.
function renderList() {
    // const myList = document.getElementById(bookDiv);
    const theList = document.createElement("ul");
    myList.appendChild(theList);

    for (let numberOfLi = 0; numberOfLi < myBooks.length; numberOfLi++) {
        var indexOfmyBooks = myBooks[numberOfLi];
        indexOfmyBooks = document.createElement('li');
        theList.appendChild(indexOfmyBooks);
    }
    console.log(myList);
}
renderList();
//4.Make an object containing information for each book.Each item(object) in this object should have the book ID
//you thought up in point 1 as a key, and it should have at least the following fields:title, language and author.
const myBooksObj = [
    {
        id: "foragers",
        title: "Sapiens: A Brief History of Humankind",
        language: "English",
        author: "Yuval Noah Harari"
    },
    {
        id: "future",
        title: "Homo Deus: A Brief History of Tomorrow",
        language: "English",
        author: "Yuval Noah Harari"
    },
    {
        id: "survivalOftheFittest",
        title: "The Selfish Gene",
        language: "English",
        author:"Richard Dawkins"
    },
    {
        id: "mindCosmos",
        title: "The future of the mind",
        language: "English",
        author:"Michio Kaku"
    },
    {
        id: "spaceAndtime",
        title: "A Brief History of Time",
        language: "English",
        author: "Stephen Hawking"
    }
];
//5.Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.