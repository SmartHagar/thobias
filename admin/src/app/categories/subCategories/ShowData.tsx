/** @format */
"use client";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";
import _ from "lodash";
import useSubCategories from "@/stores/crud/SubCategories";
import SubCategoriesTypes from "@/types/SubCategories";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};
// subCategories
type Props = {
  setDelete: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: SubCategoriesTypes) => void;
};

const ShowData: FC<Props> = ({ setDelete, setEdit }) => {
  const { setSubCategories, dtSubCategories } = useSubCategories();
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
  const debouncedFetchSubCategories = _.debounce((fetchSubCategories) => {
    fetchSubCategories();
  }, 500); // 500ms delay

  const fetchSubCategories = useCallback(async () => {
    setLimit(10);
    await setSubCategories({
      page,
      limit,
      search,
      sortby,
      order,
    });
    setIsLoading(false);
  }, [setSubCategories, page, limit, search, sortby, order]);

  useEffect(() => {
    debouncedFetchSubCategories(fetchSubCategories);

    // Cleanup debounce
    return () => {
      debouncedFetchSubCategories.cancel();
    };
  }, [search, sortby, order, page, limit]);

  // table
  const headTable = ["No", "Kategori", "Sub Kategori", "Aksi"];
  const tableBodies = ["category.category_nm", "sub_category_nm"];

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
              dataTable={dtSubCategories?.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
            />
          </div>
          {dtSubCategories?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtSubCategories?.current_page}
                totalPages={dtSubCategories?.last_page}
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
