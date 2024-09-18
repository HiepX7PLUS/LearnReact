
// setup state Detail sản phẩm trên store
const stateDetail = {
    detailShoes: [ {maSP:1, tenSP:'ten-mac-dinh', anhSP:'', giaSP:1000, soLg:1000, moTa:'mô tả'}
        // {
        //     "id": 1,
        //     "name": "Adidas Prophere",
        //     "alias": "adidas-prophere",
        //     "price": 1350,
        //     "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        //     "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        //     "quantity": 1995,
        //     "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        //   }
    ]
}

// reducer nhận và thực thi action
const reducerShoesDetail = (state = stateDetail, action) => {

}
export default reducerShoesDetail;