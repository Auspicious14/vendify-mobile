import React, { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { apiReqHandler } from "../../components";
import { IStore } from "./model";

interface IStoreState {
  loading: boolean;
  product: IStore;
  stores: IStore[];
  newStores: IStore[];
  topStores: IStore[];
  getStores: () => Promise<void>;
  getTopStores: () => Promise<void>;
  getNewStores: () => Promise<void>;
  getOneStore: (storeId: string) => Promise<any>;
  createStore: (payload: IStore) => Promise<any>;
  updateStore: (payload: IStore, storeId: string) => Promise<any>;
  deleteStore: (storeId: string) => Promise<any>;
  rejectStore: (
    storeId: string,
    email: string,
    remark: string
  ) => Promise<void>;
  acceptStore: (storeId: string) => Promise<any>;
  setStores: (stores: IStore[]) => void;
}

const StoreContext = React.createContext<IStoreState>({
  loading: false,
  product: {} as any,
  stores: [],
  newStores: [],
  topStores: [],
  getStores() {
    return null as any;
  },
  getNewStores() {
    return null as any;
  },
  getTopStores() {
    return null as any;
  },
  getOneStore(storeId) {
    return null as any;
  },
  createStore(payload) {
    return null as any;
  },
  updateStore(payload, storeId) {
    return null as any;
  },
  deleteStore(storeId) {
    return null as any;
  },
  async acceptStore(storeId) {
    return null;
  },
  async rejectStore(storeId, email, remark) {
    return;
  },
  setStores(stores) {},
});

export const useStoreState = () => {
  const context = React.useContext(StoreContext);
  if (context === undefined) {
    throw new Error("app dispatch must be used within app global provider");
  }

  return context;
};

interface IProps {
  children: React.ReactNode;
}
export const StoreContextProvider: React.FC<IProps> = ({ children }) => {
  const [product, setProduct] = useState<IStore>() as any;
  const [stores, setStores] = useState<IStore[]>([]);
  const [newStores, setNewStores] = useState<IStore[]>([]);
  const [topStores, setTopStores] = useState<IStore[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getStores = async () => {
    setLoading(true);
    try {
      const res = await apiReqHandler({
        endPoint: `${process.env.NEXT_PUBLIC_API_ROUTE}/stores}`,
        method: "GET",
      });
      setLoading(false);
      const data = await res.res?.data?.data;
      setStores(data);
      return data;
    } catch (error: any) {
      showMessage({ message: error, type: "danger" });
    }
  };
  const getTopStores = async () => {
    setLoading(true);
    try {
      const res = await apiReqHandler({
        endPoint: `${process.env.NEXT_PUBLIC_API_ROUTE}/stores/top}`,
        method: "GET",
      });
      setLoading(false);
      const data = await res.res?.data?.data;
      setTopStores(data);
      return data;
    } catch (error: any) {
      showMessage({ message: error, type: "danger" });
    }
  };
  const getNewStores = async () => {
    setLoading(true);
    try {
      const res = await apiReqHandler({
        endPoint: `${process.env.NEXT_PUBLIC_API_ROUTE}/stores/new}`,
        method: "GET",
      });
      setLoading(false);
      const data = await res.res?.data?.data;
      setNewStores(data);
      return data;
    } catch (error: any) {
      showMessage({ message: error, type: "danger" });
    }
  };

  const getOneStore = async (id: string) => {
    setLoading(true);
    try {
      const res = await apiReqHandler({
        endPoint: `${process.env.NEXT_PUBLIC_API_ROUTE}/store/${id}`,
        method: "GET",
      });
      setLoading(false);
      if (res.res?.status !== 200) {
        showMessage({ message: "error", type: "danger" });
      }
      const data = await res.res?.data?.data;
      setStores(data);
      return data;
    } catch (error: any) {
      showMessage({ message: error, type: "danger" });
    }
  };

  const createStore = async (payload: IStore) => {
    setLoading(true);
    console.log(JSON.stringify(payload));
    try {
      const res = await apiReqHandler({
        endPoint: `${process.env.NEXT_PUBLIC_API_ROUTE}/store`,
        method: "POST",
        payload,
      });
      setLoading(false);
      if (res.res?.status !== 200) {
        showMessage({ message: "error", type: "danger" });
      }
      const data = await res.res?.data?.data;
      showMessage({ message: "Store created successfully", type: "success" });
      setStores([...stores, data]);
      // resetLink()
      return data;
    } catch (error: any) {
      showMessage({ message: error, type: "danger" });
    }
  };

  const updateStore = async (payload: IStore, id: string) => {
    setLoading(true);
    try {
      const res = await apiReqHandler({
        endPoint: `${process.env.NEXT_PUBLIC_API_ROUTE}/store/${id}`,
        method: "PUT",
        payload: JSON.stringify(payload),
      });
      setLoading(false);
      const data = await res.res?.data.data;
      if (res.res?.status !== 200) {
        showMessage({ message: "error", type: "danger" });
      } else {
        showMessage({
          message: "Product updated successfully",
          type: "success",
        });
      }
      setStores(
        stores.map((p: IStore, i: number) => (p._id == data._id ? data : p))
      );

      return data;
    } catch (error: any) {
      showMessage({ message: error, type: "danger" });
    }
  };

  const deleteStore = async (storeId: string) => {
    setLoading(true);
    try {
      const res = await apiReqHandler({
        endPoint: `${process.env.NEXT_PUBLIC_API_ROUTE}/store/delete/${storeId}`,
        method: "DELETE",
      });
      setLoading(false);
      const data = await res.res?.data;

      if (data) {
        showMessage({ message: data.message, type: "success" });
        setStores(stores.filter((p: any) => p?._id !== storeId));
      }
      return data;
    } catch (error: any) {
      showMessage({ message: error, type: "danger" });
    }
  };

  const acceptStore = async (id: string) => {
    setLoading(true);
    try {
      const res = await apiReqHandler({
        endPoint: `${process.env.NEXT_PUBLIC_API_ROUTE}/store/accept`,
        method: "POST",
        payload: JSON.stringify({ id: id }),
      });
      setLoading(false);
      const data = await res?.res?.data;

      if (data) {
        showMessage({ message: data.message, type: "success" });
      }
      setStores(
        stores.map((p: IStore, i: number) =>
          p._id == data.data._id ? data.data : p
        )
      );
      return data;
    } catch (error: any) {
      showMessage({ message: error, type: "danger" });
    }
  };

  const rejectStore = async (id: string, email: string, remark: string) => {
    const payload = { id, email, remark };
    try {
      const res = await apiReqHandler({
        endPoint: `${process.env.NEXT_PUBLIC_API_ROUTE}/store/reject`,
        method: "POST",
        payload: JSON.stringify(payload),
      });
      setLoading(false);
      const data = await res?.res?.data;
      if (data) {
        showMessage({ message: data.message, type: "success" });
      }
    } catch (error: any) {
      showMessage({ message: error, type: "danger" });
    }
  };

  const resetLink = async (code: string) => {
    try {
      const res = await apiReqHandler({
        endPoint: `${process.env.NEXT_PUBLIC_API_ROUTE}/delete/invite/${code}`,
        method: "DELETE",
      });
      setLoading(false);
      const data = await res?.res?.data;
      if (data) {
        showMessage({ message: data.message, type: "success" });
      }
    } catch (error: any) {
      showMessage({ message: error, type: "danger" });
    }
  };
  return (
    <StoreContext.Provider
      value={{
        loading,
        stores,
        newStores,
        topStores,
        product,
        getStores,
        getTopStores,
        getNewStores,
        getOneStore,
        createStore,
        updateStore,
        deleteStore,
        acceptStore,
        rejectStore,
        setStores,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
