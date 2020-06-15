import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Launches from '../../components/Launches';

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
      <Launches launches={launches} />
    </div>
  )
}
export default HomePage;
