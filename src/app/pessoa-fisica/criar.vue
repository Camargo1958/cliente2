<template lang="pug">
  v-container(grid-list-xl)
    v-form(v-model="isValid")
      v-layout.pf-criar(row wrap)
        v-flex(xs6)
          input-nome(
            v-model="payload.nome"
            required
            label="Nome")
        v-flex(xs6)
          v-text-field(
            v-model="payload.sobrenome"
            label="Sobrenome"
            required
          )
        v-flex(xs3)
          input-cpf(v-model="payload.cpf")
        v-flex(xs3)
          input-date(
            v-model="payload.dataNascimento"
            label="Data de nascimento"
            required
          )
        v-flex(xs6)
          input-email(v-model="payload.email" required)
        v-flex(xs12)
          btn-save(@save="salvar($event)")
</template>

<script>

import InputDate from '@/support/inputs/input-date/input-date.vue';
import InputEmail from '@/support/inputs/input-email/input-email.vue';
import InputCpf from './components/input-cpf.vue';
import InputNome from './components/input-nome.vue';
import BtnSave from '@/support/buttons/save/btn-save.vue';
import FisicaModel from '@/domains/pessoa/fisica/fisica-model';
import FisicaService from '@/domains/pessoa/fisica/fisica-service';

export default {
  name: 'PessoaFisicaCriar',
  components: {
    InputCpf,
    InputNome,
    InputDate,
    InputEmail,
    BtnSave,
  },
  data() {
    return {
      isValid: false,
      payload: new FisicaModel(),
    };
  },
  methods: {
    salvar() {
      if (!this.isValid) {
        alert('Ou ta errado mano');
        return;
      }
      FisicaService.save(this.payload)
        .then(() => {
          this.$router.push({ name: 'PessoaFisicaListar' });
        });
    },
  },
};
</script>
