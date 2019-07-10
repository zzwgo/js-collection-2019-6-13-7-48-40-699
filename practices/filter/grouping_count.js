'use strict';

function grouping_count(collection) {
  let result = {};
  collection.forEach(element => {
  
    if( result[element]){
      result[element]=result[element]+1
    }else{
      result[element]=1
    }
  });
  return result;
}

module.exports = grouping_count;