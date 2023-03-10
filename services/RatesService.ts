import axios from 'axios';
import {readString} from 'react-papaparse';
import CurrencyRate from '../types/CurrencyRate';

const apiClient = axios.create({
  baseURL: 'https://www.cnb.cz/en',
  headers: {
    'Content-type': 'text/plain',
  },
});

const getRates = async () => {
  const response = await apiClient.get<string>(
    '/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt',
  );

  // Remove first line that is not related to table.
  const lines = response.data.split('\n');
  lines.splice(0, 1);
  const data = lines.join('\n');

  let rates: Map<string, CurrencyRate> | undefined;

  readString<CurrencyRate>(data, {
    delimiter: '|',
    newline: '\n',
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
    complete: results => {
      rates = new Map<string, CurrencyRate>();

      results.data.forEach(value => {
        rates?.set(value.Code, value);
      });
    },
    worker: true,
  });

  return rates;
};

const RatesService = {
  getRates,
};

export default RatesService;
