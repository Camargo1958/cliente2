<template lang="pug">
  .juridica-form
    v-container(grid-list-xl)
      v-form(v-model="isValid")
        v-layout.pj-criar(row wrap)
          v-flex(xs6)
            input-nome(
              v-model="payload.nomeFantasia"
              required
              label="Nome Fantasia")
          v-flex(xs6)
            input-nome(
              v-model="payload.razaoSocial"
              required
              label="Razão Social")
          v-flex(xs3)
            input-cnpj(v-model="payload.cnpj")
          v-flex(xs3)
            input-date(
              v-model="payload.dataFundacao"
              required
              label="Data de fundação")
          v-flex(xs6)
            input-email(v-model="payload.emailContato" required)
          v-flex(xs12)
            btn-save(@save="save($event)")
</template>

<script>
import InputDate from '@/support/inputs/input-date/input-date.vue';
import JuridicaModel from '@/domains/pessoa/juridica/juridica-model';
import BtnSave from '@/support/buttons/save/btn-save.vue';
import InputEmail from '@/support/inputs/input-email/input-email.vue';
import InputCnpj from './input-cnpj.vue';
import InputNome from './input-nome.vue';

export default {
  name: 'PessoaJuridicaForm',
  props: {
    payload: {
      type: JuridicaModel,
      required: true,
    },
  },
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
