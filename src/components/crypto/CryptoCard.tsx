
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CryptoRate } from "@/types/common";
import { ArrowUp, ArrowDown } from "lucide-react";

interface CryptoCardProps {
  crypto: CryptoRate;
  showDetails?: boolean;
}

export function CryptoCard({ crypto, showDetails = false }: CryptoCardProps) {
  const { symbol, name, price, change24h } = crypto;
  
  const isPositiveChange = change24h >= 0;
  
  return (
    <Card className="overflow-hidden border border-blue-900/20 bg-[#0c1427] text-white">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
              <span className="text-primary text-sm font-semibold">{symbol}</span>
            </div>
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-xs text-gray-400">{symbol}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            <div className={`flex items-center text-xs ${isPositiveChange ? 'text-green-400' : 'text-red-400'}`}>
              {isPositiveChange ? (
                <ArrowUp className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDown className="h-3 w-3 mr-1" />
              )}
              <span>{Math.abs(change24h).toFixed(2)}%</span>
            </div>
          </div>
        </div>
        
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-gray-400">Market Cap</p>
                <p className="font-semibold">${crypto.marketCap.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-400">Volume (24h)</p>
                <p className="font-semibold">${crypto.volume.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-400">Circulating Supply</p>
                <p className="font-semibold">{crypto.supply.toLocaleString()} {symbol}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
