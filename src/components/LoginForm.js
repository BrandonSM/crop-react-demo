import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formStyle: {
      '& > *': {
        width: '25ch',
        margin: theme.spacing(1),
      },
    },
  }));

function LoginForm() {

    const classes = useStyles();

    return (
        <form className={classes.formStyle} noValidate autoComplete="off">
            <TextField id="email-input" label="Email" />
            <TextField id="password-input" label="Password" />
            <Button variant="outlined">Login</Button>
        </form>
    );
}

export default LoginForm;
  