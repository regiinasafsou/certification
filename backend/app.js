const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser =require('body-parser');
const app = express();
const stuffRoutes=require('./routes/stuff')
const userRoutes=require('./routes/user')

// Middleware JSON
app.use(express.json());

// Sert les fichiers statiques du dossier "assets"
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Connexion MongoDB
mongoose.connect(
  'mongodb+srv://ikramnancy2017:YVcBZPZsMGnJZYYw@cluster1.rqlvjk9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(err => {
  console.error('Connexion à MongoDB échouée !', err);
  process.exit(1); // quitte l'app si connexion impossible
});

// CORS - autoriser uniquement ce qui est nécessaire
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // ou spécifie ton frontend ici
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Routes API

// POST : création d’un objet
app.use('/api/stuff',stuffRoutes);
app.use('/api/auth',userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));



module.exports = app;

