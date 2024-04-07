import axios from "axios";
import { useState } from "react";


function AddUser({
    addModalVisible,
    addToggleModal,
    actionSuccess,
}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [selectRoles, setRoles] = useState();

    const roles = [{ name: "Administrateur" }, { name: "Prestataire" }];
    
    const addAccount = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3001/register", {
                email,
                password,
                activated: 1,
                role: selectRoles,
            });
            addToggleModal();
            actionSuccess();
        } catch (error) {
            console.log("error", error);
        }
    };


    return (
        <>
            {addModalVisible && (
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
                                    Ajouter un utilisateur
                                </h3>
                                <button
                                    type="button"
                                    onClick={addToggleModal}
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
                                    <span className="sr-only">Fermer</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <form className="space-y-4" onSubmit={addAccount}>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Email
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                type="email"
                                                placeholder="Email"
                                                autoComplete="email"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="password"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Mot de passe
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                placeholder="Mot de passe"
                                                name="password"
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                autoComplete="current-password"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label
                                                    htmlFor="password"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Rôle
                                                </label>
                                            </div>
                                            <div className="mt-2">
                                                <select
                                                    id="role"
                                                    name="role"
                                                    value={selectRoles}
                                                    onChange={(e) => setRoles(e.target.value)}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                >
                                                    {/* Mapping sur la liste des secteurs d'activité pour créer les options */}
                                                    {roles.map((role) => (
                                                        <option key={role.name} value={role.name}>
                                                            {role.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg
                                                        className="fill-current h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Ajouter un utilisateur
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

export default AddUser
