// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// Examples
// Valid arrays

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  }
  if (array1.length === array2.length) {
    array1 = array1.sort((a, b) => a - b);
    array2 = array2.sort((a, b) => a - b);
    for (let i = 0; i < array1.length; i++) {
      array1[i] = array1[i] * array1[i];
    }
    let count = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        count += 1;
      }
    }

    if (count === array1.length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
