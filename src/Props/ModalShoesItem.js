import React, { Component } from 'react'

export default class ModalShoesItem extends Component {
  render() {
    // Nhận dữ liệu từ ShoesStore
    let {contentShoes} = this.props;

    return (
        <div>
            {/* Button trigger modal */}
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalDetailShoes">
                Launch demo modal
            </button> */}
            {/* Modal */}
            <div className="modal fade" id="modalDetailShoes" tabIndex={-1} aria-labelledby="modalDetailShoesLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-light">
                            <h5 className="modal-title" id="modalDetailShoesLabel"> {contentShoes.name} </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body text-center">
                            <img src={contentShoes.image} alt={contentShoes.name} style={{height:'250px'}} />
                            <div className='row text-start ms-2 mb-5 me-2'>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">ID</th>
                                            <td> {contentShoes.id} </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Price</th>
                                            <td> $ {contentShoes.price.toLocaleString()} </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Số lượng</th>
                                            <td> {contentShoes.quantity} </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Mô tả</th>
                                            <td> {contentShoes.description} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
  }
}
