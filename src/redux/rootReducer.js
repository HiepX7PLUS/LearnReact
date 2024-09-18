import {combineReducers} from 'redux'
import reducerShoesCart from './ReducerShoesCart';
import reducerShoesDetail from './ReducerShoesDetail';

// store tổng của ứng dụng
const rootReducer = combineReducers({
    // state giỏ hàng
    stateCart: reducerShoesCart,

    //state detail sản phẩm 
    stateDetail: reducerShoesDetail

})

export default rootReducer;