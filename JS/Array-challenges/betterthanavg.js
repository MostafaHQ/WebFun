function betterThanAverage(arr){
    var sum = 0;
    var avg=0;
    for (var i =0;i<arr.length;i++){
        sum= sum+arr[i];
    }
    avg=sum/arr.length;
    var count1 = 0;
    for (var i =0;i<arr.length;i++){
        if (arr[i]>avg){
            count1++;
        }
    return count1;
}
}

var result1 = betterThanAverage([6, 8,12 , 10, -2, 5, 9]);
console.log(result1); 