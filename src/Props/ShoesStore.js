import React, { Component } from 'react'
import arrDataShoes from '../Data/dataShoes.json'
import ShoesList from './ShoesList'
import ModalShoesItem from './ModalShoesItem'
import ModalShoesCart from './ModalShoesCart'

export default class ShoesStore extends Component {

  state = {
    shoesDetail : {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    }, 
    shoesCart: []
  }

  // Hàm xử lý khi bấm Xem chi tiết
  xemChiTiet = (newShoes) => {
    this.setState(
      {shoesDetail : newShoes},
      ()=>{console.log(newShoes)}
    )
  }

  // Xử lý khi Bấm Add to Cart
  addToCart = (spShoes) => {
    console.log(spShoes)
    // alert("Đã thêm vào Đơn hàng")
    // Mỗi một lần click, hàm này sẽ nhận về một sản phẩm.
    // Hàm này khác với hàm xemChiTiet ở chỗ: Hàm này phải lưu lại những sản phẩm đã click, tức là một mảng gồm các object Sản phẩm đã click chứ không chỉ là 1 sản phẩm như hàm xemChiTiet.
    // Có 2 cách để xử lý:
    // - Cách 1: Tạo một mảng các sản phẩm đã click, rồi setState cho state.shoesCart ban đầu chính là cái mảng đó.
    // - Cách 2: Nhận được sản phẩm đã click nào thì ta push thẳng vào thằng state.shoesCart đang ở trong Giỏ hàng, rồi setState cho state.shoesCart

    // Tạo một biến object để nhận một số giá trị cần thiết cho Sản phẩm trong giỏ hàng từ Sản phẩm click vào.
    let shoesAdapter = {
      maSP : spShoes.id,
      hinhAnh: spShoes.image,
      tenSP: spShoes.name,
      soLg: 1,
      donGia: spShoes.price
    }

    // Cách 1: 
    let arrCart = [...this.state.shoesCart, shoesAdapter];
    this.setState({shoesCart: arrCart})

    // // Cách 2:
    // this.state.shoesCart.push(shoesAdapter)
    // this.setState({shoesCart: this.state.shoesCart})

    
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
                  <div className='col-md-3 text-end'> <button type='button' className='btn btn-light' style={{cursor:'pointer'}}  data-bs-toggle="modal" data-bs-target="#modelCart"> Đơn hàng (0 sp) <i className="fas fa-caret-square-down"></i> </button> </div>
                </div>

                <ShoesList arrDataShoes={arrDataShoes} xemChiTiet={this.xemChiTiet} addToCart={this.addToCart} />
                <ModalShoesItem contentShoes={this.state.shoesDetail} />
                <ModalShoesCart shoesCart={this.state.shoesCart} />
                
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
