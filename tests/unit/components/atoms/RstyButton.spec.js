import { createFactory } from '@/factories'
import { mount } from '@vue/test-utils'
import RstyButton from '@/components/atoms/RstyButton'

const factory = createFactory(({ props, options }) => {
  return mount(RstyButton, {
    propsData: { ...props },
    ...options,
  })
})

describe('RstyButton.vue', () => {
  it('toMatchSnapshot', async () => {
    const wrapper = factory()
    expect(wrapper).toMatchSnapshot()
  })

  it('has default structure and classes', async () => {
    const wrapper = factory()

    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.attributes('type')).toBeDefined()
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.attributes('href')).not.toBeDefined()
    expect(wrapper.attributes('role')).not.toBeDefined()
    expect(wrapper.attributes('disabled')).not.toBeDefined()
    expect(wrapper.attributes('aria-pressed')).not.toBeDefined()
    expect(wrapper.attributes('autocomplete')).not.toBeDefined()
    expect(wrapper.attributes('tabindex')).not.toBeDefined()
    expect(wrapper).toMatchSnapshot()

    wrapper.destroy()
  })

  it('renders a link when href provided', async () => {
    const props = {
      href: '/foo/bar',
    }
    const wrapper = factory({ props })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBeDefined()
    expect(wrapper.attributes('href')).toBe('/foo/bar')
    expect(wrapper.attributes('type')).not.toBeDefined()
    expect(wrapper.attributes('role')).not.toBeDefined()
    expect(wrapper.attributes('disabled')).not.toBeDefined()
    expect(wrapper.attributes('aria-pressed')).not.toBeDefined()
    expect(wrapper.attributes('autocomplete')).not.toBeDefined()
    expect(wrapper.attributes('tabindex')).not.toBeDefined()

    expect(wrapper).toMatchSnapshot()

    wrapper.destroy()
  })

  it('renders default slot content', async () => {
    const options = {
      slots: {
        default: '<span>foobar</span>',
      },
    }
    const wrapper = factory({ options })

    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.attributes('type')).toBeDefined()
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.text()).toBe('foobar')

    expect(wrapper).toMatchSnapshot()

    wrapper.destroy()
  })
})
