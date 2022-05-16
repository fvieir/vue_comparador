<template>
  <div class="form-group">
    <label v-if="label" for="exampleFormControlInput1">{{label}}</label>
    <input 
      type="number" 
      class="form-control" 
      :class="{'help-error' : helpError}"
      :id="id" 
      :disabled="disabled"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue($event.target.value)"
    >

     <span v-if="error"
          class="text-danger"
    >{{msg}}</span>
    </div>
</template>

<script>
export default {
  name: 'InputNumber',
  props: ['label', 'id', 'disabled', 'name', 'placeholder', 'value', 'error', 'msg'],
  data () {
    return {
      helpError: false
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
      console.log(value, this.helpError)
      if (value < 0) this.helpError = true
      else this.helpError = false
    }
  }
}
</script>

<style scoped>
  .help-error:focus {
    border-color:rgba(253, 13, 13, 0.233);
    box-shadow: 0 0 0 0.25rem rgba(253, 13, 13, 0.233);

  }
</style>
