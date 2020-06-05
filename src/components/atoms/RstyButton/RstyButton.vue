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
}
</script>
