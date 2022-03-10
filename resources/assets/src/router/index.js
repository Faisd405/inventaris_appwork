import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import globals from '@/globals'

// Layouts
import Layout2 from '@/layout/Layout2Flex'

Vue.use(Router)
Vue.use(Meta)


const router = new Router({
    base: '/',
    mode: 'history',

    routes: [{
        path: '/',
        component: Layout2,
        children: [{
            path: '',
            name: 'home',
            component: () => import('@/components/Home'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
                if(isUser) {
                    isUser: true
                }
            }
        },
        {
            name: 'homePengguna',
            path: '/homepengguna',
            component: () => import('@/components/HomePengguna'),
        },
        // Route Auth
        {
            name: 'login',
            path: '/login',
            component: () => import('@/components/auth/Login'),
        },
        {
            name: 'loginapi',
            path: '/loginapi',
            component: () => import('@/components/authapi/Login'),
        },
        // Route barang
        {
            name: 'index-barang',
            path: '/barang',
            component: () => import('@/components/barang/index'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
            }
        },
        {
            name: 'relasiuserbarang',
            path: '/barang/relasi',
            component: () => import('@/components/barang/relasi-barang'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
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
            component: () => import('@/components/barang/detail'),
        },
        // Router Pengguna
        {
            name: 'index-pengguna',
            path: '/pengguna',
            component: () => import('@/components/pengguna/index'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
            }
        },
        {
            name: 'create-pengguna',
            path: '/pengguna/create',
            component: () => import('@/components/pengguna/create'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        {
            name: 'edit-pengguna',
            path: '/pengguna/edit/:id',
            component: () => import('@/components/pengguna/edit'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
                if(isUser) {
                    isUser: true;
                }
            }
        },
        {
            name: 'detail-pengguna',
            path: '/pengguna/detail/:id',
            component: () => import('@/components/pengguna/detail'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
            }
        },
        {
            name: 'lampiran-pengguna',
            path: '/pengguna/detail/:id/lampiran',
            component: () => import('@/components/pengguna/lampiran'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        // Route kategori
        {
            name: 'index-kategori',
            path: '/kategori',
            component: () => import('@/components/kategori/index'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
            }
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
            component: () => import('@/components/kategori/detail'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
            }
        },
        // Route users
        {
            name: 'index-users',
            path: '/users',
            component: () => import('@/components/users/index'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
            }
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
            name: 'edit-users',
            path: '/users/edit/:id',
            component: () => import('@/components/users/edit'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        // Route Buku
        {
            name: 'index-buku',
            path: '/buku',
            component: () => import('@/components/buku/index'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
            }
        },
        {
            name: 'detail-buku',
            path: '/buku/detail/:id',
            component: () => import('@/components/buku/detail'),
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
            component: () => import('@/components/sifat/index'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
            }
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
            component: () => import('@/components/jenis/index'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
            }
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
            component: () => import('@/components/lokasi/index'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
            }
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
        {
            name: 'detail-lokasi',
            path: '/lokasi/detail/:id',
            component: () => import('@/components/lokasi/detail'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
            }
        },
        // Route History
        {
            name: 'index-history',
            path: '/history',
            component: () => import('@/components/history/index'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
            }
        },
        {
            name: 'detail-history',
            path: '/history/detail/',
            component: () => import('@/components/history/detail'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                }
            }
        },
        // Route Laporan
        {
            name: 'laporan-barang',
            path: '/laporan/barang',
            component: () => import('@/components/Laporan/LaporanTBarang'),
        },
        {
            name: 'laporan-buku',
            path: '/laporan/buku',
            component: () => import('@/components/Laporan/LaporanTBuku'),
        },
        {
            name: 'laporan-pengguna',
            path: '/laporan/pengguna',
            component: () => import('@/components/Laporan/LaporanTpengguna'),
        },
        {
            name: 'laporan-barang-terpakai',
            path: '/laporan/LaporanTBarangTerpakai',
            component: () => import('@/components/Laporan/LaporanTBarangTerpakai'),
        },
        {
            name: 'laporan-barang-tidak-terpakai',
            path: '/laporan/LaporanTBarangTidakTerpakai',
            component: () => import('@/components/Laporan/LaporanTBarangTidakTerpakai'),
        },
        {
            name: 'laporan-harga-barang',
            path: '/laporan/LaporanTHargaBarang',
            component: () => import('@/components/Laporan/LaporanTHargaBarang'),
        },
        //Route Pengajuan
        {
            name: 'create-pengajuan',
            path: '/pengajuan/user/create',
            component: () => import('@/components/pengajuan/user/create'),
            meta: {
                requiresAuth: true,
                isUser: true
            }
        },
        {
            name: 'edit-pengajuan',
            path: '/pengajuan/user/edit/:id',
            component: () => import('@/components/pengajuan/user/edit'),
            meta: {
                requiresAuth: true,
                isUser: true
            }
        },
        {
            name: 'index-pengajuan',
            path: '/pengajuan/user/:id',
            component: () => import('@/components/pengajuan/user/index'),
            meta: {
                requiresAuth: true,
                isUser: true
            }
        },
        {
            name: 'index-pengajuan-admin',
            path: '/pengajuan/admin',
            component: () => import('@/components/pengajuan/admin/index'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        {
            name: 'setuju-pengajuan-admin',
            path: '/pengajuan/admin/setuju/:id',
            component: () => import('@/components/pengajuan/admin/setuju'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        {
            name: 'detail-pengajuan',
            path: '/pengajuan/detail/:id',
            component: () => import('@/components/pengajuan/detail'),
            meta: {
                requiresAuth: true,
                if(isAdmin) {
                    isAdmin: true;
                },
                if(isUser) {
                    isUser: true
                }
            }
        },
        // Route Permintaan
        {
            name: 'create-permintaan',
            path: '/permintaan/user/create',
            component: () => import('@/components/permintaan/user/create'),
            meta: {
                requiresAuth: true,
                isUser: true
            }
        },
        {
            name: 'index-permintaan',
            path: '/permintaan/user/:id',
            component: () => import('@/components/permintaan/user/index'),
            meta: {
                requiresAuth: true,
                isUser: true
            }
        },
        {
            name: 'index-permintaan-admin',
            path: '/permintaan/admin',
            component: () => import('@/components/permintaan/admin/index'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        {
            name: 'detail-permintaan',
            path: '/permintaan/detail/:id',
            component: () => import('@/components/permintaan/detail'),
            meta: {
                requiresAuth: true,
                isAdmin: true
            }
        },
        //setting image
        {
            name: 'index-image',
            path: '/image',
            component: () => import('@/components/image/index'),
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
            if (to.matched.some(record => record.meta.isUser)) {
                if (roles.includes('user')) next()
                else if (roles[0] === 'admin') {
                    next({
                        name: 'home'
                    })
                }
            } else if (to.matched.some(record => record.meta.isAdmin)) {
                if (roles.includes('admin')) next()
                else if (roles[0] === 'user') {
                    next({
                        name: 'homePengguna'
                    })
                }
            } else {
                next()
            }
        }
    } else {
        next()
    }
})

export default router
