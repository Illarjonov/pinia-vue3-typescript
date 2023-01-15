// @ts-check
import { defineStore } from 'pinia'

export default interface Item {
    display_name: string;
    icon: string;
    type: string;
}

export interface State {
    searchItems: Item[]
    loader: boolean
    nullResults: boolean
}

export const useSearchStore = defineStore({
    id: 'search',
    state: (): State => ({
        searchItems: [],
        loader: false,
        nullResults: false
    }),
    getters: {
        getItems: state => { return state.searchItems },

    },
    actions: {
        async fetchData(query: string) {
            const serverUrl = 'https://nominatim.openstreetmap.org'
            this.loader = true
            this.searchItems = []
            this.nullResults = false

            await fetch(`${serverUrl}/search?q=${query}&format=json`, {
                method: 'GET',
                mode: "cors",
                headers: { 'content-type': 'application/json', },
            })
                .then((response) => {
                    if (response.ok) {
                        response
                            .json()
                            .then((data: Item[]) => {
                                this.searchItems = data
                                console.log(data.length == 0)
                                if (data.length === 0) { this.nullResults = true }
                            })
                    } else {
                        console.log(response.status)
                    }
                    this.loader = false
                })
        },
    }
})
