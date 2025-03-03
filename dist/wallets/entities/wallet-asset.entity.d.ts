import mongoose, { HydratedDocument } from "mongoose";
import { AssetDocument } from "src/assets/entities/asset.entity";
import { WalletDocument } from "./wallet.entity";
export type WalletAssetDocument = HydratedDocument<WalletAsset>;
export declare class WalletAsset {
    _id: string;
    shares: number;
    wallet: WalletDocument | string;
    asset: AssetDocument | string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const WalletAssetSchema: mongoose.Schema<WalletAsset, mongoose.Model<WalletAsset, any, any, any, mongoose.Document<unknown, any, WalletAsset> & WalletAsset & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, WalletAsset, mongoose.Document<unknown, {}, mongoose.FlatRecord<WalletAsset>> & mongoose.FlatRecord<WalletAsset> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
