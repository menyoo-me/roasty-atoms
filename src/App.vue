<template>
  <div id="app">
    <h2>Buttons</h2>
    <div class="w-full p-2 bg-gray-100">
      <rsty-button variation="primary">Roasty Button</rsty-button>
    </div>
    <div class="w-full p-2 bg-gray-100">
      <rsty-button variation="secondary">Roasty Button</rsty-button>
    </div>
    <div class="w-full p-2 bg-gray-400">
      <rsty-button variation="cancel">Roasty Button</rsty-button>
    </div>
    <div class="w-full p-2">
      <rsty-button :disabled="true">Roasty Button</rsty-button>
    </div>

    <div>
      <h2>Headings</h2>
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
