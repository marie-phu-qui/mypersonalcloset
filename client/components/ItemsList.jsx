import React from 'react'
import { connect } from "react-redux";

import { fetchClothes } from '../actions'

import {Item} from './Item'

export class ItemsList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
    render() {
        return (
    <div id="main-title" className="col-lg-12">
        <h2>My clothes</h2>
        {console.log(this.props)}
    </div>
    )}
}

const mapStateToProps = state => ({
    saison: state.saison,
    clothingType: state.clothingType,
  })
  
const mapDispatchToProps = (dispatch) => {
    dispatch(fetchClothes())
    return {}
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);