'use strict';

function choose_even(collection) {

  return collection.filter(function(item){
    return item%2==0
  })
  //implement here
}

module.exports = choose_even;
