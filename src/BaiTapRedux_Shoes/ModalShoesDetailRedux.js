import React, { Component } from 'react'

// import thư viện connect để lấy dữ liệu từ store của redux về
import { connect } from 'react-redux'

class ModalShoesDetailRedux extends Component {
  render() {
    
    let {itemShoes} = this.props;
    console.log(this.props.itemShoes)
    return (
        <div>
            <div className="modal fade" id="modalShoesDetailId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-light">
                            <h5 className="modal-title"> {itemShoes.tenSP} </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                        <img src={itemShoes.hinhAnh} alt={itemShoes.name} />
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>ID</th>
                                                <td>{itemShoes.id}</td>
                                            </tr>
                                            <tr>
                                                <th>Sản phẩm</th>
                                                <td>{itemShoes.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Giá</th>
                                                <td>{itemShoes.price}</td>
                                            </tr>
                                            <tr>
                                                <th>Số lượng bán</th>
                                                <td>{itemShoes.quantity}</td>
                                            </tr>
                                            <tr>
                                                <th>Mô tả</th>
                                                <td>{itemShoes.description}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                            {/* {itemShoes.map((itemSP, index) => {
                                return <div className='row' key={index} >
                                    <img src={itemSP.hinhAnh} alt={itemSP.name} />
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>ID</th>
                                                <td>{itemSP.id}</td>
                                            </tr>
                                            <tr>
                                                <th>Sản phẩm</th>
                                                <td>{itemSP.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Giá</th>
                                                <td>{itemSP.price}</td>
                                            </tr>
                                            <tr>
                                                <th>Số lượng bán</th>
                                                <td>{itemSP.quantity}</td>
                                            </tr>
                                            <tr>
                                                <th>Mô tả</th>
                                                <td>{itemSP.description}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            })} */}

                        </div>
                        <div className="modal-footer bg-light">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
  }
}

// Hàm nhận state từ reducerShoesDetail
const mapStateToProps = (state) => {
    return {
        itemShoes: state.reducerShoes.itemShoes
    }
}

export default connect (mapStateToProps)(ModalShoesDetailRedux)