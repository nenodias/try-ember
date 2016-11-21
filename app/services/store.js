import Ember from 'ember';

import LineItem from 'millember/models/line-item';
import Order from 'millember/models/order';
import Product from 'millember/models/product';

const products = [
    Product.create({title:'Tent',price:10,description:'This is a Tend description'}),
    Product.create({title:'Sleeping',price:5,description:'This is a Sleeping description'}),
    Product.create({title:'Flashlight',price:2,description:'This is a Flashlight description'}),
    Product.create({title:'First-Aid',price:3,description:'This is a First-Aid description'}),
];

const orders = [
    Order.create({id:'1234',name:'Blaise Blobfish',
    items:[
        LineItem.create({product:products[0], quantity:1}),
        LineItem.create({product:products[1], quantity:1}),
        LineItem.create({product:products[2], quantity:0}),
        LineItem.create({product:products[3], quantity:0}),
    ],
    }),
    Order.create({id:'1233',name:'Bob Blobfish',
    items:[
        LineItem.create({product:products[0], quantity:1}),
        LineItem.create({product:products[1], quantity:0}),
        LineItem.create({product:products[2], quantity:1}),
        LineItem.create({product:products[3], quantity:1}),
    ],
    }),
];

export default Ember.Service.extend({
    getProducts(){
        return products;
    },
    getOrderById(id){
        return orders.findBy('id', id);
    },
    getOrders(){
        return orders;
    },
    newOrder(){
        let items = products.map((product) => {
            return LineItem.create({ product:product ,quantity:0});
        });
        return Order.create({
            items: items
            
        });
    },
    saveOrder(order){
        order.set('id', '9999');
        orders.pushObject(order);
    }
});
