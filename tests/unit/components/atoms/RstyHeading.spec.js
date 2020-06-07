import { createFactory } from '@/factories'
import { mount } from '@vue/test-utils'
import RstyHeading from '@/components/atoms/RstyHeading'

const factory = createFactory(({ props, options }) => {
  return mount(RstyHeading, {
    propsData: { ...props },
    ...options,
  })
})

describe('RstyHeading.vue', () => {
  it('has default structure and classes', async () => {
    const wrapper = factory()

    expect(wrapper.element.tagName).toBe('H1')

    wrapper.destroy()
  })

  it('should render the appropriate level heading: h2 ', async () => {
    const props = {
      tag: 'h2',
    }
    const wrapper = factory({ props })

    expect(wrapper.element.tagName).toBe('H2')

    wrapper.destroy()
  })

  it('should render the appropriate level heading: h3 ', async () => {
    const props = {
      tag: 'h3',
    }
    const wrapper = factory({ props })

    expect(wrapper.element.tagName).toBe('H3')

    wrapper.destroy()
  })
})
