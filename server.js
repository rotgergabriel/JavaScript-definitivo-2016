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
                username: 'Gabriel Augusto Rotger',
                avatar: 'https://media.istockphoto.com/vectors/man-avatar-business-angry-cartoon-illustration-vector-vector-id1277332892'
            },
            url: 'https://materializecss.com/images/office.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date()
        },
        {
            user:{
                username: 'Gabriel Augusto Rotger',
                avatar: 'https://media.istockphoto.com/vectors/man-avatar-business-angry-cartoon-illustration-vector-vector-id1277332892'
            },
            url: 'https://materializecss.com/images/office.jpg',
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

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);
  console.log('Platzigram escuchando en el puerto 3000');
});