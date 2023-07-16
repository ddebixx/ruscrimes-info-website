import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCrimeQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
}>;


export type GetCrimeQuery = { __typename?: 'Query', crime?: { __typename?: 'Crime', crimeTitle: string, crimeSlug?: string | null } | null };


export const GetCrimeDocument = gql`
    query GetCrime($slug: String!) {
  crime(where: {crimeSlug: $slug}) {
    crimeTitle
    crimeSlug
  }
}
    `;

/**
 * __useGetCrimeQuery__
 *
 * To run a query within a React component, call `useGetCrimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCrimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCrimeQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCrimeQuery(baseOptions: Apollo.QueryHookOptions<GetCrimeQuery, GetCrimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCrimeQuery, GetCrimeQueryVariables>(GetCrimeDocument, options);
      }
export function useGetCrimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCrimeQuery, GetCrimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCrimeQuery, GetCrimeQueryVariables>(GetCrimeDocument, options);
        }
export type GetCrimeQueryHookResult = ReturnType<typeof useGetCrimeQuery>;
export type GetCrimeLazyQueryHookResult = ReturnType<typeof useGetCrimeLazyQuery>;
export type GetCrimeQueryResult = Apollo.QueryResult<GetCrimeQuery, GetCrimeQueryVariables>;