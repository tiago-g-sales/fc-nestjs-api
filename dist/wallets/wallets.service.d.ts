import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';
import { Model } from 'mongoose';
import { WalletAsset } from './entities/wallet-asset.entity';
export declare class WalletsService {
    private walletSchema;
    private walletAssetSchema;
    constructor(walletSchema: Model<Wallet>, walletAssetSchema: Model<WalletAsset>);
    create(createWalletDto: CreateWalletDto): Promise<import("mongoose").Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Wallet, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Wallet, "findOne", {}>;
    update(id: string, updateWalletDto: UpdateWalletDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Wallet, "updateOne", {}>;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Wallet, "deleteOne", {}>;
    createWalletAsset(data: {
        walletId: string;
        assetId: string;
        shares: number;
    }): Promise<import("mongoose").Document<unknown, {}, WalletAsset> & WalletAsset & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
}
