// console.log('Attached');

// min of Array
const minArray = (...numbers) => {
    let min = numbers[0] ;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]<min){
            min = numbers[i];
        }
    }
    console.log(min) ;
}

// minArray(3,4,1,5,6);
// minArray(3,2,4,7,8);
