import RoutesApp from './routes/routes'
import ThemeHeaderProvider from './contexts/themeHeader';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/userDetails';

import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000} />
        <ThemeHeaderProvider>
          <RoutesApp />
        </ThemeHeaderProvider>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;