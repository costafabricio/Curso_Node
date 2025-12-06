const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req,res) => {
    const items = ["item a", "item b", "item c"]

    res.render('dashboard', {items})
})

app.get('/post', (req,res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'javascript',
        body: 'Este artigo vai te ajudar a aprender Node.js...',
        comments: 4
    }
    res.render('blogpost', {post})
})

app.get('/blog', (req,res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'Javascript',
            body: 'teste',
            comments: 4
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'teste',
            comments: 4
        },
           {
            title: 'Aprender Python',
            category: 'Python',
            body: 'teste',
            comments: 4
        },
    ]

    res.render('blog', {posts})
})

app.get('/', (req,res) => {
    const user = {
        name: 'Fabricio',
        surname: 'Costa',
        age: 18
    }

    const palavra = 'teste'

    const auth = false

    const approved = false

    res.render('home', {user: user, palavra, auth, approved})
})

app.listen(3000, () => {
    console.log("App rodando...");
    
})