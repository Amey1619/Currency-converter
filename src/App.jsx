import { Container,Typography,Grid,Box } from '@mui/material'
import InputAmout from './components/InputAmount';
import SelectCountry from './components/SelectCountry';
import SwitchCurrency from './components/SwitchCurrency';
import {useContext, useEffect,useState } from 'react';
import { Currencycontext } from './context/Currencycontext';
import axios from 'axios';

function App() {
  const {
    fromCurrency,
    setFormCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(Currencycontext);
  const [result, setResult] = useState(0);
  const codeFromCurrency=fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];
  useEffect(() => {
    if (firstAmount) {
      axios("https://api.freecurrencyapi.com/v1/latest", {
        params: {
          apikey: "fca_live_3mn7eNGi6zwMQmdSL1jj4qj7cHwkaSkp7lnA0pMD",
          base_currency: codeFromCurrency,
          currencies: codeToCurrency,
        },
      })
        .then((response) => setResult(response.data.data[codeToCurrency]))
        .catch((error) => console.log(error));
    }
  }, [firstAmount,fromCurrency,toCurrency]);
  const boxStyles = {
     background: "#fdfdfd",
     marginTop: "10%",
     textAlign: "center",
     color: "#222",
     minHeight: "20rem",
     borderRadius: 2,
     padding: "4rem 2rem",
     boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
     position: "relative",
   };

  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
        Currency Converter ReactJS
      </Typography>
      <Grid container spacing={2}>
        <InputAmout />
        <SelectCountry
          value={fromCurrency}
          setValue={setFormCurrency}
          label="From"
        />
        <SwitchCurrency />
        <SelectCountry
          value={toCurrency}
          setValue={setToCurrency}
          label="To"
        />
      </Grid>
      {firstAmount?(
        <Box sx={{textAlign: "left",marginTop: "1rem"}}>
          <Typography>{firstAmount} {fromCurrency}</Typography>
          <Typography variant='h5' sx={{marginTop: "5px",fontWeight: "bold"}}>{result*firstAmount} {toCurrency}</Typography>
        </Box>
      ):""}
    </Container>
  );
}

export default App
