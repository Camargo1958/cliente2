<template lang="pug">
    .input-cnpj
      v-text-field(
        v-model="cnpj"
        label="C.N.P.J."
        mask="###.###.###-##"
        required
        :rules="rules"
      )
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      rules: [
        v => !!v || 'CNPJ é obrigatório',
        v => !(v && v.length < 11) || 'CNPJ incompleto',
      ],
    };
  },
  computed: {
    cpf: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
