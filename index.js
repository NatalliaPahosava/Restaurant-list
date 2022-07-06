const express=require('express')
const cors=require('cors')
const fs=require('fs')
const restaurantsList=require('./restaurants.json')

const app=express()
app.use(express.json())
app.use(cors())

app.listen(4000, ()=>{
    console.log('listening on 4000')
})
const handleWriteFile=()=>{
    const jsonRestaurantsList=JSON.stringify(restaurantsList)
    fs.writeFile('restaurants.json',jsonRestaurantsList, error=>console.error(error))
}
app.get('/',(req, res)=>{
    res.send(restaurantsList)
})
app.post('/',(req,res)=>{
    if(req.body.numRatings && req.body.name && req.body.address && req.body.reting && req.body.rating && req.body.photoUrl && req.body.ratings && req.body.id) {
        restaurantsList.push(req.body)  
        handleWriteFile()
    res.send(restaurantsList)
    } else{ res.send ('nothing for add')
}
})
app.put('/',(req,res)=>{
    if(req.query.name){
        const itemFound=restaurantsList.find(eachItem.name? eachItem.name === req.query.name: undefined)
        const indexOfItem=restaurantsList.indexOf(itemFound)
        restaurantsList[indexOfItem]=req.body
        handleWriteFile()
        res.send(restaurantsList)
    } else {
        res.send('no query params found')
    }
})
app.delete('/',(req,res)=>{
    const itemFound=restaurantsList.find( x=> x.name ===req.query.name)
    const indexOfItem=restaurantsList.indexOf(itemFound)

    restaurantsList.splice(indexOfItem,1)
    handleWriteFile()
        res.send(restaurantsList)
})