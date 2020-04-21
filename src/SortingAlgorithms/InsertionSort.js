export async function insertionSort(mainArray) {
    const bars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < mainArray.length; i++) {
        let compareIndex = i - 1;
        let keyIndex = i;

        if (compareIndex < 0 || mainArray[compareIndex] <= mainArray[keyIndex]) {
            bars[keyIndex].style.backgroundColor = 'red';
            await new Promise(r => setTimeout(r, 5));
            bars[keyIndex].style.backgroundColor = 'darkturquoise';
        }

        while (compareIndex >= 0 && mainArray[compareIndex] > mainArray[keyIndex]) {
            bars[keyIndex].style.backgroundColor = 'red';
            await new Promise(r => setTimeout(r, 5));
            swap(mainArray, bars, compareIndex, keyIndex);

            keyIndex = compareIndex;
            compareIndex--;
        }
        bars[keyIndex].style.backgroundColor = 'darkturquoise';
        await new Promise(r => setTimeout(r, 5));
    }
    return mainArray;
}

function swap(mainArray, bars, compareIndex, keyIndex) {
    let temp = mainArray[keyIndex];
    mainArray[keyIndex] = mainArray[compareIndex];
    mainArray[compareIndex] = temp;

    temp = bars[keyIndex].style.height;
    bars[keyIndex].style.height = bars[compareIndex].style.height;
    bars[compareIndex].style.height = temp;

    temp = bars[keyIndex].style.backgroundColor;
    bars[keyIndex].style.backgroundColor = bars[compareIndex].style.backgroundColor;
    bars[compareIndex].style.backgroundColor = temp;
}