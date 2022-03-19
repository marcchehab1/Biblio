import { compte } from "./Compte"

export const ajouterCompte = (compte) => {
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