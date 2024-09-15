import React, { Component } from 'react'
import ShoesItem from './ShoesItem'

export default class ShoesList extends Component {
    
renderListShoes = () => {
    return this.props.arrProduct.map((itemShoes, index)=>{
        return <div key={index} className='col-4 w3-animate-zoom mb-4'>
            <ShoesItem itemShoes={itemShoes} alertAddToCart={this.alertClickBuy} xemChiTiet={this.props.xemChiTiet} />
        </div>
    })
}

alertClickBuy = () => {
    alert('Đã thêm vào Đơn hàng')
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
