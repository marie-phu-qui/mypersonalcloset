import React from 'react'

class SeasonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this)
}
handleClick(e) {
    e.preventDefault()
    console.log(this.props.season)
  }

  render() {
    const seasons = ['spring', 'summer', 'autumn', 'winter'];
    const listSeasons = seasons.map((season, i) =><li key={i} season={season}>{season}</li>);

    return (
      <div>
        <a href='#' onClick={(e) => this.handleClick(e)}><ul>{listSeasons}</ul></a>
      </div>
    );
  }
}


export default (SeasonList);