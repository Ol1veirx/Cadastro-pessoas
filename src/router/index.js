import { createRouter, createWebHashHistory } from 'vue-router';

import CreatePerson from '@/components/CreatePerson'
import ListPersons from '@/components/ListPersons'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
       {
        path: '/',
        name: 'ListPersons',
        component: ListPersons
       },
        {
            path: '/cadastro',
            name: 'CreatePerson',
            component: CreatePerson
        },
    ]
})

export default router;