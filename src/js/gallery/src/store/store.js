import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {wagtailApi} from './services/wagtailApi'

export const store = configureStore({
    reducer: {
        [wagtailApi.reducerPath]: wagtailApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wagtailApi.middleware)
})
