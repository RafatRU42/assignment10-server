const express = require('express');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 5000;


const coursesData = require('./data/courses.json')
const courseCategory = require('./data/courseCategory.json')





app.use(cors());
app.get('/', (req, res) =>{
    res.send('Server is Running')
})

app.get('/courses',(req, res) =>{
    res.send(coursesData)
})

app.get('/courses/:id',(req,res) =>{
    const id = req.params.id;
    const selecedId = coursesData.find(course => course.id== id);
    res.send(selecedId)
})

app.get('/courses/:premium',(req, res) =>{
    const id = req.params.id;
    const selectedId = coursesData.find(pre => pre.premium == id);
    res.send(selectedId)
})


app.get('/category', (req, res) =>{
    res.send(courseCategory)
})




app.listen(port, ()=>{
    console.log('News Server is running on port',port)
})