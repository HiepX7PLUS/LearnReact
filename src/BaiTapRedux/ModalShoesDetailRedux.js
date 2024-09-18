import React, { Component } from 'react'

// import thư viện connect để lấy dữ liệu từ store của redux về
import { connect } from 'react-redux'

class ModalShoesDetailRedux extends Component {
  render() {
    // console.log(this.props.detailSP)
    let {detailSP} = this.props;
    return (
        <div>
            
            <div className="modal fade" id="modalShoesDetailId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-light">
                            <h5 className="modal-title"> {detailSP.name} </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Sản phẩm</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Giá</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Số lượng bán</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Mô tả</th>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>

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
        detailSP: state.stateDetail.detailShoes
    }
}

export default connect (mapStateToProps)(ModalShoesDetailRedux)