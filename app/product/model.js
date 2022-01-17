const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const productSchema = Schema({

    name: {
        type: String,
        minlength:[3, 'Minimal 3 Karakter'],
        required: [true, 'Nama tidak boleh kosong']
    },

    description: {
        type: String,
        maxlength: [1000, 'Maximal 1000 Karakter']
    },

    price: {
        type: Number,
        default: 0
    },

    image_url: String,

    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },

    tags: {
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }
}, { timestamps : true });

module.exports = model('Product', productSchema);