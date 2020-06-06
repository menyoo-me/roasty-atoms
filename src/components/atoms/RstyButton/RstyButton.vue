<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href ? (disabled ? '#' : href) : null"
    :type="href ? type : type != null ? type : 'button'"
    :class="[this.baseClass, this.variationClasses, this.blockClasses]"
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
    /**
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
      validator: (value) => value.match(/(default|primary|secondary|cancel)/),
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
  },
  data: () => ({
    baseClass: [
      'button',
      'outline-none',
      'active:outline-none',
      'focus:outline-none',
      'py-2',
      'px-3',
      'border',
      'rounded',
      'items-center',
      'font-bold',
      'transition',
      'duration-50',
      'ease-in-out',
      'transform',
      'active:scale-98',
    ],
    buttonVariationClasses: {
      disabled: [
        'bg-gray-200',
        'border-gray-300',
        'text-gray-400',
        'cursor-default',
        'cursor-not-allowed',
        'active:scale-100',
        'button--disabled',
      ],
      default: ['bg-gray-100', 'border-gray-500', 'text-gray-600'],
      primary: [
        'bg-blue-500',
        'border-blue-500',
        'text-white',
        'hover:bg-blue-400',
        'hover:border-blue-400',
        'button--primary',
      ],
      secondary: [
        'bg-white',
        'border-blue-500',
        'text-blue-500',
        'hover:text-blue-600',
        'hover:border-blue-600',
        'hover:shadow-lg',
        'button--secondary',
      ],
      cancel: ['bg-white', 'border-white', 'text-blue-500', 'button--cancel'],
    },
  }),
  computed: {
    variationClasses() {
      if (this.disabled) return this.buttonVariationClasses.disabled
      return this.buttonVariationClasses[this.variation]
    },
    blockClasses() {
      if (this.block) return ['flex', 'justify-center', 'w-full']
      return ['inline-flex']
    },
  },
}
</script>
