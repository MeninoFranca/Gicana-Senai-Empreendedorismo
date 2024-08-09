import { useState } from 'react'
import '../csses/pc/App.css'
import Authenticator from './Authenticator.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ElogieAqui from './ElogieAqui.jsx'
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'


function App() {
  
  const { Button, TextArea } = chakraTheme.components

  const [ uusername, setUsername ] = useState("")
  const [ token, setToken ] = useState("")
  
  const theme = extendBaseTheme({
    components: {
      Button,
      TextArea,
    },
  })

  return (
    <ChakraBaseProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Authenticator setToken={setToken} setUUsername={setUsername} username={uusername}/>}/>
            <Route path='/elogieaqui' element={<ElogieAqui noome={uusername}/>}/>
          </Routes>
      </BrowserRouter>
    </ChakraBaseProvider>
  )
}

export default App
