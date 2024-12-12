import { ColumnDef } from "@tanstack/react-table";

type CustomColumnDef<TData, TValue> = ColumnDef<TData, TValue> & {
  headerAlignment?: "left" | "right" | "center";
};