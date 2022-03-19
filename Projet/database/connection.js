// Base de données dans un fichier
const connectionPromise = open({
    filename: process.env.DB_FILE,
    driver: sqlite3.Database
})
  
.then((connection) => {
    connection.exec(
        `CREATE TABLE IF NOT EXISTS Auteurs (
            id_auteur INT NOT NULL,
            nom_auteur VARCHAR(45) NOT NULL,
            PRIMARY KEY (id_auteur)
        );
        CREATE TABLE IF NOT EXISTS TypeLivre (
            id_type_livre INT NOT NULL,
            nom_type_livre VARCHAR(45) NOT NULL,
            PRIMARY KEY (id_type_livre)
        );
        CREATE TABLE IF NOT EXISTS Livres (
              id_livre INT NOT NULL,
              nom_livre VARCHAR(45) NOT NULL,
              id_type_livre INT NOT NULL,
              PRIMARY KEY (id_livre),
              FOREIGN KEY (id_type_livre) REFERENCES TypeLivre (id_type_livre)
        );
        CREATE TABLE IF NOT EXISTS LivreAuteur (
              id_livre INT NOT NULL,
              id_auteur INT NOT NULL,
              PRIMARY KEY (id_livre, id_auteur),
              FOREIGN KEY (id_livre) REFERENCES Livres (id_livre),
              FOREIGN KEY (id_auteur) REFERENCES Auteurs (id_auteur)
        );
        CREATE TABLE IF NOT EXISTS TypeUtilisateur (
              id_type_utilisateur INT NOT NULL,
              nom_type_utilisateur VARCHAR(45) NOT NULL,
              PRIMARY KEY (id_type_utilisateur)
        );
        CREATE TABLE IF NOT EXISTS Utilisateurs (
              id_utilisateur INT NOT NULL,
              nom_utilisateur VARCHAR(45) NOT NULL,
              mot_de_passe VARCHAR(45) NOT NULL,
              email VARCHAR(45) NOT NULL,
              ville VARCHAR(45) NOT NULL,
              addresse VARCHAR(45) NOT NULL,
              province VARCHAR(45) NOT NULL,
              id_type_utilisateur INT NOT NULL,
              PRIMARY KEY (id_utilisateur),
              FOREIGN KEY (id_type_utilisateur) REFERENCES TypeUtilisateur (id_type_utilisateur)
        );
        CREATE TABLE IF NOT EXISTS Emprunt (
              id_utilisateur INT NOT NULL,
              id_livre INT NOT NULL,
              date_debut DATETIME NOT NULL,
              date_retour DATETIME NOT NULL,
              PRIMARY KEY (id_utilisateur, id_livre),
              FOREIGN KEY (id_utilisateur) REFERENCES Utilisateurs (id_utilisateur),
              FOREIGN KEY (id_livre) REFERENCES Livres (id_livre)
        );`
    );
    return connection;
});


export default connectionPromise;