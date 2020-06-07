<template>
  <component :is="tag" :class="[this.baseClass, this.levelClasses]"><slot /></component>
</template>

<script>
export default {
  name: 'rsty-heading',
  props: {
    /**
     * The HTML element of heading.
     * `h1, h2, h3, h4, h5, h6`
     */
    tag: {
      type: String,
      default: 'h1',
      validator: (value) => value.match(/(h1|h2|h3|h4|h5|h6)/),
    },
    /**
     * Style variation to give additional meaning.
     * `primary, secondary`
     */
    variation: {
      type: String,
      default: 'default',
      validator: (value) => value.match(/(default|primary|secondary)/),
    },
  },
  data: () => ({
    baseClass: ['font-sans'],
    headingLevelClasses: {
      h1: ['text-4xl', 'leading-10', 'font-bold', 'mb-4', 'text-gray-800'],
      h2: ['text-3xl', 'leading-8', 'font-bold', 'mb-4', 'text-gray-800'],
      h3: ['text-2xl', 'leading-6', 'font-bold', 'mb-4', 'text-gray-900'],
      h4: ['text-xl', 'leading-6', 'font-normal', 'mb-4', 'text-gray-700'],
      h5: ['text-base', 'leading-6', 'font-bold', 'mb-4', 'text-gray-700', 'uppercase'],
      h6: ['font-bold', 'text-gray-800'],
    },
  }),
  computed: {
    levelClasses() {
      return this.headingLevelClasses[this.tag]
    },
  },
}
</script>
