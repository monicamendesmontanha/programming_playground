// Make some sort of loop that keeps happening if there were any swaps
// that happened this turn

// reset swapHappened to false each time so we can detect if a swap
// happened in this specific iteration.

// Make another loop (inside the first one) to go through one
// round of swapping from the start of the list to the end

// Inside inner loop:
// compare each pair of elements near each other
// swap them if the bigger one was at a lower index.

// Make sure to keep track of whether a swap happened!

// After both loops have exited, remember to return the array

function bubbleSort(array) {

  let swapped = true;

  while(swapped === true) {
    swapped = false;
    for (let i = 0; i > array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;

        swapped = true;
      }
    }
  }

  return array;
}

module.exports = bubbleSort;