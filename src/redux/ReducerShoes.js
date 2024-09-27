
// setup State Giỏ hàng trên store
const stateShoes = {
    // là một mảng gồm các object sp bên trong. cartShoes : [{maSP:1, hinhAnh:'', tenSP:'tên mặc định', soLg:1, donGia:1000}]
    cartShoes : [{maSP:1, hinhAnh:'', tenSP:'tên mặc định', soLg:1, donGia:1000}],
    itemShoes: {maSP:1, tenSP:'ten-default', anhSP:'', giaSP:2000, soLg:1000, moTa:'mô tả'}
    
}

const reducerShoes = (state = stateShoes, action) => {
    // Nhận action và thực thi
    switch (action.type){
        case 'ADD_TO_CART' : {
            // Duyệt tìm kiểm tra trong mảng 'cartShoes' đã có object sản phẩm nào trùng với maSP với iteamCart mà 'action' gửi lên không
            let index = state.cartShoes.findIndex(item => item.maSP === action.itemCartAdapt.maSP);

            // Nếu trùng nhau (tức là có sản phẩm đó rồi) -> tăng số lượng
            if (index !== -1){
                state.cartShoes[index].soLg += 1;
            }else{
                // Nếu không trùng thì thêm sản phẩm đó vào trong mảng 'cartShoes'
                state.cartShoes.push(action.itemCartAdapt);
            }

            // setState lại cho stateCart.cartShoes (setState trên redux khác với trong react)
            state.cartShoes = [...state.cartShoes];
            return {...state}; // trả về state mới
        };

        case 'REMOVE_FROM_CART':{
            //Tìm ra trong mảng 'cartShoes' sp xoá dựa vào maSP
            let index = state.cartShoes.findIndex(itemXoa => itemXoa.maSP === action.maItem);
            if (index !== -1){
                state.cartShoes.splice(index,1);
            }
            
            //setState lại cho stateCart.cartShoes để comp re-render
            state.cartShoes = [...state.cartShoes];
            return {...state};
        };

        case 'INC_DEC_QUANTITY':{
            let index = state.cartShoes.findIndex(itemIncDec => itemIncDec.maSP === action.maItem);
            if(index !== -1){
                if (state.cartShoes[index].soLg <= 1 && action.number === -1 ) {
                    alert('Sản phẩm tối thiểu là 1')
                    return state;
                }
                    state.cartShoes[index].soLg += action.number;
            }

            //setState cho stateCart.cartShoes
            state.cartShoes = [...state.cartShoes];
            return {...state}
        };

        case 'DETAIL_ITEM_SHOES': {
            let index = state.itemShoes.findIndex(sp => sp.maSP === action.itemDetailAdapt.maSP);
            if(index !== 1){
                state.itemShoes.push(action.itemDetailAdapt)
            }

            state.itemShoes = {...state.itemShoes}
            return {...state}
        }

        default:
            return {...state};
    }
}

export default reducerShoes;