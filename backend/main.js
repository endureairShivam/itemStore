const express = require('express')
const cors = require('cors')


const app =express()
app.use(cors());

items =[{
    name:'Rice',
    quantity:'2KG',
    price:'20'
},{
    name:'Coke',
    quantity:'1L',
    price:'30'
},
{
    name:'Curd',
    quantity:'100g',
    price:'10'
}
];


app.get('/items',(req,res)=>{
    console.log('getting');
    res.status(200).json({message:"Data sent successfully!",items});
});

const port = 8080;
app.listen(port, () =>{
    console.log('App Listening.');
})

