<template lang="pug">
  .fisica-editar
    fisica-form(:payload="payload" @submit="save()")
</template>

<script>
import FisicaService from '@/domains/pessoa/fisica/fisica-service';
import FisicaModel from '@/domains/pessoa/fisica/fisica-model';
import FisicaForm from './components/fisica-form.vue';

export default {
  name: 'PessoaFisicaEditar',
  data() {
    return {
      payload: new FisicaModel(),
    };
  },
  components: {
    FisicaForm,
  },
  methods: {
    save() {
      FisicaService.edit(this.payload.id, this.payload)
        .then(({ data }) => {
          this.$router.replace({ name: 'PessoaFisicaListar' });
        });
    },
  },
  created() {
    const { id } = this.$route.params;
    FisicaService.get(id)
      .then(({ data }) => {
        this.payload = new FisicaModel(data);
      });
  },
};
</script>
