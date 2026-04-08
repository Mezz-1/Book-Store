import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from "../auth/KeycloakProvider";

export default function MainLayout() {
  const { authenticated, user, login, logout, register } = useAuth();

  return (
    <>
      <Header 
        authenticated={authenticated}
        user={user}
        login={login}
        logout={logout}
        register={register}
      />
      <main style={{ minHeight: '60vh', padding: '20px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}