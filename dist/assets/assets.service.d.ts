import { CreateAssetDto } from "./dto/create-asset.dto";
import { UpdateAssetDto } from "./dto/update-asset.dto";
import { Asset } from "./entities/asset.entity";
import { Model } from "mongoose";
export declare class AssetsService {
    private assetSchema;
    constructor(assetSchema: Model<Asset>);
    create(createAssetDto: CreateAssetDto): Promise<import("mongoose").Document<unknown, {}, Asset> & Asset & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Asset> & Asset & Required<{
        _id: string;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, Asset> & Asset & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Asset, "find", {}>;
    findOne(symbol: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Asset> & Asset & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Asset> & Asset & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Asset, "findOne", {}>;
    update(id: string, updateAssetDto: UpdateAssetDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, Asset> & Asset & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Asset, "updateOne", {}>;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, Asset> & Asset & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, Asset, "deleteOne", {}>;
}
