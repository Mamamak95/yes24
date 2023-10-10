import express from 'express'
import bestSellerRouter from './router/bestSeller.js'
import realTimeBestSellerRouter from './router/realTimeBestSeller.js'
import dayBestSellerRouter from './router/dayBestSeller.js'
import monthBestSellerRouter from './router/monthBestSeller.js'
import hotPriceBestSellerRouter from './router/hotPriceBestSeller.js'
import steadySellerRouter from './router/steadySeller.js'

const app = express()


app.use('/BestSellerMain',bestSellerRouter)
app.use('/RealTimeBestSeller',realTimeBestSellerRouter)
app.use('/DayBestSeller',dayBestSellerRouter)
app.use('/MonthBestSeller',monthBestSellerRouter)
app.use('/HotPriceBestSeller',hotPriceBestSellerRouter)
app.use('/SteadySeller',steadySellerRouter)



app.listen(8080)