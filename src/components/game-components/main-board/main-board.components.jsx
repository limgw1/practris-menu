import React from 'react'

import { useEffect } from 'react'

import './main-board.styles.scss'

const MainBoard = () => {
  console.log("Running mainboard")
  useEffect(() => {
    console.log("Within useEffect")
    const [bw, bh] = [200, 440]

    var boardCanvas = document.getElementById("board");
    var boardContext = boardCanvas.getContext("2d");

    //Make lines less opaque
    boardContext.globalAlpha = 0.1

    function drawBoard(){
        for (var x = 0; x <= bw; x += 20) {
            boardContext.moveTo(x, 0);
            boardContext.lineTo(x, bh);
        }

        for (var y = 0; y <= bh; y += 20) {
            boardContext.moveTo(0, y);
            boardContext.lineTo(bw, y);
        }
        boardContext.strokeStyle = "white";
        boardContext.stroke();
    }
    drawBoard()
  },[])


  return (
    <div className="main-board">
      {/* Hold Board */}
      <canvas id="hold" width="80" height="80"></canvas>
      {/* Main board to render pieces */}
      <canvas id="board" width="200" height="440"></canvas>
      {/* Piece Preview */}
      <canvas id="queue" width="80" height="334"></canvas>
    </div>
  );
}

export default MainBoard