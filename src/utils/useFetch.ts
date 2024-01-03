import { onMounted, ref } from "vue"

export const useFetch = <T>(url: string, params: Record<string, string>) => {

    const data = ref<T | null>(null)
    const isLoading = ref(false)

    onMounted(() => {
        isLoading.value = true
        fetch(url + '?' + new URLSearchParams(params).toString())
            .then(res => res.json())
            .then(res => {
                data.value = res
            }).finally(() => {
                isLoading.value = false
            });
    })

    return { data, isLoading }
}