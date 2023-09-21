import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCrimesQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetCrimesQuery = { __typename?: 'Query', crimes?: { __typename?: 'CrimeEntityResponseCollection', data: Array<{ __typename?: 'CrimeEntity', id?: string | null, attributes?: { __typename?: 'Crime', locale?: string | null, crimeTitle: string, slug?: string | null, crimeInfo: string, victims_dead?: string | null, victims_injured?: string | null, crimeCoverPhoto: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null }> } | null };


export const GetCrimesDocument = gql`
    query GetCrimes($locale: I18NLocaleCode) {
  crimes(locale: $locale) {
    data {
      id
      attributes {
        locale
        crimeTitle
        slug
        crimeInfo
        victims_dead
        victims_injured
        crimeCoverPhoto {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCrimesQuery__
 *
 * To run a query within a React component, call `useGetCrimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCrimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCrimesQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetCrimesQuery(baseOptions?: Apollo.QueryHookOptions<GetCrimesQuery, GetCrimesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCrimesQuery, GetCrimesQueryVariables>(GetCrimesDocument, options);
      }
export function useGetCrimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCrimesQuery, GetCrimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCrimesQuery, GetCrimesQueryVariables>(GetCrimesDocument, options);
        }
export type GetCrimesQueryHookResult = ReturnType<typeof useGetCrimesQuery>;
export type GetCrimesLazyQueryHookResult = ReturnType<typeof useGetCrimesLazyQuery>;
export type GetCrimesQueryResult = Apollo.QueryResult<GetCrimesQuery, GetCrimesQueryVariables>;