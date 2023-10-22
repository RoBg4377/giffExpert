import { createRoot } from 'react-dom/client';
import GifExpertApp from './GifExpertAPP';

import { StrictMode } from 'react';
import './index.css';
import { Footer } from './components/Footer';


const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <GifExpertApp />
    <Footer />

  </StrictMode>

);









// import React, { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client';

// import GifExpertApp from './GifExpertAPP';

// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <GifExpertApp />
//   </StrictMode>
  

// );