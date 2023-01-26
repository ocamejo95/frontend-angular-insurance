import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/domain/dashboard',
    home: true,
  },
  {
    title: 'COMPANYS',
    group: true,
  },
  {
    title: 'Company',
    icon: 'layout-outline',
    children: [
      {
        title: 'Clients Only in Sherpa',
        link: '/pages/company/indicador-1',
      },
      {
        title: 'Clients Only CS',
        link: '/pages/company/indicador-2',
      },
      {
        title: 'Clients Only in Sherpa',
        link: '/pages/company/indicador-3',
      },
      {
        title: 'InformClientsCSgood',
        link: '/pages/company/indicador-4',
      },
      {
        title: 'FindElementsRepeatDate',
        link: '/pages/company/indicador-5',
      },
    ],
  },
  {
    title: 'Security',
    group: true,
  },
  {
    title: 'Admin',
    icon: 'layout-outline',
    children: [
      {
        title: 'Manage Users',
        link: '/pages/seguridad/manage-users',
      },
      {
        title: 'Manage Roles',
        link: '/pages/seguridad/manage-roles',
      },
    ],
  },
];
