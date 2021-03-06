import ServerDataSource from "./api";
import axios from "axios";
import { Path } from "./path";
export class WhoodidSdk {
  constructor() {
    this.client = axios.create({
      baseURL: Path.OPENSEA,
    });
  }

  getRestApi = async (path, params, headers) => {
    let config = {
      params,
      headers,
    };
    return await this.client.get(path, config);
  };

  getNFTByAddress = async (address) => {
    let param = { owner: address };
    return (await this.getRestApi(Path.OPENSEA_ASSETS, param)).data.assets;
  };

  getOpenSeaCollectionsByAddress = async (address) => {
    let param = { asset_owner: address };
    return (await this.getRestApi(Path.OPENSEA_COLLECTIONS, param)).data;
  };

  getNFTImageUrlsByAddresss = async (address) => {
    let nfts = await this.getNFTByAddress(address);
    return nfts.map((nft) => nft.image_url);
  };

  getCollectibleListByAddress = async (address) => {
    let NFTs = await this.getOpenSeaCollectionsByAddress(address);
    console.log(NFTs);
    return NFTs.map((nft) => {
      return { name: nft.name, count: nft.stats.count, profile: nft.image_url };
    });
  };
}
