let input = [2,3,1]
let ans = 1

function runProgram(input) {
  input = input.split("\n");
  var n = input[0];
  var arr = input[1].split(" ").map(Number);

  var result = mergesort(arr);
  console.log(result.join(" "));

  function mergesort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergesort(left), mergesort(right));
  }

  function merge(left, right) {
    var ans = [],
      i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        ans.push(left[i]);
        i++;
      } else {
        ans.push(right[j]);
        j++;
      }
    }

    while (i < left.length) {
      ans.push(left[i]);
      i++;
    }
    while (j < right.length) {
      ans.push(right[j]);
      j++;
    }
    return ans;
  }
}
