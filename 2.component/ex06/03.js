import fs from 'fs';


let state ={
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

let updateOrder = Object.assign({}, state.order, {
    recevice: '부산시 해운대구 우동...'
})
// updateOrder.recevice = '부산시 해운대구 우동... ';

updateOrder.payment.method = 'Mobile';

console.log(
    state.order, 
    updateOrder, 
    state.order === updateOrder, 
    state.order.recevice === updateOrder.recevice,
    state.order.payment === updateOrder.payment);