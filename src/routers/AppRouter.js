import { Route, Routes, Navigate } from "react-router-dom"
import { JournalScreen } from '../components/journal/JournalScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { LoginScreen } from '../components/auth/LoginScreen';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth">
        <Route 
          path="register" 
          element={
            <div className="auth__main">
              <div className="auth__box-container"> 
                <RegisterScreen/> 
              </div>
            </div> 
          } />
        <Route 
          path="login" 
          element={
            <div className="auth__main">
              <div className="auth__box-container"> 
                <LoginScreen/>
              </div>
            </div>
          } />
      </Route>
      <Route path="/" element={<JournalScreen />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
