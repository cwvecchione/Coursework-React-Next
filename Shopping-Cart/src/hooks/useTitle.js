import { useEffect } from "react";

export const useTitle = (title) => {

  useEffect(() => {
    document.title = `${title} | CW Shopping Cart`
  }, [title]);

  return null;
}
