import fs from 'fs';
import update from 'react-addons-update';   // depp copy 지원해줌

let state ={
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}
const updateOrder = update(state.order, {
    /* 해당 path의 값 변경1(receive의 값 변경) */
    receive: {
        $set: '부산시 북구 덕천동...'
    },

    /* 해당 path의 값 변경2(payment.method의 값 변경) */
    payment: {
        method: {
            $set: 'Mobile'
        }
    },
    /* 배열안의 요소(객체)를 변경 */
    products: {
        // index: 0
        0: {
            amount: {
                $set: 100
            }
        },
        /* 배열 요소에 추가하기 */
        $push: [{
            no: 'c002-003',
            name: '블루양말',
            price: 2000,
            amount: 2
        }]
    },
});

console.log(
    state.order,
    "\n==========================================\n", 
    updateOrder, 
    state.order === updateOrder);