import connectionPromise from './connection.js';

export const getUtilisateurs = async (Utilisateur) => {
    // Attendre que la connexion à la base de données
    // soit établie
    let connection = await connectionPromise;

    // Envoyer une requête à la base de données
    let results = await connection.all(
        'SELECT * FROM Utilisateurs WHERE email = ' + email
    );
        
    // Retourner les résultats
    return results;
}

