import { useEffect, useState } from "react";
import UpdatePrestaire from "../../components/modal/UpdatePrestataire";
import DeleteUser from "../../components/modal/DeleteUser";
import AddUser from "../../components/modal/AddUser";

// API
import { getAllUsers } from "../../api/Utilisateur";


function Utilisateurs() {
  const [users, setUsers] = useState([]);
  const [idUser, setIdUser] = useState();
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const deleteToggleModal = (idUser) => {
    setIdUser(idUser);
    setDeleteModalVisible(!deleteModalVisible);
  };

  const actionSuccess = () => {
    // Mettre à jour la liste des utilisateurs après la suppression réussie
    getAllUsers().then((data) => setUsers(data)); // Utilisation de getAllUsers pour mettre à jour la liste des utilisateurs    
    setDeleteModalVisible(false); // Fermer le modal de suppression
  };

  const addToggleModal = () => {
    setAddModalVisible(!addModalVisible);
  };

  const toggleModal = (idUser) => {
    setIdUser(idUser);
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    getAllUsers().then((data) => setUsers(data)); // Appel à getAllUsers lors du montage du composant
  }, []);
  return (
    <>
      <div className="relative overflow-x-auto">
        <button
          onClick={() => addToggleModal()}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 mx-5 rounded"
        >
          Ajouter un utilisateur
        </button>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Rôle
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td className="text-center py-4" colSpan="3">
                  Aucun compte à valider
                </td>
              </tr>
            ) : (
              <>
                {users.map((account) => (
                  <tr
                    key={account.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {account.email}
                    </th>
                    <td className="px-6 py-4">{account.role}</td>
                    <td className="px-6 py-4 flex">
                      {account.role === "Prestataire" ? (
                        <>
                          <div>
                            <button
                              onClick={() => toggleModal(account.id)}
                              className="mr-2 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                              Modifier
                            </button>
                          </div>
                          <div>
                            <button
                              onClick={() => deleteToggleModal(account.id)}
                              className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                              Supprimer
                            </button>
                          </div>
                        </>
                      ) : (
                        <button
                          onClick={() => deleteToggleModal(account.id)}
                          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Supprimer
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>

        <AddUser
          addModalVisible={addModalVisible}
          addToggleModal={addToggleModal}
          actionSuccess={actionSuccess}
        />

        <UpdatePrestaire
          idUser={idUser}
          modalVisible={modalVisible}
          toggleModal={toggleModal}
        />

        <DeleteUser
          idUser={idUser}
          deleteModalVisible={deleteModalVisible}
          deleteToggleModal={deleteToggleModal}
          actionSuccess={actionSuccess}
        />
      </div>
    </>
  );
};

export default Utilisateurs;
