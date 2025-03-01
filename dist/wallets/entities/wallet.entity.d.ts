import { HydratedDocument } from 'mongoose';
export type WalletDocument = HydratedDocument<Wallet>;
export declare class Wallet {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const WalletSchema: import("mongoose").Schema<Wallet, import("mongoose").Model<Wallet, any, any, any, import("mongoose").Document<unknown, any, Wallet> & Wallet & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Wallet, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Wallet>> & import("mongoose").FlatRecord<Wallet> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
