export const selectLoggedInUser = (state) => state?.auth;
export const selectLoggedInUsersToken = (state) => state?.auth?.token;
export const selectLoggedInUserName = (state) => state?.auth?.name;
export const selectIsDispatchedFromRouteGuard = (state) =>
	state?.auth?.isDispatchedFromRouteGuard;
export const selectIsUserDataLoading = (state) =>
	state?.auth?.isUserDataLoading;
export const selectLoggedInUserId = (state) => state?.auth?.id;