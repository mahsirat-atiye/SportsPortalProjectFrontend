import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

function createData(id, name, total_games, wins, evens, losses, goals_scored, goals_taken, goal_difference, points) {
    return {id, name, total_games, wins, evens, losses, goals_scored, goals_taken, goal_difference, points};
}

const THEME = createMuiTheme({
    typography: {
        "fontFamily": "\"B Nazanin\"",
        "fontSize": 24,
        "fontWeightLight": 10,
        "fontWeightRegular": 20,
        "fontWeightMedium": 30
    }
});


class SimpleTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                createData(1, 'استقلال تهران', 1, 1, 1, 1, 1, 1, 1, 5),
                createData(2, 'پرسپولیس', 1, 1, 1, 1, 1, 1, 1, 4),
                createData(3, 'تراکتورسازی تبریز', 1, 1, 1, 1, 1, 1, 1, 3),
                createData(4, 'استقلال اهواز', 1, 1, 1, 1, 1, 1, 1, 2),
                createData(5, 'سایپا تهران', 1, 1, 1, 1, 1, 1, 1, 1),
            ]
        }
    }


    render() {
        return (
            <MuiThemeProvider theme={THEME}>
                <Paper>
                    <Table fixedHeader={true}>
                        <TableHead>
                            <TableRow>
                                <TableCell >تیم</TableCell>
                                <TableCell numeric>برد</TableCell>
                                <TableCell numeric>بازی‌ها</TableCell>
                                <TableCell numeric>مساوی</TableCell>
                                <TableCell numeric>باخت</TableCell>
                                <TableCell numeric>گل زده</TableCell>
                                <TableCell numeric>گل خورده</TableCell>
                                <TableCell numeric>تفاضل گل</TableCell>
                                <TableCell numeric>امتیاز</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell numeric>{row.total_games}</TableCell>
                                        <TableCell numeric>{row.wins}</TableCell>
                                        <TableCell numeric>{row.evens}</TableCell>
                                        <TableCell numeric>{row.losses}</TableCell>
                                        <TableCell numeric>{row.goals_scored}</TableCell>
                                        <TableCell numeric>{row.goals_taken}</TableCell>
                                        <TableCell numeric>{row.goal_difference}</TableCell>
                                        <TableCell numeric>{row.points}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </MuiThemeProvider>
        )
    };
}

export default SimpleTable;