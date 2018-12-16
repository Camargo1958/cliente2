import Vue from 'vue';
import Router from 'vue-router';
import PessoaFisicaListar from '@/app/pessoa-fisica/listar.vue';
import PessoaFisicaCriar from '@/app/pessoa-fisica/criar.vue';
import PessoaFisicaEditar from '@/app/pessoa-fisica/editar.vue';
import PessoaJuridicaListar from '@/app/pessoa-juridica/listar.vue';
import PessoaJuridicaEditar from '@/app/pessoa-juridica/editar.vue';
import PessoaJuridicaCriar from '@/app/pessoa-juridica/criar.vue';

Vue.use(Router);

const route = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/pessoa',
      component: PessoaFisicaListar,
      name: 'PessoaFisicaListar',
      meta: {
        title: 'Listagem de pessoa física',
      },
    },
    {
      path: '/pessoa/criar',
      component: PessoaFisicaCriar,
      name: 'PessoaFisicaCriar',
      meta: {
        title: 'Criar pessoa física',
      },
    },
    {
      path: '/pessoa/:id',
      component: PessoaFisicaEditar,
      name: 'PessoaFisicaEditar',
      meta: {
        title: 'Editar pessoa física',
      },
    },
    {
      path: '/empresa',
      component: PessoaJuridicaListar,
      name: 'PessoaJuridicaListar',
      meta: {
        title: 'Listagem de pessoa jurídica',
      },
    },
    {
      path: '/empresa/:id',
      component: PessoaJuridicaEditar,
      name: 'PessoaJuridicaEditar',
      meta: {
        title: 'Editar pessoa juridica',
      },
    },
    {
      path: '/empresa/criar',
      component: PessoaJuridicaCriar,
      name: 'PessoaJuridicaCriar',
      meta: {
        title: 'Criar pessoa juridica',
      },
    },
  ],
});
export default route;
