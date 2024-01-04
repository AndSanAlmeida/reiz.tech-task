import { mount } from "@vue/test-utils";
import ProductsVue from "./Products.vue";
import { useFetch } from "../utils/useFetch";
import { Mock } from "vitest";

vi.mock('../utils/useFetch', () => {
    return { useFetch: vi.fn() }
})

const mockUseFetch = useFetch as Mock;

mockUseFetch.mockReturnValue({
    isLoading: false,
    data: {
        products: [{
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        }]
    }
});

describe('Products', () => {
    it('should show the list of products', () => {
        const wrapper = mount(ProductsVue)
        expect(wrapper.find('table')).exist
    });
    it('should show the iPhone row', () => {
        const wrapper = mount(ProductsVue)
        expect(wrapper.text()).toContain('iPhone 9')
    });
});