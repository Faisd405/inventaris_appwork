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
        // Route Auth
        {
            name: 'login',
            path: '/login',
            component: () => import('@/components/auth/Login')
        },
        {
            name: 'register',
            path: '/register',
            component: () => import('@/components/auth/Register')
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
            component: () => import('@/components/barang/create'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        {
            name: 'edit-barang',
            path: '/barang/edit/:id',
            component: () => import('@/components/barang/edit'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
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
            component: () => import('@/components/kategori/create'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        {
            name: 'edit-kategori',
            path: '/kategori/edit/:id',
            component: () => import('@/components/kategori/edit'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
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
            component: () => import('@/components/users/create'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        {
            name: 'detail-users',
            path: '/users/detail/:id',
            component: () => import('@/components/users/detail')
        },
        {
            name: 'relasiuserbarang',
            path: '/users/relasi',
            component: () => import('@/components/users/relasi-barang'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
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
            component: () => import('@/components/buku/create'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        {
            name: 'edit-buku',
            path: '/buku/edit/:id',
            component: () => import('@/components/buku/edit'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        // Route sifat
        {
            name: 'index-sifat',
            path: '/sifat',
            component: () => import('@/components/sifat/index')
        },
        {
            name: 'create-sifat',
            path: '/sifat/create',
            component: () => import('@/components/sifat/create'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        {
            name: 'edit-sifat',
            path: '/sifat/edit/:id',
            component: () => import('@/components/sifat/edit'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        // Route jenis
        {
            name: 'index-jenis',
            path: '/jenis',
            component: () => import('@/components/jenis/index')
        },
        {
            name: 'create-jenis',
            path: '/jenis/create',
            component: () => import('@/components/jenis/create'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        {
            name: 'edit-jenis',
            path: '/jenis/edit/:id',
            component: () => import('@/components/jenis/edit'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        // Route lokasi
        {
            name: 'index-lokasi',
            path: '/lokasi',
            component: () => import('@/components/lokasi/index')
        },
        {
            name: 'create-lokasi',
            path: '/lokasi/create',
            component: () => import('@/components/lokasi/create'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        {
            name: 'edit-lokasi',
            path: '/lokasi/edit/:id',
            component: () => import('@/components/lokasi/edit'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
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

    if (to.matched.some(record => record.meta.requiresAuth)) {
        let token = localStorage.getItem('token') != null;
        if (!token) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            let roles = user.roles.map(role => role.name)
            console.log(roles[0]);
             if (to.matched.some(record => record.meta.isAdmin)) {
                if (roles.includes('admin')) next()
                else if (roles[0] === 'user') {
                    next({
                        name: 'user'
                    })
                } else next({
                    name: 'home'
                })
            } else {
                next()
            }
        }
    } else {
        next()
    }
})

export default router
