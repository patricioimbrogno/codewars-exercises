function anagram(strOne, strTwo) {
  let arrOne = strOne.split("");
  let arrTwo = strTwo.split("");
  arrOne = arrOne.sort();
  arrTwo = arrTwo.sort();
  let N = arrOne.length;
  let count=0
  for (let i = 0; i < N; i++) {
    if (arrOne[i] === arrTwo[i]) {
      count += 1;
    }
  }
  if (count === N) {
    return true;
  } else {
    return false;
  }
}
