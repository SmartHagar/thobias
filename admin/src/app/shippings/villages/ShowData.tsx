/** @format */
"use client";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";
import _ from "lodash";
import useVillage from "@/stores/crud/Village";
import VillageTypes from "@/types/Village";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};
// village
type Props = {
  setDelete: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: VillageTypes) => void;
};

const ShowData: FC<Props> = ({ setDelete, setEdit }) => {
  const { setVillage, dtVillage } = useVillage();
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
  const debouncedFetchVillage = _.debounce((fetchVillage) => {
    fetchVillage();
  }, 500); // 500ms delay

  const fetchVillage = useCallback(async () => {
    setLimit(10);
    await setVillage({
      page,
      limit,
      search,
      sortby,
      order,
    });
    setIsLoading(false);
  }, [setVillage, page, limit, search, sortby, order]);

  useEffect(() => {
    debouncedFetchVillage(fetchVillage);

    // Cleanup debounce
    return () => {
      debouncedFetchVillage.cancel();
    };
  }, [search, sortby, order, page, limit]);

  // table
  const headTable = ["No", "Kecamatan", "Kelurahan", "Ongkir", "Aksi"];
  const tableBodies = [
    "sub_district.sub_district_nm",
    "village_nm",
    "shipping_cost",
  ];

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
              dataTable={dtVillage?.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
            />
          </div>
          {dtVillage?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtVillage?.current_page}
                totalPages={dtVillage?.last_page}
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
