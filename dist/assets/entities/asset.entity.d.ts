import { HydratedDocument } from "mongoose";
export type AssetDocument = HydratedDocument<Asset>;
export declare class Asset {
    _id: string;
    name: string;
    symbol: string;
    image: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const AssetSchema: import("mongoose").Schema<Asset, import("mongoose").Model<Asset, any, any, any, import("mongoose").Document<unknown, any, Asset> & Asset & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Asset, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Asset>> & import("mongoose").FlatRecord<Asset> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
