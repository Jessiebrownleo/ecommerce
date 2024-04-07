"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DataTable, { TableColumn } from "react-data-table-component";
import { ProductType } from "@/lib/definition";



export default function Dashboard () {
  const [products, setProducts] = React.useState<ProductType[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const router = useRouter();
  const handleUpdate = useCallback(
    (product: ProductType) => {
      router.push(`/update/${product.id}`);
    },
    [router]
  );
  const handleDelete = useCallback(
    (product: ProductType) => {
      router.push(`/delete/${product.id}`);
    },
    [router]
  );

  const handleView = useCallback(
    (product: ProductType) => {
      router.push(`/view/${product.id}`);
    },
    [router]
  );
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/?page=1&page_size=100`);	
        const { results } = await response.json();
        setProducts(results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const columns: TableColumn<ProductType>[] = React.useMemo(
    () => [
      {
        name: "Product Name",
        selector: (row) => row.name,
        sortable: true,
      },
      {
        name: "Price",
        selector: (row) => "$"+row.price,
        sortable: true,
      },
      {
        name: "Category",
        selector: (row) => row.category,
        sortable: true,
      },
      {
        name: "Image",
        selector: (row): any => (
          <img src={row.image || ""} alt={row.name} className="w-16 h-16" />
        ),
        sortable: true,
      },
      {
        name: "Action",
        cell: (row) => (
          <div className="flex gap-2">
            <button
              className="text-blue-500  pe-2 "
              onClick={() => handleView(row)}
            >
              view
            </button>
            <button
              className="text-yellow-400 pe-2"
              onClick={() => handleUpdate(row)}
            >
              Update
            </button>
            <button className="text-red-500" onClick={() => handleDelete(row)}>
              Delete
            </button>
          </div>
        ),
      },
    ],
    [handleDelete, handleUpdate, handleView]
  );

  return (
    
    <DataTable
      fixedHeader
      progressPending={loading}
      columns={columns}
      data={products}
      pagination
      customStyles={customStyles}
      striped
      highlightOnHover
    />
  );
}
const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "36px",
      paddingRight: "8px",
      fontSize: "1.2rem",
    },
  },
  cells: {
    style: {
      paddingLeft: "36px",
      paddingRight: "8px",
    },
  },
};

