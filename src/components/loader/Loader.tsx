import style from "components/loader/style.module.css";

const Loader = () => (
  <div className={style.loaderOuterContainer}>
    <div>
      <div className={style.loader} />
    </div>
  </div>
);

export default Loader;
