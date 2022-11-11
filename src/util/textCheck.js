export const InputTypeCheck = {
	number: /[^0-9]/g,
	text: /[^\wㄱ-힣]|[\_]|[0-9]/g,
	normal: /[]/g,
	email: /[^\w0-9@.]/g,
};
