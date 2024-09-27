import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dice extends Component {

  renderDice = () => {
    return this.props.arrDice.map((item, index)=>{
      return <img key={index} className='dice' src={item.img}  alt="dice" />
    })
  }

  render() {
    return (
      <div>
        {this.renderDice()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    arrDice : state.reducerDice.arrDice
  }
}

export default connect (mapStateToProps)(Dice)
