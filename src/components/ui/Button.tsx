type ButtonProps = {
  classInfo: string;
  handleClick: any;
  children: string;
};

// example Button props
/*
<Button
  classInfo="border border-solid border-neutral-400 px-4"
  handleClick={() => dispatch(setAvailibility(rental))}
>
  Book
</Button>
*/

const Button = (props: ButtonProps) => {
  const { classInfo, handleClick } = props;

  return (
    <button className={classInfo} onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
