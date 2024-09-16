import React, { Component } from 'react'
import ShoesItem from './ShoesItem'

export default class ShoesList extends Component {
    
renderListShoes = () => {
    return this.props.arrDataShoes.map((itemShoes, index)=>{
        return <div key={index} className='col-4 w3-animate-zoom mb-4'>
            <ShoesItem itemShoes={itemShoes} xemChiTiet={this.props.xemChiTiet}  addToCart={this.props.addToCart} />
        </div>
    })
}

  render() {
    return (
      <div className='container'>
        <div className='row'>
            {this.renderListShoes()}
        </div>
      </div>
    )
  }
}
