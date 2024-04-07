import { useEffect, useState } from "react";
import axios from "axios";


function UpdatePrestaire({
    modalVisible,
    toggleModal,
    idUser,
}) {
    const [services, setServices] = useState([]);

    const [fullName, setFullName] = useState();
    const [telephone, setTelephone] = useState();
    const [ville, setVille] = useState();
    const [description, setDescription] = useState();
    const [service, setService] = useState();

    const villes = [
        { id: 1, nom: "Saint-Denis" },
        { id: 2, nom: "Saint-Paul" },
        { id: 3, nom: "Saint-Pierre" },
        { id: 4, nom: "Le Tampon" },
        { id: 5, nom: "Saint-André" },
        { id: 6, nom: "Le Port" },
        { id: 7, nom: "Saint-Louis" },
        { id: 8, nom: "La Possession" },
        { id: 9, nom: "Saint-Benoît" },
        { id: 10, nom: "Saint-Joseph" },
        { id: 11, nom: "Petite-Île" },
        { id: 12, nom: "La Plaine-des-Palmistes" },
        { id: 13, nom: "Sainte-Marie" },
        { id: 14, nom: "Sainte-Suzanne" },
        { id: 15, nom: "Salazie" },
        { id: 16, nom: "Cilaos" },
        { id: 17, nom: "Entre-Deux" },
    ];

    const getAllServices = async () => {
        await axios.get("http://localhost:3001/services").then((response) => {
            setServices(response.data);
        });
    };

    const updateAccount = async (e) => {
        const data = {
            fullName: fullName,
            telephone: telephone,
            ville: ville,
            description: description,
            service: service,
        };
        e.preventDefault();

        try {
            const response = await axios.put(
                `http://localhost:3001/prestataires/2`,
                data
            );
            console.log(response);
        } catch (error) {
            console.error("error", error);
        }
    };

    useEffect(() => {
        getAllServices();
    }, []);

    return (
        <>
            {modalVisible && (
                <div
                    id="authentication-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Modifier le préstataire
                                </h3>
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="authentication-modal"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        ></path>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <form className="space-y-4" onSubmit={updateAccount}>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Nom de l'entreprise
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="Nom de l'entreprise"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Ville
                                        </label>
                                        <select
                                            id="ville"
                                            name="ville"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            {/* Mapping sur la liste des secteurs d'activité pour créer les options */}
                                            {villes.map((ville) => (
                                                <option key={ville.id} value={ville.id}>
                                                    {ville.nom}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Téléphone
                                        </label>
                                        <input
                                            type="text"
                                            name="telephone"
                                            id="telephone"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="0262.12.34.56"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Secteur d'activité
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            {/* Mapping sur la liste des secteurs d'activité pour créer les options */}
                                            {services.map((service) => (
                                                <option key={service.id} value={service.id}>
                                                    {service.fullName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Description
                                        </label>
                                        <textarea
                                            type="text"
                                            name="description"
                                            id="description"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="Description de votre entreprise"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Modifier le préstataire
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdatePrestaire;
