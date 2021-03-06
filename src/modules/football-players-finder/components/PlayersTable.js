import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { getPlayers } from '../selectors';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const styles = theme => ({
});

const PlayersTable = (props) => {
  const { classes } = props;
  return (
    <Table id="players-table" className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Player</TableCell>
          <TableCell align="right">Position</TableCell>
          <TableCell align="right">Team</TableCell>
          <TableCell align="right">Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.players.map(player =>
          <TableRow key={player.name}>
            <TableCell component="th" scope="row">{player.name}</TableCell>
            <TableCell align="right">{player.position}</TableCell>
            <TableCell align="right">{player.nationality}</TableCell>
            <TableCell align="right">{player.age}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );

}

PlayersTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    players: getPlayers(state),
  }
}

export default connect(mapStateToProps, null)(withStyles(styles)(PlayersTable));
