import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./components/AuthProvider";

function App() {
  const [services, setServices] = useState([]);

  const { userLog } = useAuth();

  console.log("Userlog: ", userLog);

  const getAllServices = async () => {
    await axios.get("http://localhost:3001/services").then((response) => {
      setServices(response.data);
    });
  };

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <>
      <div className="flex justify-center pt-5">
        <div className="flex-col text-center">
          <h1 className="text-3xl font-bold pb-5">Liste des services</h1>

          <div className="grid grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/prestataires/service/${service.id}`}
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {service.nomService}
                </h5>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
