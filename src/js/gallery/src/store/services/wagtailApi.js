import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {LIMIT} from '../../config'

export const wagtailApi = createApi({
    reducerPath: 'wagtailApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.API_URL}/api/v2`
    }),
    endpoints: (builder) => ({
        getImagesPaginatedAndTagged: builder.query({
            query: ({page, tag}) => {
                const offset = page * LIMIT
                return `/images?fields=*&tags=${tag}&offset=${offset}&limit=${LIMIT}`
            },
            transformResponse: response => {
                let data = {
                    ...response,
                    images: response.items.map(
                        (image) => ({
                            id: image.id,
                            width: image.width,
                            height: image.height,
                            alt: image.title,
                            src: `${process.env.API_URL}${image.meta.download_url}`
                        })
                    )
                }

                delete data.items

                return data
            }
        })
    }),
})

export const {useGetImagesPaginatedAndTaggedQuery} = wagtailApi