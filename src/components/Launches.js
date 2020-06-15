import React, { useState } from 'react';
import Launch from './Launch'
import { CircularProgress, TextField } from '@material-ui/core'

function Launches({ launches }) {
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  }

  const filteredLaunches = launches && launches.filter(launch => {
    return launch.mission_name.toLowerCase().indexOf(filter.toLowerCase()) > -1
  })

  return (
    <div className="Launches">
      <div className="LaunchesSearch">
        <TextField label="Recherche" onChange={handleChange} />
      </div>
      <div className="LaunchesList">
        {
          filteredLaunches
            ? filteredLaunches.map(launch => <Launch key={launch.flight_number} launch={launch}/>)
            : <CircularProgress />
        }
      </div>
    </div>
  )
}
export default Launches;
