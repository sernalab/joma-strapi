import { useEffect } from "react";

function Tabs({ menuItems }) {
  useEffect(() => {
    if (
      window.HSStaticMethods &&
      typeof window.HSStaticMethods.autoInit === "function"
    ) {
      window.HSStaticMethods.autoInit();
    }
    const tabs = document.querySelectorAll(".hs-tab-active");
    tabs.forEach((tab) => {
      tab.classList.remove("hs-tab-active");
    });
  }, [location.pathname]);
  return (
    <div className="my-7">
      <nav
        className="relative z-0 flex border rounded-xl overflow-hidden"
        aria-label="Tabs"
        role="tablist"
      >
        <button
          type="button"
          className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active"
          id="bar-with-underline-item-1"
          data-hs-tab="#bar-with-underline-1"
          aria-controls="bar-with-underline-1"
          role="tab"
        >
          Kits distribuciones
        </button>
        <button
          type="button"
          className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
          id="bar-with-underline-item-2"
          data-hs-tab="#bar-with-underline-2"
          aria-controls="bar-with-underline-2"
          role="tab"
        >
          Mecánica
        </button>
        <button
          type="button"
          className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
          id="bar-with-underline-item-3"
          data-hs-tab="#bar-with-underline-3"
          aria-controls="bar-with-underline-3"
          role="tab"
        >
          Diagnosis
        </button>
        <button
          type="button"
          className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
          id="bar-with-underline-item-4"
          data-hs-tab="#bar-with-underline-4"
          aria-controls="bar-with-underline-4"
          role="tab"
        >
          Electricidad
        </button>
        <button
          type="button"
          className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
          id="bar-with-underline-item-5"
          data-hs-tab="#bar-with-underline-5"
          aria-controls="bar-with-underline-5"
          role="tab"
        >
          Chapa y pintura
        </button>
      </nav>

      <div className="mt-3">
        <div
          id="bar-with-underline-1"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-1"
        >
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">first</em>{" "}
            item's tab body.
          </p>
        </div>
        <div
          id="bar-with-underline-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-2"
        >
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">second</em>{" "}
            item's tab body.
          </p>
        </div>
        <div
          id="bar-with-underline-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-3"
        >
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">third</em>{" "}
            item's tab body.
          </p>
        </div>
        <div
          id="bar-with-underline-4"
          className="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-4"
        >
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">4</em>{" "}
            item's tab body.
          </p>
        </div>
        <div
          id="bar-with-underline-5"
          className="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-5"
        >
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">5</em>{" "}
            item's tab body.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
