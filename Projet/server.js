// Aller chercher les configurations de l'application
import 'dotenv/config';

// Importer les fichiers et librairies
import express, { json, urlencoded } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import cspOption from './csp-options.js'

// Création du serveur
const app = express();

// Ajout de middlewares
app.use(helmet(cspOption));
app.use(compression());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static('public'));

// Ajouter les routes ici ...
// Ajout des routes
app.get('/account', (request, response) => {
    // Code à exécuter quand on reçoit un GET 
    
});

app.post('/account', (request, response) => {
    // Code à exécuter quand on reçoit un POST 
    // sur la route /liste-to-do
});

app.delete('/liste-to-do', (request, response) => {
    // Code à exécuter quand on reçoit un DELETE 
    // sur la route /liste-to-do
});

app.get('/truc/machin/chose', (request, response) => {
    // Code à exécuter quand on reçoit un GET 
    // sur la route /truc/machin/chose
});
// Renvoyer une erreur 404 pour les routes non définies
app.use(function (request, response) {
    // Renvoyer simplement une chaîne de caractère indiquant que la page n'existe pas
    response.status(404).send(request.originalUrl + ' not found.');
});

// Démarrage du serveur
app.listen(process.env.PORT);
console.info(`Serveurs démarré:`);
console.info(`http://localhost:${ process.env.PORT }`);

