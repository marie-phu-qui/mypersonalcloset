import React from "react"

import Header from './Header' 
import SeasonList from './SeasonList' 
import ItemsList from './ItemsList' 


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="container">
        <Header />
        <SeasonList />
        <ItemsList />
    </div>
    )
  }
}



export default App