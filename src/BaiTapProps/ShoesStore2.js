import React, { Component } from 'react'
import ShoesList2 from './ShoesList2'
import dataShoes2 from '../Data/dataShoes.json'

export default class ShoesStore2 extends Component {

    state = {
        itemSP :{
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 1350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 1995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
          }
    }

    render() {
        return (
            <div className='container'>
                <div className="row mt-5">
                    <div className="d-flex align-items-start">
                        <div className="col-3 nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active" id="shoes-Shop-1-tab" data-bs-toggle="pill" data-bs-target="#shoes-Shop-1" type="button" role="tab" aria-controls="shoes-Shop-1" aria-selected="true">Cửa hàng</button>
                            <button className="nav-link" id="checkout-1-tab" data-bs-toggle="pill" data-bs-target="#checkout-1" type="button" role="tab" aria-controls="checkout-1" aria-selected="false">Thanh toán</button>
                            <button className="nav-link" id="your-order-1-tab" data-bs-toggle="pill" data-bs-target="#your-order-1" type="button" role="tab" aria-controls="your-order-1" aria-selected="false">Đơn hàng đã đặt</button>
                            <button className="nav-link" id="tracking-order-1-tab" data-bs-toggle="pill" data-bs-target="#tracking-order-1" type="button" role="tab" aria-controls="tracking-order-1" aria-selected="false">Tracking đơn hàng</button>
                        </div>
                        <div className="col-9 tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="shoes-Shop-1" role="tabpanel" aria-labelledby="shoes-Shop-1-tab">
                                <h4>DANH SÁCH SẢN PHẨM</h4>
                                <ShoesList2 dataShoes2={dataShoes2} />
                            </div>
                            <div className="tab-pane fade" id="checkout-1" role="tabpanel" aria-labelledby="checkout-1-tab">Chi tiết đơn hàng</div>
                            <div className="tab-pane fade" id="your-order-1" role="tabpanel" aria-labelledby="your-order-1-tab">Danh sách đơn hàng đã đặt</div>
                            <div className="tab-pane fade" id="tracking-order-1" role="tabpanel" aria-labelledby="tracking-order-1-tab">Kiểm tra trạng thái Đơn hàng</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
