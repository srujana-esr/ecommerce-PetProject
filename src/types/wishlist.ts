type Comment = {
	comment: String
	createdAt: String
	id: String
	likedBy: String[]
	likes: Number
	user: {}
}

type WishlistUser = {
	id: string
	canEdit: boolean
	name: string
}

export type Wishlist = {
	comments: Comment[]
	count: number
	createdAt: string
	id: string
	owner: string
	products: any[]
	title: string
	users: WishlistUser[]
}

export type WishlistPayload = {
	id?: string
	data: Wishlist[]
	wishlist?: Wishlist
}

export type WishlistProductPayload = {
	id: string;
	product: {
		price: string;
		productId: number;
	}
}