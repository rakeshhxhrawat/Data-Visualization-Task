const calculateMean = (dataArray) =>{

    // calculating sum of array 
    let sum = 0;
    for(let i=0;i<dataArray.length;i++){
        sum += dataArray[i];
    }

    // calculating mean and rounding off to 3 decimal places
    let mean = (sum / dataArray.length).toFixed(3);
    return mean;
}

const calculateMedian = (dataArray) =>{
    // sorting the array in order to find mean 
    let sortedArray = dataArray.sort((a,b) => a - b);

    //  finding middle element of array 
    let middle  = Math.floor(dataArray.length / 2);

    // checking if array lenght is even or odd and returning value according to that and rounding off to 3
    return dataArray.length % 2 === 0 ? ((dataArray[middle - 1] + dataArray[middle]) / 2).toFixed(3) : dataArray[middle].toFixed(3)
}

const calculateMode = (dataArray) =>{
    var newObj = {};
    // looping through each element in the array 
    dataArray.forEach(num => {
        // if the number does not exists in array as key create one and store it 
        if(!newObj[num]){
            newObj[num] = 1;
        }
        // increment the key value if it already exists 
        else{
            newObj[num] += 1;
        }
    });

    // checking for the highest value and return key 
    let highest = 0;
    let highestKeyValue = 0;
    for(let key in newObj) {
        let value = newObj[key];
        if(value >= highest) {
            highest = value;
            highestKeyValue = key;
        }
    }
    return Number(highestKeyValue).toFixed(3);
    // count amount of occurences of each number 
}

const calculateGamma = (ash,hue,magnesium) =>{
    let gamma = (ash * hue) / magnesium;
    return(Number(gamma));
}
export {calculateMean,calculateMedian,calculateMode,calculateGamma};