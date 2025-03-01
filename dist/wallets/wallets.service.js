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
exports.WalletsService = void 0;
const common_1 = require("@nestjs/common");
const wallet_entity_1 = require("./entities/wallet.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const wallet_asset_entity_1 = require("./entities/wallet-asset.entity");
let WalletsService = class WalletsService {
    walletSchema;
    walletAssetSchema;
    constructor(walletSchema, walletAssetSchema) {
        this.walletSchema = walletSchema;
        this.walletAssetSchema = walletAssetSchema;
    }
    create(createWalletDto) {
        return this.walletSchema.create(createWalletDto);
    }
    findAll() {
        return this.walletSchema.find();
    }
    findOne(id) {
        return this.walletSchema.findById(id);
    }
    update(id, updateWalletDto) {
        return this.walletSchema.updateOne({ _id: id }, updateWalletDto);
    }
    remove(id) {
        return this.walletSchema.deleteOne({ _id: id });
    }
    createWalletAsset(data) {
        return this.walletAssetSchema.create({
            wallet: data.walletId,
            asset: data.assetId,
            shares: data.shares,
        });
    }
};
exports.WalletsService = WalletsService;
exports.WalletsService = WalletsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(wallet_entity_1.Wallet.name)),
    __param(1, (0, mongoose_2.InjectModel)(wallet_asset_entity_1.WalletAsset.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], WalletsService);
//# sourceMappingURL=wallets.service.js.map