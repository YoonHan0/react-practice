import fs from 'fs';


let state ={
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}
console.log("============================= 02 ================================");
let updateOrder1 = state.order;
updateOrder1.recevice = '부산시 해운대구 우동';
console.log(state.order, updateOrder1, updateOrder1 === state.order);

console.log("=================================================================");

state ={
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

Object.assign({}, state.order, {
    recevice: '부산시 해운대구 우동....'
});
console.log(state.order, updateOrder1, updateOrder1 === state.order);