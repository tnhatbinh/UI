import { createBrowserRouter } from 'react-router-dom';

import Home from '@features/home/home';
import LoginPage from '@features/auth/LoginPage';
import PageNotFound from '@features/PageNotFound/PageNotFound';
import GuestGuard from '@guards/guestGuard';
import MainLayout from '@layouts/MainLayout';
import { HOME_PATH } from '@shared/constants/path';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: HOME_PATH, element: <Home /> },
      {
        path: 'kham-pha',
        async lazy() {
          const { default: MovieDiscoveryPage } =
            await import('@features/movie-discovery/MovieDiscoveryPage');
          return { Component: MovieDiscoveryPage };
        },
      },
      {
        path: 'movie-details',
        async lazy() {
          const { default: MovieDetailsPage } =
            await import('@features/movie-details/MovieDetailsPage');
          return { Component: MovieDetailsPage };
        },
      },
      {
        path: 'movie-details/:id',
        async lazy() {
          const { default: MovieDetailsPage } =
            await import('@features/movie-details/MovieDetailsPage');
          return { Component: MovieDetailsPage };
        },
      },
      {
        path: 'lich-chieu',
        async lazy() {
          const { default: MovieDetailsPage } =
            await import('@features/movie-details/MovieDetailsPage');
          return { Component: MovieDetailsPage };
        },
      },
      {
        path: 'lich-chieu/:id',
        async lazy() {
          const { default: MovieDetailsPage } =
            await import('@features/movie-details/MovieDetailsPage');
          return { Component: MovieDetailsPage };
        },
      },
      {
        path: 'phim/:id',
        async lazy() {
          const { default: MovieDetailsPage } =
            await import('@features/movie-details/MovieDetailsPage');
          return { Component: MovieDetailsPage };
        },
      },
      {
        path: 'dat-ve',
        async lazy() {
          const { default: MovieDetailsPage } =
            await import('@features/movie-details/MovieDetailsPage');
          return { Component: MovieDetailsPage };
        },
      },
      {
        path: 'dat-ve/:id',
        async lazy() {
          const { default: MovieDetailsPage } =
            await import('@features/movie-details/MovieDetailsPage');
          return { Component: MovieDetailsPage };
        },
      },
      {
        path: 'mua-ve',
        async lazy() {
          const { default: MovieDetailsPage } =
            await import('@features/movie-details/MovieDetailsPage');
          return { Component: MovieDetailsPage };
        },
      },
      {
        path: 'mua-ve/:id',
        async lazy() {
          const { default: MovieDetailsPage } =
            await import('@features/movie-details/MovieDetailsPage');
          return { Component: MovieDetailsPage };
        },
      },
      {
        path: 'uu-dai',
        element: <Home />,
      },
      {
        path: 'rap-chieu',
        async lazy() {
          const { default: MovieDetailsPage } =
            await import('@features/movie-details/MovieDetailsPage');
          return { Component: MovieDetailsPage };
        },
      },
      {
        path: 'booking/seat-selection',
        async lazy() {
          const { default: SeatSelectionPage } =
            await import('@features/booking/seat-selection/SeatSelectionPage');
          return { Component: SeatSelectionPage };
        },
      },
      {
        path: 'booking/snacks-services',
        async lazy() {
          const { default: SnacksServicesPage } =
            await import('@features/booking/snacks-services/SnacksServicesPage');
          return { Component: SnacksServicesPage };
        },
      },
      {
        path: 'booking/checkout',
        async lazy() {
          const { default: CheckoutPage } =
            await import('@features/booking/checkout/CheckoutPage');
          return { Component: CheckoutPage };
        },
      },
      {
        path: 've-cua-toi',
        async lazy() {
          const { default: MyTicketsPage } =
            await import('@features/booking/my-tickets/MyTicketsPage');
          return { Component: MyTicketsPage };
        },
      },
      {
        path: 'profile/vip-elite',
        async lazy() {
          const { default: VipElitePage } =
            await import('@features/profile/vip-elite/VipElitePage');
          return { Component: VipElitePage };
        },
      },
      {
        path: 'ho-so-vip',
        async lazy() {
          const { default: VipElitePage } =
            await import('@features/profile/vip-elite/VipElitePage');
          return { Component: VipElitePage };
        },
      },
      {
        path: 'profile',
        async lazy() {
          const { default: VipElitePage } =
            await import('@features/profile/vip-elite/VipElitePage');
          return { Component: VipElitePage };
        },
      },
      {
        path: 'profile/personal-info',
        async lazy() {
          const { default: PersonalInfoPage } =
            await import('@features/profile/personal-info/PersonalInfoPage');
          return { Component: PersonalInfoPage };
        },
      },
      {
        path: 'profile/security',
        async lazy() {
          const { default: SecurityPage } =
            await import('@features/profile/security/SecurityPage');
          return { Component: SecurityPage };
        },
      },
      {
        path: 'profile/payment-methods',
        async lazy() {
          const { default: PaymentMethodsPage } =
            await import('@features/profile/payment-methods/PaymentMethodsPage');
          return { Component: PaymentMethodsPage };
        },
      },
      {
        path: 'profile/cinematic-taste',
        async lazy() {
          const { default: CinematicTastePage } =
            await import('@features/profile/cinematic-taste/CinematicTastePage');
          return { Component: CinematicTastePage };
        },
      },
      {
        path: 'profile/notification-settings',
        async lazy() {
          const { default: NotificationSettingsPage } =
            await import('@features/profile/notification-settings/NotificationSettingsPage');
          return { Component: NotificationSettingsPage };
        },
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    element: <GuestGuard />,
    children: [{ path: '/login', element: <LoginPage /> }],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);
