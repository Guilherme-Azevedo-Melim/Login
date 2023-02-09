import React from "react"
import {RoutesApp} from "./routes"
import { AuthProvider } from "./contexts/auth"
import {GlobalStyle} from "./styled/global"


export const App = () => (
  <AuthProvider >
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
  
)