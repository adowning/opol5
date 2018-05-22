import snipeit from '../../utils/api'

// initial state
// shape: [{ id, quantity }]
const state = {
	added: [],
	checkoutStatus: null
}

// getters
const getters = {
	checkoutStatus: state => state.checkoutStatus,

	cartassets: (state, getters, rootState) => {
		return state.added.map(({ id, quantity }) => {
			const asset = rootState.assets.all.find(asset => asset.id === id)
			return {
				title: asset.title,
				price: asset.price,
				quantity
			}
		})
	},

	cartTotalPrice: (state, getters) => {
		return getters.cartassets.reduce((total, asset) => {
			return total + asset.price * asset.quantity
		}, 0)
	}
}

// actions
const actions = {
	checkout ({ commit, state }, assets) {
		const savedCartItems = [...state.added]
		commit('setCheckoutStatus', null)
		// empty cart
		commit('setCartItems', { items: [] })
		snipeit.buyassets(
			assets,
			() => commit('setCheckoutStatus', 'successful'),
			() => {
				commit('setCheckoutStatus', 'failed')
				// rollback to the cart saved before sending the request
				commit('setCartItems', { items: savedCartItems })
			}
		)
	},

	addassetToCart ({ state, commit }, asset) {
		commit('setCheckoutStatus', null)
		if (asset.inventory > 0) {
			const cartItem = state.added.find(item => item.id === asset.id)
			if (!cartItem) {
				commit('pushassetToCart', { id: asset.id })
			} else {
				commit('incrementItemQuantity', cartItem)
			}
			// remove 1 item from stock
			commit('decrementassetInventory', { id: asset.id })
		}
	}
}

// mutations
const mutations = {
	pushassetToCart (state, { id }) {
		state.added.push({
			id,
			quantity: 1
		})
	},

	incrementItemQuantity (state, { id }) {
		const cartItem = state.added.find(item => item.id === id)
		cartItem.quantity++
	},

	setCartItems (state, { items }) {
		state.added = items
	},

	setCheckoutStatus (state, status) {
		state.checkoutStatus = status
	}
}

const createAssets = () => {
	return{
		modules: {
			state,
			getters,
			actions,
			mutations
		},
	}
}

export default createAssets