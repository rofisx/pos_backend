const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let tagSchema = Schema({
    name: {
        type: String,
        minlength: [3, 'Minimal 3 Karakter'],
        maxlength: [20, 'Maximal 20 Karakter'],
        required: [true, 'Kategori tidak boleh kosong']
    }
});

module.exports = model('Tag', tagSchema);