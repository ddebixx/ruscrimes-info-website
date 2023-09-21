import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCrimesStatisticsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetCrimesStatisticsQuery = { __typename?: 'Query', crimesStatistics?: { __typename?: 'CrimesStatisticEntityResponseCollection', data: Array<{ __typename?: 'CrimesStatisticEntity', id?: string | null, attributes?: { __typename?: 'CrimesStatistic', crimeTypes: string, crimeNumber: string } | null }> } | null };


export const GetCrimesStatisticsDocument = gql`
    query GetCrimesStatistics($locale: I18NLocaleCode) {
  crimesStatistics(locale: $locale) {
    data {
      id
      attributes {
        crimeTypes
        crimeNumber
      }
    }
  }
}
    `;

/**
 * __useGetCrimesStatisticsQuery__
 *
 * To run a query within a React component, call `useGetCrimesStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCrimesStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCrimesStatisticsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetCrimesStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<GetCrimesStatisticsQuery, GetCrimesStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCrimesStatisticsQuery, GetCrimesStatisticsQueryVariables>(GetCrimesStatisticsDocument, options);
      }
export function useGetCrimesStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCrimesStatisticsQuery, GetCrimesStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCrimesStatisticsQuery, GetCrimesStatisticsQueryVariables>(GetCrimesStatisticsDocument, options);
        }
export type GetCrimesStatisticsQueryHookResult = ReturnType<typeof useGetCrimesStatisticsQuery>;
export type GetCrimesStatisticsLazyQueryHookResult = ReturnType<typeof useGetCrimesStatisticsLazyQuery>;
export type GetCrimesStatisticsQueryResult = Apollo.QueryResult<GetCrimesStatisticsQuery, GetCrimesStatisticsQueryVariables>;