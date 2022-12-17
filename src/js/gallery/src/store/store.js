import { configureStore } from '@reduxjs/toolkit'

import {wagtailApi} from './services'

export const store = configureStore({
    reducer: {
        [wagtailApi.reducerPath]: wagtailApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wagtailApi.middleware)
})
