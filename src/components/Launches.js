import React from 'react';
import Launch from './Launch'
import { CircularProgress } from '@material-ui/core'

function Launches({ launches }) {
  return (
    <div className="Launches">
      <div className="LaunchesList">
        {
          launches
            ? launches.map(launch => <Launch key={launch.flight_number} launch={launch}/>)
            : <CircularProgress />
        }
      </div>
    </div>
  )
}
export default Launches;
