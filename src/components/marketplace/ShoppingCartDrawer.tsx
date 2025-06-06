
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { X, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ShoppingCartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function ShoppingCartDrawer({ open, onClose }: ShoppingCartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md border-blue-900/20 bg-[#0c1427]">
        <SheetHeader className="pb-4">
          <SheetTitle className="flex justify-between items-center">
            Shopping Cart ({totalItems})
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <p className="text-gray-400 mb-4">Your cart is empty</p>
            <Button
              onClick={onClose}
              className="bg-amber-400 hover:bg-amber-500 text-black"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 h-[60vh]">
              <div className="space-y-4 pr-4">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{item.product.name}</h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.product.id)}
                          className="h-6 w-6 text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-400">
                        ${item.product.price}
                      </p>
                      <div className="flex items-center mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              Math.max(item.quantity - 1, 1)
                            )
                          }
                        >
                          -
                        </Button>
                        <span className="mx-2 text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="pt-4">
              <Separator className="my-4 bg-blue-900/20" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <Separator className="my-4 bg-blue-900/20" />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <SheetFooter className="mt-6">
                <div className="space-y-3 w-full">
                  <Button className="w-full bg-amber-400 hover:bg-amber-500 text-black">
                    Checkout
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
