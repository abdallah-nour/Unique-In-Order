const { isArray } = Array;

function uniqueInOrder(iterable = []) {
  const iterableArray = isArray(iterable) ? iterable : iterable.split('');
  return iterableArray.filter(
    (value, index, array) => value !== array[index + 1]
  );
}

module.exports = uniqueInOrder;
