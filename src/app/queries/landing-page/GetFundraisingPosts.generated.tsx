import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetFundrasingPostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetFundrasingPostsQuery = { __typename?: 'Query', fundraisingPosts: Array<{ __typename?: 'FundraisingPost', id: string, fundraisingName: string, fundraisingCoverPhoto: { __typename?: 'Asset', url: string }, fundraisingLink: { __typename?: 'RichText', html: string } }> };


export const GetFundrasingPostsDocument = gql`
    query GetFundrasingPosts {
  fundraisingPosts {
    id
    fundraisingName
    fundraisingCoverPhoto {
      url
    }
    fundraisingLink {
      html
    }
  }
}
    `;

/**
 * __useGetFundrasingPostsQuery__
 *
 * To run a query within a React component, call `useGetFundrasingPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFundrasingPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFundrasingPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFundrasingPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetFundrasingPostsQuery, GetFundrasingPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFundrasingPostsQuery, GetFundrasingPostsQueryVariables>(GetFundrasingPostsDocument, options);
      }
export function useGetFundrasingPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFundrasingPostsQuery, GetFundrasingPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFundrasingPostsQuery, GetFundrasingPostsQueryVariables>(GetFundrasingPostsDocument, options);
        }
export type GetFundrasingPostsQueryHookResult = ReturnType<typeof useGetFundrasingPostsQuery>;
export type GetFundrasingPostsLazyQueryHookResult = ReturnType<typeof useGetFundrasingPostsLazyQuery>;
export type GetFundrasingPostsQueryResult = Apollo.QueryResult<GetFundrasingPostsQuery, GetFundrasingPostsQueryVariables>;