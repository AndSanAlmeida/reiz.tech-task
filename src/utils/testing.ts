import Vue from 'vue'
import { shallowMount } from "@vue/test-utils"
import { defineComponent } from "vue"

export function renderHook<V>(setup: () => V) {
    const App = defineComponent({
        template: '<div ref="app" id="app"></div>',
        setup
    })

    // @ts-ignore
    return shallowMount<typeof Vue & V>(App)
}