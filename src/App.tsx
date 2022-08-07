import {
  AppContainer,
  Button,
  Header,
  HR,
  Input,
  KeccakBadge,
  Nounce,
} from "./components";

const App = () => {
  return (
    <AppContainer className="App">
      <Header>Find lower keccak</Header>
      <Input placeholder="Insert hexadecimal-256" />
      <Button>Submit</Button>
      <HR />
      <Header>Results</Header>
      <Nounce>
        <b>Nounce: </b>5
      </Nounce>
      <KeccakBadge>
        54e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107
      </KeccakBadge>
    </AppContainer>
  );
};

export default App;
