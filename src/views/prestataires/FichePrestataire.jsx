import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";


function FichePrestataire() {
    const { id } = useParams();
    const [prestataire, setPrestataire] = useState([]);

    const getPrestataire = async () => {
        await axios
            .get(`http://localhost:3001/prestataire/${id}`)
            .then((response) => {
                setPrestataire(response.data);
            });
    };

    useEffect(() => {
        getPrestataire();
    }, []);
    

    return (
        <>
            <div className="flex h-screen flex-col text-center">
                <div className="m-auto">
                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img
                            className="object-none object-center rounded-t-lg"
                            src="https://picsum.photos/200/300"
                            alt=""
                        />
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
                                    {prestataire.fullName}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {prestataire.description}
                            </p>
                            <div className="flex">
                                <a
                                    href="#"
                                    className=" mr-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 mr-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                    {prestataire.telephone}
                                </a>
                                <a
                                    href="#"
                                    className=" mr-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 mr-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                    {prestataire.ville}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FichePrestataire;
