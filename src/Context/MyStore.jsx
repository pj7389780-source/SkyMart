import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const MyStore = createContext();

export const ContextProvide = ({ children }) => {
  const [error, setError] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  // =========================
  // API DATA
  // =========================

  const [apiData, setApiData] = useState([]);

  const apiDataGet = async () => {
    try {
      const data = await axios.get("https://dummyjson.com/products?limit=100");

      setApiData(data.data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    apiDataGet();
  }, []);

  // =========================
  // CART
  // =========================

  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cartItems");

      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to load cart:", error);
      return [];
    }
  });

  // Save cart whenever cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  // Remove product from cart
  const removefromcart = (id) => {
    const remaining = cart.filter((elem) => {
      return elem.product.id !== id;
    });

    setCart(remaining);
  };

  // =========================
  // USERS
  // =========================

  const [userData, setUserData] = useState(() => {
    try {
      const storedUsers = localStorage.getItem("userData");

      return storedUsers ? JSON.parse(storedUsers) : [];
    } catch (error) {
      console.error("Failed to load users:", error);
      return [];
    }
  });

  // Save users whenever userData changes
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  // =========================
  // REACT HOOK FORM
  // =========================

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // =========================
  // ERROR MESSAGE
  // =========================

  const showError = () => {
    setError(true);

    setTimeout(() => {
      setError(false);
    }, 4000);
  };

  // =========================
  // CONTEXT
  // =========================

  return (
    <MyStore.Provider
      value={{
        // Form
        register,
        handleSubmit,
        reset,
        watch,
        errors,

        // API
        apiData,

        // Users
        userData,
        setUserData,

        // Error
        error,
        showError,
        invalid,
        setInvalid,

        // Loading
        loading,
        setLoading,

        // Password
        showPass,
        setShowPass,

        // Cart
        cart,
        setCart,
        removefromcart,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
