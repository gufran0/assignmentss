const Input = (props) => {
  return (
    <input
    required
      className="myinput"
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      name = {props.name}
    />
  );
};

export default Input;
