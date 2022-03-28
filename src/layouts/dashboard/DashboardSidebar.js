import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
// mocks_
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/Logo';
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
//
import Iconify from "../../components/Iconify";
import {t} from "i18next";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

  const sidebarConfig = [
    {
      title: t('home'),
      path: '/dashboard/app',
      icon: getIcon('eva:pie-chart-2-fill')
    },
    // {
    //   title: 'user',
    //   path: '/dashboard/user',
    //   icon: getIcon('eva:people-fill')
    // },
    {
      title: t('category'),
      path: '/dashboard/document',
      icon: getIcon('eva:file-text-fill')
    },
    // {
    //   title: 'login',
    //   path: '/login',
    //   icon: getIcon('eva:lock-fill')
    // },
    // {
    //   title: 'register',
    //   path: '/register',
    //   icon: getIcon('eva:person-add-fill')
    // },
    {
      title: t('more'),
      path: '/dashboard/feedback',
      icon: getIcon('ic:baseline-feedback')
    }
    // {
    //   title: 'フィードバック',
    //   path: '/404',
    //   icon: getIcon('eva:alert-triangle-fill')
    // }
  ];

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' }
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>
      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed'
            }
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
