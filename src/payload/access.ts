import type { Access, AccessArgs } from 'payload';

const hasRole = (roles: string[] | undefined, role: string) => roles?.includes(role) ?? false;

export const isAuthenticated: Access = ({ req }) => Boolean(req.user);

export const isAdmin: Access = ({ req }) => hasRole(req.user?.roles, 'admin');

export const isAdminOrEditor: Access = ({ req }) =>
  hasRole(req.user?.roles, 'admin') || hasRole(req.user?.roles, 'editor');

export const isAdminOrSelf: Access = ({ req, id }: AccessArgs) => {
  if (hasRole(req.user?.roles, 'admin')) return true;
  if (!req.user) return false;
  return req.user.id === id;
};
