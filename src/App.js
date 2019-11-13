import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: ''
    }
  }

  indexOf = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            this.setState({results: i+1});
            return i;
        }
    }
    console.log('no result!');
    this.setState({results: 'no result'})
    return -1;
  };
  
  
  binarySearch = (array, value, start, end, counter=0) => {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
    counter++

    if (start > end) {
        this.setState({results: 'no results'});
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];
    console.log(start, end);
    if (item == value) {
        this.setState({results: counter})
        return index;
    }
    else if (item < value) {
        return this.binarySearch(array, value, index + 1, end, counter);
    }
    else if (item > value) {
        return this.binarySearch(array, value, start, index - 1, counter);
    }
  this.setState({results: 'no results'});
};
  render() {
  let string = `89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5`;
  let arr = string.split(' ').sort();
  let newArr = [];
  arr.forEach(number => {
    newArr.push(Number(number));
  })

  return (
    <div className="App">
      <h1>Search Problem</h1>
      <input type="text" className="numberBox" />

      <button type="submit" value="linear" onClick={() => this.indexOf(newArr, document.getElementsByClassName('numberBox')[0].value)}>Linear Search</button>
      <button type="submit" value="binary" onClick={() => this.binarySearch(newArr, document.getElementsByClassName('numberBox')[0].value)}>Binary Search</button>

      <h2>Results</h2>



      <p>{this.state.results}</p>
    </div>
    );
  }
}

export default App;
