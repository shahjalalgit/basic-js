function fibonacci(n){
    if(n==0){
        return [0];
    }
    else if(n==1){
        return [0,1];
    }
    else{
        var  previousFibo = fibonacci(n-1);
        var nextFibo = previousFibo[n-1] + previousFibo[n-2];
        previousFibo.push(nextFibo);
        return previousFibo;
    }
}

var m=10;
var n=-3;
console.log(m/n*10);