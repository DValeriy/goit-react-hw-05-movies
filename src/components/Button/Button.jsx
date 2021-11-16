import { useHistory } from "react-router";
import s from "./Button.module.css";
const Button = () => {
  const { location, push } = useHistory();
  const onClick = () => {
    const prevLocation = location.state?.from || "/";
    push(prevLocation);
  };
  return (
    <button className={s.button} onClick={onClick}>
      Go Back
    </button>
  );
};

export default Button;
