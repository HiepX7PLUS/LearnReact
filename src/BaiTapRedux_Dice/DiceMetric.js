import React, { Component } from 'react'
import { connect } from 'react-redux'

class DiceMetric extends Component {
  render() {
    return (
      <div>
        <p>BẠN ĐANG CHỌN: <span style={{ color: 'rgb(138 132 247)' }}> {this.props.userSelected} </span></p>
        <p><button className='btn btn-success p-3' onClick={()=>{ this.props.playGame() }}> Play Game </button></p>
        <p># Số bàn Thắng: <span className='metricGame'> {this.props.winTimes} </span>. # Số lượt chơi: <span className='metricGame'> {this.props.playTimes} </span></p>
      </div>
    )
  }
}
//Nhận state
const mapStateToProps = (state) => {
  return {
    userSelected: state.reducerDice.userSelected,
    playTimes: state.reducerDice.playTimes,
    winTimes: state.reducerDice.winTimes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame : () => {
      let action = {
        type : 'PLAY_GAME'
      }
      dispatch(action)
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (DiceMetric)