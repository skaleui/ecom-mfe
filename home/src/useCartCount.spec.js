import { renderHook, act } from "@testing-library/react";
import { useCartCount } from "./useCartCount";

import "cart/cart";

let callback = ()=> {};

jest.mock("cart/cart", ()=>({
  cart: {
    cartItems: [],
    subscribe: (cb) => {
      callback = cb;
    },
  },
}),
{ virtual: true }
)


describe("userCartCount", ()=> {
  it("should return cart count", ()=> {
    const { result } = renderHook(()=> useCartCount());
    expect(result.current).toBe(0);
  });

  it("should return cart count", ()=>{
    const { result } = renderHook(()=> useCartCount());
    act(()=>{
      callback({ cartItems: [{ id: 1 }] });
    });
    expect(result.current).toBe(1);
  });
});
