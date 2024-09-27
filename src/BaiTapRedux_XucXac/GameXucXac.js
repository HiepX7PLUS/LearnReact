import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../BaiTapRedux_XucXac/GameXucXac.css'
import Dice from './Dice';
import DiceMetric from './DiceMetric';

class GameXucXac extends Component {
  render() {
    return (
      <div>
        <div className="gameDice">
            <div className='text-center text-white mt-5 display-4'>GAME ĐỔ XÚC XẮC</div>
            <div className="row text-center d-flex align-items-center">
                <div className="col-3 text-center"> 
                    <button className='btnUserBet' onClick={()=>{ this.props.selectedBet('Tài') }}>Tài</button>
                </div>
                <div className="col-6 text-center"> 
                  <Dice/> 
                </div>
                <div className="col-3 text-center"> 
                    <button className='btnUserBet' onClick={()=> { this.props.selectedBet('Xỉu') }}>Xỉu</button>
                </div>
            </div>
            <div className="row text-center text-white mt-5" style={{fontSize:30}}>
                <DiceMetric/>
            </div>
        </div>
      </div>
    )
  }
}

// //Nhận state
// const mapStateToProps = (state) => {
//   return {
//     userSelected: state.reducerDice.userSelected
//   }
// }

// Hàm tạo hành động gửi store
const mapDispatchToProps = (dispatch) => {
  return {
    selectedBet : (slectedItem) => {
      let action = {
        type: 'SELECTED_BET',
        slectedItem
      }
      dispatch(action)
    }
  }
}

export default connect (null, mapDispatchToProps)(GameXucXac);
