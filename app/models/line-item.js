import Ember from 'ember';

export default Ember.Object.extend({

    /*
    title:Ember.computed('product.title',function(){
        return this.get('product.title');
    })
    */
    price:Ember.computed('quantity', 'unitPrice',function(){
        return parseInt(this.get('quantity'), 10)* parseFloat( this.get('unitPrice') );
    }),
    title: Ember.computed.alias('product.title'),
    unitPrice: Ember.computed.alias('product.price'),

});