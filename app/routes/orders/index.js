import Ember from 'ember';

export default Ember.Route.extend({

    actions:{
        createOrder(order){
            order = this.get('store').saveOrder(order);
            this.transitionTo('orders.order', order);
        },
        addItemQuantity(lineItem, amount){
            lineItem.incrementProperty('quantity', amount);
        }
    },

    model(){
        const store = this.get('store');
        return store.newOrder();
    },

    store: Ember.inject.service()

});