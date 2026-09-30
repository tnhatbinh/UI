import { router } from "@config/app-routes";
import { getZoomRatio } from "@shared/utils/getZoomRatio";
import { useLayoutEffect } from "react";
import { RouterProvider } from "react-router-dom";

function App() {
  useLayoutEffect(() => {
    const handleResize = () => {
      const viewportWidth =
        window.innerWidth || window.document.documentElement.clientWidth;
      const isNarrow = viewportWidth < 1200;

      if (!isNarrow) {
        const zoom = getZoomRatio();
        document.documentElement.style.setProperty("--zoom", zoom.toString());
      } else {
        document.documentElement.style.setProperty("--zoom", "1");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <AppContextProvider>
    <RouterProvider router={router} />
    // </AppContextProvider>
  );
}

export default App;
