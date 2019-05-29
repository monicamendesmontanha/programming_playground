function bucketSort(items, numBuckets=5) {

  if(items.length === 0) {
    return items;
  }

  const bucketSize = numBuckets;
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < items.length; i++) {
    if (items[i] < min) {
      min = items[i];
    }

    if (items[i] > max) {
      max = items[i];
    }
  }

  // make buckets between min and max
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = new Array(bucketSize);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // divide the array into buckets
  for (let i = 0; i < items.length; i++) {
    buckets[ Math.floor( (items[i] - min) / bucketSize) ].push( items[1] );
  }

  // sort the inidividual buckets
  items = [];
  for(let i = 0; i < buckets.length; i++) {
    buckets[i] = classicSort( buckets[i] );

    // merge the buckets back together
    items = items.concat( buckets[i] );
  }

  return items;
}

const classicSort = (array) => {
  return array.sort((a, b) => {
    //return negative, positive or 0: in order, out of order or equal
    return a - b
  });
};

module.exports = bucketSort;
