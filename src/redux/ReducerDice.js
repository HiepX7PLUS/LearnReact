//Setup state trên store
const stateDice = {
    userSelected: 'Xỉu',
    playTimes: 0,
    winTimes: 0,
    arrDice: [
        {img:'../img/gameXucXac/ic_dice_1.png', giaTri:1},
        {img:'../img/gameXucXac/ic_dice_3.png', giaTri:3},
        {img:'../img/gameXucXac/ic_dice_6.png', giaTri:6}
    ]
}

const reducerDice = (state = stateDice, action) => {
    switch (action.type) {
        case 'SELECTED_BET': {
            state.userSelected = action.slectedItem;
            return {...state}
        }
        case 'PLAY_GAME' : {
            //// 1 - XỬ LÝ RANDOM XÚC XẮC: làm cho thằng state.arrDice sẽ render lại một mảng mới gồm 3 phần tử (là object) ngẫu nhiên
            // Giải thuật: Muốn vậy thì tạo ra từng phần tử object ngẫu nhiên, bằng cách chỉ thay đổi con số bên trong là số ngẫu nhiên. Sau đó ta lặp lại 3 lần như vậy sẽ được 3 phần tử object ngẫu nhiên. Cuối cùng push vào mảng mới bên trên.
            let arrNewDice = [];
            for (let i=0; i<3; i++){
                // 1.1 - Tạo ra số ngẫu nhiên từ 1 đến 6 (Lưu ý: số ngẫu nhiên này phải khác 0)
                let randomNum = Math.floor(Math.random() * 6) + 1;

                // 1.2 - Từ số ngẫu nhiên randomNum, tạo object ngẫu nhiên
                let randomObj = { img:`../img/gameXucXac/ic_dice_${randomNum}.png`, giaTri:randomNum };

                // 1.3 - Push object ngẫu nhiên vừa có được vào mảng mới
                arrNewDice.push(randomObj);
            }
            // 1.4 - Cập nhật lại state arrDice
            state.arrDice = arrNewDice;
            

            //// 2 - CẬP NHẬT SỐ LẦN CHƠI (playTimes)
            state.playTimes += 1;
            

            //// 3 - XÁC ĐỊNH SỐ LẦN THẮNG (winTimes): Tổng xúc xắc > 11 thì là Tài, còn lại là Xỉu.
            //Giải thuật: Tính tổng điểm trong mảng mới ngẫu nhiên. Sau đó xét điều kiện để cộng 1 điểm thắng khi: 
            // - Nếu tổng điểm > 11 và người dùng chọn Tài
            // - Hoặc nếu tổng điểm <= 11 và người dùng chọn Xỉu
            let tongDiem = arrNewDice.reduce((tongGiaTri, objDice, index)=>{
                return tongGiaTri += objDice.giaTri;
            }, 0)
            if ((tongDiem > 11 && state.userSelected==='Tài') || (tongDiem <= 11 && state.userSelected==='Xỉu') ){
                state.winTimes += 1;
            }

            return {...state}
        }
        default:
            return {...state};
    }
}

export default reducerDice;