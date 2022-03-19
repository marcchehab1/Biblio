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
export const insertUtilisateur = async (nom_utilisateur,mot_de_passe,email,ville,addresse,province) => {
    // Attendre que la connexion à la base de données
    // soit établie
    let connection = await connectionPromise;

    // Envoyer une requête à la base de données
    let results = await connection.all(
        `INSERT INTO Utilisateurs(
            id_utilisateur,
              nom_utilisateur,
              mot_de_passe,
              email,
              ville,
              addresse,
              province,
              id_type_utilisateur)
              VALUES(?,?,?,?,?,?,?,?)` , [2, nom_utilisateur,mot_de_passe,email,ville,addresse,province,2]
    );

    // Retourner les résultats
    return results;
}
