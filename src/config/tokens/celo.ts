import { ChainId, Token } from '@sushiswap/core-sdk'

export const mCUSD = new Token(ChainId.CELO, '0x64dEFa3544c695db8c535D289d843a189aa26b98', 18, 'mCUSD', 'Moola cUSD')
export const mCELO = new Token(ChainId.CELO, '0x7037F7296B2fc7908de7b57a89efaa8319f0C500', 18, 'mCELO', 'Moola CELO')
export const mcEURO = new Token(
  ChainId.CELO,
  '0xa8d0E6799FF3Fd19c6459bf02689aE09c4d78Ba7',
  18,
  'mCEUR',
  'Moola Celo Euro'
)
export const cUSD = new Token(ChainId.CELO, '0x765DE816845861e75A25fCA122bb6898B8B1282a', 18, 'cUSD', 'Celo Dollar')
export const cEURO = new Token(ChainId.CELO, '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73', 18, 'cEUR', 'Celo Euro')
export const cBTC = new Token(ChainId.CELO, '0xD629eb00dEced2a080B7EC630eF6aC117e614f1b', 18, 'cBTC', 'Wrapped Bitcoin')
export const cETH = new Token(ChainId.CELO, '0x2DEf4285787d58a2f811AF24755A8150622f4361', 18, 'cETH', 'Wrapped Ether')
export const WETH = new Token(ChainId.CELO, '0xE919F65739c26a42616b7b8eedC6b5524d1e3aC4', 18, 'WETH', 'WETH')
export const WBTC = new Token(ChainId.CELO, '0xBe50a3013A1c94768A1ABb78c3cB79AB28fc1aCE', 8, 'WBTC', 'WBTC')
