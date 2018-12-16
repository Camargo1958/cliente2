<template lang="pug">
    .input-nome
      v-text-field(
        v-model="nome"
        label="Nome"
        :required="required"
        :rules="rules"
      )
</template>

<script>
export default{
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: 'Name',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      rules: [
        v => (!this.required || !!v) || 'Nome é obrigatório',
        v => (/^([a-zA-Z\s])+$/.test(v)) || 'Nome só pode conter letras e espaço',
        v => !(v && v.length < 2) || 'Nome incompleto',
      ],
    };
  },
  computed: {
    nome: {
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
