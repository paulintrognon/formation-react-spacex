import React from 'react';
import { CardMedia, CardContent, Typography, CardActions, IconButton, Card } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite'

function Launch({ launch }) {
  return (
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
  )
}
export default Launch;