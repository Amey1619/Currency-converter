import { Grid, InputAdornment, TextField } from "@mui/material";
import { useContext } from "react";
import { Currencycontext } from "../context/Currencycontext";

const InputAmout = () => {
  const { firstAmount, setFirstAmount } = useContext(Currencycontext);
  return (
    <Grid item xs={12} md>
      <TextField
        label="Amount"
        value={firstAmount}
        onChange={e=>setFirstAmount(e.target.value)}
        fullWidth
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Grid>
  );
};

export default InputAmout;
