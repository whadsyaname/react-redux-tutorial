import React from 'react';
import {connect} from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
import {bindActionCreators} from "redux";

const CounterContainer = ({ number, increase, decrease }) => {
	return (
		<Counter number={number} onIncrease={increase} onDecrease={decrease} />
	);
};

export default connect(
	state => ({
		number: state.counter.number
	}),
	{
		increase,
		decrease
	}
)(CounterContainer);


/*
mapDispatchToProps함수의 변화과정

1.
	dispatch => ({
		increase: () => {
			dispatch(increase());
		},
		decrease: () => {
			dispatch(decrease());
		}

2.
	dispatch =>
		bindActionCreators(
			{
				increase,
				decrease
			},
			dispatch
		)

3. 이렇게 객체만 주어도 connect에서 내부적으로 bindActionCreators작업을 해준다고 한다
		increase,
		decrease

* */