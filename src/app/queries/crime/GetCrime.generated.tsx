import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCrimeQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetCrimeQuery = { __typename?: 'Query', crimes?: { __typename?: 'CrimeEntityResponseCollection', data: Array<{ __typename?: 'CrimeEntity', id?: string | null, attributes?: { __typename?: 'Crime', locale?: string | null, crimeTitle: string, slug?: string | null, crimeInfo: string, victims_dead?: string | null, victims_injured?: string | null, crimeContentPhotos?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null, crimeContentSensitivePhotos?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null } | null }> } | null };


export const GetCrimeDocument = gql`
    query GetCrime($slug: String!, $locale: I18NLocaleCode) {
  crimes(locale: $locale, filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        locale
        crimeTitle
        slug
        crimeInfo
        victims_dead
        victims_injured
        crimeContentPhotos {
          data {
            id
            attributes {
              url
            }
          }
        }
        crimeContentSensitivePhotos {
          data {
            id
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
 *      locale: // value for 'locale'
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