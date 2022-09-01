function alwaysHungry(arr){
    var count=0;
    for(var i=0; i<arr.length;i++){
        if(arr[i]==="food"){
            console.log("yummy");
            count++;
        }
    }
    if(count==0){
        console.log("I'm Hungry");
    }

}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry ([12,1215,216,18,864]);


function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);


function betterThanAverage(arr){
    var sum = 0;
    var avg = 0;
    var count1 = 0;
    for (var i =0;i<arr.length;i++){
        sum= sum+arr[i];
    }
    avg=sum/arr.length;
    for(var i =0; i<arr.length ;i++){
        if (arr[i]>avg){
            count1++;
        }
    }
    return count1;
}

var result1 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result1); 


function reverse(arr) {
    var reverseArr = [];
    for (var i=arr.length-1 ; i >= 0 ; i--){
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);


function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (var i = 2 ; i < n ; i++){
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);
