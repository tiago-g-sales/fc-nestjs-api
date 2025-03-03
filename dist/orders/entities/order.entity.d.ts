import mongoose, { HydratedDocument } from "mongoose";
import { AssetDocument } from "src/assets/entities/asset.entity";
import { WalletDocument } from "src/wallets/entities/wallet.entity";
export type OrderDocument = HydratedDocument<Order>;
export declare enum OrderType {
    BUY = "BUY",
    SELL = "SELL"
}
export declare enum OrderStatus {
    PENDING = "PENDING",
    OPEN = "OPEN",
    CLOSED = "CLOSED",
    FAILED = "FAILED"
}
export declare class Order {
    _id: string;
    shares: number;
    partial: number;
    price: number;
    wallet: WalletDocument | string;
    asset: AssetDocument | string;
    type: OrderType;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
}
export declare const OrderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, mongoose.Document<unknown, any, Order> & Order & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Order, mongoose.Document<unknown, {}, mongoose.FlatRecord<Order>> & mongoose.FlatRecord<Order> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
