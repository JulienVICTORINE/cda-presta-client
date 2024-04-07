import { instance, API_URL } from './axiosConfig';


// Fonction pour récupérer tous les utilisateurs
export async function getAllUsers() {
    try {
        const response = await instance.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs :', error);
        throw error;
    }
}

// Fonction pour récupérer un utilisateur par son ID
export async function getUserById(id) {
    try {
        const response = await instance.get(`${API_URL}/users/${id}`);
        return response.data;
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération de l\'utilisateur par son ID :', error);
        throw error;
    }
}

// Fonction pour récupérer tous les utilisateurs activés
export async function getAllActivatedUsers() {
    try {
        const response = await instance.get(`${API_URL}/users/activated`);
        return response.data;
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs activés :', error);
        throw error;
    }
}

// Fonction pour récupérer tous les utilisateurs non activés
export async function getUserNotActivated() {
    try {
        const response = await instance.get(`${API_URL}/users-not-activated`);
        return response.data;
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs non activés :', error);
        throw error;
    }
}

// Fonction pour valider un compte utilisateur
export async function validateUserAccount(id) {
    try {
        const response = await instance.put(`${API_URL}/validate-account/${id}`);
        return response.data;
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la validation du compte utilisateur :', error);
        throw error;
    }
}

// Fonction pour supprimer un utilisateur par son ID
export async function deleteUser(id) {
    try {
        const response = await instance.delete(`${API_URL}/users/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la suppression de l\'utilisateur :', error);
        throw error;
    }
}