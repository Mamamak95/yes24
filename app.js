import express from 'express'
import bookRouter from './router/book.js'
import bestSellerRouter from './router/bestSeller.js'
import realTimeBestSellerRouter from './router/realTimeBestSeller.js'
import dayBestSellerRouter from './router/dayBestSeller.js'
import monthBestSellerRouter from './router/monthBestSeller.js'
import hotPriceBestSellerRouter from './router/hotPriceBestSeller.js'
import steadySellerRouter from './router/steadySeller.js'
import loginRouter from './router/login.js'
const app = express()


app.use('/book',bookRouter)
app.use('/BestSellerMain',bestSellerRouter)
app.use('/RealTimeBestSeller',realTimeBestSellerRouter)
app.use('/DayBestSeller',dayBestSellerRouter)
app.use('/MonthBestSeller',monthBestSellerRouter)
app.use('/HotPriceBestSeller',hotPriceBestSellerRouter)
app.use('/SteadySeller',steadySellerRouter)
app.use('/login',loginRouter)


app.listen(8080)