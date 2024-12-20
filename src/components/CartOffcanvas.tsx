import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { TOGGLE_CART } from '@/reducer/reducer';
import React, { Dispatch, SetStateAction } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
interface CartOffcanvasProps {
  isOffcanvas: boolean;
  setOffcanvas: Dispatch<SetStateAction<boolean>>;
}
const CartOffcanvas= ({isOffcanvas, setOffcanvas}:CartOffcanvasProps) => {
    const isOpen = useAppSelector((state) => state.cart.isOpen);
  const dispatch = useAppDispatch();

console.log("Is open", isOpen)
  return (
  //   <Offcanvas show={Offcanvas} onHide={()=>{dispatch(TOGGLE_CART())}}>
  //   <Offcanvas.Header closeButton>
  //     <Offcanvas.Title>Offcanvas</Offcanvas.Title>
  //   </Offcanvas.Header>
  //   <Offcanvas.Body>
  //     Some text as placeholder. In real life you can have the elements you
  //     have chosen. Like, text, images, lists, etc.
  //   </Offcanvas.Body>
  // </Offcanvas>

  <div className={`drawer drawer-end ${isOffcanvas ? "drawer-open" : ""}`}>
        {/* Overlay */}
        <div
          className="drawer-overlay"
        
        ></div>

        {/* Sidebar Content */}
        <div className="drawer-side">
          <label className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <a>Cart Item 1</a>
            </li>
            <li>
              <a>Cart Item 2</a>
            </li>
            <li>
              <button
                className="btn btn-secondary"
                onClick={() => setOffcanvas(false)}
              >
                Close
              </button>
            </li>
          </ul>
        </div>
        </div>

  )
}

export default CartOffcanvas
