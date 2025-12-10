import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
interface Wallet {
  name: string;
  image: string;
  imgcls:string;
  active?: boolean;
};
@Component({
  selector: 'app-wallet-integration',
  imports: [SharedModule,CommonModule],
  templateUrl: './wallet-integration.html',
  styleUrl: './wallet-integration.scss'
})
export class WalletIntegration {
 WalletList = [
    { name: "Etherium", image: "./assets/images/nft-images/34.png" },
    { name: "Binance", image: "./assets/images/nft-images/33.png" },
    { name: "Solana", image: "./assets/images/nft-images/32.png" },
    { name: "Tezos", image: "./assets/images/nft-images/28.png" },
    { name: "Avalanche", image: "./assets/images/nft-images/30.png" },
    { name: "Cardano", image: "./assets/images/nft-images/29.png" },
];


 WalletCards: Wallet[] = [
    { name: "MetaMask",imgcls:"p-2", image: "./assets/images/nft-images/22.png", active: true },
    { name: "Enjin Wallet",imgcls:"p-2", image: "./assets/images/nft-images/23.png" },
    { name: "Trust Wallet",imgcls:"", image: "./assets/images/nft-images/20.png" },
    { name: "Coinbase Wallet",imgcls:"p-2", image: "./assets/images/nft-images/24.png" },
    { name: "Lido",imgcls:"p-2", image: "./assets/images/nft-images/19.png" },
    { name: "Huobi Wallet",imgcls:"", image: "./assets/images/nft-images/27.png" },
];
}
