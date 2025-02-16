import { useProductStore } from "@/store/useProductStore";
import {
  DollarSignIcon,
  ImageIcon,
  Package2Icon,
  PlusCircleIcon,
  X,
} from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";

function AddProductModal() {
  const { fetchProducts, loading, addProduct } = useProductStore();
  const initialData = {
    image: "",
    name: "",
    price: "",
  };
  const dialogEl = useRef<HTMLDialogElement>(null);
  const [formData, setFormData] = useState<NewProductType>(initialData);
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const productAdded = await addProduct(formData);
    if (productAdded) {
      fetchProducts();
      dialogEl.current?.close();
      setFormData(initialData);
      toast.success("Product added");
    } else {
      toast.error("Product couldn't be added");
    }
  };
  return (
    <dialog id="add_product_modal" className="modal" ref={dialogEl}>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <X size="20" />
          </button>
        </form>
        <h3 className="font-bold text-xl mb-8">Add New Product</h3>
        <form onSubmit={(e) => submitHandler(e)} className="space-y-6">
          <div className="grid gap-6">
            {/* PRODUCT NAME INPUT */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Product Name
                </span>
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50"
                >
                  <Package2Icon className="size-5" />
                </div>
              </div>
            </div>

            {/* PRODUCT PRICE INPUT */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Price</span>
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="0.00"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50"
                >
                  <DollarSignIcon className="size-5" />
                </div>
              </div>
            </div>

            {/* PRODUCT IMAGE */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Image URL
                </span>
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50"
                >
                  <ImageIcon className="size-5" />
                </div>
              </div>
            </div>
          </div>

          {/* MODAL ACTIONS */}
          <div className="modal-action">
            <button
              className="btn btn-ghost"
              value="cancel"
              type="button"
              formMethod="dialog"
              onClick={() => dialogEl.current?.close()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary min-w-[120px]"
              disabled={
                !formData.name || !formData.price || !formData.image || loading
              }
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                  <PlusCircleIcon className="size-5 mr-2" />
                  Add Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default AddProductModal;
