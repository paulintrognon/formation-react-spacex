import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Launches from '../../components/Launches';

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
      <Launches launches={launches} />
    </div>
  );
}
export default withRouter(ByYearPage);
