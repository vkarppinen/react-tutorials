import React from 'react';
import ReactDOM from 'react-dom';

import Square from './square.js';

class Board extends React.Component {

  renderSquare(i) {
    return <Square value={this.props.squares[i]}
                   onClick={() => this.props.onClick(i) }/>;
  }

  renderBoard(size) {
    var cols = [];
    var rows = [];
    let count = 0;
    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        var elem = this.renderSquare(count);
        rows.push(elem);
        count++;
      }
      cols.push(
        <div key={count} className="board-row"> {rows} </div>
      );
      var rows = [];
    }

    return (
      <div>
        {cols}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderBoard(3)}
      </div>
    );
  }
}

export default Board;
