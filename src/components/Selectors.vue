<template>
    <div class="columns is-multiline is-1">
        <div class="column is-variable is-12-mobile is-6-tablet">
            <b-field
                label="Choose Country">
                <b-select placeholder="Select Country" v-model="country" @input="changeCountry" expanded>
                    <option v-for="country in countries" :key="country.value" :value="country.value">
                        {{ country.text }}
                    </option>
                </b-select>
            </b-field>
        </div>
        <div class="column is-variable is-12-mobile is-6-tablet">
            <b-field
                label="Choose Category">
                <b-select placeholder="Select Category" v-model="category" @input="changeCategory" expanded>
                    <option v-for="category in categories" :key="category.value" :value="category.value">
                        {{ category.text }}
                    </option>
                </b-select>
            </b-field>            
        </div>
    </div>
</template>
<script>
export default {
    name: 'Selectors',
    data(){
        return {
            country: '',
            category: ''
        }
    },
    computed: {
        categories() {
            return this.$store.getters.getCategories;
        },
        countries() {
            return this.$store.getters.getCountries;
        }
    },
    methods: {
        changeCountry() {
            const choosedCountry = this.country
            this.$store.dispatch('setNewCountry', choosedCountry)
            this.$store.dispatch('loadNews')
        },
        changeCategory() {
            const choosedCategory = this.category
            this.$store.dispatch('setNewCategory', choosedCategory)
            this.$store.dispatch('loadNews')
        }
    }
}
</script>
<style lang="scss">
    
</style>