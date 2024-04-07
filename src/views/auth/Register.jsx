import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import prestalogo from "../../assets/prestalogo.png";


function Register() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [selectRoles, setRoles] = useState();

    const roles = [
        { name: "Administrateur" },
        { name: "Prestataire" },
    ];

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/register", { email, password, role: selectRoles });
            console.log(response)
        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src={prestalogo}
                        alt="logo-presta"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Demande d'inscription
                    </h2>
                    <p className="text-center pt-5">Votre inscription devra être valider par l'administrateur du site.</p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleRegister}>

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
                                    onChange={e => setEmail(e.target.value)}
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
                                    onChange={e => setPassword(e.target.value)}
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
                                        Role
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
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg
                                            class="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Inscription
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Vous avez déjà un compte?{" "}
                        <Link
                            to="/login"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Se connecter
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
