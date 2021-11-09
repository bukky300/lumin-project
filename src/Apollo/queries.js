import {gql} from '@apollo/client';

export const GetProductsQuery = gql`
  query getProducts($currency: Currency = USD) {
    products {
      id
      title
      image_url
      price(currency: $currency)
    }
  }
`;


export const GetCurrencyQuery = gql`
  query getCurrencies {
    currency
  }
`;