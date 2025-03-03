import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/order.entity").Order> & import("./entities/order.entity").Order & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    findAll(walletId: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./entities/order.entity").Order> & import("./entities/order.entity").Order & Required<{
        _id: string;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./entities/order.entity").Order> & import("./entities/order.entity").Order & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, import("./entities/order.entity").Order, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./entities/order.entity").Order> & import("./entities/order.entity").Order & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./entities/order.entity").Order> & import("./entities/order.entity").Order & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, import("./entities/order.entity").Order, "findOne", {}>;
    update(id: string, updateOrderDto: UpdateOrderDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, import("./entities/order.entity").Order> & import("./entities/order.entity").Order & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, import("./entities/order.entity").Order, "updateOne", {}>;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, import("./entities/order.entity").Order> & import("./entities/order.entity").Order & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, import("./entities/order.entity").Order, "deleteOne", {}>;
}
