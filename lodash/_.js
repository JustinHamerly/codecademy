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
  }

};

module.exports = _;