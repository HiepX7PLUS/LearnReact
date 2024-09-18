import React, { Component } from 'react'
import ShoesItemRedux from './ShoesItemRedux'

export default class ShoesListRedux extends Component {

  renderSanPham = () => {
    return this.props.arrdateShoes.map((product, index)=>{
        return <div className="col-4" key={index}>
            <ShoesItemRedux product={product} />
        </div>
    })
  }  
  render() {
    return (
      <div className='container'>
        <div className="row">
            {this.renderSanPham()}
        </div>
      </div>
    )
  }
}
