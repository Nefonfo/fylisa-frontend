import {useState} from 'react'
import PropTypes from 'prop-types'

import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

import {LIMIT} from './config'
import {useLightBox} from './hooks'
import {Error, Loader, Pagination} from './components'
import {useGetImagesPaginatedAndTaggedQuery} from './store/services'


export const GalleryApp = ({tag, title}) => {

    const [page, setPage] = useState(0)
    const {data, error, isLoading} = useGetImagesPaginatedAndTaggedQuery(
        {page, tag}
    )

    const [openViewer, LightBox] = useLightBox(
        isLoading ? null : data?.images.map(({src}) => (src))
    )

    if (isLoading) return <Loader/>

    return (
        <div className="w-full flex flex-wrap flex-col justify-center items-center py-6 px-3 bg-neutral">
            <h1 className="font-bold my-4 text-primary-content text-4xl md:text-6xl">
                {title}
            </h1>
            {
                error ? <Error/> : (
                    <>
                        <ResponsiveMasonry
                            className="w-full max-w-6xl my-8 px-8 md:px-4 lg:px-0"
                            columnsCountBreakPoints={{200: 1, 450: 2, 750: 3, 900: 4}}
                        >

                            <Masonry gutter="1.5rem">

                                {
                                    data?.images.map(({id, src, alt}, index) => (
                                        <img
                                            onClick={() => openViewer(index)}
                                            key={id}
                                            className="rounded-xl w-full cursor-pointer"
                                            src={src}
                                            alt={alt}
                                        />
                                    ))
                                }

                            </Masonry>
                        </ResponsiveMasonry>
                        <Pagination
                            nextPage={() => setPage(page - 1)}
                            lastPage={() => setPage(page + 1)}
                            nextDisabled={!(data.meta.total_count > ((page + 1) * LIMIT))}
                            lastDisabled={!(page > 0)}
                        />
                        {LightBox}
                    </>
                )
            }
        </div>
    )
}


GalleryApp.propTypes = {
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
