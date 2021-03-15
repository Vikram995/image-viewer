import React, {Component} from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import {withStyles} from '@material-ui/core/styles';

const styles =  theme => ({
    card: {
        maxWidth: 1100,
    },
    avatar: {
        margin: 10,
    },
    media: {
        height:0,
        paddingTop: '56.25%', // 16:9
    },
    formControl: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'baseline',
    },
    comment:{
        display:'flex',
        alignItems:'center'
    },
    hr:{
        marginTop:'10px',
        borderTop:'2px solid #f2f2f2'
    },
    gridList:{
        width: 1100,
        height: 'auto',
        overflowY: 'auto',
    },
    grid:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:90
    }
});

class Home extends Component {

    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
