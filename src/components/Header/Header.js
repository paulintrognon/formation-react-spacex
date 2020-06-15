import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" className="HeaderTitle">
          <h1>
            Lancements Space X
          </h1>
        </Link>

        <div style={{color: 'white'}}>
          <Button component={Link} to="/" color="inherit">Tous</Button>
          <Button component={Link} to="/année/2020" color="inherit">2020</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}
export default Header;
