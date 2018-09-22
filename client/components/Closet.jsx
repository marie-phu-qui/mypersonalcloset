import React from 'react'
import { connect } from 'react-redux'
import { fetchCloset } from '../actions'

class Closet extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(fetchCloset())
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div id="main-title" className="col-lg-12">
                        <h1>My personal closet</h1>
                        <hr align="center" width="70%" />
                    </div>

                    <ul>
                        {this.props.closet.length > 0 && this.props.closet.map(colour => {
                            return <li key={closet.id}>{closet.closet}</li>
                        })}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    console.log({ state })
    return {
        closet: state.closet
    }
}

export default connect(mapStateToProps)(Closet)