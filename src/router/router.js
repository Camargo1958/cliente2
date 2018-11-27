import Vue from 'vue';
import Router from 'vue-router';
import PessoaFisicaListar from '@/app/pessoa-fisica/listar.vue';
import PessoaFisicaCriar from '@/app/pessoa-fisica/criar.vue';
import PessoaFisicaEditar from '@/app/pessoa-fisica/editar.vue';

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
  ],
});
export default route;
