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
exports.AssetsService = void 0;
const common_1 = require("@nestjs/common");
const asset_entity_1 = require("./entities/asset.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AssetsService = class AssetsService {
    assetSchema;
    constructor(assetSchema) {
        this.assetSchema = assetSchema;
    }
    create(createAssetDto) {
        return this.assetSchema.create(createAssetDto);
    }
    findAll() {
        return this.assetSchema.find();
    }
    findOne(symbol) {
        return this.assetSchema.findOne({ symbol });
    }
    update(id, updateAssetDto) {
        return this.assetSchema.updateOne({ _id: id }, updateAssetDto);
    }
    remove(id) {
        return this.assetSchema.deleteOne({ _id: id });
    }
};
exports.AssetsService = AssetsService;
exports.AssetsService = AssetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(asset_entity_1.Asset.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AssetsService);
//# sourceMappingURL=assets.service.js.map