import React from "react"

import Header from './Header' 

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="container">
        <Header />
    </div>
    )
  }
}



export default App