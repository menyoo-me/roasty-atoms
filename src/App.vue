<template>
  <div id="app">
    <div class="w-full p-2 text-center bg-gray-100">
      <rsty-button variation="primary">Roasty Button</rsty-button>
    </div>
    <div class="w-full p-2 text-center bg-gray-100">
      <rsty-button variation="secondary">Roasty Button</rsty-button>
    </div>
    <div class="w-full p-2 text-center bg-gray-400">
      <rsty-button variation="cancel">Roasty Button</rsty-button>
    </div>
    <div class="w-full p-2 text-center">
      <rsty-button :disabled="true">Roasty Button</rsty-button>
    </div>
  </div>
</template>

<script>
import RstyButton from '@/components/atoms/RstyButton'

export default {
  name: 'App',
  components: {
    'rsty-button': RstyButton,
  },
}
</script>
