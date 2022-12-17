/*
(
    element,
    active,
    unactive,
)
*/
export class NightMode {
    constructor(storage, elements, element_set_change) {
        this.elements = elements
        this.storage = storage
        const state = this.getState()

        if (state) {
            this.activate()
        }

        element_set_change.forEach((element_c) => {
            element_c.checked = state
            element_c.addEventListener('click', () => {
                let state = !this.getState()
                element_set_change.forEach((element) => element.checked = state)
                this.setState(state)
                if (state) {
                    this.activate()
                } else {
                    this.desactivate()
                }
            })
        })
    }

    activate() {
        this.elements.forEach(([element, attribute, active, unactive]) => {
            element.setAttribute(attribute, active)
            if (unactive) element.setAttribute(attribute, unactive)
        })
    }

    desactivate() {
        this.elements.forEach(([element, attribute, active, unactive]) => {
            if (unactive) element.setAttribute(attribute, unactive)
            element.setAttribute(attribute, active)
        })
    }

    getState() {
        let data
        try {
            data = JSON.parse(localStorage.getItem(this.storage))
        } catch (e) {
            data = null
        }
        if (data === null) {
            const today = new Date()
            data = (today.getHours() >= 18 || today.getMinutes() < 6)
            this.setState(data)
        }
        return data
    }

    setState(mode) {
        localStorage.setItem(this.storage, JSON.stringify(mode))
    }
}