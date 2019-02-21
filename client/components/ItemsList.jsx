import React from 'react'

import {Item} from './Item'

// should be a using props as it is a read only props to to passed on to
// should be state if the component itself is dynamic - should this be the dynamic items display ?

export class ItemsList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        e.preventDefault()
        this.setState({
          itemType: e.target.innerText
        })
      }

    render() {
        return (
    <div id="main-title" className="col-lg-12">
        <h2>My clothes</h2>
        <ul className="list-items">
            <li>
                <a href="#" onClick={(e) => this.handleClick(e)}><h4>Dresses</h4></a>
            </li>
            <li>
                <a href="#" onClick={(e) => this.handleClick(e)}><h4>Pants</h4></a>
            </li>
            <li>
                <a href="#" onClick={(e) => this.handleClick(e)}><h4>Tops</h4></a>
            </li>
            <li>
                <a href="#" onClick={(e) => this.handleClick(e)}><h4>See all</h4></a>
            </li>
        </ul>
    </div>
    )}
}


  
export default ItemsList;