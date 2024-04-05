import API from './APIProvider';
import { toast } from 'react-toastify';
import Book from '../Models/Book';

const getAllBooks = async () => {
    try {
        const res = await API.get('/books', {
            headers: {
                "Content-Type": "application/json",
              }
        });
        return res.data;
    } catch (error) {
        console.log('Erreur lors de la récupération des livres :', error);
        toast.error('Erreur lors de la récupération des livres');
        throw error;
    }
}

const addBook = async (bookData: Book) => {
    try {
        const res = await API.post('users', bookData);
        toast.success('utilisateur ajouté avec succès');
        return res.data;
    } catch (error) {
        console.log('Erreur lors de l\'ajout de la livre :', error);
        toast.error('Erreur lors de l\'ajout de la livre');
        throw error;
    }
}
const getBookById = async (bookId: number) => {
    try {
        const res = await API.get(`/book/${bookId}`);
        return res.data;
    } catch (error) {
        console.log(`Erreur lors de la récupération de la utilisateur avec l'identifiant ${bookId} :`, error);
        toast.error(`Erreur lors de la récupération de la utilisateur avec l'identifiant ${bookId}`);
        throw error;
    }
}
const updateBook = async (bookId: number, updatedBookData: Book) => {
    try {
        const res = await API.put(`books/${bookId}`, updatedBookData);
        toast.success('livre modifié avec succès');
        return res.data;
    } catch (error) {
        console.log('Erreur lors de la mise à jour de la livre :', error);
        toast.error('Erreur lors de la mise à jour de la livre');
        throw error;
    }
}

const deleteBook = async (bookId: number) => {
    try {
        const res = await API.delete(`books/${bookId}`);
        toast.success('livre supprimée avec succès');
        return res.data;
    } catch (error) {
        console.log('Erreur lors de la suppression de la livre :', error);
        toast.error('Erreur lors de la suppression de la livre');
        throw error;
    }
}


export { getAllBooks, addBook, updateBook, deleteBook, getBookById};
