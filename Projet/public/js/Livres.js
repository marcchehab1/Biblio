import connectionPromise from './connection.js';

export const getLivres = async () => {
    // Attendre que la connexion à la base de données
    // soit établie
    let connection = await connectionPromise;

    // Envoyer une requête à la base de données
    let results = await connection.all(
        'SELECT * FROM Livres'
    );

    // Retourner les résultats
    return results;
}