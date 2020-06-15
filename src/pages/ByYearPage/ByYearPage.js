import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Launch from '../../components/Launch';

function ByYearPage({ match }) {
  const { year } = match.params
  const [launches, setLaunches] = useState(null);

  useEffect(() => {
    const url = `https://api.spacexdata.com/v3/launches/past?launch_year=${year || ''}`;
    axios.get(url).then((response) => {
      setLaunches(response.data);    
    })
  }, [year])

  return (
    <div className="Launches">
      <div className="LaunchesList">
        {
          launches
            ? launches.map(launch => <Launch key={launch.flight_number} launch={launch} />)
            : <CircularProgress />
        }
      </div>
    </div>
  );
}
export default withRouter(ByYearPage);
