
// setup State Giỏ hàng trên store
const stateCart = {
    // là một mảng gồm các object sp bên trong. cart : [{maSP:1, hinhAnh:'', tenSP:'tên mặc định', soLg:1, donGia:1000}]
    cart : []
}

const reducerShoesCart = (state = stateCart, action) => {
    // Nhận action và thực thi
    switch (action.type){
        case 'ADD_TO_CART' : {
            // Duyệt tìm kiểm tra trong mảng 'cart' đã có object sản phẩm nào trùng với maSP với iteamCart mà 'action' gửi lên không
            let index = state.cart.findIndex(item => item.maSP === action.itemCartAdapt.maSP);

            // Nếu trùng nhau (tức là có sản phẩm đó rồi) -> tăng số lượng
            if (index !== -1){
                state.cart[index].soLg += 1;
            }else{
                // Nếu không trùng thì thêm sản phẩm đó vào trong mảng 'cart'
                state.cart.push(action.itemCartAdapt);
            }

            // setState lại cho stateCart.cart (setState trên redux khác với trong react)
            state.cart = [...state.cart];
            return {...state}; // trả về state mới
        };

        case 'REMOVE_FROM_CART':{
            //Tìm ra trong mảng 'cart' sp xoá dựa vào maSP
            let index = state.cart.findIndex(itemXoa => itemXoa.maSP === action.maItem);
            if (index !== -1){
                state.cart.splice(index,1);
            }
            
            //setState lại cho stateCart.cart để comp re-render
            state.cart = [...state.cart];
            return {...state};
        };

        case 'INC_DEC_QUANTITY':{
            let index = state.cart.findIndex(itemIncDec => itemIncDec.maSP === action.maItem);
            if(index !== -1){
                if (state.cart[index].soLg <= 1 && action.number === -1 ) {
                    alert('Sản phẩm tối thiểu là 1')
                    return state;
                }
                    state.cart[index].soLg += action.number;
            }

            //setState cho stateCart.cart
            state.cart = [...state.cart];
            return {...state}
        };

        default:
            return {...state};
    }
}

export default reducerShoesCart;