<script setup lang="ts">
import { ProductResponse } from "../types";
import { useFetch } from "../utils/useFetch";

const { data, isLoading } = useFetch<ProductResponse>('https://dummyjson.com/products', {
    limit: '10'
})

</script>
<template>
    <div class="w-full lg:w-1/2 mb-8">
        <h1 class="font-medium text-3xl mb-5">Products Information</h1>
        <div class="columns-1 lg:columns-2">
            <div class="mb-4 lg:mb-0">
                <label for="title" class="block mb-2 text-md font-medium">Title</label>
                <input type="text" id="title" placeholder="Enter Title"
                    class="bg-gray-50 border border-gray-300 text-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5">
            </div>
            <div>
                <label for="brand" class="block mb-2 text-md font-medium">Brand</label>
                <input type="text" id="brand" placeholder="Enter Brand"
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
                <tr v-else class="bg-white border-b">
                    <td>
                        Loading
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>