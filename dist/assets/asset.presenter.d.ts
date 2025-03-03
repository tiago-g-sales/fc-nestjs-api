import { Asset } from "./entities/asset.entity";
export declare class AssetPresenter {
    private asset;
    constructor(asset: Asset);
    toJSON(): {
        _id: string;
        name: string;
        symbol: string;
        price: number;
        image_url: string;
    };
}
