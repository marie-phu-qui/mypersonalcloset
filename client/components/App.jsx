import React from "react"

import Header from './Header' 
import ItemsList from './ItemsList' 



class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="container">
        <Header />
        <ItemsList />
    </div>
    )
  }
}



export default App