import React from 'react'

class SeasonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const seasons = ['spring', 'summer', 'autumn', 'winter'];
    const listSeasons = seasons.map((season) =><li>{season}</li>);

    return (
      <div>
        <ul>{listSeasons}</ul>
      </div>
    );
  }
}

export default SeasonList;