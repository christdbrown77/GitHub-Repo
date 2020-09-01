console.log("Successfully connected to app.js scripts");

// Budget Controller
var budgetController = (function() {
  // Data model

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function(type) {
    var sum = 0;

    // Loop over array
    data.allItems[type].forEach(function(cur) {
      sum += cur.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  };

  // return function to make public
  return {
    addItem: function(type, desc, val) {
      var newItem, ID;

      // Create new id
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create new item based on 'inc' or 'exp' type
      if (type === "exp") {
        newItem = new Expense(ID, desc, val);
      } else if (type === "inc") {
        newItem = new Income(ID, desc, val);
      }

      // Push to our data structure
      data.allItems[type].push(newItem);

      // Return new element
      return newItem;
    },

    testing: function() {
      console.log(data);
    },

    getBudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    },

    calculatebudget: function() {
      // Total all incomes and expenses
      calculateTotal("exp");
      calculateTotal("inc");

      // Total budget = income - expenses
      data.budget = data.totals.inc - data.totals.exp;

      // Percentage of income that we spent
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    }
  };
})();

// UI Controller
var UIController = (function() {
  // Object to hold repeatedly used values
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expensesLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container"
  };

  // Get values from the input fields and return an object containing all the info we want to make public
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value,
        description: (document.querySelector(DOMStrings.inputDescription).value).toUpperCase(),
        value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
      };
    },
    addListItem: function(obj, type) {
      var html, element;

      // Create html string with placeholder text
      if (type === "inc") {
        element = DOMStrings.incomeContainer;

        html =
          '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === "exp") {
        element = DOMStrings.expensesContainer;

        html =
          '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      // Replace the placeholder text with real data
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", obj.value, type);

      // Insert html string into the DOM
      document.querySelector(element).insertAdjacentHTML("beforeEnd", newHtml);
    },
    clearFields: function() {
      var fields, fieldsArr;

      // Creates list
      fields = document.querySelectorAll(
        DOMStrings.inputDescription + "," + DOMStrings.inputValue
      );

      // Add fields list to an array
      fieldsArr = Array.prototype.slice.call(fields);

      // Loop through the array
      fieldsArr.forEach(function(current, index, array) {
        current.value = "";
      });

      // Give focus back to the description field
      fieldsArr[0].focus();
    },
    displayBudget: function(obj) {
      document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMStrings.expensesLabel).textContent =
        obj.totalExp;

      if (obj.percentage > 0) {
        document.querySelector(DOMStrings.percentageLabel).textContent =
          obj.percentage + "%";
      } else {
        document.querySelector(DOMStrings.percentageLabel).textContent = "---";
      }
    },
    getDOMStrings: function() {
      return DOMStrings;
    }
  };
})();

// Global Controller
var controller = (function(budgetCtrl, UICtrl) {
  // Set up event listeners
  var setUpEventListeners = function() {
    var DOM = UICtrl.getDOMStrings();

    // Event listener - user clicks button
    document
      .querySelector(DOM.inputButton)
      .addEventListener("click", ctrlAddItem);

    // Event listener - user presses enter
    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

  };

  
  var updateBudget = function() {
    // Calculate the budget
    budgetCtrl.calculatebudget();
    // Return the budget
    var budget = budgetCtrl.getBudget();
    // Display the budget
    UICtrl.displayBudget(budget);
  };

  // Add items
  var ctrlAddItem = function() {
    // Declarations
    var input, newItem;

    // Get values from the input fields
    input = UICtrl.getInput();

    // Addd the item to the budget controller
    newItem = budgetController.addItem(
      input.type,
      input.description,
      input.value
    );

    // Only perfrom these function if the description field is not empty, value is a number greater than 0
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // Add the item to the UI
      UIController.addListItem(newItem, input.type);

      // Clear fields after input
      UIController.clearFields();

      // Calculate and update budget
      updateBudget();
    }
  };

  var ctrlDeleteItem = function(event){
    console.log(event.target);
  };

  // Return to make it public
  return {
    init: function() {
      console.log("Application Started");
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setUpEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
