import React from "react"

import Header from './Header' 

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div class="container">
        <Header />
        <div class="content">

            <div class="closet" class="col-lg-12">
                <div id="my-items">
                    <h2 class="col-lg-12">Your items</h2>
                    <div class="row">
                        <div id="arrow-left" class="nav-arrow col-sm-1">
                        </div>

                        <div class="col-md-2">
                            <img>img 1</img>
                        </div>
                        
                        <div class="col-md-3">
                            <img>img 2</img>
                        </div>        
                        
                        <div class="col-md-3">
                            <img>img 3</img>
                        </div>

                        <div class="col-md-2">
                            <img>img 4</img>
                        </div>

                        <div id="arrow-right" class="nav-arrow col-sm-1">
                        </div>
                    </div>
                </div>

                <div id="add-new-item">
                    <h2 class="col-lg-12">Add one item</h2>
                    <form id="upload-form" class="row">
                        <div class="col-lg-9">
                            <input type='image' id="new-item" class="col-sm-12"placeholder="Upload one item" onclick={addItem()}/>
                        </div>
                        <div class="button col-sm-3">
                        <input type='button' value="ADD" class="col-sm-12" id="upload-btn" onclick={uploadItem()}/>
                        </div>
                    </form>  
                </div>
            </div>

        </div>
    </div>
    )
  }
}



export default App