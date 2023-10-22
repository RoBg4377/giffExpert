import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiffGrid } from "./components/GiffGrid";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(['Goku']);

  return (
    <>
    <div className="container">
      <h1>GifExpertApp</h1>
      <AddCategory setCategorias={setCategorias} />

      <hr />

      <ol>
        {categorias.map((cat) => <GiffGrid cat={cat} key={cat}/>)}
      </ol>
    </div>
    <hr />

    </>
  );
}; 
export default GifExpertApp;
