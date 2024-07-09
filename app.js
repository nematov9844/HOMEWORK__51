// 1. argument sifatida berilgan sonning nechchi xonali ekanligini aniqlaydigan function tuzing

const argumentsNumberLenght = (args = 2) => {
  return args.toString().split("").length;
};
console.log(argumentsNumberLenght(123));

// 2. argument sifatida berilgan stringda nechta son qatnashganligini aniqlaydigan function tuzing

const argumentsStringLenght = (args) => {
  let array = args.split("");
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
      count++;
    }
  }
  return count;
};
console.log(argumentsStringLenght("salo4m2"));

// 3. argument sifatida berilgan stringda nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing

const argumentsA = (arr = "salom")=>{
    let array = arr.split("");
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "a") {
            count++;
        }
    }
    return count;
}
console.log(argumentsA("salom"));

// 4. Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: “….”} qiymat qaytaruvchi minManWord() nomli function yarating Input: “Men dasturlash kursida o’qiyman” Output: {minWord: “Men”, maxWord: “dasturlash”}

const minManWord = (str = "men boyman")=>{
    let array = str.split(" ");
    let min = array[0];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < min.length) {
            min = array[i];
        }
        if (array[i].length > max.length) {
            max = array[i];
        }
    }
    return {minWord:min, maxWord:max};
}
console.log(minManWord("Men dasturlash kursida o’qiyman"));


// 5. Stringlar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin Input: [”text”, “world”, “laptop”] Output: {”text”: 4, “world”: 4, “laptop”: 6}

const objectarise = (arr)=>{
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i].length;
    }
    return obj;
}
console.log(objectarise(["text", "world", "laptop"]));



// 6. n natural soni berilgan 2 sonining dastlabki nta darajasidan tashkil topgan arrayni qaytaruvchi getLevel(n) nomli function tuzing n: 4 result : [2,4,8,16] 2 ning 1-darajasidan boshlanishi kerak va 4-darajasigacha


const getLevel = (n)=>{
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(Math.pow(2,i));
    }
    return arr;
}
console.log(getLevel(4));




// 7. file qilib yuklaganman

// array ichidagi o'rtadagi sonni topadigan function tuzing
// input: arr = [1,2,3,4,5] middileNumber = 3
// input: arr = [1,2,3,4] middileNumber = 2.5 o'rtadagi 2 ta sonning o'rta arifmetigi
let arr = [1, 2, 3, 4, 5];

function findMiddleNumber(arr) {
  const len = arr.length;
  const res = Math.floor(len / 2);

  if (len % 2 === 0) {
    const res1 = arr[res - 1];
    const res2 = arr[res];
    return (res1 + res2) / 2;
  } else {
    return arr[res];
  }
}
console.log(findMiddleNumber(arr));







// qo'shimcha masalar uyoq buyoqdan topilgan



// Masala 3: Berilgan ob'ektlar massividagi har
//bir ob'ektning "yosh" xossasini 1 ga oshiring va
//natijani yangi massivga joylang.

const odamlar = [
  { ism: "Alisher", yosh: 25 },
  { ism: "Zarina", yosh: 30 },
  { ism: "Bobur", yosh: 20 },
];
// Natija: [
//   { ism: "Alisher", yosh: 26 },
//   { ism: "Zarina", yosh: 31 },
//   { ism: "Bobur", yosh: 21 }
// ]

odamlar.forEach(function (odam) {
  odam.yosh++;
  // console.log(odam);
});

// Masala 4: Berilgan matnlar massividagi har bir matnni
//teskari tartibda yozing va natijani yangi massivga joylang.

const matnlar2 = ["Hello", "World", "JavaScript"];
// Natija: ["olleH", "dlroW", "tpircsavaJ"]

matnlar2.forEach(function (matn) {
  // console.log(matn.slice(0).split("").reverse().join(""));
});

// Masala 5: Berilgan sonlar massividagi toq sonlarni ajratib oling va natijani yangi massivga joylang.

const sonlar2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Natija: [1, 3, 5, 7, 9]

const newToqSonlar = [];

sonlar2.forEach(function (son) {
  if (son % 2 !== 0) {
    newToqSonlar.push(son);
  }
});
// console.log(newToqSonlar);

let nums1 = [1, 2, 3];
let nums2 = [2, 5, 6];

const merge = function (...nums) {
  let numss = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      numss.push(nums[i][j]);
      numss.sort();
    }
  }
  return numss;
};
// console.log(merge(nums1, nums2));

// Kirish: nums1 = [1], m = 1, nums2 = [], n = 0
//  Chiqish: [1]
//  Izoh: Biz birlashtirayotgan massivlar [1] va [].
// Birlashtirish natijasi [1].

let num1 = [1];
let num2 = 1;

function editNum(...array) {
  let element = [];
  let numbers;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "object") {
      for (let n = 0; n < array[i].length; n++) {
        numbers = array[i][n];
      }
    } else if (!element.includes(array[i])) {
      if (numbers !== array[i]) {
        element.push(array[i]);
      }
    }
  }
  element.push(numbers);
  console.log(numbers);
  return element;
}
// console.log(editNum(num1, num2));

// ixtiyoriy array yarating va uni ichidagi eng katta sonni toping

let arr1 = [2, 5, 9, 7, 6, 5, 3, 5];

function bigNumber(num) {
  let newArr = [0];
  for (let i = 0; i < num.length; i++) {
    if (newArr < num[i]) {
      newArr = num[i];
    }
  }
  return newArr;
}
// console.log(bigNumber(arr1));

let arrr = [0];
arr.forEach(function (i) {
  if (arrr < i) {
    arrr = i;
  }
});
// console.log(arrr);

let arrayrevers = [];
arr.forEach(function (i) {
  arrayrevers.unshift(i);
});
// console.log(arrayrevers);

function revernum(num) {
  let newArr = [];
  for (let i = num.length - 1; i >= 0; i--) {
    newArr.push(num[i]);
  }
  return newArr;
}
// console.log(revernum(arr));


// Ixtiyoriy n ta element dan iborat bo’lgan array yarating va uning ichidagi dublicate bo’lgan item larni o’chiring:



let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function dublicate(num){
  let newArr = [];
  for (let i = 0; i < num.length; i++) {
    if(!newArr.includes(num[i])){
      newArr.push(num[i])
    }
  }
  return newArr;
}
console.log(dublicate(arrs));

let aris =[]

arrs.forEach(function (i) {
  if(!aris.includes(i)){
    aris.push(i)
  }
})
console.log(aris)
