// Add your doToElementsInArray() function here:
function doToElementsInArray(array,callback){
array.foreach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}
