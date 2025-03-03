import { Injectable } from "@nestjs/common";
import { CreateWalletDto } from "./dto/create-wallet.dto";
import { UpdateWalletDto } from "./dto/update-wallet.dto";
import { Wallet } from "./entities/wallet.entity";
import mongoose, { Model } from "mongoose";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { WalletAsset } from "./entities/wallet-asset.entity";

@Injectable()
export class WalletsService {
  constructor(
    @InjectModel(Wallet.name) private walletSchema: Model<Wallet>,
    @InjectModel(WalletAsset.name)
    private walletAssetSchema: Model<WalletAsset>,
    @InjectConnection()
    private connection: mongoose.Connection,
  ) {}

  create(createWalletDto: CreateWalletDto) {
    return this.walletSchema.create(createWalletDto);
  }

  findAll() {
    return this.walletSchema.find();
  }

  findOne(id: string) {
    return this.walletSchema.findById(id).populate([
      {
        path: "assets",
        populate: ["asset"],
      },
    ]);
  }

  update(id: string, updateWalletDto: UpdateWalletDto) {
    return this.walletSchema.updateOne({ _id: id }, updateWalletDto);
  }

  remove(id: string) {
    return this.walletSchema.deleteOne({ _id: id });
  }

  async createWalletAsset(data: {
    walletId: string;
    assetId: string;
    shares: number;
  }) {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const docs = await this.walletAssetSchema.create(
        [
          {
            wallet: data.walletId,
            asset: data.assetId,
            shares: data.shares,
          },
        ],
        { session },
      );
      const walletAsset = docs[0];
      await this.walletSchema.updateOne(
        { _id: data.walletId },
        {
          $push: { assets: walletAsset._id },
        },
        {
          session,
        },
      );
      await session.commitTransaction();
      return walletAsset;
    } catch (e) {
      console.error(e);
      await session.abortTransaction();
      throw e;
    } finally {
      await session.endSession();
    }
  }
}
