let arrayTasks = {
  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insertAt: function(arr, itemToAdd, index) {
    arr.splice(index, 0, itemToAdd);
    return arr;
  },

  square: function(arr) {
    return arr.map((x) => x * x);
  },

  sum: function(arr) {
    return arr.reduce((total, next) => total + next);
  },

  findDuplicates: function(arr) {
    return arr.filter((element, index, array) =>
      array.some((value, i) =>
        value === element && index !== i && array.indexOf(value) === index
      )
    );
  },

  removeAndClone: function(arr, valueToRemove) {
    return arr.filter((element) => element !== valueToRemove);
  },

  findIndexesOf: function(arr, itemToFind) {
    let result = [];
    arr.forEach((element, index) =>
      element === itemToFind ? result.push(index) : null);
    return result;
  },

  sumOfAllEvenNumbersSquared: function(arr) {
    return this.sum(this.square(arr.filter((element) => element % 2 === 0)));
  },
};

module.exports = arrayTasks;
