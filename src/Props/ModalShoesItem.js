import React, { Component } from 'react'

export default class ModalShoesItem extends Component {
  render() {
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
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalDetailShoesLabel"> {this.props.contentShoes.name} </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body text-center">
                            <img src={this.props.contentShoes.image} alt={this.props.contentShoes.name} style={{height:'300px'}} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
