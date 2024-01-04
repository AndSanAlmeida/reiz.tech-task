import { Ref, UnwrapRef, onMounted, ref, watch } from "vue"

export const useFetch = <T, P extends string | Record<string, string> | string[][] | URLSearchParams | undefined>(url: string, params: Ref<P>) => {

    const data = ref<T | null>(null)
    const isLoading = ref(false)
    const isError = ref(false)

    const getData = async () => {
        isLoading.value = true
        isError.value = false

        try {
            const res = await fetch(url + '?' + new URLSearchParams(params.value).toString())
            const result = await res.json() as UnwrapRef<T>
            data.value = result
        } catch {
            isError.value = true;
        } finally {
            isLoading.value = false
        }
    }

    onMounted(() => {
        getData()
    })

    watch(params, async () => {
        getData()
    }, { deep: true })

    return { data, isLoading }
}