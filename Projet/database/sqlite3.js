import sqlite3 from 'sqlite3';

let db = new sqlite3.Database('./bibliotheque.db', (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('Connexion à la base de données');
});


//      Création des tables
db.run(
    'CREATE TABLE IF NOT EXISTS Auteurs ('
        + 'id_auteur INT NOT NULL,'
        + 'nom_auteur VARCHAR(45) NOT NULL,'
        + 'PRIMARY KEY (id_auteur));'
);

db.run(
    'CREATE TABLE IF NOT EXISTS TypeLivre ('
        + 'id_type_livre INT NOT NULL,'
        + 'nom_type_livre VARCHAR(45) NOT NULL,'
        + 'PRIMARY KEY (id_type_livre));'
);

db.run(
    'CREATE TABLE IF NOT EXISTS Livres ('
      + 'id_livre INT NOT NULL,'
      + 'nom_livre VARCHAR(45) NOT NULL,'
      + 'id_type_livre INT NOT NULL,'
      + 'PRIMARY KEY (id_livre),'
      + 'FOREIGN KEY (id_type_livre) REFERENCES TypeLivre (id_type_livre));'
);

db.run(
    'CREATE TABLE IF NOT EXISTS LivreAuteur ('
      + 'id_livre INT NOT NULL,'
      + 'id_auteur INT NOT NULL,'
      + 'PRIMARY KEY (id_livre, id_auteur),'
      + 'FOREIGN KEY (id_livre) REFERENCES Livres (id_livre),'
      + 'FOREIGN KEY (id_auteur) REFERENCES Auteurs (id_auteur));'
);
    
db.run(
    'CREATE TABLE IF NOT EXISTS TypeUtilisateur ('
      + 'id_type_utilisateur INT NOT NULL,'
      + 'nom_type_utilisateur VARCHAR(45) NOT NULL,'
      + 'PRIMARY KEY (id_type_utilisateur));'
);

db.run(
    'CREATE TABLE IF NOT EXISTS Utilisateurs ('
      + 'id_utilisateur INT NOT NULL,'
      + 'nom_utilisateur VARCHAR(45) NOT NULL,'
      + 'mot_de_passe VARCHAR(45) NOT NULL,'
      + 'email VARCHAR(45) NOT NULL,'
      + 'ville VARCHAR(45) NOT NULL,'
      + 'addresse VARCHAR(45) NOT NULL,'
      + 'province VARCHAR(45) NOT NULL,'
      + 'id_type_utilisateur INT NOT NULL,'
      + 'PRIMARY KEY (id_utilisateur),'
      + 'FOREIGN KEY (id_type_utilisateur) REFERENCES TypeUtilisateur (id_type_utilisateur));'
);

db.run(
    'CREATE TABLE IF NOT EXISTS Emprunt ('
      + 'id_utilisateur INT NOT NULL,'
      + 'id_livre INT NOT NULL,'
      + 'date_debut DATETIME NOT NULL,'
      + 'date_retour DATETIME NOT NULL,'
      + 'PRIMARY KEY (id_utilisateur, id_livre),'
      + 'FOREIGN KEY (id_utilisateur) REFERENCES Utilisateurs (id_utilisateur),'
      + 'FOREIGN KEY (id_livre) REFERENCES Livres (id_livre));'
);

//      Requêtes dynamique
let selectLivre = "SELECT * FROM Livres"

db.all(selectLivre, [], (err, rows) => {
    if (err) {
        throw err;
      }
    rows.forEach((row) => {
        console.log(row.name);
      });
 });


export { db, selectLivre }

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Fermeture de la connexion à la base de données.');
});
