import React from 'react';
import Launch from '../../components/Launch';

function HomePage() {
  const launches = [
    {
      "flight_number": 1,
      "mission_name": "FalconSat",
      "launch_date_utc": "2010-03-24T22:30:00.000Z",
      "links": {
        "mission_patch_small": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png"
      }
    },
    {
      "flight_number": 2,
      "mission_name": "FalconSat 2",
      "launch_date_utc": "2010-06-01T22:30:00.000Z",
      "links": {
        "mission_patch_small": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png"
      }
    }
  ];

  return (
    <div className="Launches">
      <div className="LaunchesList">
        {launches.map(launch => <Launch key={launch.flight_number} launch={launch} />)}
      </div>
    </div>
  )
}
export default HomePage;