import style from "./innerContainer.module.css";
export default function innerContainer({ children }) {
  return <div className={style.innerContainer}>{children}</div>;
}
