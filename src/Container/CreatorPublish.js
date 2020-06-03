import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '../Components/Button'


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));



const CreatorPublish = props => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');


    const handleChange1 = (event) => {
        setAge(event.target.value);
    };

    return(
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Privacy</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange1}
                >
                    <MenuItem value={10}>Private</MenuItem>
                    <MenuItem value={20}>Public</MenuItem>
                </Select>
            </FormControl>
            <Button theme="minerva">Publish</Button>
        </div>)
}

export default CreatorPublish