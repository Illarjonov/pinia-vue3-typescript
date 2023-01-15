<template>

    <div class="ul">
        <div class="infoResponse">
            <Loader v-if="this.store.loader" />
            <h5 v-if="this.store.nullResults">
                Данные по поиску отсутсвуют
            </h5>
        </div>
        <div v-for="( item, index) in this.store.getItems" :key="index" class="li">
            <div class="item">
                <div class="icon">
                    <img v-bind:src="item.icon" class="lazy" alt="">
                </div>
                <div class="info">
                    <h4 class="name">
                        {{ item['display_name'] }}
                    </h4>
                    <div class="type">
                        {{ item['type'] }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useSearchStore } from '../stores/useSearchStore'

export default {
    name: 'ItemsList',
    setup() {
        const store = useSearchStore()

        return { store }
    },
}
</script>

<style scoped>
.ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.li {
    border: 1px solid #caadad;
    display: flex;
    margin-top: 25px;
    width: 500px;
    padding: 15px;
    border-radius: 10px;
    align-items: flex-start;
}

.infoResponse {
    width: 500px;
}

.item {
    display: flex;
    width: 100%;
}

.icon {
    min-width: 20px;
    display: flex;
    align-items: center;
}

.info {
    width: 100%;
    padding-left: 10px;
}

.type {
    text-align: end;
    margin-top: 15px;
}

.name {
    color: #000000;
}
</style>
