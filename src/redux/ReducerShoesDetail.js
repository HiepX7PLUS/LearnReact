
// setup state Detail sản phẩm trên store
const stateDetail = {
    detailShoes: {maSP:1, tenSP:'ten-default', anhSP:'', giaSP:2000, soLg:1000, moTa:'mô tả'}
    // detailShoes: [     
    //     {
    //         "id": 1,
    //         "name": "Adidas Prophere",
    //         "alias": "adidas-prophere",
    //         "price": 1350,
    //         "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    //         "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    //         "quantity": 1995,
    //         "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    //       }
    // ]
}

// reducer nhận và thực thi action
const reducerShoesDetail = (state = stateDetail, action) => {
    switch (action.type){
        case 'DETAIL_ITEM_SHOES': {
            let index = state.detailShoes.findIndex(sp => sp.maSP === action.itemDetailAdapt.maSP);
            if(index !== 1){
                state.detailShoes.push(action.itemDetailAdapt)
            }
            return {...state}
        }
        default:
            return state;
    }
}
export default reducerShoesDetail;