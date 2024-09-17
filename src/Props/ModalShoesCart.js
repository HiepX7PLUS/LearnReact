import React, { Component } from 'react'

export default class ModalShoesCart extends Component {

    //CSS cho nút tăng giảm số lượng
    cssDecrease = {
        padding: '0 8px',
        marginRight: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px'
    };
    cssIncrease = {
        padding: '0 8px',
        marginLeft: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px'
    };

    renderShoesCart = () => {
        // Nhận dữ liệu array shoesCart từ ShoesStore
        let {shoesCart} = this.props;
        return shoesCart.map((shoes, index)=>{
            return <tr key={index} className='align-middle'>
                <td> {shoes.maSP} </td>
                <td> <img src={shoes.hinhAnh} alt={shoes.tenSP} style={{width:35}} />  </td>
                <td> {shoes.tenSP} </td>
                <td>
                    <button className='btn btn-light small' style={this.cssDecrease} onClick={()=>{this.props.qtyIncDec(shoes.maSP, -1)}}> - </button> 
                    {shoes.soLg.toLocaleString()} 
                    <button className='btn btn-light small' style={this.cssIncrease} onClick={()=>{this.props.qtyIncDec(shoes.maSP, +1)}}> + </button> 
                </td>
                <td> $ {shoes.donGia.toLocaleString()} </td>
                <td> $ {(shoes.donGia * shoes.soLg).toLocaleString()} </td>
                <td> <span onClick={()=>{this.props.removeFromCart(shoes.maSP)}} style={{fontSize:'15px', color:'red', cursor:'pointer'}}><i className="fas fa-times"></i></span> </td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <div className="modal modal-lg fade" id="modelCart" tabIndex={-1} role="dialog" aria-labelledby="modelCartId" aria-hidden="true">
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
                                    <tfoot>
                                        <tr>
                                            <td colSpan={4}> </td>
                                            <td>Cộng tổng tiền:</td>
                                            <td style={{fontWeight:'bold'}}> $ {this.props.totalAmount()} </td>
                                        </tr>
                                    </tfoot>
                                </table>


                            </div>
                            <div className="modal-footer bg-light">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                <button type="button" className="btn btn-primary">Thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
