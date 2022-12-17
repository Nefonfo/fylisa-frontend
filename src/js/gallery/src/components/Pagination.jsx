import PropTypes from 'prop-types'

export const Pagination = ({nextPage, lastPage, nextDisabled, lastDisabled}) => {
    return (
        <div className="flex flex-wrap gap-x-5">
            <button
                disabled={lastDisabled}
                onClick={nextPage}
                className="btn btn-primary"
            >
                Anterior
            </button>
            <button
                disabled={nextDisabled}
                onClick={lastPage}
                className="btn btn-primary"
            >
                Siguiente
            </button>
        </div>
    )
}

Pagination.propTypes = {
    nextPage: PropTypes.func.isRequired,
    lastPage: PropTypes.func.isRequired,
    nextDisabled: PropTypes.bool.isRequired,
    lastDisabled: PropTypes.bool.isRequired
}