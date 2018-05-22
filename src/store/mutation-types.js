import _ from 'lodash'

const createAsyncMutation = (type) => ({
	SUCCESS: `${type}_SUCCESS`,
	FAILURE: `${type}_FAILURE`,
	PENDING: `${type}_PENDING`,
	loadingKey: `${_.camelCase(type)}Pending`,
	statusCode: `${_.camelCase(type)}StatusCode`,
	stateKey: `${_.camelCase(type)}Data`
})

export const SIGN_IN_USER = createAsyncMutation('SIGN_IN_USER')
export const SIGN_UP_USER = createAsyncMutation('SIGN_UP_USER')
export const GET_HARDWARE = createAsyncMutation('GET_HARDWARE')