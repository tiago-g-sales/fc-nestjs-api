"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetPresenter = void 0;
class AssetPresenter {
    asset;
    constructor(asset) {
        this.asset = asset;
    }
    toJSON() {
        return {
            _id: this.asset._id,
            name: this.asset.name,
            symbol: this.asset.symbol,
            price: this.asset.price,
            image_url: `http://localhost:9000/${this.asset.image}`,
        };
    }
}
exports.AssetPresenter = AssetPresenter;
//# sourceMappingURL=asset.presenter.js.map