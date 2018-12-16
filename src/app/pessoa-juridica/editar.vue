<template lang="pug">
  .juridica-editar
    juridica-form(:payload="payload" @submit="save()")
</template>

<script>
import JuridicaService from '@/domains/pessoa/juridica/juridica-service';
import JuridicaModel from '@/domains/pessoa/juridica/juridica-model';
import JuridicaForm from './components/juridica-form.vue';

export default {
  name: 'PessoaJuridicaEditar',
  data() {
    return {
      payload: new JuridicaModel(),
    };
  },
  components: {
    JuridicaForm,
  },
  methods: {
    save() {
      JuridicaService.edit(this.payload.id, this.payload)
        .then(({ data }) => {
          this.$router.replace({ name: 'PessoaJuridicaListar' });
        });
    },
  },
  created() {
    const { id } = this.$route.params;
    JuridicaService.get(id)
      .then(({ data }) => {
        this.payload = new JuridicaModel(data);
      });
  },
};
</script>
