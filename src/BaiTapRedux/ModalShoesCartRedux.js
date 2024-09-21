import React, { Component } from 'react'

// import thư viện connect để lấy dữ liệu từ store về
import {connect} from 'react-redux'

//Lưu ý: component nào lấy dữ liệu từ store về thì xoá 'export default'  và chuyển xuống dưới cùng để export

class ModalShoesCartRedux extends Component {

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


  // Hàm cộng tổng tiền
  totalAmount = () => {
    return this.props.cart.reduce((tong,item,index)=>{
        return tong += item.soLg * item.donGia
    },0).toLocaleString();
  }

  
  render() {
    // console.log(this.props.cart)
    return (
        <div>
            {/* Modal */}
            <div className="modal modal-lg fade" id="modalCartReDuxId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content small">
                        <div className="modal-header bg-light">
                            <h5 className="modal-title">Đơn hàng bạn đặt</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Ảnh</th>
                                        <th>Tên</th>
                                        <th>SL</th>
                                        <th>Đơn giá</th>
                                        <th>Thành tiền</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.cart.map((product, index)=>{
                                        return <tr className='align-middle' key={index}>
                                            <td> {product.maSP} </td>
                                            <td> <img src={product.hinhAnh} alt={product.tenSP} style={{width:50}} /> </td>
                                            <td> {product.tenSP} </td>
                                            <td> 
                                                <button className='btn btn-light small' style={this.cssDecrease} onClick={()=>{ this.props.incDecQuantity(product.maSP, -1) }}> - </button>
                                                {product.soLg.toLocaleString()} 
                                                <button className='btn btn-light small' style={this.cssIncrease} onClick={()=>{ this.props.incDecQuantity(product.maSP, +1) }}> + </button>
                                            </td>
                                            <td> $ {product.donGia.toLocaleString()} </td>
                                            <td> $ {(product.soLg * product.donGia).toLocaleString()} </td>
                                            <td> <span style={{fontSize:15, color:'red', cursor:'pointer'}} onClick={()=>{this.props.removeFromCart(product.maSP)}}><i className="fas fa-times"></i></span> </td>
                                        </tr>
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={4}></td>
                                        <td>Cộng tiền:</td>
                                        <td style={{fontWeight:'bold'}}> $ { this.totalAmount() } </td>
                                    </tr>
                                </tfoot>
                            </table>

                        </div>
                        <div className="modal-footer bg-light">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng lại</button>
                            <button type="button" className="btn btn-primary">Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
  }
}

// Hàm lấy state redux biến đổi thành props của component
const mapStateToProps = (state) => { // state ở đây chính là state tổng (rootReducer) của store chứa các state con
    return {
        // props mới của component (giả sử đặt tên là cart). stateCart là state con (khai báo ở rootReducer.js), cart nằm trong stateCart (setup ở trong ReducerShoesCart.js)
        cart: state.stateCart.cart
    }
}

// Hàm đẩy dữ liệu lên reducerShoesCart
const mapDispatchToProps = (dispatch) => {
    return { //Gửi đi 1 hàm
        //Hàm xoá item trong giỏ hàng
        removeFromCart : (maItem) => {
            //Tạo 1 action
            let action = {
                type: 'REMOVE_FROM_CART',
                maItem
            };
            // console.log(maItem);
            //Gửi đi bằng dispatch
            dispatch(action);
        },

        // Hàm tăng giảm Số lượng
        incDecQuantity : (maItem, number) => {
            let action = {
                type: 'INC_DEC_QUANTITY',
                maItem, 
                number
            };
            dispatch(action)
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(ModalShoesCartRedux)