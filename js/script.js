//Question 1

var winningNumbers = [1, 76, 2, 78, 16, 7];

console.log(winningNumbers[2]);

//Question 2

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

vegetables.push("tomato");
console.log(vegetables.length);

//question 3

var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (var i = 0; i < randomThings.length; i++) {
    var list = randomThings[i];
    console.log(list); 
}

// Question 4

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];


for (var i = 0; i < moreThings.length; i++) {
    var typeOfItem = typeof moreThings[i];
    if (typeOfItem === "number") {
        console.log(moreThings[i]);
    }
}

// question 5

var ingredients = ["water", "flour", "toothpaste", "fish lips"];

var sorted = ingredients.sort();

for(var i = 0; i < sorted.length; i++) {
    var sortedList = sorted[i];
    console.log(sortedList);
}

//Question 6

var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++) {
    if (i % 2 === 1) { console.log(characters[i])   
    }
}

