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

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
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
    testing: function(){
        console.log(data);
    }
  };
})();

// UI Controller
var UIController = (function() {
  // Object to hold repeatedly values
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list'
  };

  // Get values from the input fields and return an object containing all the info we want to make public
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value,
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },
    addListItem: function(obj, type){
        var html, element;

        // TODO - create html string with placeholder text
        if (type === 'inc') {
            element = DOMStrings.incomeContainer;
            
            html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        } else if (type === 'exp') {
            element = DOMStrings.expensesContainer;
            
            html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }
        
        // TODO - replace the placeholder text with real data
        newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', obj.value, type);

        // TODO - insert html string into the DOM
        document.querySelector(element).insertAdjacentHTML('beforeEnd', newHtml);


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
  };

  // Add items
  var ctrlAddItem = function() {

    // Declarations
    var input, newItem;

    // Get values from the input fields
    input = UICtrl.getInput();

    // TODO - add the item to the budget controller
    newItem = budgetController.addItem(input.type, input.description, input.value);

    // TODO - add the item to the UI
    UIController.addListItem(newItem, input.type);

    // TODO - calculate the budget

    // TODO - display the budget
  };

  // Return to make it public
  return {
    init: function() {
      console.log("Application Started");
      setUpEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
