function algo1(a,x) {
    var array;
    var x=0;
    for (let index = 0; index < 5; index++) {
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 3; j++) {
               
                var array2 = [i,j];
                console.log(array2);
                x++;
                break;
            }
        }        
    }
       
    return array2,array;
}
function algo2(){
    var array = [[1,2,3],[4,5,6]]
    console.log(algo1(array,0));
}
 
algo2();