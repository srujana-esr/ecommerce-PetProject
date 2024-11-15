export const selectContactDetails = ({ auth }) => ({
	name: auth.name,
	address1: auth.address1,
	address2: auth.address2,
	city: auth.city,
	country: auth.country,
	district: auth.district,
	mobile: `${auth.country_code} ${auth.mobile}`,
	postal_code: auth.postal_code,
	state: auth.state,
});
