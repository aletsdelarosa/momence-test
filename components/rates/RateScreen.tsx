import React from 'react';
import RatesList from './RatesList';
import CurrencyRate from '../../types/CurrencyRate';
import {useQuery} from 'react-query';
import LoadingIndicator from '../general/LoadingIndicator';
import showErrorAlert from '../general/ErrorAlert';
import RatesService from '../../services/RatesService';

export default function RateScreen() {
  const {data, error, isError, isLoading} = useQuery<
    CurrencyRate[] | undefined,
    Error
  >('rates', async () => {
    const rates = await RatesService.getRates();

    let ratesArray: CurrencyRate[] = [];

    if (rates !== undefined) {
      for (let value of rates.values()) {
        ratesArray.push(value);
      }
    }

    return ratesArray;
  });

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isError) {
    showErrorAlert('Error while loading', error.message);

    return <RatesList rates={undefined} />;
  }

  return <RatesList rates={data} />;
}
