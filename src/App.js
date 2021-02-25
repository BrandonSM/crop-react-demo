import { Container, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from '../src/components/LoginForm'

function App() {

  return (
    <Container maxWidth="sm">
      <LoginForm/>
    </Container>
  );
}

export default App;
