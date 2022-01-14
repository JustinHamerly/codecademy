const _ = {

  clamp(number, lower, upper){
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end){
    if (end === undefined){
      end = start;
      start = 0;
    }
    if (start > end){
      let temp = end;
      end = start;
      start = temp;
    }
    if (start<=number && end>number){
      return true;
    }
    return false;
  },

  words(string){
    let array = string.split(' ');
    return array;
  },

  pad(string, length){
    if(string.length >= length){
      return string;
    }
    let startPadding = Math.floor((length - string.length)/2);
    let endPadding = length - startPadding - string.length;
    let paddedString = ' '.repeat(startPadding) + string + ' '.repeat(endPadding);
    return paddedString;
  },

  has(object, key){
    if (object[key]){
      return true;
    }
    return false;
  },

  invert(object){
    const invertedObject = {};
    for (let property in object){
      let originalValue = object[property];
      invertedObject[originalValue] = property;
    }
    return invertedObject;
  },

  findKey(object, predicate){
    for (let key in object){
      if (predicate(object[key])){
        return key;
      }
    }
    return undefined;
  },

  drop(array, number){
    let newArray = [];
    if (!number){
      newArray = array.slice(1);
    }else if(typeof number === 'number'){
      newArray = array.slice(number);
    }else{
      throw new Error(`${number} is not a valid number`);
    }
    return newArray;
  },

  dropWhile(array, predicate){
    const cb = (element, index) => {
      return !predicate(element, index, array);
    };
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, size){
    const newArray = [];
    if(!size){
      size = 1;
    }
    for(let i=0; i<array.length; i += size){
      let chunk = array.slice(i, i+size);
      newArray.push(chunk);
    }
    return newArray;
  }

};

module.exports = _;