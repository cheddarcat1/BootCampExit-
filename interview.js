//this is the exit interview exam after you pass the bootcamp exam

// SAMPLE DATA //
const meals = [//array ; object for ingredients, key for instr,
  {
    name: "Thai pesto noodles",
    vegetarian: false,
    prepTime: "20 minutes",
    ingredients: [
      {
        item: 'wheat noodles',
        type: "carbohydrate",
        amount: '10 ounces',
        specialInstructions: "Non-wheat noodles may require different cooking time"
      },
      {
        item: 'chicken breasts',
        type: 'protein',
        amount: '1 pound',
        specialInstructions: "Boneless chicken thighs can be substitued"
      },
      {
        item: 'basil',
        type: "herb/seasoning",
        amount: '2 tablespoons',
        specialInstructions: "Use fresh basil"
      },
      {
        item: 'cilantro',
        type: 'herb/seasoning',
        amount: '2 tablespoons',
        specialInstructions: "Use fresh cilantro"
      }
    ],
   instructions: ["Saute chicken breasts", "Boil wheat noodles", "Create thai pesto by combining cilantro and basil", "Combine all ingredients and serve"]
  },
  {
    name: "Sesame Tofu Noodles",
    vegetarian: true,
    prepTime: "45 minutes",
    ingredients: [
      {
        item: 'wheat noodles',
        type: "carbohydrate",
        amount: '10 ounces',
        specialInstructions: "Non-wheat noodles may require different cooking time"
      },
      {
        item: 'tofu',
        type: "protein",
        amount: "14 ounces",
        specialInstructions: "Extra firm"
      },
      {
        item: 'soy sauce',
        type: "herb/seasoning",
        amount: "3 tablespoons",
        specialInstructions: null
      },
      {
        item: 'cabbage',
        type: "fruit/vegetable",
        amount: "12 ounces",
        specialInstructions: "Dice cabbage"
      }
    ],
    instructions: ['1. Saute tofu', '2. Boil wheat noodles', '3. Steam cabbage', '4. Combine all ingredients and serve'] 
  },
  {
    name: "Ribeye steak with asparagus",
    vegetarian: false,
    prepTime: "20 minutes",
    ingredients: [
      {
        item: 'ribeye steak',
        type: "protein",
        amount: '1 pound',
        specialInstructions: null
      },
      {
        item: 'asparagus',
        type: "fruit/vegetable",
        amount: '8 ounces',
        specialInstructions: null
      },
      {
        item: 'butter',
        type: "fat",
        amount: '2 tablespoons',
        specialInstructions: 'Non-salted butter'
      },
      {
        item: 'salt and pepper',
        type: "herb/seasoning",
        amount: 'To taste',
        specialInstructions: null
      }
    ],
    instructions: ['1. Season steak and asparagus with salt and pepper', '2. Sear steak in pan', '3. Finish steak in oven', '4. Saute asparagus in butter']
  },
  {
    name: "Butternut squash soup",
    vegetarian: true,
    prepTime: "60 minutes",
    ingredients: [
      {
        item: 'butternut squash',
        type: "fruit/vegetable",
        amount: '12 ounces',
        specialInstructions: null
      },
      {
        item: 'cabbage',
        type: "fruit/vegetable",
        amount: '8 ounces',
        specialInstructions: null
      },
      {
        item: 'curry powder',
        type: "herb/seasoning",
        amount: '1 tablespoon',
        specialInstructions: null
      },
      {
        item: 'salt and pepper',
        type: "herb/seasoning",
        amount: 'To taste',
        specialInstructions: null
      }
    ],
    instructions: ['1. Puree butternut squash', '2. steam cabbage', '3. Combine ingredients in crockpot with curry powder and salt and pepper', '4. Cook for 2 hours']
  },
  {
    name: "Jamaican curry",
    vegetarian: false,
    prepTime: "15 minutes",
    ingredients: [
      {
        item: 'crushed tomatoes',
        type: "fruit/vegetable",
        amount: '10 ounces',
        specialInstructions: 'Can substitute diced tomatoes'
      },
      {
        item: 'cauliflower',
        type: "fruit/vegetable",
        amount: '8 ounces',
        specialInstructions: null,
      },
      {
        item: 'chicken breasts',
        type: "protein",
        amount: '1 pound',
        specialInstructions: 'Can substitute boneless chicken thighs'
      },
      {
        item: 'curry powder',
        type: "herb/seasoning",
        amount: '1 tablespoon',
        specialInstructions: null
      },
      {
        item: 'salt and pepper',
        type: "herb/seasoning",
        amount: 'To taste',
        specialInstructions: null
      }
    ],
    instructions: ['1. Chop cauliflower', '2. Add crushed tomatoes, salt and pepper, and curry powder to crockpot', '3. Mix cauliflower and chicken breasts into crockpot', '4. Cook for 2 hours']
  }
];

// Problem #1 //
/*
Use the native filter function to return a new array only the meals that are vegetarian.
*/

let vegetarian = meals.filter(function(meal){
  if (meal.vegetarian === true){
    return meal
  }
})




//console.log(vegetarian)

// Problem #2 //
/*
Use the native reduce method to return a new array of only the  meal names whose prep time is less than 45 minutes.

console.log(lessThan45); // => ['Thai pesto noodles', 'Ribeye with asparagus', 'Jamaican curry']
*/



let lessThan45 = meals.reduce(function(accum, curr){
  
  let time = Number(next.prepTime.slice(0,2))
  if (time < 45 === true){accum.push(curr.name)}//thai noodles
  return curr;//
}, [])
console.log(lessThan45);








// Problem #3 //
/*
Use the native map method to return a new array of meal objects that looks like this =>
[ {name: 'Thai pesto noodles', cookingMinutes: 20, numberOfIngredients: 4, steps: 4 }, ...etc ]
*/

let mapped 


let mapped = meals.map(function(meal) {
  const cookingMinutes = Number(meal.prepTime.split(" ")[0]);
  const numberOfIngredients = meal.ingredients.length;
  const steps = meal.instructions.length;

  return {
    name: meal.name,
    cookingMinutes: cookingMinutes,
    numberOfIngredients: numberOfIngredients,
    steps: steps
  };
});

console.log(mapped);






// Problem #4 //
/*
Create a function called getNoCarb that takes in one parameter - array. This function should return a new array only only the meal objects that contain no carbohydrate ingredients.
*/

let getNoCarb = function(){
  
};



let getNoCarb = function(mealsArray) {
  return mealsArray.filter(function(meal) {
    // Check if any ingredient has type "carbohydrate"
    return !meal.ingredients.some(function(ingredient) {
      return ingredient.type === "carbohydrate";
    });
  });
};

// Example usage:
let noCarbMeals = getNoCarb(meals);
console.log(noCarbMeals);


