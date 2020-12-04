var express = require('express');
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage}).single('picture');

var upload = multer({ dest: 'uploads/'});

var app = express();

app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Platzigram' })
})

app.get('/signup', function (req, res) {
  res.render('index', { title: 'Platzigram - Signup' })
})

app.get('/signin', function (req, res) {
  res.render('index', { title: 'Platzigram - Signin' })
})

app.get('/api/pictures', function (req, res, next) {
    var pictures= [
        {
            user:{
                username: 'anime',
                avatar: 'https://i.imgur.com/oW1dGDI.jpg'
            },
            url: 'https://wallpaperarc.com/wp-content/uploads/2020/06/Mikasa-Ackerman-3K-Wallpaper-3200x1800-15.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date()
        },
        {
            user:{
                username: 'anime',
                avatar: 'https://i.imgur.com/oW1dGDI.jpg'
            },
            url: 'https://pbs.twimg.com/media/DSBKw_UVwAARi0M.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        },
        {
            user:{
                username: 'anime',
                avatar: 'https://i.imgur.com/oW1dGDI.jpg'
            },
            url: 'https://i.pinimg.com/originals/24/b0/f4/24b0f4622c80f839a4ced315e1579893.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        },
        {
            user:{
                username: 'anime',
                avatar: 'https://i.imgur.com/oW1dGDI.jpg'
            },
            url: 'https://i.pinimg.com/originals/24/b0/f4/24b0f4622c80f839a4ced315e1579893.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        }
    ]
    
      res.send(pictures);
    
});

app.post('api/pictures', function(req, res) {
  upload(req, res, function(err) {
    if (err){
      return res.send(500, "Error uploading file");
    }
      res.send('file uploaded')
  })
})

app.get('/api/user/:username', function(req, res) {
  const user = {
    username: 'anime',
    avatar: 'https://i.imgur.com/oW1dGDI.jpg',
    pictures: [
      {
        id: 1,
        src: 'https://images8.alphacoders.com/915/915180.jpg',
        likes: 3, 
      },
      {
        id: 2,
        src: 'https://images4.alphacoders.com/922/thumb-1920-922098.jpg',
        likes: 3, 
      },
      {
        id: 3,
        src: 'https://i.pinimg.com/originals/09/0c/39/090c395effbc8ce9b57b0bc1050b3237.jpg',
        likes: 3, 
      },
      {
        id: 4,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5_Nbskz517nIE5pIx6bBPuwVAParmDFQ3A&usqp=CAU',
        likes: 3, 
      },
      {
        id: 5,
        src: 'https://i.pinimg.com/originals/8e/cb/f0/8ecbf0bf0c9c011fa363fd3098c0da1c.jpg',
        likes: 3, 
      },
      {
        id: 6,
        src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a053feab-0404-42e7-a5e6-5505765b5776/dbcjckk-ef2c9e52-0bf3-4da7-b5ed-0d93c1049a11.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTA1M2ZlYWItMDQwNC00MmU3LWE1ZTYtNTUwNTc2NWI1Nzc2XC9kYmNqY2trLWVmMmM5ZTUyLTBiZjMtNGRhNy1iNWVkLTBkOTNjMTA0OWExMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZBEZPhSi3uvJWnuGnegG90yHX4atdZQvJ47LCfm4gMo',
        likes: 3, 
      },
    ]
  }

  setTimeout(()=> {
    res.send(user)
  },5000)

})

app.get('/:username', function (req, res) {
  res.render('index', { title: `Platizigram - ${req.params.username}` })
})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);
  console.log('Platzigram escuchando en el puerto 3000');
});