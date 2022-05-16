<template>
  <div class="form-group" :class="{ 'has-error': error }">
    <label v-if="label" :for="name">{{ label }}</label>
    <select @change="updateValue($event.target.value)" :name="name" :required="required" class="form-control" :disabled="disabled">
      <option v-if="placeholder" value="">{{ placeholder }}</option>
      <option v-for="option in options" :value="option.valor" :selected="value == option.valor" :key="option.valor">{{ option.chave }}</option>
    </select>
    <span v-if="error" class="help-block" v-html="error"></span>
  </div>
</template>

<script>
  export default{
    name: 'InputSelect',
    props: ['name', 'value', 'options', 'required', 'label', 'placeholder', 'error', 'disabled'],
    methods: {
      updateValue (value) {
        this.$emit('input', value)
      }
    }
  }
</script>