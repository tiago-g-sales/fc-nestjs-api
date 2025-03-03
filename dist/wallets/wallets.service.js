"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_2 = require("@nestjs/mongoose");
const wallet_asset_entity_1 = require("./entities/wallet-asset.entity");
let WalletsService = class WalletsService {
    walletSchema;
    walletAssetSchema;
    connection;
    constructor(walletSchema, walletAssetSchema, connection) {
        this.walletSchema = walletSchema;
        this.walletAssetSchema = walletAssetSchema;
        this.connection = connection;
    }
    create(createWalletDto) {
        return this.walletSchema.create(createWalletDto);
    }
    findAll() {
        return this.walletSchema.find();
    }
    findOne(id) {
        return this.walletSchema.findById(id).populate([
            {
                path: "assets",
                populate: ["asset"],
            },
        ]);
    }
    update(id, updateWalletDto) {
        return this.walletSchema.updateOne({ _id: id }, updateWalletDto);
    }
    remove(id) {
        return this.walletSchema.deleteOne({ _id: id });
    }
    async createWalletAsset(data) {
        const session = await this.connection.startSession();
        session.startTransaction();
        try {
            const docs = await this.walletAssetSchema.create([
                {
                    wallet: data.walletId,
                    asset: data.assetId,
                    shares: data.shares,
                },
            ], { session });
            const walletAsset = docs[0];
            await this.walletSchema.updateOne({ _id: data.walletId }, {
                $push: { assets: walletAsset._id },
            }, {
                session,
            });
            await session.commitTransaction();
            return walletAsset;
        }
        catch (e) {
            console.error(e);
            await session.abortTransaction();
            throw e;
        }
        finally {
            await session.endSession();
        }
    }
};
exports.WalletsService = WalletsService;
exports.WalletsService = WalletsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(wallet_entity_1.Wallet.name)),
    __param(1, (0, mongoose_2.InjectModel)(wallet_asset_entity_1.WalletAsset.name)),
    __param(2, (0, mongoose_2.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model, mongoose_1.default.Connection])
], WalletsService);
//# sourceMappingURL=wallets.service.js.map