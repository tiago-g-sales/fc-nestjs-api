"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const order_entity_1 = require("./entities/order.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OrdersService = class OrdersService {
    orderSchema;
    constructor(orderSchema) {
        this.orderSchema = orderSchema;
    }
    create(createOrderDto) {
        return this.orderSchema.create({
            wallet: createOrderDto.walletId,
            asset: createOrderDto.assetId,
            shares: createOrderDto.shares,
            partial: createOrderDto.shares,
            price: createOrderDto.price,
            type: createOrderDto.type,
            status: order_entity_1.OrderStatus.PENDING,
        });
    }
    findAll(filter) {
        return this.orderSchema.find({ wallet: filter.walletId });
    }
    findOne(id) {
        return this.orderSchema.findById(id);
    }
    update(id, updateOrderDto) {
        return this.orderSchema.updateOne({ _id: id }, updateOrderDto);
    }
    remove(id) {
        return this.orderSchema.deleteOne({ _id: id });
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_entity_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrdersService);
//# sourceMappingURL=orders.service.js.map