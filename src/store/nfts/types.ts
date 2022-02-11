export interface INFTAssets  {
	[owner: string]: IOpenSeaNFT[];
}

export interface INFTActionPayload {
	owner: string;
	data: IOpenSeaNFT[];
};

export interface IOpenSeaNFT {
	id: number;
	name: string;
	description: string;
	permalink: string;
	token_id: string;
	num_sales: number; 
	background_color: string | null;
	image_url: string;
	animation_original_url: string | null;
	animation_url: string | null;
	asset_contract: IOpenSeaAssetContract;
	collection: IOpenSeaCollection;
	creator: IOpenSeaCreator;
	decimals: number| null;
	external_link: string | null;
	image_original_url: string | null;
	image_preview_url: string | null;
	image_thumbnail_url: string | null;
	is_presale: boolean;
	last_sale: IOpenSeaSale | null;
	listing_date: string | null;
	owner: IOpenSeaOwner;
	sell_orders: any[];
	token_metadata: Record<string, any>;
	top_bid: any;
	traits: Record<string, any>[];
	transfer_fee: number | null;
	transfer_fee_payment_token: null;
}

interface IOpenSeaAssetContract {
	address: string;
	asset_contract_type: string;
	buyer_fee_basis_points: number;
	created_date: string;
	default_to_fiat: boolean;
	description: string | null;
	dev_buyer_fee_basis_points: number;
	dev_seller_fee_basis_points: number;
	external_link: string | null;
	image_url: string | null;
	name: string;
	nft_version: string | null;
	only_proxied_transfers: boolean;
	opensea_buyer_fee_basis_points: number;
	opensea_seller_fee_basis_points: number;
	opensea_version: string;
	owner: number;
	payout_address: string | null;
	schema_name: string;
	seller_fee_basis_points: number;
	symbol: string;
	total_supply: null | number;
}

interface IOpenSeaCollection {
	[id: string]: any
}

interface IOpenSeaCreator {
	user: {
			username: string;
	} | null;
	profile_img_url: string;
	address: string;
	config: string;
};

interface IOpenSeaSale {
	[id: string]: any
}

interface IOpenSeaOwner {
	user: {
			username: string;
	};
	profile_img_url: string;
	address: string;
	config: string;
};

