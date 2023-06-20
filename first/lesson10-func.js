// function test(a,b) {
//     var x= a+b;
//     return x;
// }

// console.log(test(2,4));

function sum_arr(...arr) {
    var s=0;
    console.log(arr);
    for (let i of arr) {
        s+=i;
    }
    console.log(s);
}

sum_arr(1,2,3,3);