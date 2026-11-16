export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
  PROJECTS: '/projects',
  PROJECT_DETAIL:(projectId:string)=>`/projects/${projectId}`,
  CLIENTS: '/clients',
  INVOICES: '/invoices',
   SETTING:'/setting',
  SUPPORT:'/support',
  
} as const 