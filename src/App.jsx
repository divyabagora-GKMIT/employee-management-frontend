import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/NotFound';
import CreateUserForm from './components/CreateUserForm';
import AddProjectForm from './components/AddProjectForm';
import AddDepartmentForm from './components/AddDepartmentForm';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/resetPassword"
            element={
              <PrivateRoute>
                <ResetPassword />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
