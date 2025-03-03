import { CreateWalletDto } from "./dto/create-wallet.dto";
import { UpdateWalletDto } from "./dto/update-wallet.dto";
import { Wallet } from "./entities/wallet.entity";
import mongoose, { Model } from "mongoose";
import { WalletAsset } from "./entities/wallet-asset.entity";
export declare class WalletsService {
    private walletSchema;
    private walletAssetSchema;
    private connection;
    constructor(walletSchema: Model<Wallet>, walletAssetSchema: Model<WalletAsset>, connection: mongoose.Connection);
    create(createWalletDto: CreateWalletDto): Promise<mongoose.Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    findAll(): mongoose.Query<(mongoose.Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    })[], mongoose.Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Wallet, "find", {}>;
    findOne(id: string): mongoose.Query<(mongoose.Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null, mongoose.Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Wallet, "findOne", {}>;
    update(id: string, updateWalletDto: UpdateWalletDto): mongoose.Query<mongoose.UpdateWriteOpResult, mongoose.Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Wallet, "updateOne", {}>;
    remove(id: string): mongoose.Query<mongoose.mongo.DeleteResult, mongoose.Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Wallet, "deleteOne", {}>;
    createWalletAsset(data: {
        walletId: string;
        assetId: string;
        shares: number;
    }): Promise<mongoose.Document<unknown, {}, WalletAsset> & WalletAsset & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
}
