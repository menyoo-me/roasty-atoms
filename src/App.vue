<template>
  <div id="app">
    <h2>Buttons</h2>
    <div class="w-full p-2">
      <rsty-button class="mr-3" variation="primary">Primary Button</rsty-button>
      <rsty-button class="mr-3" variation="primary" :ghost="true">Primary Ghost</rsty-button>
    </div>
    <div class="w-full p-2">
      <rsty-button class="mr-3" size="small">Small Button</rsty-button>
      <rsty-button class="mr-3" size="medium">Medium Button</rsty-button>
      <rsty-button class="mr-3" size="large">Large Button</rsty-button>
    </div>
    <div class="w-full p-2">
      <rsty-button class="mr-3">Default Button</rsty-button>
      <rsty-button class="mr-3" :ghost="true">Default Button</rsty-button>
    </div>
    <div class="w-full p-2">
      <rsty-button class="mr-3" variation="red">Red Button</rsty-button>
      <rsty-button class="mr-3" variation="red" :ghost="true">Red Button</rsty-button>
    </div>
    <div class="w-full p-2">
      <rsty-button class="mr-3" variation="green">Green Button</rsty-button>
      <rsty-button class="mr-3" variation="green" :ghost="true">Green Button</rsty-button>
    </div>
    <div class="w-full p-2">
      <rsty-button class="mr-3" variation="blue">Blue Button</rsty-button>
      <rsty-button class="mr-3" variation="blue" :ghost="true">Blue Button</rsty-button>
    </div>
    <div class="w-full p-2">
      <rsty-button class="mr-3" :disabled="true">Disabled Button</rsty-button>
      <rsty-button class="mr-3" :disabled="true">Disabled Button</rsty-button>
    </div>
    <div class="w-full p-2">
      <rsty-button class="mr-3" size="large" :block="true">Block Button</rsty-button>
    </div>
    <div class="w-full p-2">
      <rsty-button variation="link" href="https://menyoo.me">Link</rsty-button>
    </div>

    <div class="mt-20">
      <h2 class="uppercase font-thin text-2xl">Headings</h2>
      <div class="w-full p-2">
        <rsty-heading>The quick brown fox jumps over the lazy dog</rsty-heading>
        <rsty-heading tag="h2">The quick brown fox jumps over the lazy dog</rsty-heading>
        <rsty-heading tag="h3">The quick brown fox jumps over the lazy dog</rsty-heading>
        <rsty-heading tag="h4">The quick brown fox jumps over the lazy dog</rsty-heading>
        <rsty-heading tag="h5">The quick brown fox jumps over the lazy dog</rsty-heading>
        <rsty-heading tag="h6">The quick brown fox jumps over the lazy dog</rsty-heading>
      </div>
    </div>
  </div>
</template>

<script>
import RstyButton from '@/components/atoms/RstyButton'
import RstyHeading from '@/components/atoms/RstyHeading'

export default {
  name: 'App',
  components: {
    'rsty-button': RstyButton,
    'rsty-heading': RstyHeading,
  },
}
</script>
