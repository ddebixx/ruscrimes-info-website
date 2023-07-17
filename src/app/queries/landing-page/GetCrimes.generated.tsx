import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCrimesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCrimesQuery = { __typename?: 'Query', crimes: Array<{ __typename?: 'Crime', id: string, crimeTitle: string, crimeSlug?: string | null, crimeInfo: { __typename?: 'RichText', html: string }, crimeCoverPhoto: { __typename?: 'Asset', url: string } }> };


export const GetCrimesDocument = gql`
    query GetCrimes {
  crimes {
    id
    crimeTitle
    crimeSlug
    crimeInfo {
      html
    }
    crimeCoverPhoto {
      url
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