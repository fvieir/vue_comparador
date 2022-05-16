<template>
  <div class="container">
    <h1>Simulador financeiro</h1>
    <hr>
      <form v-on:submit.prevent="getSimulation()">
        <div class="row">
          <div class="col-md-8 offset-md-2 offset-sm-0">
            <input-number 
              label="Valor do emprestimo"
              :error="valueLoan < 0"
              msg="Digite uma valor maior que Zero"
              v-model="valueLoan"
              />
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 offset-md-2 offset-sm-0">
            <input-select 
              label="Instituição" 
              :options="institutions" 
              name="institutions"
              :required="false"
              placeholder="Selecione a Instituição"
              v-model="selectInstitutions"
              />
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 offset-md-2 offset-sm-0">
            <input-select 
              label="Convêncio" 
              :options="agreements"
              name="Convenio"
              :required="false"
              placeholder="Selecione um Convênio"
              v-model="selectAgreements"
              />
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 offset-md-2 offset-sm-0">
            <input-select 
              label="Parcelas" 
              :options="portions"
              name="Parcelas"
              :required="false"
              placeholder="Selecione quantidade de parcelas"
              v-model="portion"
              />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-8 offset-md-2 offset-sm-0">
            <button class="btn btn-success">Simular</button>
          </div>
        </div>
    </form>
  </div>
</template>

<script>
import InputSelect from '@/components/inputs/InputSelect.vue'
import InputNumber from '@/components/inputs/InputNumber.vue'
export default {
  components: { InputSelect, InputNumber },
  data () {
    return {
      institutions: false,
      agreements: false,
      portions:[
        {chave: 36, valor: 36},
        {chave: 48, valor: 48},
        {chave: 60, valor: 60},
        {chave: 72, valor: 72},
        {chave: 84, valor: 84},
      ],
      valueLoan: 0,
      selectInstitutions: false,
      selectAgreements: [],
      portion: false
    }
  },
  mounted () {
    this.$http.get('/instituicao')
      .then(response => {
        this.institutions = response.data
      },error => {
        console.log(error)
      })
    this.$http.get('/convenio')
      .then(response => {
        this.agreements = response.data
      },error => {
        console.log(error)
      })
  },
  methods: {
    getSimulation () {
      const postData = {
        valor_emprestimo: this.value,
        instituicoes: this.selectInstitutions,
        convenios: this.selectAgreements,
        parcela: this.portion
      }
      this.$http.post('/simular', postData)
        .then(response => {
          console.log(response)
        }, error => {
          console.log(error)
        })
    }
  }
}
</script>