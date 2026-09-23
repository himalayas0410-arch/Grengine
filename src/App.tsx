/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { PistonsPage } from './pages/PistonsPage';
import { AirCompressorKitsPage } from './pages/AirCompressorKitsPage';
import { KirloskarEngineHeadsPage } from './pages/KirloskarEngineHeadsPage';
import { KirloskarCylinderBlocksPage } from './pages/KirloskarCylinderBlocksPage';
import { ProductDetail } from './pages/ProductDetail';
import { Quote } from './pages/Quote';
import { About } from './pages/About';
import { Infrastructure } from './pages/Infrastructure';
import { CustomManufacturing } from './pages/CustomManufacturing';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { News } from './pages/News';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/cylinder-engine-heads', element: <KirloskarEngineHeadsPage /> },
      { path: 'products/kirloskar-engine-heads', element: <KirloskarEngineHeadsPage /> },
      { path: 'products/cylinder-air-cooled-blocks', element: <KirloskarCylinderBlocksPage /> },
      { path: 'products/kirloskar-cylinder-blocks', element: <KirloskarCylinderBlocksPage /> },
      { path: 'products/pistons', element: <PistonsPage /> },
      { path: 'products/air-compressor-kits', element: <AirCompressorKitsPage /> },
      { path: 'products/:slug', element: <ProductDetail /> },
      { path: 'quote', element: <Quote /> },
      { path: 'about', element: <About /> },
      { path: 'infrastructure', element: <Infrastructure /> },
      { path: 'custom-manufacturing', element: <CustomManufacturing /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <Terms /> },
      { path: 'news', element: <News /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}


