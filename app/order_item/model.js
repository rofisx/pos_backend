const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const orderItemSchema = Schema({
    name: {
        type: String,
        minlength: [5, 'minimal nama makanan 5 karakter'],
        required: [true, 'Tidak boleh kosong']
    },

    price: {
        type: Number,
        required: [true, 'Harga item harus diisi']
    },

    qty: {
        type: Number,
        required: [true, 'Kuantitas harus diisi'],
        min: [1, 'Minimal kuantitas 1']
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },

    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }
});

module.exports = model('OrderItem', orderItemSchema);