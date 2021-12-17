import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import globals from '@/globals'

// Layouts
import Layout1 from '@/layout/Layout1'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
    base: '/',
    mode: 'history',
    routes: [{
        path: '/',
        component: Layout1,
        children: [{
            path: '',
            component: () => import('@/components/Home')
        },
        // Route barang
        {
            name: 'index-barang',
            path: '/barang',
            component: () => import('@/components/barang/index')
        },
        {
            name: 'create-barang',
            path: '/barang/create',
            component: () => import('@/components/barang/create')
        },
        {
            name: 'edit-barang',
            path: '/barang/edit/:id',
            component: () => import('@/components/barang/edit')
        },
        {
            name: 'detail-barang',
            path: '/barang/detail/:id',
            component: () => import('@/components/barang/detail')
        },
        // Route kategori
        {
            name: 'index-kategori',
            path: '/kategori',
            component: () => import('@/components/kategori/index')
        },
        {
            name: 'create-kategori',
            path: '/kategori/create',
            component: () => import('@/components/kategori/create')
        },
        {
            name: 'edit-kategori',
            path: '/kategori/edit/:id',
            component: () => import('@/components/kategori/edit')
        },
        {
            name: 'detail-kategori',
            path: '/kategori/detail/:id',
            component: () => import('@/components/kategori/detail')
        },
        // Route users
        {
            name: 'index-users',
            path: '/users',
            component: () => import('@/components/users/index')
        },
        {
            name: 'create-users',
            path: '/users/create',
            component: () => import('@/components/users/create')
        },
        {
            name: 'detail-users',
            path: '/users/detail/:id',
            component: () => import('@/components/users/detail')
        },
        {
            name: 'relasiuserbarang',
            path: '/users/relasi',
            component: () => import('@/components/users/relasi-barang')
        },
        // Route Buku
        {
            name: 'index-buku',
            path: '/buku',
            component: () => import('@/components/buku/index')
        },
        {
            name: 'create-buku',
            path: '/buku/create',
            component: () => import('@/components/buku/create')
        },
        {
            name: 'edit-buku',
            path: '/buku/edit/:id',
            component: () => import('@/components/buku/edit')
        },
        ]
    }]
})

router.afterEach(() => {
    // On small screens collapse sidenav
    if (window.layoutHelpers && window.layoutHelpers.isSmallScreen() && !window.layoutHelpers.isCollapsed()) {
        setTimeout(() => window.layoutHelpers.setCollapsed(true, true), 10)
    }

    // Scroll to top of the page
    globals().scrollTop(0, 0)
})

router.beforeEach((to, from, next) => {
    // Set loading state
    document.body.classList.add('app-loading')

    // Add tiny timeout to finish page transition
    setTimeout(() => next(), 10)
})

export default router
