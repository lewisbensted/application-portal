import styles from "./Button.module.css";

export const Button = ({ ...buttonProps }) => {
  return <button className={styles.button} 
          onClick= {()=> console.log('hi')}   
          {...buttonProps} />;
};
