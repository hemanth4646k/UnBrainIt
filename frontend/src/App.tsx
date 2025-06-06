import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoard from './components/Dashboard'
import SigninPage from './components/ui/SigninPage'
import SignupPage from './components/ui/SignupPage'
/*
  App name: UnBrainIt
  Tagline: Unload the brain and unleash the train
*/
function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupPage/>}> </Route>
          <Route path="/signin" element={<SigninPage/>}> </Route>
          <Route path="/dashboard" element={<DashBoard/>}> </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App
