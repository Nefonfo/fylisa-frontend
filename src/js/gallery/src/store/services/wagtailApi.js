import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {LIMIT} from '../../config'

export const wagtailApi = createApi({
        reducerPath: 'wagtailApi',
        baseQuery: fetchBaseQuery({
            baseUrl: `${process.env.API_URL}/api/v2`
        }),
        endpoints: (builder) => ({
            getImages: builder.query({
                query: () => '/images'
            }),
            getImagesPaginatedAndTagged: builder.query({
                query: ({page, tag}) => {
                    const offset = page * LIMIT

                    return `/images?tags=${tag}&offset=${offset}&limit=${LIMIT}`
                }
            })
        }),
    })

export const { useGetImagesQuery, useGetImagesPaginatedAndTaggedQuery } = wagtailApi