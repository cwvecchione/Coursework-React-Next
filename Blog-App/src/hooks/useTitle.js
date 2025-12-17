import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - CW Blog`;
    }, [title]);

  return null;
}