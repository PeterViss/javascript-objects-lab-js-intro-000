var recipes = {};

function updateObjectWithKeyAndValue(object1, key, value) {
  // { weight: 150 }
  //object1[ key ] = value;
  //return object1;
  
  // NOT CORRECT
  // { key: 150 }
  //object1.key = value;
  
  let object2 = Object.assign({}, object1, { [key]: value });
  return object2;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
