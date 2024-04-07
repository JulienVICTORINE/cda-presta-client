import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function PrestatairesByServices() {
    const { serviceId } = useParams();

    console.log("serviceId: ", serviceId);

    const [prestataires, setPrestataires] = useState([]);

    const getAllPrestataireByServiceId = async () => {
        await axios
            .get(`http://localhost:3001/prestataires/service/${serviceId}`)
            .then((response) => {
                setPrestataires(response.data);
            });
    };

    useEffect(() => {
        getAllPrestataireByServiceId();
    }, [serviceId]); // Réexécute le chargement des données lorsque serviceId change

    return (
        <>
            <div className="flex justify-center pt-5">
                <div className="flex-col text-center">
                    <h1 className="text-3xl font-bold pb-5">Liste des services</h1>

                    <div className="grid grid-cols-3 gap-4">
                        {prestataires.map((prestataire) => (
                            <Link
                                key={prestataire.id}
                                to={`/prestataire/${prestataire.id}`}
                                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                            >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {prestataire.fullName}
                                </h5>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrestatairesByServices;
