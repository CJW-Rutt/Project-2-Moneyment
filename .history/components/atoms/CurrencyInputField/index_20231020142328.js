import CurrencyInput from 'react-currency-input-field';

<CurrencyInput
    id="input-example"
    name="input-name"
    placeholder="Please enter a number"
    defaultValue={1000}
    decimalsLimit={2}
    onValueChange={(value, name) => console.log(value, name)}
/>;