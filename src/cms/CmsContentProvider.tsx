import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { fallbackCmsContent, getCmsContent, type CmsContent } from "../data/cmsContent";

const CmsContentContext = createContext<CmsContent>(fallbackCmsContent);

export function CmsContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<CmsContent>(fallbackCmsContent);

  useEffect(() => {
    let active = true;

    void getCmsContent().then((nextContent) => {
      if (active) setContent(nextContent);
    });

    return () => {
      active = false;
    };
  }, []);

  return <CmsContentContext.Provider value={content}>{children}</CmsContentContext.Provider>;
}

export function useCmsContent() {
  return useContext(CmsContentContext);
}
