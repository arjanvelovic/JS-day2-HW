//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function display_favorite_food(person){
    for (key in person){
        if (Array.isArray(person[key])){
            for (el in person[key]){
                if (person[key][el].constructor == Object){
                    console.log(key);
                    display_favorite_food(person[key][el]);
                }
                else if (typeof person[key][el] == 'string'){
                    console.log(`${key}: ${person[key][el]}`);
                }
                else{
                    console.log('ERROR');
                }
            }
        }
        else{
            console.log(`${key}: ${person[key]}`);
        }
    }
}

display_favorite_food(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
awge by 3 years. Use an arro function for both methods
*/

// Create our Person Prototype
function person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => console.log(`${this.name} is ${this.age} years old`);

    this.incrementAge = () => this.age++;

    return false
}

let person10 = new person('John', 20);
let person11 = new person('Joe', 80);
person10.printInfo();
person11.printInfo();

for (let i=0 ; i<3 ; i++){
    person10.incrementAge();
}

person10.printInfo()



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkLength = (str) => {
    return new Promise((resolve,reject) =>{
        if (str.length >= 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

checkLength('Hello buddy')
.then((result) => {
    console.log('Big Word')
})
.catch((error) => {
    console.log('Small Word')
})