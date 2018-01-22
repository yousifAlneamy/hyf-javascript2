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
// function renderList() {
//     const myList = document.getElementById("bookDiv");
//     const theList = document.createElement("ul");
//     myList.appendChild(theList);

//     for (let numberOfLi = 0; numberOfLi < myBooks.length; numberOfLi++) {
//         var indexOfmyBooks = myBooks[numberOfLi];
//         indexOfmyBooks = document.createElement('li');
//         theList.appendChild(indexOfmyBooks);
//     }
//     console.log(myList);
// }
// renderList();

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
        id: "bigBang",
        title: "Undeniable: Evolution of the Science of Creation",
        language: "English",
        author:"Bill Nye"
    },
    {
        id: "fundamentalism",
        title: "Why the West is Best",
        language: "English",
        author:"Ibn Warraq"
    },
    {
        id: "antWallClimbing",
        title: "The Story of Human Body",
        language: "English",
        author:"Daniel E. Lieberman"
    },
    {
        id: "spaceAndtime",
        title: "A Brief History of Time",
        language: "English",
        author: "Stephen Hawking"
    },
    {
        id: "relativity",
        title: "The Physicist and the Philosopher",
        language: "English",
        author:"Jimena Canales"
    },
    {
        id: "smallPox",
        title: "Guns, Germs and Steel",
        language: "English",
        author:"Jared Diamond"
    }
];
//5.Now change the function you used to display the book ID's in a list to take the actual information about the book 
//from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, 
//a heading for the title.
function renderList() {
    console.log(myBooksObj);
    const myList = document.getElementById("bookDiv");
    const theList = document.createElement("ul");
    myList.appendChild(theList);

    for (let numberOfLi = 0; numberOfLi < myBooks.length; numberOfLi++) {
        let indexOfmyBooks = myBooksObj[numberOfLi];
        indexOfmyBooks = document.createElement('li');
        theList.appendChild(indexOfmyBooks);

      //  indexOfmyBooks.innerHTML=
    }
    console.log(myList);
}
renderList();

// Beautify your html page with css, add sources and alts to each of the images.

// Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the
//image source (e.g. {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}). Now loop over these entries
//(hint: Object.keys(objectName) gives you an array containing the keys). 
//Then write a function which places an image at the corresponding li element. 
//Remember that Objects are not ordered, so you cannot guarantee that the first key is the first li element. 
//(Hint: you could give each li item an id tag by modifying the function you made before)