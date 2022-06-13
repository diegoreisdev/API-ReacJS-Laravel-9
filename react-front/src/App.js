import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowNotas from './components/ShowNotas';
import CreateNota from './components/CreateNota';
import EditNota from './components/EditNota';
function App() {
    return (
        <div className="App container">
           <BrowserRouter>
            <Routes>
                <Route path='/' element={ <ShowNotas/> }/>
                <Route path='/create' element={ <CreateNota/> }/>
                <Route path='/edit/:id' element={ <EditNota/> }/>  
            </Routes>
           </BrowserRouter>
        </div>
    );
}

export default App;