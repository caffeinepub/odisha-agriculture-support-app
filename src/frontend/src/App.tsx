import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SchemesPage from './pages/SchemesPage';
import ResourcesPage from './pages/ResourcesPage';
import SupportPage from './pages/SupportPage';
import MarketPricesPage from './pages/MarketPricesPage';
import HelpButton from './components/HelpButton';

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
      <HelpButton />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const schemesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/schemes',
  component: SchemesPage,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources',
  component: ResourcesPage,
});

const supportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/support',
  component: SupportPage,
});

const marketPricesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/market-prices',
  component: MarketPricesPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  schemesRoute,
  resourcesRoute,
  supportRoute,
  marketPricesRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
