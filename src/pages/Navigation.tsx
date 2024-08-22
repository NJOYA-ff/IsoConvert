import { useHistory } from "react-router-dom";

export const navigateToEditor = () => {
  const history = useHistory();
  history.push("/Editor");
};

export const navigateToConsole = () => {
  const history = useHistory();
  history.push("/Console");
};

export const navigateToDocument = () => {
  const history = useHistory();
  history.push("/Document");
};