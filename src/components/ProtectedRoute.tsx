import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsValid(false);
      return;
    }

    fetch("http://localhost:3000/api/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          localStorage.removeItem("token");
          setIsValid(false);
          return;
        }

        setIsValid(true);
      })
      .catch(() => {
        setIsValid(false);
      });
  }, []);

  if (isValid === null) {
    return null;
  }

  if (!isValid) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;