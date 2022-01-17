const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const cartItemSchema = Schema({

    name: {
        type: String,
        minlength: [5, 'Minimal panjang nama 5 karakter'],
        required: [true, 'Nama harus di isi']
    },

    qty: {
        type: Number,
        required: [true, 'Qty harus diisi'],
        min: [1, 'Qty minimal 1']
    },

    price: {
        type: Number,
        default: 0
    },

    image_url: String,

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = model('CartItem', cartItemSchema);