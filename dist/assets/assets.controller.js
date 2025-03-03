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
exports.AssetsController = void 0;
const common_1 = require("@nestjs/common");
const assets_service_1 = require("./assets.service");
const create_asset_dto_1 = require("./dto/create-asset.dto");
const update_asset_dto_1 = require("./dto/update-asset.dto");
const asset_presenter_1 = require("./asset.presenter");
let AssetsController = class AssetsController {
    assetsService;
    constructor(assetsService) {
        this.assetsService = assetsService;
    }
    async create(createAssetDto) {
        const asset = await this.assetsService.create(createAssetDto);
        return new asset_presenter_1.AssetPresenter(asset);
    }
    async findAll() {
        const assets = await this.assetsService.findAll();
        return assets.map((asset) => new asset_presenter_1.AssetPresenter(asset));
    }
    async findOne(symbol) {
        const asset = await this.assetsService.findOne(symbol);
        return new asset_presenter_1.AssetPresenter(asset);
    }
    update(id, updateAssetDto) {
        return this.assetsService.update(id, updateAssetDto);
    }
    remove(id) {
        return this.assetsService.remove(id);
    }
};
exports.AssetsController = AssetsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_asset_dto_1.CreateAssetDto]),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":symbol"),
    __param(0, (0, common_1.Param)("symbol")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_asset_dto_1.UpdateAssetDto]),
    __metadata("design:returntype", void 0)
], AssetsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AssetsController.prototype, "remove", null);
exports.AssetsController = AssetsController = __decorate([
    (0, common_1.Controller)("assets"),
    __metadata("design:paramtypes", [assets_service_1.AssetsService])
], AssetsController);
//# sourceMappingURL=assets.controller.js.map