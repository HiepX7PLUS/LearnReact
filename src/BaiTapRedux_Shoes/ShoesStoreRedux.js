import React, { Component } from 'react'
import ShoesListRedux from './ShoesListRedux'
import arrdateShoes from '../Data/dataShoes.json'
import ModalShoesCartRedux from './ModalShoesCartRedux'
import ModalShoesDetailRedux from './ModalShoesDetailRedux'

// import thư viện connect để kết nối với store
import { connect } from 'react-redux'

class ShoesStoreRedux extends Component {
  
  //Viết hàm đếm số sản phẩm
  sumItemCart = () => {
    return this.props.cart.reduce((tong,item,index)=>{
        return tong += item.soLg;
    },0);
  }

  render() {
    return (
      <div className='container mt-3'>
        <div className="row">
                <div className="d-flex">
                    <div className="col-3 nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="store-redux-tab" data-bs-toggle="pill" data-bs-target="#store-redux" type="button" role="tab" aria-controls="store-redux" aria-selected="true">Cửa hàng</button>
                        <button className="nav-link" id="checkout-redux-tab" data-bs-toggle="pill" data-bs-target="#checkout-redux" type="button" role="tab" aria-controls="checkout-redux" aria-selected="false">Thanh toán</button>
                        <button className="nav-link" id="my-orders-redux-tab" data-bs-toggle="pill" data-bs-target="#my-orders-redux" type="button" role="tab" aria-controls="my-orders-redux" aria-selected="false">Đơn hàng đã đặt</button>
                        <button className="nav-link" id="tracking-order-redux-tab" data-bs-toggle="pill" data-bs-target="#tracking-order-redux" type="button" role="tab" aria-controls="tracking-order-redux" aria-selected="false">Trạng thái đơn hàng</button>
                    </div>
                    <div className="col-9 tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="store-redux" role="tabpanel" aria-labelledby="store-redux-tab">
                            <div className="row d-flex align-justify-center mb-2">
                                <div className="col-9"> <h4>DANH SÁCH SẢN PHẨM</h4> </div>
                                <div className="col-3 text-end" style={{cursor:'pointer'}}> 
                                    <button className='btn btn-light' data-bs-toggle="modal" data-bs-target="#modalCartReDuxId">
                                        <i className="fas fa-cart-arrow-down"></i> Đơn hàng ({this.sumItemCart()} sp) <i className="fas fa-chevron-down"></i>
                                    </button> 
                                </div>
                            </div>
                            <ModalShoesCartRedux />
                            <ModalShoesDetailRedux />
                            <ShoesListRedux arrdateShoes={arrdateShoes} />
                            
                        </div>
                        <div className="tab-pane fade" id="checkout-redux" role="tabpanel" aria-labelledby="checkout-redux-tab">Chi tiết đơn hàng</div>
                        <div className="tab-pane fade" id="my-orders-redux" role="tabpanel" aria-labelledby="my-orders-redux-tab">Danh sách Đơn hàng đã đặt</div>
                        <div className="tab-pane fade" id="tracking-order-redux" role="tabpanel" aria-labelledby="tracking-order-redux-tab">Kiểm tra Trạng thái Đơn hàng</div>
                    </div>
                </div>

        </div>
      </div>
    )
  }
}

// Hàm nhận state redux chuyển đổi thành props của component
const mapStateToProps = (state) => {
    return {
        cart : state.stateCart.cart
    }
}

export default connect (mapStateToProps) (ShoesStoreRedux)
