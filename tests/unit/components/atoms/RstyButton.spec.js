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

    wrapper.destroy()
  })

  it('button has attribute disabled when disabled set', async () => {
    const props = {
      disabled: true,
    }
    const wrapper = factory({ props })

    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.classes()).toContain('button')
    expect(wrapper.classes()).toContain('button--disabled')

    wrapper.destroy()
  })

  it('link with href="#" should have role="button"', async () => {
    const props = {
      href: '#',
    }
    const wrapper = factory({ props })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.classes()).not.toContain('disabled')
    expect(wrapper.attributes('role')).toEqual('button')

    wrapper.destroy()
  })
  it('link disabled should have href="#" and role="button"', async () => {
    const props = {
      href: '#',
    }
    const wrapper = factory({ props })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.classes()).not.toContain('disabled')
    expect(wrapper.attributes('role')).toEqual('button')
    expect(wrapper.attributes('href')).toEqual('#')

    wrapper.destroy()
  })

  it('validate type props', async () => {
    const props = {
      type: 'button',
    }
    const wrapper = factory({ props })
    expect(wrapper.props().type).toBe('button')
    wrapper.destroy()
  })

  it('validate blockClasses', async () => {
    const props = {
      block: true,
    }
    const wrapper = factory({ props })

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('justify-center')
    expect(wrapper.classes()).toContain('w-full')

    wrapper.destroy()
  })

  it('validate blockClasses false', async () => {
    const wrapper = factory()

    expect(wrapper.classes()).toContain('inline-flex')

    wrapper.destroy()
  })
})
