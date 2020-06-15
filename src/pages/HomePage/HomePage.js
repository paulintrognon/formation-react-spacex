import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Launch from '../../components/Launch';
import { CircularProgress } from '@material-ui/core';

function HomePage() {
  const [launches, setLaunches] = useState();

  useEffect(() => {
    const url = `https://api.spacexdata.com/v3/launches/past`;
    Axios.get(url).then((response) => {
      setLaunches(response.data);    
    })
  }, [])

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
  )
}
export default HomePage;
