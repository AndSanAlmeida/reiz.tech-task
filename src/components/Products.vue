<script setup lang="ts">
import { ref, watch } from "vue";
import { ProductResponse, Search } from "../types";
import { useFetch } from "../utils/useFetch";
import debounce from 'lodash.debounce'

const search = ref<Search>({
    title: '',
    brand: ''
})

const params = ref({
    limit: '10',
    q: search.value.title + search.value.brand
})

const { data, isLoading } = useFetch<ProductResponse, typeof params['value']>('https://dummyjson.com/products/search', params)

watch(search, debounce((newSearch: typeof search['value']) => {
    params.value.q = newSearch.title + ' ' + newSearch.brand
}, 500), { deep: true })

</script>
<template>
    <div class="w-full lg:w-1/2 mb-8">
        <h1 class="font-medium text-3xl mb-5">Products Information</h1>
        <div class="columns-1 lg:columns-2">
            <div class="mb-4 lg:mb-0">
                <label for="title" class="block mb-2 text-md font-medium">Title</label>
                <input type="text" id="title" placeholder="Enter Title" v-model="search.title"
                    class="bg-gray-50 border border-gray-300 text-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5">
            </div>
            <div>
                <label for="brand" class="block mb-2 text-md font-medium">Brand</label>
                <input type="text" id="brand" placeholder="Enter Brand" v-model="search.brand"
                    class="bg-gray-50 border border-gray-300 text-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5">
            </div>
        </div>
    </div>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left">
            <thead class="bg-gray-50 text-lg">
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input id="checkbox" type="checkbox" class="w-4 h-4 text-blue-600 focus:ring-blue-600">
                            <label for="checkbox" class="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Brand
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Stock
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Rating
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="!isLoading && data" v-for="product in data.products"
                    class="bg-white border-b hover:bg-gray-50 text-gray-400 text-lg">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox" type="checkbox" class="w-4 h-4 text-blue-600 focus:ring-blue-600">
                            <label for="checkbox" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <td scope="row" class="px-6 py-4 text-blue-600 whitespace-nowrap">
                        {{ product.title }}
                    </td>
                    <td class="px-6 py-4">
                        {{ product.category }}
                    </td>
                    <td class="px-6 py-4">
                        {{ product.brand }}
                    </td>
                    <td class="px-6 py-4">
                        {{ product.price }}
                    </td>
                    <td class="px-6 py-4">
                        {{ product.stock }}
                    </td>
                    <td class="px-6 py-4">
                        {{ product.rating }}
                    </td>
                </tr>
                <tr v-else class="bg-white">
                    <td colspan="7" class="py-5">
                        <div class="flex justify-center">
                            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>