/** @format */
"use client";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";
import _ from "lodash";
import useVariants from "@/stores/crud/Variants";
import VariantsTypes from "@/types/Variants";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};
// variants
type Props = {
  setDelete: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: VariantsTypes) => void;
  productId: string;
};

const ShowData: FC<Props> = ({ setDelete, setEdit, productId }) => {
  const { setVariants, dtVariants } = useVariants();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // search params
  const searchParams = useSearchParams();
  const sortby = searchParams?.get("sortby") || "";
  const order = searchParams?.get("order") || "";
  const search = searchParams?.get("cari") || "";

  // Define the debounced function outside of `useCallback`
  const debouncedFetchVariants = _.debounce((fetchVariants) => {
    fetchVariants();
  }, 500); // 500ms delay

  const fetchVariants = useCallback(async () => {
    setLimit(10);
    await setVariants({
      page,
      limit,
      search,
      sortby,
      order,
      product_id: productId,
    });
    setIsLoading(false);
  }, [setVariants, page, limit, search, sortby, order, productId]);

  useEffect(() => {
    debouncedFetchVariants(fetchVariants);

    // Cleanup debounce
    return () => {
      debouncedFetchVariants.cancel();
    };
  }, [search, sortby, order, page, limit]);

  // table
  const headTable = [
    "No",
    "Warna",
    "Ukuran",
    "Harga",
    "Stok",
    "Gambar",
    "Aksi",
  ];
  const tableBodies = ["color", "size", "price", "stock", "variant_img"];

  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {isLoading ? (
        <span className="loading loading-dots loading-lg"></span>
      ) : (
        <>
          <div className="">
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtVariants?.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
            />
          </div>
          {dtVariants?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtVariants?.current_page}
                totalPages={dtVariants?.last_page}
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
