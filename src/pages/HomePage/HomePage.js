import React from 'react';
import { CardMedia, CardContent, Typography, CardActions, IconButton, Card } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite'

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
        {launches.map(launch => (
          <Card className="Launch">
            <CardMedia
              style={{height: 140}}
              image={launch.links.mission_patch_small}
              title={launch.mission_name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                {launch.mission_name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {(new Date(launch.launch_date_utc)).toLocaleDateString()}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon color='disabled' />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default HomePage;