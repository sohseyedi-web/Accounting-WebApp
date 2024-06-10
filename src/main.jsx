import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store/store.js";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
