import {useCallback, useState} from 'react'
import PropTypes from 'prop-types'

import ImageViewer from 'react-simple-image-viewer'

export const useLightBox = (src = null) => {

    const [currentImage, setCurrentImage] = useState(0)
    const [isViewerOpen, setIsViewerOpen] = useState(false)

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index)
        setIsViewerOpen(true)
    }, [])

    const closeImageViewer = () => {
        setCurrentImage(0)
        setIsViewerOpen(false)
    }

    const lightBoxComponent = (src && isViewerOpen) && (
        <ImageViewer
            src={src}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
                backgroundColor: 'rgba(0,0,0,0.9)'
            }}
            closeOnClickOutside={true}
        />
    )

    return [openImageViewer, lightBoxComponent]
}

useLightBox.propTypes = {
    src: PropTypes.array
}
