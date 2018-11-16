import DefaultLayout from './layouts/DefaultLayout'
import asyncComponent from './components/AsyncComponent'

const AsyncMarketplace = asyncComponent(() =>
  import('./containers/marketplace')
)

const AsyncMarketplaceDev = asyncComponent(() =>
  import('./containers/marketplaceDev')
)

const AsyncCreateListing = asyncComponent(() =>
  import('./containers/createListing')
)

const AsyncDetailListingDev = asyncComponent(() =>
  import('./containers/detailListingDev')
)

const AsyncDetailListingInvestor = asyncComponent(() =>
  import('./containers/detailListingInvestor')
)

const AsyncDetailListingLandOwner = asyncComponent(() =>
  import('./containers/detailListingLandOwner')
)

const AsyncHome = asyncComponent(() => import('./containers/home'))

const AsyncExit = asyncComponent(() => import('./containers/exit'))

export default [
  {
    layout: DefaultLayout,
    routes: [
      {
        path: '/',
        component: AsyncHome,
        exact: true
      },
      {
        path: '/marketplace',
        component: AsyncMarketplace,
        exact: true
      },
      {
        path: '/marketplace/dev',
        component: AsyncMarketplaceDev
      },
      {
        path: '/detailListingDev',
        component: AsyncDetailListingDev,
        exact: true
      },
      {
        path: '/detailListingInvestor',
        component: AsyncDetailListingInvestor,
        exact: true
      },
      {
        path: '/detailListingLandOwner',
        component: AsyncDetailListingLandOwner,
        exact: true
      },
      {
        path: '/createListing',
        component: AsyncCreateListing,
        exact: true
      },
      {
        path: '/exit',
        component: AsyncExit,
        exact: true
      }
    ]
  }
]
