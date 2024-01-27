import { Grid,Autocomplete,TextField, Skeleton } from '@mui/material'
import useAxios from "../hooks/useAxios"

const SelectCountry = (props) => {
    const {  value,setValue, label }=props;
    const [data,loaded,error] = useAxios(
      "https://restcountries.com/v3.1/all"
    );
    if(loaded){
      return (
        <Grid item xs={12} md={3}>
          <Skeleton variant='rounded' height={60}/>
        </Grid>
      );
    }
    if(error){
      return "Something went wrong!"
    }
    const datafilter=data.filter(item => "currencies" in item);
     const dataCountries = datafilter.map((item) => {
       return (
         `${item.flag} ${Object.keys(item.currencies)[0]} - ${
           item.name.common
         }`
       );
     });
    //  console.log(dataCountries);
  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        value={value}
        disableClearable
        onChange={(event,newValue)=>{
          setValue(newValue);
        }}
        options={dataCountries}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
}

export default SelectCountry