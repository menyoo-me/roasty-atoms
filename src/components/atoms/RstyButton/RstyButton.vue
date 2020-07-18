<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href ? (disabled ? '#' : href) : null"
    :type="href ? type : type != null ? type : 'button'"
    :class="[this.baseClass, this.getVariationClasses, this.blockClasses, this.getSizeClasses]"
    :disabled="disabled"
    :role="href === '#' ? 'button' : null"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'rsty-button',
  props: {
    /**
     * The html element used for the button.
     * `button, a`
     */
    el: {
      type: String,
      default: 'button',
      validator: (value) => value.match(/(button|a)/),
    },
    /**var
     * When setting the button’s type to a link, use this option to give a href.
     */
    href: {
      type: String,
      default: null,
    },
    /**
     * Set the button’s type to “submit”.
     */
    type: {
      type: String,
      default: null,
      validator: (value) => value.match(/(null|submit|button)/),
    },
    /**
     * Style variation to give additional meaning.
     * `primary, secondary`
     */
    variation: {
      type: String,
      default: 'default',
      validator: (value) => value.match(/(default|primary|red|green|blue)/),
    },
    /**
     * Make background transparent and invert text and border colors
     */
    ghost: {
      type: Boolean,
      default: false,
    },
    /**
     * Set true or false to disable button or replace the href link to '#'.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Makes the button fill 100% of the container
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * Set the size of button
     * `large, medium, small`
     */
    size: {
      type: String,
      default: 'medium',
      validator: (v) => v.match(/(large|medium|small)/),
    },
  },
  data: () => ({
    baseClass: [
      'button',
      'outline-none',
      'active:scale-100',
      'active:outline-none',
      'focus:outline-none',
      'rounded-sm',
      'border',
      'border-transparent',
      'items-center',
      'transition',
      'duration-50',
      'ease-in-out',
      'transform',
      'active:scale-98',
    ],
    sizeClasses: {
      small: ['text-xs', 'py-1', 'px-2'],
      medium: ['text-sm', 'py-1.5', 'px-4'],
      large: ['text-base', 'py-2', 'px-6'],
    },
    variationClasses: {
      disabled: {
        default: [
          'bg-gray-200',
          'border-gray-300',
          'text-gray-400',
          'cursor-default',
          'cursor-not-allowed',
          'button--disabled',
        ],
      },
      default: {
        default: [
          'bg-transparent',
          'border-gray-500',
          'text-gray-700',
          'hover:shadow-lg',
          'button-default',
        ],
        ghost: [
          'bg-transparent',
          'border-gray-500',
          'text-gray-700',
          'hover:shadow-lg',
          'button-default--ghost',
        ],
      },
      primary: {
        default: [
          'bg-purple-800',
          'border-purple-800',
          'text-white',
          'hover:shadow-lg',
          'button-primary',
        ],
        ghost: [
          'bg-transparent',
          'border-purple-800',
          'text-purple-800',
          'hover:bg-purple-800',
          'hover:border-purple-800',
          'hover:text-white',
          'button-primary--ghost',
        ],
      },
      red: {
        default: ['bg-red-600', 'border-red-600', 'text-white', 'hover:shadow-lg', 'button-red'],
        ghost: [
          'bg-transparent',
          'border-red-600',
          'text-red-600',
          'hover:bg-red-600',
          'hover:border-red-600',
          'hover:text-white',
          'button-red--ghost',
        ],
      },
      green: {
        default: [
          'bg-green-600',
          'border-green-600',
          'text-white',
          'hover:shadow-lg',
          'button-green',
        ],
        ghost: [
          'bg-transparent',
          'border-green-600',
          'text-green-600',
          'hover:bg-green-600',
          'hover:border-green-600',
          'hover:text-white',
          'button-green--ghost',
        ],
      },
      blue: {
        default: ['bg-blue-600', 'border-blue-600', 'text-white', 'hover:shadow-lg', 'button-blue'],
        ghost: [
          'bg-transparent',
          'border-blue-600',
          'text-blue-600',
          'hover:bg-blue-600',
          'hover:border-blue-600',
          'hover:text-white',
        ],
      },
    },
  }),
  computed: {
    getVariationClasses() {
      if (this.disabled) return this.variationClasses.disabled.default
      return this.ghost
        ? this.variationClasses[this.variation].ghost
        : this.variationClasses[this.variation].default
    },
    getSizeClasses() {
      return this.sizeClasses[this.size]
    },
    blockClasses() {
      return this.block ? ['flex', 'justify-center', 'w-full'] : ['inline-flex']
    },
  },
}
</script>
