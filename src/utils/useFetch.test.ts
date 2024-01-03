import Vue from "vue";
import { renderHook } from "./testing";
import { useFetch } from "./useFetch";

const mockFetch = vi.fn().mockResolvedValue({ json: () => Promise.resolve({ data: "Hello World" }), })
// @ts-ignore
global.fetch = mockFetch

describe('useFetch', () => {
    it('should call the given url', () => {
        renderHook(() => {
            return useFetch('https://dummyjson.com/products', {
                limit: '5'
            })
        })
        expect(mockFetch).toBeCalledWith('https://dummyjson.com/products?limit=5')
    });

    it('should return the data', () => {
        renderHook(async () => {
            const result = useFetch('https://dummyjson.com/products', {
                limit: '5'
            })
            await Vue.nextTick()
            expect(result.data.value).toBe({ data: "Hello World" })
        })
    });
})