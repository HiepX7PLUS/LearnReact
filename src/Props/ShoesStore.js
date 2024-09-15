import React, { Component } from 'react'
import arrDataShoes from '../Data/dataShoes.json'
import ShoesList from './ShoesList'
import ModalShoesItem from './ModalShoesItem'
import ModalShoesCart from './ModalShoesCart'

export default class ShoesStore extends Component {

  stateShoes = {
    shoesDetail : {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    }
  }
  xemChiTiet = (newShoes) => {
    this.setState(
      {shoesDetail : newShoes},
      ()=>{console.log(newShoes)}
    )
  }

  render() {
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className="d-flex align-items-start">
            <div className="col-md-3 nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Cửa hàng</button>
              <button className="nav-link" id="v-pills-product-tab" data-bs-toggle="pill" data-bs-target="#product" type="button" role="tab" aria-controls="v-pills-product" aria-selected="false">Thanh toán</button>
            </div>
            <div className="col-md-9 tab-content" id="tabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                
                <div className='row mb-5'>
                  <div className='col-md-9'><h4>DANH SÁCH SẢN PHẨM</h4></div>
                  <div className='col-md-3 text-end'> <button type='button' className='btn btn-light' style={{cursor:'pointer'}}  data-bs-toggle="modal" data-bs-target="#modelCart"> Đơn hàng (0 sp) <i class="fas fa-caret-square-down"></i> </button> </div>
                </div>

                <ShoesList arrProduct={arrDataShoes} xemChiTiet={this.xemChiTiet} />
                <ModalShoesItem contentShoes={this.stateShoes.shoesDetail} />
                <ModalShoesCart/>
                
              </div>
              <div className="tab-pane fade" id="product" role="tabpanel" aria-labelledby="v-pills-product-tab">
                Chi tiết Đơn hàng
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
