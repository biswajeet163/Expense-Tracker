import React from 'react';

const Pperson=(props) => {

	var val=1000;
	return (
	<div>
		<p > {props.name} Hello...........{val}</p>
			<p>{props.children}</p>

	</div>
		)
};


export default Pperson;