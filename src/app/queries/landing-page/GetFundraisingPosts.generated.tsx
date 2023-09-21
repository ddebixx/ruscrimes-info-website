import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetFundrasingPostsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetFundrasingPostsQuery = { __typename?: 'Query', fundraisingPosts?: { __typename?: 'FundraisingPostEntityResponseCollection', data: Array<{ __typename?: 'FundraisingPostEntity', id?: string | null, attributes?: { __typename?: 'FundraisingPost', fundraisingName: string, fundraisingLink: string, fundraisingCoverPhoto: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null }> } | null };


export const GetFundrasingPostsDocument = gql`
    query GetFundrasingPosts($locale: I18NLocaleCode) {
  fundraisingPosts(locale: $locale) {
    data {
      id
      attributes {
        fundraisingName
        fundraisingCoverPhoto {
          data {
            attributes {
              url
            }
          }
        }
        fundraisingLink
      }
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
 *      locale: // value for 'locale'
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