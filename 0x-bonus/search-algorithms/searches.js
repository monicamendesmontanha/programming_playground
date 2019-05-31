function binarySearch(arr, element){

  let start = 0;
  let end = arr.length - 1;
  let midPoint = Math.floor((start+end) / 2);

  while(arr[midPoint] !== element && start < end) {
    if (element < arr[midPoint]) {
      end = midPoint - 1;
    } else {
      start = midPoint + 1;
    }
    midPoint = Math.floor((start + end) / 2);
  }
  //  search through the array non-recursively for the element
  //  if the element is not found, return -1
  //  if the element is found, return the index at which it was found
  return (arr[midPoint] === element) ? midPoint : -1;
}

function recursiveBinarySearch(arr, element, midPoint=Math.floor((arr.length-1)/2), start=0, end=arr.length-1){
  console.log({arr, element, midPoint, start, end});

  // base case
    if (arr[midPoint] === element){
      return midPoint;
    }
  if (start >= end) {
    return -1;
  }

  //  search through the array recursively for the element
  //  you may need to add more parameters to this function!
  //  if the element is not found, return -1
  //  if the element is found, return the index at which it was found
  if (element > arr[midPoint]) {
    start = midPoint + 1;
  } else {
    end = midPoint +-1;
  }

  midPoint = Math.floor((start + end) / 2);
  return recursiveBinarySearch(arr, element, midPoint, start, end)


}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}