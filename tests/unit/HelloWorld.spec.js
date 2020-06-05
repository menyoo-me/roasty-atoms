import { createFactory } from '@/factories'
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

const factory = createFactory(({ props, options }) => {
  return mount(HelloWorld, {
    propsData: { ...props },
    ...options,
  })
})

describe('HelloWorld.vue', () => {
  it('toMatchSnapshot', async () => {
    const wrapper = factory()
    expect(wrapper).toMatchSnapshot()
  })
})
