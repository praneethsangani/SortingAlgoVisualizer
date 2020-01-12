import React from 'react';
import './SortingVisualizer.css';
import {bubbleSort} from '../SortingAlgorithms/BubbleSort'

const NUMBER_OF_BARS = 210;
// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

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
            array.push(randomIntFromInterval(23, 730));
        }
        this.setState({array});
    }

    generateNewArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_BARS; i++) {
            array.push(randomIntFromInterval(23, 730));
        }
        this.setState({array});
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
                             style={{height: `${value}px`}}><p className={'barValue'} style={{visibility: 'hidden'}}>{value}</p></div>
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
    console.log(buttons);
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