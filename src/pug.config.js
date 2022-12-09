
module.exports = {
    locals: {
        filterSlider: [
            {
                title: 'Filtros de Aire',
                image: '../assets/filters/filter_card.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                linkText: 'Ver más',
                link: '#!'
            },
            {
                title: 'Filtros de Aceite',
                image: '../assets/filters/filter_card_2.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                linkText: 'Ver más',
                link: '#!'
            },
            {
                title: 'Filtros de Agua',
                image: '../assets/filters/filter_card_3.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                linkText: 'Ver más',
                link: '#!'
            },
            {
                title: 'Filtros de Glicol',
                image: '../assets/filters/filter_card_4.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                linkText: 'Ver más',
                link: '#!'
            },
        ],
        serviceSlider: [
            {
                title: 'Centrifugación',
                image: '../assets/services/cleaning_service_2.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                linkText: 'Ver más',
                link: '#!'
            },
            {
                title: 'Lavado de Filtros',
                image: '../assets/services/cleaning_service_3.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                linkText: 'Ver más',
                link: '#!'
            },
            {
                title: 'Análisis de Lab.',
                image: '../assets/services/lab_service.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                linkText: 'Ver más',
                link: '#!'
            },
            {
                title: 'Reparación',
                image: '../assets/services/fix_service.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                linkText: 'Ver más',
                link: '#!'
            },
        ],
        bgStyler: (style) => {
            switch (style) {
                case 'white':
                    return 'bg-base-100'
                case 'blue':
                    return 'bg-primary'
                case 'neutral':
                    return 'bg-neutral'
            }
        },
        titleColorStyler: (style, alternative) => {
            switch (style) {
                case 'white':
                    return (!alternative ? 'text-base-content' : 'text-neutral')
                case 'blue':
                    return 'text-base-100'
                default:
                    throw new Error(`Error in textStyler function on pug.config.js (Expected: white or blue). Received: ${style}`)
            }
        },
        bannerSizeStyler: (size) => {

            let textClasses = ''
            switch (size){
                case 'small':
                    textClasses += 'text-4xl md:text-6xl lg:text-7.5xl'
                    break
                case 'medium':
                    textClasses += 'text-6xl md:text-7.5xl lg:text-8xl'
                    break
                case 'large':
                    textClasses += 'text-6xl lg:text-8xl'
                    break
                case 'extra-large':
                    textClasses += 'text-7.5xl lg:text-10xl'
                    break
                default:
                    throw new Error(`Error in bannerSizeStyler function on pug.config.js (Expected: small/medium/large/extra-large). Received: ${size}`)
            }

            return textClasses
        },
    }
}