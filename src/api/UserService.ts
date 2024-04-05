import API from './APIProvider';
import { toast } from 'react-toastify';
import User from '../Models/User';

const getAllUsers = async () => {
    try {
        const res = await API.get('/users', {
            headers: {
                "Content-Type": "application/json",
              }
        });
        return res.data;
    } catch (error) {
        console.log('Erreur lors de la récupération des utilisateurs :', error);
        toast.error('Erreur lors de la récupération des utilisateurs');
        throw error;
    }
}

const addUser = async (roomData: User) => {
    try {
        const res = await API.post('users', roomData);
        toast.success('utilisateur ajoutée avec succès');
        return res.data;
    } catch (error) {
        console.log('Erreur lors de l\'ajout de la utilisateur :', error);
        toast.error('Erreur lors de l\'ajout de la utilisateur');
        throw error;
    }
}
const getUserById = async (userId: number) => {
    try {
        const res = await API.get(`/users/${userId}`);
        return res.data;
    } catch (error) {
        console.log(`Erreur lors de la récupération de la utilisateur avec l'identifiant ${userId} :`, error);
        toast.error(`Erreur lors de la récupération de la utilisateur avec l'identifiant ${userId}`);
        throw error;
    }
}
const updateUser = async (userId: number, updatedUserData: User) => {
    try {
        const res = await API.put(`rooms/${userId}`, updatedUserData);
        return res.data;
    } catch (error) {
        console.log('Erreur lors de la mise à jour de la utilisateur :', error);
        toast.error('Erreur lors de la mise à jour de la utilisateur');
        throw error;
    }
}

const deleteUser = async (userId: number) => {
    try {
        const res = await API.delete(`rooms/${userId}`);
        //toast.success('Salle supprimée avec succès');
        return res.data;
    } catch (error) {
        console.log('Erreur lors de la suppression de la salle :', error);
        toast.error('Erreur lors de la suppression de la salle');
        throw error;
    }
}


export { getAllUsers, addUser, updateUser, deleteUser, getUserById };
