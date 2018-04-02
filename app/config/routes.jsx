import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { MainContainer, HomeContainer } from "containers"

const getRoutes = () => (
  <BrowserRouter>
    <div>
      <Route path="/" render={() => <MainContainer />} />
      <Route exact path="/" render={() => <HomeContainer />} />
    </div>
  </BrowserRouter>
)

export default getRoutes
