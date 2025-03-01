import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
export declare class AssetsController {
    private readonly assetsService;
    constructor(assetsService: AssetsService);
    create(createAssetDto: CreateAssetDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/asset.entity").Asset> & import("./entities/asset.entity").Asset & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./entities/asset.entity").Asset> & import("./entities/asset.entity").Asset & Required<{
        _id: string;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./entities/asset.entity").Asset> & import("./entities/asset.entity").Asset & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, import("./entities/asset.entity").Asset, "find", {}>;
    findOne(symbol: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./entities/asset.entity").Asset> & import("./entities/asset.entity").Asset & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./entities/asset.entity").Asset> & import("./entities/asset.entity").Asset & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, import("./entities/asset.entity").Asset, "findOne", {}>;
    update(id: string, updateAssetDto: UpdateAssetDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, import("./entities/asset.entity").Asset> & import("./entities/asset.entity").Asset & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, import("./entities/asset.entity").Asset, "updateOne", {}>;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, import("./entities/asset.entity").Asset> & import("./entities/asset.entity").Asset & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, import("./entities/asset.entity").Asset, "deleteOne", {}>;
}
