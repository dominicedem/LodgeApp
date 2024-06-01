import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/Style";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import menuReducer from "./Slices/MenuSlice";
import mapReducer from "./Slices/MapSlice";
import ErrorRoute from "./pages/ErrorRoute";
import Loading from "./ui/Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Profile = lazy(() => import("./pages/Profile"));
const VerifyEmail = lazy(() => import("./features/Authentication/VerifyEmail"));
const SignIn = lazy(() => import("./features/Authentication/SignIn"));
const SignUp = lazy(() => import("./features/Authentication/SignUpForm"));
const Applayout = lazy(() => import("./ui/Applayout"));
const Home = lazy(() => import("./pages/Home"));
const LodgeVideos = lazy(() => import("./pages/LodgeVideos"));
const Review = lazy(() => import("./pages/Review"));
const ProtecteRoute = lazy(() => import("./ui/ProtecteRoute"));

const store = configureStore({
  reducer: {
    menuData: menuReducer,
    mapData: mapReducer,
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GlobalStyle />
          <BrowserRouter>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route
                  element={
                    <ProtecteRoute>
                      <Applayout />
                    </ProtecteRoute>
                  }
                >
                  <Route index element={<Home />} />
                  <Route path="/review" element={<Review />} />
                  <Route path="/lodgevideo" element={<LodgeVideos />} />
                </Route>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/verifyemail" element={<VerifyEmail />} />
                <Route path="*" element={<ErrorRoute />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
