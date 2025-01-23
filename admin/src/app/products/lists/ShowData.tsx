/** @format */
"use client";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";
import _ from "lodash";
import useProducts from "@/stores/crud/Products";
import ProductsTypes from "@/types/Products";
import { BsImage } from "react-icons/bs";
import toastShow from "@/utils/toast-show";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};
// products
type Props = {
  setDelete: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: ProductsTypes) => void;
};

const ShowData: FC<Props> = ({ setDelete, setEdit }) => {
  const { setProducts, dtProducts } = useProducts();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // search params
  const searchParams = useSearchParams();
  const sortby = searchParams?.get("sortby") || "";
  const order = searchParams?.get("order") || "";
  const search = searchParams?.get("cari") || "";
  // router
  const router = useRouter();

  // Define the debounced function outside of `useCallback`
  const debouncedFetchProducts = _.debounce((fetchProducts) => {
    fetchProducts();
  }, 500); // 500ms delay

  const fetchProducts = useCallback(async () => {
    setLimit(10);
    await setProducts({
      page,
      limit,
      search,
      sortby,
      order,
    });
    setIsLoading(false);
  }, [setProducts, page, limit, search, sortby, order]);

  useEffect(() => {
    debouncedFetchProducts(fetchProducts);

    // Cleanup debounce
    return () => {
      debouncedFetchProducts.cancel();
    };
  }, [search, sortby, order, page, limit]);

  // table
  const headTable = [
    "No",
    "Kategori",
    "Sub Kategori",
    "Nama",
    "Stok",
    "Harga",
    "Deskripsi",
    "Aksi",
  ];
  const tableBodies = [
    "sub_category.category.category_nm",
    "sub_category.sub_category_nm",
    "product_nm",
    "stock",
    "price",
    "product_desc",
  ];

  const gotTo = (href: string) => router.push(href);

  const onClickTR = (row: ProductsTypes) => {
    if (row.has_variants) {
      gotTo(`/products/variants?product_id=${row.id}`);
    } else {
      toastShow({
        event: { type: "error", message: "Produk tidak memiliki varian" },
      });
    }
  };

  const costume = (row: ProductsTypes) => {
    return (
      <BsImage
        onClick={(e: any) => {
          e.stopPropagation();
          gotTo(`/products/images?product_id=${row.id}`);
        }}
        className="cursor-pointer hover:text-primary"
      />
    );
  };

  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {isLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <>
          <div className="">
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtProducts?.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
              onClickTR={onClickTR}
              costume={costume}
            />
          </div>
          {dtProducts?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtProducts?.current_page}
                totalPages={dtProducts?.last_page}
                setPage={setPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ShowData;
