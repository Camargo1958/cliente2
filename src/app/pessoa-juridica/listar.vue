<template lang="pug">
  v-layout.pj-listar(row wrap)
    v-flex(xs12)
      v-btn(
        type="button"
        color="primary"
        @click.stop="create()"
      ) Novo
    v-flex
      v-data-table(
        :headers="headers"
        :items="payload"
        no-data-text="Não foi encontrado registros"
        no-results-text="Nenhum resultado encontrado"
        rows-per-page-text="Quantidade de registros"
        :rows-per-page-items="rowsPerPageItems"
      )
        template(slot="items" slot-scope="props")
          td {{ props.item.nomeFantasia }}
          td {{ props.item.razaoSocial }}
          td {{ props.item.dataFundacao | date }}
          td {{ props.item.cnpj | cnpj }}
          td {{ props.item.emailContato }}
          td.text-xs-center
            v-btn(
              fab
              small
              dark
              color="blue"
              @click.stop="edit(props.item.id)"
            )
              v-icon edit
</template>

<script>
import JuridicaService from '@/domains/pessoa/juridica/juridica-service';
import cnpjFilter from '@/support/filters/cnpj';
import dateFilter from '@/support/filters/date';

export default {
  name: 'PessoaJuridicaListar',
  filters: {
    dateFilter,
    cnpjFilter,
  },
  data() {
    return {
      headers: [
        {
          text: 'Nome fantasia',
          value: 'nomeFantasia',
        },
        {
          text: 'Razão social',
          value: 'razaoSocial',
        },
        {
          text: 'Data de Fundação',
          value: 'dataFundacao',
        },
        {
          text: 'CNPJ',
          value: 'cnpj',
        },
        {
          text: 'Email contato',
          value: 'emailContato',
        },
        {
          text: 'Ações',
          align: 'center',
        },
      ],
      payload: [],
      rowsPerPageItems: [
        25, 50, 100,
      ],
    };
  },
  methods: {
    create() {
      this.$router.push({ name: 'PessoaJuridicaCriar' });
    },
    edit(id) {
      this.$router.push({ name: 'PessoaJuridicaEditar', params: { id } });
    },
  },
  created() {
    JuridicaService.list()
      .then(({ data }) => {
        this.payload = data;
      });
  },
};
</script>
