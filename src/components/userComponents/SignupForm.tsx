import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SinupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {
        // Ajouter ici la logique pour soumettre le formulaire
    }

    return (
        <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="formulaire border" style={formContainerStyle}>
                <br />
                <h3 style={{ color: "#10350c", textAlign: "center" }}>
                    S'inscrire
                </h3>
                <br />

                <Form style={{ width: "380px" }} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ display: "block", textAlign: "left", fontSize: "15px" }}>
                            Nom<small className="text-danger">*</small>
                        </Form.Label>
                        <Form.Control type="text" name="name" placeholder="nom" value={name} onChange={(e) => setName(e.target.value)} />
                        <span className="text-danger"></span>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ display: "block", textAlign: "left", fontSize: "15px" , marginTop:'15px' }}>
                            Email<small className="text-danger">*</small>
                        </Form.Label>
                        <Form.Control type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span className="text-danger"></span>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ display: "block", textAlign: "left", fontSize: "15px", marginTop:'15px' }}>
                            Mot de passe<small className="text-danger">*</small>
                        </Form.Label>
                        <div style={{ position: "relative" }}>
                            <Form.Control type={showPassword ? "text" : "password"} placeholder="mot de passe" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "transparent", border: "none", cursor: "pointer" }}>
                                {showPassword ? (
                                    <AiFillEye size={22} />
                                ) : (
                                    <AiFillEyeInvisible size={22} />
                                )}
                            </button>
                        </div>
                    </Form.Group>
                    <Button  style={{ display: "block", textAlign: "left", marginTop: "20px" }} variant="secondary" type="submit" className="font-weight-bold float-end ">
                        Créer
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

export default SinupForm;
