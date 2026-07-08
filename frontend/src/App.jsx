import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'

import Catalogo from './pages/Catalogo'

import Admin from './pages/Admin'

import Login from './pages/Login'

import Detalle from './pages/Detalle'

import Comprar from './pages/Comprar'

import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/catalogo'
          element={<Catalogo />}
        />

        <Route
          path='/detalle/:id'
          element={<Detalle />}
        />

        <Route
          path='/comprar/:id'
          element={<Comprar />}
        />

        <Route
          path='/login'
          element={<Login />}
        />

        <Route
          path='/admin'
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App