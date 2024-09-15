import React, { Component } from 'react'

export default class ShoesItem extends Component {
  render() {
    // Nhận dataItemShoes từ comp ShoesList
    let {itemShoes} = this.props;

    return (
      <div>
            <div className="card text-dark bg-white">
                <img className="card-img-top" src={itemShoes.image} alt={itemShoes.name} style={{cursor:'pointer'}}  data-bs-toggle="modal" data-bs-target="#modalDetailShoes"/>
                <div className="card-body small">
                    <h4 className="card-title" style={{height:'50px', cursor:'pointer'}} data-bs-toggle="modal" data-bs-target="#modalDetailShoes"> {itemShoes.name} </h4>
                    <p className="card-text"> $ {itemShoes.price} </p>
                    <button className='w3-button w3-black w3-hover-red w3-round' style={{cursor:'pointer'}}  data-bs-toggle="modal" data-bs-target="#modalDetailShoes" onClick={()=>{
                      this.props.xemChiTiet(itemShoes)
                      }}>Detail</button>
                    <button className='w3-button w3-black w3-hover-red w3-round' onClick={()=>{
                      this.props.alertAddToCart()
                      }}>Add to Cart <i className="fas fa-cart-arrow-down"></i> </button>
                </div>
            </div>
      </div>
    )
  }
}
