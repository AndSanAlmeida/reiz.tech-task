<script setup lang="ts">
import Products from './Products.vue';

defineProps<{ show: boolean }>();
defineEmits(["open"]);
</script>
<template>
    <div class="p-4 sm:ml-64 ">

        <!-- Content Header -->
        <div class="flex mt-5 mb-8">
            <div class="flex-none">
                <button v-on:click="$emit('open')"
                    class="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <span class="sr-only">Open sidebar</span>
                    <svg class="w-6 h-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                        </path>
                    </svg>
                </button>
            </div>
            <form class="flex-initial w-2/3 ms-4 sm:ms-0">
                <label for="search" class="mb-2 text-sm font-medium sr-only">Search</label>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="search" id="search"
                        class="block p-4 pl-10 w-full text-sm bg-gray-50 border border-gray-300" placeholder="Search"
                        required>
                </div>
            </form>
            <div class="flex-initial w-60 md:w-1/3 text-end">
                <div class="relative inline-block bg-white rounded-lg p-4">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6.54352V9.87352" stroke="#ADA7A7" stroke-width="1.5" stroke-miterlimit="10"
                            stroke-linecap="round" />
                        <path
                            d="M12.02 2.10352C8.34002 2.10352 5.36002 5.08352 5.36002 8.76352V10.8635C5.36002 11.5435 5.08002 12.5635 4.73002 13.1435L3.46002 15.2635C2.68002 16.5735 3.22002 18.0335 4.66002 18.5135C9.44002 20.1035 14.61 20.1035 19.39 18.5135C20.74 18.0635 21.32 16.4835 20.59 15.2635L19.32 13.1435C18.97 12.5635 18.69 11.5335 18.69 10.8635V8.76352C18.68 5.10352 15.68 2.10352 12.02 2.10352Z"
                            stroke="#ADA7A7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                        <path
                            d="M15.33 18.9235C15.33 20.7535 13.83 22.2535 12 22.2535C11.09 22.2535 10.25 21.8735 9.64998 21.2735C9.04998 20.6735 8.66998 19.8335 8.66998 18.9235"
                            stroke="#ADA7A7" stroke-width="1.5" stroke-miterlimit="10" />
                    </svg>
                    <span class="w-[10px] absolute -right-1 -top-1 h-[10px] rounded-full bg-yellow-400"></span>
                </div>
                <div class="inline-block bg-white rounded-lg ms-4">
                    <img src="../assets/img/profile.svg" alt="Profile">
                </div>
            </div>
        </div>

        <!-- Products -->
        <Products />
    </div>
</template>