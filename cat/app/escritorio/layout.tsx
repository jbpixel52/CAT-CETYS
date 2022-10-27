import AuthContext from "./AuthContext";
import Navigation from "./Navigation";

export interface AccountLayoutProps {
  children: React.ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
      <AuthContext>
          <Navigation/>
      {children}
    </AuthContext>
  );
}