"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletsModule = void 0;
const common_1 = require("@nestjs/common");
const wallets_controller_1 = require("./wallets.controller");
const wallet_entity_1 = require("./entities/wallet.entity");
const wallet_asset_entity_1 = require("./entities/wallet-asset.entity");
const mongoose_1 = require("@nestjs/mongoose");
const wallets_service_1 = require("./wallets.service");
let WalletsModule = class WalletsModule {
};
exports.WalletsModule = WalletsModule;
exports.WalletsModule = WalletsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: wallet_entity_1.Wallet.name,
                    schema: wallet_entity_1.WalletSchema,
                },
                {
                    name: wallet_asset_entity_1.WalletAsset.name,
                    schema: wallet_asset_entity_1.WalletAssetSchema,
                },
            ]),
        ],
        controllers: [wallets_controller_1.WalletsController],
        providers: [wallets_service_1.WalletsService],
    })
], WalletsModule);
//# sourceMappingURL=wallets.module.js.map