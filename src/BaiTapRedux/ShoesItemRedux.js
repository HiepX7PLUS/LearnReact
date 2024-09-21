import React, { Component } from 'react'

//import thư viện connect để kết nối với store
import { connect } from 'react-redux';

class ShoesItemRedux extends Component {
  render() {
    // Nhận dữ liệu từ comp ShoesListRedux (được map từ arrdateShoes của comp ShoesStoreRedux)
    let {product} = this.props; 
    
    return (
      <div>
            <div className="card text-dark bg-white mb-4">
                <img className="card-img-top" src={product.image} alt={product.name} style={{height:250, cursor:'pointer'}}  data-bs-toggle="modal" data-bs-target="#modalShoesDetailId" onClick={()=>{this.props.viewShoesDetail(product)}} />
                <div className="card-body small">
                    <h4 className="card-title" style={{cursor:'pointer'}} data-bs-toggle="modal" data-bs-target="#modalShoesDetailId"> {product.name} </h4>
                    <p className="card-text"> {product.price} </p>
                    <button className='w3-button w3-black w3-hover-red w3-round' onClick={()=>{ this.props.addToCart(product) }}>Mua hàng <i className="fas fa-cart-arrow-down"></i></button>
                </div>
            </div>

      </div>
    )
  }
}

// Hàm đẩy dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
    return {
        // Gửi đi Hàm thêm sp vào modal Giỏ hàng (Hàm này chính là hàm được gắn trong onClick)
        addToCart : (sanpham)=>{
            // Tạo ra một SP giỏ hàng (mà SP giỏ hàng là một object giống với object trong mảng stateCart.cart ở trên store)
            let itemCartAdapt = {
                maSP: sanpham.id,
                hinhAnh: sanpham.image,
                tenSP: sanpham.name,
                soLg: 1,
                donGia: sanpham.price
            }

            // Tạo ra một action chứa object vừa tạo itemCart
            let action = {
                type: 'ADD_TO_CART', // thuộc tính bắt buộc của action
                itemCartAdapt
            }

            // Dùng hàm dispatch từ redux, để gửi dữ liệu lên ReducerShoesCart của store
            dispatch(action);
        },

        // Hàm thêm sp vào modal Xem Chi tiết
        viewShoesDetail : (item) => {
            let itemDetailAdapt = {
                maSP: item.id,
                hinhAnh: item.image,
                tenSP: item.name,
                donGia: item.price,
                soLg: item.quantity,
                moTa: item.description
            }
            let action = {
                type: 'DETAIL_ITEM_SHOES',
                itemDetailAdapt
            }
            dispatch(action)
        }
        
    }
}

export default connect (null, mapDispatchToProps)(ShoesItemRedux) //Ở đây gửi đi và không nhận vè nên để giá trị 'null'