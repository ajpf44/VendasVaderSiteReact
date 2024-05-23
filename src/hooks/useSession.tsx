import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";

const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession deve ser usado dentro de um SessionProvider");
  }
  return context;
};

export default useSession;
