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
exports.WalletAssetSchema = exports.WalletAsset = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const crypto_1 = __importDefault(require("crypto"));
const mongoose_2 = __importDefault(require("mongoose"));
const asset_entity_1 = require("../../assets/entities/asset.entity");
const wallet_entity_1 = require("./wallet.entity");
let WalletAsset = class WalletAsset {
    _id;
    shares;
    wallet;
    asset;
    createdAt;
    updatedAt;
};
exports.WalletAsset = WalletAsset;
__decorate([
    (0, mongoose_1.Prop)({ default: () => crypto_1.default.randomUUID() }),
    __metadata("design:type", String)
], WalletAsset.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.Int32 }),
    __metadata("design:type", Number)
], WalletAsset.prototype, "shares", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, ref: wallet_entity_1.Wallet.name }),
    __metadata("design:type", Object)
], WalletAsset.prototype, "wallet", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, ref: asset_entity_1.Asset.name }),
    __metadata("design:type", Object)
], WalletAsset.prototype, "asset", void 0);
exports.WalletAsset = WalletAsset = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], WalletAsset);
exports.WalletAssetSchema = mongoose_1.SchemaFactory.createForClass(WalletAsset);
exports.WalletAssetSchema.index({ wallet: 1, asset: 1 }, { unique: true });
//# sourceMappingURL=wallet-asset.entity.js.map