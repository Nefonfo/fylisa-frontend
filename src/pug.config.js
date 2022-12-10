
module.exports = {
    locals: {
        fixtures: {
            filterSlider: [
                {
                    title: 'Filtros de Aire',
                    image: '../assets/filters/filter_card.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                    linkText: 'Ver más',
                    link: 'product.pug'
                },
                {
                    title: 'Filtros de Aceite',
                    image: '../assets/filters/filter_card_2.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                    linkText: 'Ver más',
                    link: 'product.pug'
                },
                {
                    title: 'Filtros de Agua',
                    image: '../assets/filters/filter_card_3.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                    linkText: 'Ver más',
                    link: 'product.pug'
                },
                {
                    title: 'Filtros de Glicol',
                    image: '../assets/filters/filter_card_4.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                    linkText: 'Ver más',
                    link: 'product.pug'
                },
            ],
            serviceSlider: [
                {
                    title: 'Centrifugación',
                    image: '../assets/services/cleaning_service_2.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                    linkText: 'Ver más',
                    link: './service.pug'
                },
                {
                    title: 'Lavado de Filtros',
                    image: '../assets/services/cleaning_service_3.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                    linkText: 'Ver más',
                    link: './service.pug'
                },
                {
                    title: 'Análisis de Lab.',
                    image: '../assets/services/lab_service.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                    linkText: 'Ver más',
                    link: './service.pug'
                },
                {
                    title: 'Reparación',
                    image: '../assets/services/fix_service.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex risus. Nunc mattis, erat id vulputate vulputate.',
                    linkText: 'Ver más',
                    link: './service.pug'
                },
            ],
            aboutUsBanner: [
                {
                    icon: 'fas fa-map',
                    title: 'Nuestra Misión',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique lacus.'
                },
                {
                    icon: 'fas fa-eye',
                    title: 'Nuestra Visión',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique lacus.'
                }
            ],
            whyUsBanner: [
                {
                    icon: 'fas fa-paper-plane',
                    title: 'Envios y Servicios',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique lacus.'
                },
                {
                    icon: 'fas fa-clock',
                    title: 'Entregas en Tiempo',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique lacus.'
                },
                {
                    icon: 'fas fa-check-circle',
                    title: 'Producto de Calidad',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique lacus.'
                },
                {
                    icon: 'fas fa-hands-helping',
                    title: 'Atención Personalizada',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique lacus.'
                },
            ],
            whyUsServiceBanner: [
                {
                    icon: 'fas fa-industry',
                    title: 'Servicio en Planta',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique lacus.'
                },
                {
                    icon: 'fas fa-chart-bar',
                    title: 'Análisis de Servicio',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique lacus.'
                },
                {
                    icon: 'fas fa-arrows-alt',
                    title: 'A la medida',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique lacus.'
                },
                {
                    icon: 'fas fa-hands-helping',
                    title: 'Atención Personalizada',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique lacus.'
                },
            ]
        },
        stylers: {
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
            sliderBgStyler: (style) => {
                switch (style) {
                    case 'info':
                        return 'bg-info'
                    case 'neutral':
                        return 'bg-neutral'
                    default:
                        throw new Error(`Error in sliderBgStyler function on pug.config.js (Expected: info or neutral). Received: ${style}`)
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
            featureColorStyler: (style, heading) => {
                switch (style) {
                    case 'white':
                        return (heading ? 'text-secondary': 'text-base-content')
                    case 'blue':
                        return (heading ? 'text-accent': 'text-accent')
                    case 'neutral':
                        return (heading ? 'text-neutral-content': 'text-dark')
                    default:
                        throw new Error(`Error in textStyler function on pug.config.js (Expected: white or blue). Received: ${style}`)
                }
            },
            sliderColorStyler: (style) =>{
                switch (style) {
                    case 'info':
                        return 'text-info-content'
                    case 'neutral':
                        return 'text-base-100'
                    default:
                        throw new Error(`Error in sliderColorStyler function on pug.config.js (Expected: info or neutral). Received: ${style}`)
                }
            },
            smallBannerSizeStyler: (size) => {

                let textClasses = ''
                switch (size){
                    case 'small':
                        textClasses += 'text-xl md:text-3xl'
                        break
                    case 'medium':
                        textClasses += 'text-2xl md:text-4xl'
                        break
                    case 'large':
                        textClasses += 'text-3xl md:text-5xl'
                        break
                    case 'extra-large':
                        textClasses += 'text-4xl md:text-6xl'
                        break
                    default:
                        throw new Error(`Error in bannerSizeStyler function on pug.config.js (Expected: small/medium/large/extra-large). Received: ${size}`)
                }

                return textClasses
            },
            bannerSizeStyler: (size) => {

                let textClasses = ''
                switch (size){
                    case 'extra-small':
                        textClasses += 'text-4xl md:text-5xl lg:text-7xl'
                        break
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
}