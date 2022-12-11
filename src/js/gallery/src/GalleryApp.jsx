import {useGetImagesPaginatedAndTaggedQuery} from './store/services'
import {useState} from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import {LIMIT} from './config'

export const GalleryApp = ({tag, title}) => {

    const [page, setPage] = useState(0)
    const { data, error, isLoading } = useGetImagesPaginatedAndTaggedQuery(
        {page, tag}
    )

    return (
        <div className="w-full flex flex-wrap flex-col justify-center items-center py-6 px-3 bg-neutral">
            <h1 className="font-bold my-4 text-primary-content text-4xl md:text-6xl">
                {title}
            </h1>
            {
                !isLoading && (
                    <>
                        <ResponsiveMasonry
                            className='w-full max-w-6xl my-8 px-8 md:px-4 lg:px-0'
                            columnsCountBreakPoints={{200: 1, 450: 2, 750: 3, 900: 4}}
                        >
                            <Masonry gutter='1.5rem'>
                                {
                                    data.items.map(({id, meta, title}) => (
                                        <img className='w-full rounded-xl' key={id} src={`${process.env.API_URL}${meta.download_url}`} alt={title}/>
                                    ))
                                }
                            </Masonry>
                        </ResponsiveMasonry>
                        <div className="flex flex-wrap gap-x-5">
                            <button disabled={!(page > 0)} onClick={() => setPage(page - 1)} className="btn btn-primary">Anterior</button>
                            <button disabled={!(data.meta.total_count > ((page + 1) * LIMIT))} onClick={() => setPage(page + 1)} className="btn btn-primary">Siguiente</button>
                        </div>
                    </>
                )
            }
        </div>
    )
}
