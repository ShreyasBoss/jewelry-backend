const express = require('express');
const mongoose = require('mongoose');
const itemMasterRoutes = require('./Route/itemMasterRoute');
const customerRoute = require('./Route/customerRoutes');
const vendorRoute = require('./Route/vendorRoutes');
const employeeRoute = require('./Route/employeeRoute');
const priceRoute = require('./Route/priceRoute');
const uomRoutes = require('./Route/uomRoutes');
const expenseMasterRoutes = require('./Route/expenseRoutes');
const discountRoutes = require('./Route/discountRoutes');
const stoneRoutes = require('./Route/stoneRoutes');
const metalRateRoutes = require('./Route/metalRateRoutes');
const warehouseRoutes = require('./Route/warehouseRoutes');
const schemeRoutes = require('./Route/schemaRoutes');
const paymentTermRoutes = require('./Route/paymentTermRoutes');
const taxMasterRoutes = require('./Route/taxMasterRoutes');
const currencyMasterRoutes = require('./Route/currencyMaster');
const groupMasterRoute = require('./Route/groupMasterRoute');
const orderMasterController = require('./Route/orderMasterController');
const packingMasterRoute = require('./Route/packingMasterRoute');
const paymentModeMasterRoute = require('./Route/paymentModeMasterRoute');
const saleMasterRoute = require('./Route/saleMasterRoute');
const shippingMasterRoute = require('./Route/shippingMasterRoute');
const subGroupMasterRoute = require('./Route/subGroupMasterRoute');
const termsAndConditionMasterRoute = require('./Route/termsAndConditionMasterRoute');
const warrantyMasterRoute = require('./Route/warrantyMasterRoute');
const purchaseMasterRoute = require('./Route/purchaseMasterRoute');
const userMasterRoute = require('./Route/userMasterRoute');
const designMasterRoute = require('./Route/designMasterRoute');
const categoryMasterRoute = require('./Route/categoryMasterRoute');
const branchMasterRoute = require('./Route/branchMaster');
const schemaRoutes = require('./Route/schemaRoutes')

require('dotenv').config();
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())
app.use('/uploads', express.static('uploads')); // Serve static files (images)

app.get("/",(req,res)=>{
    res.send("jewllery app")
})



// Use routes
app.use("/api/items", itemMasterRoutes);
app.use('/api/customers', customerRoute);
app.use('/api/vendors', vendorRoute);
app.use('/api/employees', employeeRoute);
app.use('/api/prices', priceRoute);
app.use('/api/uoms', uomRoutes);
app.use('/api/expenses', expenseMasterRoutes);
app.use('/api/discounts', discountRoutes);
app.use('/api/stones', stoneRoutes);
app.use('/api/metalRates', metalRateRoutes);
app.use('/api/warehouses', warehouseRoutes);
app.use('/api/schemes', schemaRoutes);
app.use('/api/paymentTerms', paymentTermRoutes);
app.use('/api/taxs', taxMasterRoutes);
app.use('/api/currencys', currencyMasterRoutes);
app.use('/api/groups', groupMasterRoute);
app.use('/api/orders', orderMasterController);
app.use('/api/packagings', packingMasterRoute);
app.use('/api/paymentModes', paymentModeMasterRoute);
app.use('/api/sales', saleMasterRoute);
app.use('/api/shippings', shippingMasterRoute);
app.use('/api/subGroups', subGroupMasterRoute);
app.use('/api/terms', termsAndConditionMasterRoute);
app.use('/api/warranty', warrantyMasterRoute);
app.use('/api/purchase', purchaseMasterRoute);
app.use('/api/users', userMasterRoute);
app.use('/api/designs', designMasterRoute);
app.use('/api/categorys', categoryMasterRoute);
app.use('/api/branchs', branchMasterRoute);


// Connect to MongoDB
async function db() {
    try {
        const res = await mongoose.connect(process.env.MONGO_URI)
        console.log("connected :", res.default.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
db()



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
