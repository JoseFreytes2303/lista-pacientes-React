
import { Pacientes } from "./Pacientes";
import PropTypes from "prop-types";

export const ListaPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center mt-2">
            Listado de Pacientes:
          </h2>
          <p className="text-xl mt-2 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold ">
              Pacientes y Citas
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Pacientes
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center mt-2">
            No hay Pacientes
          </h2>
          <p className="text-xl mt-2 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold ">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

ListaPacientes.propTypes = {
  pacientes: PropTypes.array.isRequired,
  setPaciente: PropTypes.func.isRequired,
  eliminarPaciente: PropTypes.func.isRequired
};

