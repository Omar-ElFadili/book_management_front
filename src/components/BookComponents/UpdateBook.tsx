import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const UpdateBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [sommary, setSommary] = useState(false);

    const { id } = useParams<{ id: string }>(); 
    const [name, setName] = useState<string>('');
    const [capacity, setCapacity] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                if (id) {
                    const roomData = await getRoomById(parseInt(id));
                    setName(roomData.name);
                    setCapacity(roomData.capacity.toString());
                    setDescription(roomData.description);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données de la chambre :', error);
                toast.error('Erreur lors de la récupération des données de la chambre');
            }
        };

        fetchRoomData();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !capacity || !description) {
            alert('Veuillez remplir tous les champs.');
            return;
        }
        const updatedRoomData: Room = {
            id: 0,
            name: name,
            capacity: parseInt(capacity),
            description: description
        };

        try {
            await updateRoom(id, updatedRoomData);
            navigate('/rooms')
            toast.success('Salle mise à jour avec succès');
        } catch (error) {
            console.error('Erreur lors de la mise à jour de la salle :', error);
            toast.error('Erreur lors de la mise à jour de la salle');
        }
    };
    const handleCancel = () => {
        navigate('/rooms')
    }

    return (
        <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="formulaire border" style={formContainerStyle}>
                <br />
                <h5 style={{ color: "#10350c", textAlign: "center" }}>
                    Modifier les informations de ce livre
                </h5>
                <br />

                <Form style={{ width: "380px" }} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ display: "block", textAlign: "left", fontSize: "15px" }}>
                            Titre<small className="text-danger">*</small>
                        </Form.Label>
                        <Form.Control type="text" name="name" placeholder="titre" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <span className="text-danger"></span>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ display: "block", textAlign: "left", fontSize: "15px" , marginTop:'15px' }}>
                            Auteur<small className="text-danger">*</small>
                        </Form.Label>
                        <Form.Control type="text" name="email" placeholder="auteur" value={author} onChange={(e) => setAuthor(e.target.value)} />
                        <span className="text-danger"></span>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ display: "block", textAlign: "left", fontSize: "15px" , marginTop:'15px' }}>
                            Genre<small className="text-danger">*</small>
                        </Form.Label>
                        <Form.Control type="text" name="email" placeholder="genre"  />
                        <span className="text-danger"></span>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ display: "block", textAlign: "left", fontSize: "15px" , marginTop:'15px' }}>
                            Résumé<small className="text-danger">*</small>
                        </Form.Label>
                        <Form.Control type="text" name="email" placeholder="Résumé" as="textarea" />
                        <span className="text-danger"></span>
                    </Form.Group>
                    <Button  style={{ display: "block", textAlign: "left", marginTop: "20px" }} variant="secondary" type="submit" className="font-weight-bold float-end ">
                        Enregistrer
                    </Button>
                </Form>
            </div>
        </div>
    );
};

const formContainerStyle = {
    background: "#f8f9fa", // Couleur de fond du formulaire
    borderRadius: "15px", // Bordure arrondie
    padding: "20px", // Espace intérieur du conteneur
    width: "420px",
    margin: "auto", // Centrer horizontalement
};

export default UpdateBook;
