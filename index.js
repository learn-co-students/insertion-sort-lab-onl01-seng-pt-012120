function findMinAndRemove(array){
    let minimum = array[0];
    let minimumIndex = 0;
    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        if (array[i] < minimum) {
            minimum = array[i];
            minimumIndex = i;
        }
    }
    array.splice(minimumIndex, 1);
    return minimum;
}

function selectionSort(array){
    let newMinimum;
    let sortedArray = [];
    while (array.length != 0) {
        newMinimum = findMinAndRemove(array);
        sortedArray.push(newMinimum);
    }
    return sortedArray;
}
