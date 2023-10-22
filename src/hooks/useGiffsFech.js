import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useGiffsFech = (cat) => {

  const [estado, setEstado] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {

    getGifs(cat)
    .then((gifs) =>

      setEstado({
        data: gifs, 
        loading: false,
      })            


    );

  }, [cat]);

  return estado;
};
