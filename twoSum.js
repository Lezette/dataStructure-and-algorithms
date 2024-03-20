/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  let output = []

  // for (let index = 0; index < nums.length; index++) {
  //   for (let number = 0; number < nums.length; number++) {
  //     if (index === number) {
  //       continue
  //     }
  //     if (target === (nums[index] + nums[number])) {
  //       output = [number, index]
  //     }
  //   }
  // }

  let hash = {};

  for (let i = 0; i < nums.length; i++) {

    let complement = target - nums[i]; // 3
    // console.log({ hash })
    // console.log({ complement })
    // console.log({ comp: hash[complement] })
    // console.log('------')


    // 1 && 1

    if (hash[complement] >= 0 && hash[complement] !== i) {
      output = [i, hash[complement]];
      break;
    }

    hash[nums[i]] = i;

  }

  // console.log(twoSum([2, 11, 7, 15], 9));


  // for (let i = 0; i < nums.length; i++) {
  //   let res = target - nums[i];
  //   if (hash[res]) {
  //     output = [i, hash[res]];
  //     break;
  //   }
  // }


  return output
};

/*{
  0: [2, 11, 7, 15],
  1: [2, 11, 7, 15],
  2: [2, 11, 7, 15],
  3: [2, 11, 7, 15],
}

{
  2: 0,
  11: 1,
  7: 2,
  15: 3
}

if ()

let arr = [1,2,3,4];

for a in arr {
  
}
for a in arr {
    
}




*/

console.log(twoSum([2, 11, 7, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));




/*
if num[0] + num[1] === target
  return [0,1]
else
  if num[0] + num[2] === target 
    return [0,2]


    nums[1 0 2 1 3  4 5] target = 3

    i=0; nums i++
    (num[i] + nums[i++]) === 3 
    
    i = 0; nums; i++
    number = 1

    nums[2] + nums[3]


*/