import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order } from "./entities/order.entity";
import { Model } from "mongoose";
export declare class OrdersService {
    private orderSchema;
    constructor(orderSchema: Model<Order>);
    create(createOrderDto: CreateOrderDto): Promise<import("mongoose").Document<unknown, {}, Order> & Order & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    findAll(filter: {
        walletId: string;
    }): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Order> & Order & Required<{
        _id: string;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, Order> & Order & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Order, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Order> & Order & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Order> & Order & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Order, "findOne", {}>;
    update(id: string, updateOrderDto: UpdateOrderDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, Order> & Order & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Order, "updateOne", {}>;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, Order> & Order & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Order, "deleteOne", {}>;
}
