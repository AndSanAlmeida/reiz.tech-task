import Vue from 'vue'
import { defineComponent } from "vue"
import { shallowMount } from "@vue/test-utils"

export function renderHook<V>(setup: () => V) {
    const App = defineComponent({
        template: '<div ref="app" id="app"></div>',
        setup
    })

    // @ts-ignore
    return shallowMount<typeof Vue & V>(App)
}