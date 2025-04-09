import React from 'react';
import Image from 'next/image';

interface TokenBalance {
  name: string;
  symbol: string;
  balance: number;
  dollarValue: number;
  percentageChange: number;
  logoUrl: string;
}

const dummyData: TokenBalance[] = [
  {
    name: 'Solana',
    symbol: 'SOL',
    balance: 123.45,
    dollarValue: 15287.23,
    percentageChange: 2.4,
    logoUrl: '/images/solana-logo.png'
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    balance: 30000,
    dollarValue: 30000,
    percentageChange: -0.1,
    logoUrl: '/images/bitcoin-logo.png'
  }
];

const Portfolio = () => {
  const totalBalance = dummyData.reduce((acc, token) => acc + token.dollarValue, 0);

  return (
    <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto p-6">
      <div className="bg-blue-600 rounded-2xl p-8 text-white ">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-sm opacity-90">Total Balance</p>
            <h1 className="text-3xl font-bold">${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h1>
          </div>
          <button className="bg-white/20 hover:bg-white/30 rounded-full px-4 py-2 text-sm">
            + Add Funds
          </button>
        </div>
        <div className="flex gap-3">
          <button className="bg-white/20 hover:bg-white/30 rounded-full px-6 py-2 flex items-center gap-2">
            <span>↑</span> Send
          </button>
          <button className="bg-white/20 hover:bg-white/30 rounded-full px-6 py-2 flex items-center gap-2">
            <span>↓</span> Receive
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dummyData.map((token) => (
          <div 
            key={token.symbol} 
            className="bg-gray-900 rounded-2xl p-6 text-white flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10  flex items-center justify-center">
              <Image
                  src={token.logoUrl}
                  alt={`${token.name} logo`}
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-lg">{token.name}</h3>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold mb-1">
                ${token.dollarValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400">
                  {token.balance} {token.symbol}
                </p>
                <p className={`text-sm ${token.percentageChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {token.percentageChange >= 0 ? '+' : ''}{token.percentageChange}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;