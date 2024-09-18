import React, { Component } from 'react'
import ShoesItem2 from './ShoesItem2'

export default class ShoesList2 extends Component {

  renderRowListSP = () => {
        // this.props.dataShoes2.map((itemShoes, index)=>{
        //     return <div className="col-4" key={index}>
        //         <ShoesItem2 itemShoes={itemShoes} />
        //     </div>
        // })
        <p>Đã kết nối vào hàm render</p>
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
          {/* <ShoesItem2/> */}
        {this.renderRowListSP()}
        </div>
      </div>
    )
  }
}
