import React, { Component } from 'react'
import arrDataShoes from '../Data/dataShoes.json'
import ShoesList from './ShoesList'
import ModalShoesItem from './ModalShoesItem'
import ModalShoesCart from './ModalShoesCart'

export default class ShoesStore extends Component {

  state = {
    shoesDetail: {
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

  // BẤM XEM CHI TIẾT
  xemChiTiet = (newShoes) => {
    this.setState(
      { shoesDetail: newShoes },
      () => { console.log(newShoes) }
    )
  }

  // THÊM SẢN PHẨM VÀO GIỎ HÀNG
  addToCart = (spShoesAdd) => {
    // Phân tích:
    // Mỗi một lần click, hàm này sẽ nhận về một sản phẩm.
    // Hàm này khác với hàm xemChiTiet ở chỗ: Hàm này phải lưu lại những sản phẩm đã click, tức là một mảng gồm các object Sản phẩm đã click chứ không chỉ là 1 sản phẩm như hàm xemChiTiet.
    // Có 2 cách để xử lý:
    // - Cách 1: Nhận được sản phẩm đã click nào thì ta push thẳng vào thằng state.shoesCart đang ở trong Giỏ hàng, rồi setState cho state.shoesCart
    // - Cách 2: Tạo một mảng các sản phẩm đã click, rồi setState cho state.shoesCart ban đầu chính là cái mảng đó.
    // Lưu ý: Cả hai cách đều cần phải Kiểm tra xem sản phẩm trong giỏ hàng (đã được click) đã có chưa để thêm mới hoặc tăng số lượng (nếu đã có)

    // Tạo một biến object để nhận một số giá trị cần thiết cho Sản phẩm trong giỏ hàng từ Sản phẩm click vào.
    let shoesClickedAdapter = {
      maSP: spShoesAdd.id,
      hinhAnh: spShoesAdd.image,
      tenSP: spShoesAdd.name,
      soLg: 1,
      donGia: spShoesAdd.price
    }

    // ////// Cách 1:
    // Khi chưa có tìm trùng lặp:
    // this.state.shoesCart.push(shoesClickedAdapter)
    // this.setState({shoesCart: this.state.shoesCart})

    // Cách 1 (Khi đã tìm trùng lặp): 
    let index = this.state.shoesCart.findIndex(spGH => spGH.maSP === shoesClickedAdapter.maSP);
    if (index !== -1) {
      //Tìm thấy sản phẩm trong list -> Tăng số lượng
      this.state.shoesCart[index].soLg += 1;
    } else {
      // Không tìm thấy sản phẩm trong list -> Thêm mới
      this.state.shoesCart.push(shoesClickedAdapter);
    }

    this.setState({
      shoesCart: this.state.shoesCart
    })

    // ////// Cách 2 (Khi Chưa có tìm trùng lặp):
    // let arrCart = [...this.state.shoesCart, shoesClickedAdapter];
    // this.setState({shoesCart: arrCart})

    alert("Đã thêm vào Đơn hàng");
    console.log(spShoesAdd)
  }

  // XOÁ SẢN PHẨM KHỎI GIỎ HÀNG
  removeFromCart = (maSPXoa) => {
    console.log(maSPXoa);
    // Duyệt tìm trong mảng state.shoesCart có item nào có mã sp bằng với đầu vào maSPXoa - là mã sản phẩm đầu vào
    let index = this.state.shoesCart.findIndex(shoesClickedAdapter2 => shoesClickedAdapter2.maSP === maSPXoa);
    if(index !== -1){
      // Tìm thấy -> Xoá tại vị trí index đó, với số lượng phần tử là 1
      this.state.shoesCart.splice(index, 1);
    }
    
    this.setState({
      shoesCart: this.state.shoesCart
    })
  }

  // TÍNH TỔNG SẢN PHẨM TRONG GIỎ HÀNG
  slShoesCart = () => {
    // // Cách 1: Dùng for
    // let sumSPCart = 0;
    // for (let i=0; i<this.state.shoesCart.length; i++){
    //   //Mỗi lần duyệt sẽ lấy ra một phần tử trong mảng
    //   let item = this.state.shoesCart[i];

    //   // Cộng dồn với sumSPCart
    //   sumSPCart += item.sumSPCart;
    // }
    // return sumSPCart;


    // Cách 2: Dùng reduce (hàm, giá-trị-khởi-tạo)
    return this.state.shoesCart.reduce(
      (sumSPCart, item, index)=>{
        return sumSPCart += item.soLg;
      }, // Mỗi lần duyệt sẽ lấy ra số lượng của một sản phẩm item rồi cộng dồn
      0 // Giá trị khởi tạo ban đầu
    ).toLocaleString();
  }

  // NÚT TĂNG GIẢM SỐ LƯỢNG 
  qtyIncDec = (maSPDecInc, number) => {
    // Duyệt tìm trong mảng shoesCart tìm các item nào có mã sp bằng với mã sản phẩm đầu vào maSPDecInc
    let index = this.state.shoesCart.findIndex(itemSP => itemSP.maSP === maSPDecInc);
    if (index !== -1){
      if(this.state.shoesCart[index].soLg <=1 && number === -1){
        alert('Số lượng tổi thiểu bằng 1')
        return;
      }
      // Action 
      this.state.shoesCart[index].soLg += number;
    }
    this.setState({
      shoesCart: this.state.shoesCart
    })
  }

  // TÍNH CỘNG TỔNG TIỀN ĐƠN HÀNG
  totalAmount = () => {
    return this.state.shoesCart.reduce((total, item, index) => {
        return total += item.soLg * item.donGia;
      }, 
    0).toLocaleString();
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
                  <div className='col-md-3 text-end'> <button type='button' className='btn btn-light' style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#modelCart"> Đơn hàng ({this.slShoesCart()} sp) <i className="fas fa-caret-square-down"></i> </button> </div>
                </div>

                <ShoesList arrDataShoes={arrDataShoes} xemChiTiet={this.xemChiTiet} addToCart={this.addToCart} />
                <ModalShoesItem contentShoes={this.state.shoesDetail} />
                <ModalShoesCart shoesCart={this.state.shoesCart} removeFromCart={this.removeFromCart} qtyIncDec={this.qtyIncDec} totalAmount={this.totalAmount} />

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
