<template lang="pug">
  v-container(grid-list-xl)
    v-form(v-model="isValid")
      v-layout.pj-criar(row wrap)
        v-flex(xs6)
          input-nome(
            v-model="payload.nomeFantasia"
            required
            label="Nome fantasia")
        v-flex(xs6)
          v-text-field(
            v-model="payload.razaoSocial"
            label="Razão social"
            required
          )
        v-flex(xs3)
          input-cnpj(v-model="payload.cnpj")
        v-flex(xs3)
          input-date(
            v-model="payload.dataFundacao"
            label="Data de Fundação"
            required
          )
        v-flex(xs6)
          input-email(v-model="payload.emailContato" required)
        v-flex(xs12)
          btn-save(@save="salvar($event)")
</template>

<script>

import InputDate from '@/support/inputs/input-date/input-date.vue';
import InputEmail from '@/support/inputs/input-email/input-email.vue';
import InputCnpj from './components/input-cnpj.vue';
import InputNome from './components/input-nome.vue';
import BtnSave from '@/support/buttons/save/btn-save.vue';
import JuridicaModel from '@/domains/pessoa/juridica/juridica-model';
import JuridicaService from '@/domains/pessoa/juridica/juridica-service';

export default {
  name: 'PessoaJuridicaCriar',
  components: {
    InputCnpj,
    InputNome,
    InputDate,
    InputEmail,
    BtnSave,
  },
  data() {
    return {
      isValid: false,
      payload: new JuridicaModel(),
    };
  },
  methods: {
    salvar() {
      if (!this.isValid) {
        alert('Ou ta errado mano');
        return;
      }
      JuridicaService.save(this.payload)
        .then(() => {
          this.$router.push({ name: 'PessoaJuridicaListar' });
        });
    },
  },
};
</script>
