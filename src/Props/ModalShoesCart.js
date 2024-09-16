import React, { Component } from 'react'

export default class ModalShoesCart extends Component {

    renderShoesCart = () => {
        // Nhận dữ liệu array shoesCart từ ShoesStore
        let {shoesCart} = this.props;
        return shoesCart.map((shoes, index)=>{
            return <tr key={index}>
                <td> {shoes.maSP} </td>
                <td> <img src={shoes.hinhAnh} alt={shoes.tenSP} style={{width:35}} />  </td>
                <td> {shoes.tenSP} </td>
                <td> {shoes.soLg} </td>
                <td> {shoes.donGia.toLocaleString()} </td>
                <td> {shoes.donGia * shoes.soLg} </td>
                <td>  </td>
            </tr>
        })
    }
    render() {
        return (
            <div>
                <div className="modal fade" id="modelCart" tabIndex={-1} role="dialog" aria-labelledby="modelCartId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-light">
                                <h5 className="modal-title">Đơn hàng của bạn</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                
                                <table className="table small">
                                    <thead>
                                        <tr>
                                            <th>Mã</th>
                                            <th>Ảnh</th>
                                            <th>Sản phẩm</th>
                                            <th>SL</th>
                                            <th>Giá</th>
                                            <th>Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderShoesCart()}
                                    </tbody>
                                </table>


                            </div>
                            <div className="modal-footer bg-light">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
