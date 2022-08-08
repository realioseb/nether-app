import {
  AppContainer,
  Button,
  Header,
  HR,
  Input,
  KeccakBadge,
  Nounce,
  Error,
  LoadingSpinner,
} from "./components";
import { useApp } from "./use-app";

const App = () => {
  const {
    apiData,
    text,
    handleChange,
    handleSubmit,
    btnDisabled,
    apiError,
    error,
  } = useApp();

  return (
    <AppContainer className="App">
      <Header>Find lower keccak</Header>

      <Input
        placeholder="Insert hexadecimal-256"
        value={text}
        onChange={handleChange}
      />
      <Button type="button" onClick={handleSubmit} disabled={btnDisabled}>
        {btnDisabled ? <LoadingSpinner /> : "Submit"}
      </Button>

      {!!apiError && <Error>Server Error: {apiError}</Error>}
      {!!error && <Error>Validation Error: {error}</Error>}

      {apiData && (
        <>
          <HR />
          <Header>Results</Header>
          <Nounce>
            <b>Nounce: </b>
            {apiData.nounce}
          </Nounce>
          <KeccakBadge>{apiData.hash}</KeccakBadge>
        </>
      )}
    </AppContainer>
  );
};

export default App;
