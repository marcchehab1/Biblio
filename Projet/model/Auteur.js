import connectionPromise from '../database/connection.js';

export const getAuteurs = async () => {
    // Attendre que la connexion à la base de données
    // soit établie
    let connection = await connectionPromise;

    // Envoyer une requête à la base de données
    let results = await connection.all(
        'SELECT * FROM Auteurs'
    );

    // Retourner les résultats
    return results;
}