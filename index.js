// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
  }

  function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
  }

  function appendCat(name) {
    var newArray = cats.slice();
    newArray.push(name)
    return newArray;
  }

  function prependCat(name) {
    var newArray = cats.slice();
    newArray.unshift(name)
    return newArray;
  }

  function removeLastCat() {
    var peanut= cats.slice(0,cats.length-1);
    return peanut;
  }

  function removeFirstCat() {
    var peanut= cats.slice(1)
    return peanut;
  }