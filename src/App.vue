<template>
  <div id="app">
    <div class="w-full p-2">
      <rsty-heading>The quick brown fox jumps over the lazy dog</rsty-heading>

      <rsty-heading tag="h2">The quick brown fox jumps over the lazy dog</rsty-heading>

      <rsty-heading tag="h3">The quick brown fox jumps over the lazy dog</rsty-heading>

      <rsty-heading tag="h4">The quick brown fox jumps over the lazy dog</rsty-heading>

      <rsty-heading tag="h5">The quick brown fox jumps over the lazy dog</rsty-heading>

      <rsty-heading tag="h6">The quick brown fox jumps over the lazy dog</rsty-heading>
    </div>
  </div>
</template>

<script>
import RstyHeading from '@/components/atoms/RstyHeading'

export default {
  name: 'App',
  components: {
    'rsty-heading': RstyHeading,
  },
}
</script>
