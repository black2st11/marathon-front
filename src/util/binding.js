export const checkBinding = ({
	items,
	props,
	setProps,
	defaultProps = undefined,
}) => {
	let prop = defaultProps ? defaultProps : props;
	items.forEach((item) => {
		item.checkBox.onChange = (e) =>
			setProps({...prop, [e.target.name]: e.target.value});
		item.checkBox.value = props[item.checkBox.name];
	});
};
