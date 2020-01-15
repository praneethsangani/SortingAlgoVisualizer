import React from 'react';
import './SortingVisualizer.css';
import {bubbleSort} from '../SortingAlgorithms/BubbleSort'
import {mergeSort} from "../SortingAlgorithms/MergeSort";

const NUMBER_OF_BARS = 50;
// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            isButtonDisabled: false,
            color: '#bbe1fa',
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_BARS; i++) {
            let rand = randomIntFromInterval(23, 600);
            while (arrayContains(array, rand)) {
                rand = randomIntFromInterval(23, 600);
            }
            array.push(rand);
        }
        this.setState({array});
    }

    generateNewArray() {
        this.resetArray();
        const bars = document.getElementsByClassName('array-bar');
        for (let j = 0; j < NUMBER_OF_BARS; j++) {
            bars[j].style.backgroundColor = '#0f4c75';
        }
    }

    async resetBarColors() {
        const bars = document.getElementsByClassName('array-bar');
        for (let j = 0; j < NUMBER_OF_BARS; j++) {
            bars[j].style.backgroundColor = '#0f4c75';
        }
        await new Promise(r => setTimeout(r, ANIMATION_SPEED_MS));
    }

    mergeSort() {
        this.resetBarColors().then(() => disableButtons());
        mergeSort(this.state.array, this.state.array.slice()).then(() => enableButtons());
    }

    quickSort() {

    }

    heapSort() {

    }

    bubbleSort() {
        this.resetBarColors().then(() => disableButtons());
        bubbleSort(this.state.array, ANIMATION_SPEED_MS).then(() => enableButtons());
    }

    render() {
        const {array} = this.state;

        return (
            <div className="main">
                <div className={"buttons"}>
                    <button onClick={() => this.generateNewArray()} className={"button"}
                            disabled={this.state.isButtonDisabled}
                            style={{color: this.state.color}}>Generate New Array
                    </button>
                    <button onClick={() => this.mergeSort()} className={"button"}
                            disabled={this.state.isButtonDisabled}
                            style={{color: this.state.color}}>Merge Sort
                    </button>
                    <button onClick={() => this.quickSort()} className={"button"}
                            disabled={this.state.isButtonDisabled}
                            style={{color: this.state.color}}>Quick Sort
                    </button>
                    <button onClick={() => this.heapSort()} className={"button"}
                            disabled={this.state.isButtonDisabled}
                            style={{color: this.state.color}}>Heap Sort
                    </button>
                    <button onClick={() => this.bubbleSort()} className={"button"}
                            disabled={this.state.isButtonDisabled}
                            style={{color: this.state.color}}>Bubble Sort
                    </button>
                </div>
                <div className={"array-container"}>
                    {array.map((value, idx) => (
                        <div className="array-bar" key={idx}
                             style={{height: `${value}px`}}><p className={'barValue'}
                                                               style={{visibility: 'hidden'}}>{value}</p></div>
                    ))}
                </div>

            </div>
        );
    }
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function disableButtons() {
    const buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].style.color = 'red';
    }
}

function enableButtons() {
    const buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        buttons[i].style.color = '#bbe1fa';
    }
}

function arrayContains(array, rand) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === rand) return true;
    }
    return false;
}