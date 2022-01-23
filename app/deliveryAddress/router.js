const router = require('express').Router();
const deliveryAddressController = require('./controller');
const { police_check } = require('../../middlewares');

router.get('/address', 
    police_check('view', 'DeliveryAddress'),
    deliveryAddressController.index
);
router.post('/address',
    police_check('create', 'DeliveryAddress'),
    deliveryAddressController.store
);
router.put('/address/:id',
    police_check('update', 'DeliveryAddress'),
    deliveryAddressController.update
);
router.delete('/address/:id',
    police_check('delete', 'DeliveryAddress'),
    deliveryAddressController.destroy
);
module.exports = router;