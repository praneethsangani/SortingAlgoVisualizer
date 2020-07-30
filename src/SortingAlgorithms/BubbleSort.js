export async function bubbleSort(mainArray) {
    const bars = document.getElementsByClassName('array-bar');
    let swapped = false;
    let length = mainArray.length;
    do {
        swapped = false;
        for (let i = 0; i < length - 1; i++) {
            if (mainArray[i] > mainArray[i + 1]) {
                swap(mainArray, bars, i, i + 1);
                swapped = true;
            }
            bars[i + 1].style.backgroundColor = 'red';
            await new Promise(r => setTimeout(r, 1));
            bars[i + 1].style.backgroundColor = 'darkturquoise';
        }
        length--;
        bars[length].style.backgroundColor = 'green';
    } while (swapped);
    return mainArray;
}

function swap(mainArray, bars, i, j) {
    let temp = mainArray[i];
    mainArray[i] = mainArray[j];
    mainArray[j] = temp;

    temp = bars[i].style.height;
    bars[i].style.height = bars[j].style.height;
    bars[j].style.height = temp;

    temp = bars[i].style.backgroundColor;
    bars[i].style.backgroundColor = bars[j].style.backgroundColor;
    bars[j].style.backgroundColor = temp;
}