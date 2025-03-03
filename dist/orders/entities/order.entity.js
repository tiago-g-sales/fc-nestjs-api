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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = exports.Order = exports.OrderStatus = exports.OrderType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const crypto_1 = __importDefault(require("crypto"));
const mongoose_2 = __importDefault(require("mongoose"));
const asset_entity_1 = require("../../assets/entities/asset.entity");
const wallet_entity_1 = require("../../wallets/entities/wallet.entity");
var OrderType;
(function (OrderType) {
    OrderType["BUY"] = "BUY";
    OrderType["SELL"] = "SELL";
})(OrderType || (exports.OrderType = OrderType = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["OPEN"] = "OPEN";
    OrderStatus["CLOSED"] = "CLOSED";
    OrderStatus["FAILED"] = "FAILED";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
let Order = class Order {
    _id;
    shares;
    partial;
    price;
    wallet;
    asset;
    type;
    status;
    createdAt;
    updatedAt;
};
exports.Order = Order;
__decorate([
    (0, mongoose_1.Prop)({ default: () => crypto_1.default.randomUUID() }),
    __metadata("design:type", String)
], Order.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.Int32 }),
    __metadata("design:type", Number)
], Order.prototype, "shares", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.Int32 }),
    __metadata("design:type", Number)
], Order.prototype, "partial", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Order.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, ref: wallet_entity_1.Wallet.name }),
    __metadata("design:type", Object)
], Order.prototype, "wallet", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, ref: asset_entity_1.Asset.name }),
    __metadata("design:type", Object)
], Order.prototype, "asset", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
exports.Order = Order = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Order);
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.entity.js.map