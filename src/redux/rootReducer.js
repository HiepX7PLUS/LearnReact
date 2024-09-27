import {combineReducers} from 'redux'
import reducerShoes from './ReducerShoes';
import reducerDice from './ReducerDice';

// store tổng của ứng dụng
const rootReducer = combineReducers({
    // state giỏ hàng
    reducerShoes,    // Viết tắt của reducerShoes: reducerShoes,

    //state detail sản phẩm 
    // stateDetail: reducerShoesDetail,

    //state Game Xúc Xắc
    reducerDice     // Viết tắt của reducerDice: reducerDice

})

export default rootReducer;