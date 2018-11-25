<template lang="pug">
    .input-cpf
      v-text-field(
        v-model="cpf"
        label="C.P.F."
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
        v => !!v || 'CPF é obrigatório',
        v => !(v && v.length < 11) || 'CPF incompleto',
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
