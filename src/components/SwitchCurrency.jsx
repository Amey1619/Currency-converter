import { Grid, Button } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { useContext } from "react";
import { Currencycontext } from "../context/Currencycontext";
const SwitchCurrency = () => {
  const { fromCurrency, setFormCurrency, toCurrency, setToCurrency } =
    useContext(Currencycontext);
  const handleSwitch = () => {
    setFormCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  return (
    <Grid item xs={12} md="auto">
      <Button
        onClick={handleSwitch}
        sx={{
          borderRadius: 1,
          height: "100%",
        }}
      >
        <SwapHorizIcon sx={{ fontSize: 30 }} />
      </Button>
    </Grid>
  );
};

export default SwitchCurrency;
