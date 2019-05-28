import { mount } from '@vue/test-utils'
import Logo from '@/components/Footer.vue'

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
