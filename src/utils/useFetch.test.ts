import Vue, { ref } from "vue";
import { renderHook } from "./testing";
import { useFetch } from "./useFetch";

const mockFetch = vi.fn().mockResolvedValue({ json: () => Promise.resolve({ data: "Hello World" }), })

// @ts-ignore
global.fetch = mockFetch

describe('useFetch', () => {
    it('should call the given url', () => {
        renderHook(() => {
            const params = ref({
                limit: '5'
            })
            return useFetch('https://dummyjson.com/products', params)
        })
        expect(mockFetch).toBeCalledWith('https://dummyjson.com/products?limit=5')
    });

    it('should return the data', () => {
        renderHook(async () => {
            const params = ref({
                limit: '5'
            })
            const result = useFetch('https://dummyjson.com/products', params)
            await Vue.nextTick()
            expect(result.data.value).toBe({ data: "Hello World" })
        })
    });
})