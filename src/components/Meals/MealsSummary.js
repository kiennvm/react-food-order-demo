import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Tận tâm giao hàng</h2>
      <p>
        Hãy lựa chọn món ăn ưa thích của bạn
      </p>
      <p>
        Các món ăn của chúng tôi đều là đặc sản của Việt Nam
      </p>
    </section>
  );
};

export default MealsSummary;
