const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user.route')
const authRoutes = require('./routes/auth.route')
const bodyParser = require("body-parser");
const cors = require("cors");
const floorRoutes = require('./routes/floor.route');
const roomRoutes = require('./routes/room.route');
const staffRoutes = require('./routes/hostel_staff');



require('dotenv').config();


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('db respondeding');
})
.catch((err) => {
    console.log(err);
})

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log(`server listening on port 3000`);
})


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/floor', floorRoutes);
app.use('/api/room', roomRoutes );
app.use('/api/staff', staffRoutes );


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode, 
    })
})


// const express = require('express')
// const mongoose = require('mongoose')
// const Registeruser = require('./models/model')
// const dotenv = require('dotenv')
// dotenv.config();
// const app = express()


// // const PORT = process.env.PORT || 5000;
// mongoose.connect(process.env.MONGO_URI)
// .then(() =>{
//     console.log('db responding ');
// }).catch((err) => {
//     console.log(err);
// });
//     // ,{
//     // useUnifiedtopology: true,
//     // useNewUrlParser: true,
//     // useCreateIndexe : true }
// // .then(
// //     () => console.log('db connected established')
// // )

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// });



// app.listen(3000, () =>{
//     console.log(`server is running...`);
// })