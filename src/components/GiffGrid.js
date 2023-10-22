import { GiffGridImagen } from "./GiffGridImagen";

import { useGiffsFech } from "../hooks/useGiffsFech";

export const GiffGrid = ({ cat }) => {
  const { data: gifs, loading } = useGiffsFech(cat);

  return (
    <>
      <h3>Imagenes Recibidas: {cat}</h3>

      {loading && (

        <div>
        <div class="spinner-grow cargador" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow cargador" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow cargador" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow cargador" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        </div>
      )
      }

      <div className="card-grid">
        {gifs.map((gif) => (
          <GiffGridImagen key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
