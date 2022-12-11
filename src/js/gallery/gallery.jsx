import React from 'react'
import { createRoot } from "react-dom/client"

import {store} from './src/store'
import {Provider} from 'react-redux'
import {GalleryApp} from './src/GalleryApp'

document.querySelectorAll('.react-gallery').forEach((element) => {
    const {tag, title} = element?.dataset
    if (!tag) throw Error('data-tag is not been provided')
    if (!title) throw Error('data-title is not been provided')

    const root = createRoot(element)

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <GalleryApp tag={tag} title={title} />
            </Provider>
        </React.StrictMode>
    )
})