/*
Create a variable named myToppings and assign it an Array containing 3 of your favorite pizza toppings as Strings, ordered from most to least favorite.
*/
var myToppings = ["Pepperoni", "Mushrooms", "Green Peppers"];




/*
Create a Function named printValue. It should accept any value and print it to the console.
*/
var printValue = function(value) {
  console.log(value);
};



var getToppingByRank = function(toppings, rank) {
  if (rank < toppings.length) {
    printValue(toppings[rank]);
  } else {
    console.log("Invalid rank");
  }
};




/*
Create a Function named everyThird that accepts an input Array. everyThird should loop over the Array and print every third value to the console using printValue.
*/
var everyThird = function(inputArray) {
  for (let i = 2; i < inputArray.length; i += 3) {
    printValue(inputArray[i]);
  }
};



/*Create an Object called myPizzaOrder with 3 key/value pairs.
    customerName should be a String
    Toppings should be an Array
    delivery should be a Boolean
*/
var myPizzaOrder = {
  customerName: "John Doe",
  toppings: myToppings,
  delivery: true,
};





/*
Create a Function named getCustomerInfo that accepts a customer Object that looks like the a Custommer object below, and an Array of properties that looks like the someProperties array below. Use printValue to log the id key's value, as well as any properties in the given Array. Each value should be logged separately.
*/


var getCustomerInfo = function(customer, properties) {
  printValue(customer.id);
  properties.forEach(property => {
    if (customer.hasOwnProperty(property)) {
      printValue(customer[property]);
    }
  });
};




/*
A customer calls back and wants to change all their pizzas on their order to be gluten free. Being a forward thinking engineer you'll create a reusable function...map.
*/

var map = function(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
};



//another way
function makePizzasGlutenFree(pizzas) {
  return pizzas.map(pizza => {
    // Create a new pizza object with the same properties but set glutenFree to true
    return { ...pizza, glutenFree: true };
  });
}




//callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

/*
Create a Function named getPhoneNumberForCustomer that accepts an Array of customers and a target name. 

The customers Array is filled with customer Objects. 

Your Function should use recursion to find the customer Object corresponding to the given name and return the phone number stored in the telephone key

If the customer is not found, return the string "customer not found".
*/


var getPhoneNumberForCustomer = function(customers, targetName) {
  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    if (customer.name === targetName) {
      return customer.telephone;
    }
  }
  return "customer not found";
};


//real answer 
function getPhoneNumberForCustomer(customers, targetName) {
  // Recursive function to search for the customer
  function findCustomerByName(arr, name, currentIndex) {
    if (currentIndex >= arr.length) {
      // Base case: If we have searched through the entire array and not found the customer
      return null;
    }

    if (arr[currentIndex].name === name) {
      // Base case: If the current customer matches the target name
      return arr[currentIndex].telephone;
    }

    // Recursive case: Continue searching in the rest of the array
    return findCustomerByName(arr, name, currentIndex + 1);
  }

  const phoneNumber = findCustomerByName(customers, targetName, 0);
  return phoneNumber !== null ? phoneNumber : "customer not found";
}


//another way
function getPhoneNumberForCustomer(customers, target) {
  if (!target) {
    return "customer not found";
  }

  const customer = customers.find(cust => cust.name === target);

  if (customer) {
    return customer.telephone;
  } else {
    return "customer not found";
  }
}



/*
Create a Function named pizzaToppingsSecret. It should take an Array of toppings, which contains Objects that represent toppings. On each Object there are names and popularity ranks, between 0 and 10. Use the native reduce method on toppings to grab the letter from each topping name at the index of their popularity and concatenate them into one String to find out the secret message.
*/

pizzaToppingsSecret = function(toppings) {
  const secretMessage = toppings.reduce((message, topping) => {
    const charIndex = topping.popularity;
    if (topping.name[charIndex]) {
      message += topping.name[charIndex];
    }
    return message;
  }, "");
  return secretMessage;
};


//another way
function pizzaToppingsSecret(toppings) {
  const secretMessage = toppings.reduce((acc, topping) => {
    const { name, popularity } = topping;
    const letter = name.charAt(popularity);
    return acc + letter;
  }, '');

  return secretMessage;
}


//another way
function pizzaToppingsSecret(toppings) {
  return toppings.reduce((acc, curr) => {
    const charIndex = curr.popularity;
    if (charIndex >= 0 && charIndex < curr.name.length) {
      acc += curr.name[charIndex].toLowerCase();
    }
    return acc;
  }, "");
}
