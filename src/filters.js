import Vue from "vue";

Vue.filter('money', (value) => {
//   if (isNaN(value)) return '- -'
//   if (parseFloat(value) === 0 && !allowZero) return '- -'
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(value)
})