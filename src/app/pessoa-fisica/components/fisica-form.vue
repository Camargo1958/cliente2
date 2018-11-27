<template lang="pug">
  .fisica-form
    v-container(grid-list-xl)
      v-form(v-model="isValid")
        v-layout.pf-criar(row wrap)
          v-flex(xs6)
            input-nome(
              v-model="payload.nome"
              required
              label="Nome")
          v-flex(xs6)
            input-nome(
              v-model="payload.sobrenome"
              required
              label="Sobrenome")
          v-flex(xs3)
            input-cpf(v-model="payload.cpf")
          v-flex(xs3)
            input-date(
              v-model="payload.dataNascimento"
              required
              label="Data de nascimento")
          v-flex(xs6)
            input-email(v-model="payload.email" required)
          v-flex(xs12)
            btn-save(@save="save($event)")
</template>

<script>
import InputDate from '@/support/inputs/input-date/input-date.vue';
import FisicaModel from '@/domains/pessoa/fisica/fisica-model';
import BtnSave from '@/support/buttons/save/btn-save.vue';
import InputEmail from '@/support/inputs/input-email/input-email.vue';
import InputCpf from './input-cpf.vue';
import InputNome from './input-nome.vue';

export default {
  name: 'PessoaFisicaForm',
  props: {
    payload: {
      type: FisicaModel,
      required: true,
    },
  },
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
    };
  },
  methods: {
    save() {
      if (!this.isValid) return;
      this.$emit('submit');
    },
  },
};
</script>
