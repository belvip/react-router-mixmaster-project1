import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError
} from './pages';

import {loader as landingLoader} from './pages/Landing';
import {loader as singleCocktailLoader} from './pages/Cocktail';
import { action as newsletterAction} from './pages/Newsletter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      staleTime: 1000 * 60 * 5,
    }
  }
})
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
        errorElement: <SinglePageError />,
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            index: true,
            element: <h2>our company</h2>
          },
          {
            path: 'person',
            element: <h2>John Doe</h2>
          },
        ],
      },
    ],
  },
  
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  ); 
  
}

export default App 
