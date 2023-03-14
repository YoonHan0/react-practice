import fs from 'fs';


let state ={
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}
const updateOrderProducts1 = state.order.products;

updateOrderProducts1.push({
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 2
});

console.log(state.order.products, updateOrderProducts1, updateOrderProducts1 === state.order.products);
console.log("====================================================================================");

const updateOrderProducts2 = state.order.products.concat({
    no: 'c002-004',
    name: '검은양말',
    price: 1000,
    amount: 2
});

console.log(state.order.products, updateOrderProducts2, updateOrderProducts2 === state.order.products);


const updateOrderProducts3 = [...state.order.products].push({
    no: 'c002-004',
    name: '빨간양말',
    price: 2000,
    amount: 2
});

console.log(state.order.products, updateOrderProducts3, updateOrderProducts3 === state.order.products);