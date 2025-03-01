import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
export declare class WalletsController {
    private readonly walletsService;
    constructor(walletsService: WalletsService);
    create(createWalletDto: CreateWalletDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/wallet.entity").Wallet> & import("./entities/wallet.entity").Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./entities/wallet.entity").Wallet> & import("./entities/wallet.entity").Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./entities/wallet.entity").Wallet> & import("./entities/wallet.entity").Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, import("./entities/wallet.entity").Wallet, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./entities/wallet.entity").Wallet> & import("./entities/wallet.entity").Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./entities/wallet.entity").Wallet> & import("./entities/wallet.entity").Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, import("./entities/wallet.entity").Wallet, "findOne", {}>;
    update(id: string, updateWalletDto: UpdateWalletDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, import("./entities/wallet.entity").Wallet> & import("./entities/wallet.entity").Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, import("./entities/wallet.entity").Wallet, "updateOne", {}>;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, import("./entities/wallet.entity").Wallet> & import("./entities/wallet.entity").Wallet & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, import("./entities/wallet.entity").Wallet, "deleteOne", {}>;
    createWalletAsset(id: string, body: {
        assetId: string;
        shares: number;
    }): Promise<import("mongoose").Document<unknown, {}, import("./entities/wallet-asset.entity").WalletAsset> & import("./entities/wallet-asset.entity").WalletAsset & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
}
