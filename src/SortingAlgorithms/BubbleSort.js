export async function bubbleSort(array, ANIMATION_SPEED_MS) {
    const bars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swapValues(array, bars, j, ANIMATION_SPEED_MS);
                await new Promise(r => setTimeout(r, ANIMATION_SPEED_MS));
            } else {
                bars[j + 1].style.backgroundColor = 'red';
                bars[j].style.backgroundColor = '#0f4c75';
                await new Promise(r => setTimeout(r, ANIMATION_SPEED_MS));
            }
            if (j + 1 === array.length - i - 1) {
                bars[j + 1].style.backgroundColor = 'green';
            }
        }
    }
    await new Promise(r => setTimeout(r, ANIMATION_SPEED_MS));
    bars[0].style.backgroundColor = 'green';
}

function swapValues(array, bars, index) {
    const barValues = document.getElementsByClassName('barValue');
    let temp_height = array[index + 1];
    array[index + 1] = array[index];
    array[index] = temp_height;
    temp_height = bars[index + 1].style.height;
    bars[index + 1].style.height = bars[index].style.height;
    bars[index].style.height = temp_height;
    bars[index + 1].style.backgroundColor = 'red';
    bars[index].style.backgroundColor = '#0f4c75';
    temp_height = barValues[index + 1].textContent;
    barValues[index + 1].textContent = barValues[index].textContent;
    barValues[index].textContent = temp_height;
}