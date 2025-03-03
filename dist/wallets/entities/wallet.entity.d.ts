import mongoose, { HydratedDocument } from "mongoose";
import { WalletAssetDocument } from "./wallet-asset.entity";
export type WalletDocument = HydratedDocument<Wallet>;
export declare class Wallet {
    _id: string;
    assets: WalletAssetDocument[] | string[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const WalletSchema: mongoose.Schema<Wallet, mongoose.Model<Wallet, any, any, any, mongoose.Document<unknown, any, Wallet> & Wallet & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Wallet, mongoose.Document<unknown, {}, mongoose.FlatRecord<Wallet>> & mongoose.FlatRecord<Wallet> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
