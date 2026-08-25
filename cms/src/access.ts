import type { Access } from "payload";

export type CmsRole = "owner" | "publisher" | "editor" | "viewer";

type CmsUser = {
  role?: CmsRole;
};

const roleOf = (user: unknown) => (user as CmsUser | undefined)?.role;

export const hasRole = (user: unknown, roles: CmsRole[]) => {
  const role = roleOf(user);
  return role ? roles.includes(role) : false;
};

export const staffOnly: Access = ({ req }) => Boolean(req.user);

/** Public media URLs must resolve for the public Vite site. Upload and change
 * rights remain staff-only; this does not expose CMS administration. */
export const anyone: Access = () => true;

export const ownerOnly: Access = ({ req }) => hasRole(req.user, ["owner"]);

export const contentEditor: Access = ({ req }) =>
  hasRole(req.user, ["owner", "publisher", "editor"]);

export const contentPublisher: Access = ({ req }) =>
  hasRole(req.user, ["owner", "publisher"]);

/** Editors may create new drafts but can never request a live record directly. */
export const contentCreate: Access = ({ req, data }) => {
  if (hasRole(req.user, ["owner", "publisher"])) return true;
  return hasRole(req.user, ["editor"]) && data?._status === "draft";
};

/**
 * Editors may iterate on documents that are already drafts, while Owners and
 * Publishers manage live content. This follows Payload's draft-aware access
 * pattern and keeps an editor from changing a published document in place.
 */
export const contentUpdate: Access = ({ req }) => {
  if (hasRole(req.user, ["owner", "publisher"])) return true;
  if (hasRole(req.user, ["editor"])) {
    return {
      _status: {
        equals: "draft",
      },
    };
  }
  return false;
};

/**
 * The public website receives only published material. Staff retain access to
 * drafts inside the CMS, where Payload's versions workflow is enabled.
 */
export const publishedOrStaff: Access = ({ req }) => {
  if (req.user) return true;

  return {
    _status: {
      equals: "published",
    },
  };
};
