import React from 'react';
import './SortingVisualizer.css';
import {bubbleSort} from '../SortingAlgorithms/BubbleSort'
import {mergeSortTopDown} from "../SortingAlgorithms/MergeSortTopDown";
import {mergeSortBottomUp} from "../SortingAlgorithms/MergeSortBottomUp";
import {quickSort} from "../SortingAlgorithms/QuickSort";
import {insertionSort} from "../SortingAlgorithms/InsertionSort";

const NUMBER_OF_BARS = 128;
// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            isButtonDisabled: false,
            color: 'darkturquoise',
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_BARS; i++) {
            array.push(randomIntFromInterval(23, 600));
        }
        this.setState({array});
    }

    generateNewArray() {
        window.location.reload();
    }

    async resetBarColors(color) {
        const bars = document.getElementsByClassName('array-bar');
        for (let j = 0; j < NUMBER_OF_BARS; j++) {
            bars[j].style.backgroundColor = color;
        }
        await new Promise(r => setTimeout(r, ANIMATION_SPEED_MS));
    }

    async mergeSortTopDown() {
        this.resetBarColors('darkturquoise').then(() => disableButtons());
        await mergeSortTopDown(this.state.array, 0, this.state.array.length - 1, this.state.array.slice());
        this.resetBarColors('green').then(() => enableButtons());
    }

    async mergeSortBottomUp() {
        this.resetBarColors('darkturquoise').then(() => disableButtons());
        await mergeSortBottomUp(this.state.array, this.state.array.slice());
        this.resetBarColors('green').then(() => enableButtons());
    }


    async quickSort() {
        this.resetBarColors('darkturquoise').then(() => disableButtons());
        await quickSort(this.state.array, 0, this.state.array.length - 1);
        this.resetBarColors('green').then(() => enableButtons());
    }

    async insertionSort() {
        this.resetBarColors('darkturquoise').then(() => disableButtons());
        await insertionSort(this.state.array);
        this.resetBarColors('green').then(() => enableButtons());
    }

    async bubbleSort() {
        this.resetBarColors('darkturquoise').then(() => disableButtons());
        await bubbleSort(this.state.array);
        this.resetBarColors('green').then(() => enableButtons());
    }

    render() {
        const {array} = this.state;

        return (
            <div className="main">
                <div className={"buttons"}>
                    <button onClick={() => this.generateNewArray()} className={"button"}
                            style={{color: this.state.color}}>Generate New Array
                    </button>
                    <button onClick={() => this.mergeSortTopDown()} className={"button"}
                            disabled={this.state.isButtonDisabled}
                            style={{color: this.state.color}}>Merge Sort (Top Down)
                    </button>
                    <button onClick={() => this.mergeSortBottomUp()} className={"button"}
                            disabled={this.state.isButtonDisabled}
                            style={{color: this.state.color}}>Merge Sort (Bottom Up)
                    </button>
                    <button onClick={() => this.quickSort()} className={"button"}
                            disabled={this.state.isButtonDisabled}
                            style={{color: this.state.color}}>Quick Sort
                    </button>
                    <button onClick={() => this.insertionSort()} className={"button"}
                            disabled={this.state.isButtonDisabled}
                            style={{color: this.state.color}}>Insertion Sort
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
    for (let i = 1; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].style.color = 'red';
    }
}

function enableButtons() {
    const buttons = document.getElementsByClassName("button");
    for (let i = 1; i < buttons.length; i++) {
        buttons[i].disabled = false;
        buttons[i].style.color = 'darkturquoise';
    }
}