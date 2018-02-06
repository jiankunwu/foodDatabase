import Vue from 'vue'
import Router from 'vue-router'

import databaseHome from '@/pages/databaseHome'
import databaseDetail from '@/pages/databaseDetail'
import databaseHomeLists from '@/children/databaseHomeLists'
import databaseFavourite from '@/children/databaseFavourite'

Vue.use(Router);


export default new Router({
    routes: [
        {
            path: '/',
            name: 'databaseHome',
            component: databaseHome
        }, {
            path: '/databaseHome',
            component: databaseHome,
            children: [
                {
                    path: '/',
                    component: databaseHomeLists
                }, {
                    path: 'databaseHomeLists',
                    name: 'databaseHomeLists',
                    component: databaseHomeLists
                }, {
                    path: 'databaseFavourite',
                    name: 'databaseFavourite',
                    component: databaseFavourite
                }
            ]
        }, {
            path: '/databaseDetail',
            name: 'databaseDetail',
            component: databaseDetail
        }
    ]
})
