import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../redux/action";
const Counter = ({ value, onIncrement, onDecrement, step }) => {
  return (
    <>
      <span>{value}</span>
      <button type="button" onClick={() => onIncrement(step)}>
        +{step}
      </button>
      <button type="button" onClick={() => onDecrement(step)}>
        -{step}
      </button>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (value) => dispatch(increment(value)),
    onDecrement: (value) => dispatch(decrement(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
