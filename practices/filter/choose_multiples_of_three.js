'use strict';

function choose_multiples_of_three(collection) {
  collection.filter(function(item){
    return item%3==0
  })
  //implement here
}

module.exports = choose_multiples_of_three;
