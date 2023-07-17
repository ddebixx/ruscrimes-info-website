import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetOfficialsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetOfficialsQuery = { __typename?: 'Query', officials: Array<{ __typename?: 'Official', id: string, institutionName: string, institutionPhoto: { __typename?: 'Asset', url: string }, institutionLink: { __typename?: 'RichText', html: string } }> };


export const GetOfficialsDocument = gql`
    query GetOfficials {
  officials {
    id
    institutionPhoto {
      url
    }
    institutionName
    institutionLink {
      html
    }
  }
}
    `;

/**
 * __useGetOfficialsQuery__
 *
 * To run a query within a React component, call `useGetOfficialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOfficialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOfficialsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOfficialsQuery(baseOptions?: Apollo.QueryHookOptions<GetOfficialsQuery, GetOfficialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOfficialsQuery, GetOfficialsQueryVariables>(GetOfficialsDocument, options);
      }
export function useGetOfficialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOfficialsQuery, GetOfficialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOfficialsQuery, GetOfficialsQueryVariables>(GetOfficialsDocument, options);
        }
export type GetOfficialsQueryHookResult = ReturnType<typeof useGetOfficialsQuery>;
export type GetOfficialsLazyQueryHookResult = ReturnType<typeof useGetOfficialsLazyQuery>;
export type GetOfficialsQueryResult = Apollo.QueryResult<GetOfficialsQuery, GetOfficialsQueryVariables>;