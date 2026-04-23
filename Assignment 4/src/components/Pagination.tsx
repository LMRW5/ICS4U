import { Button } from "./Button";
type PaginationProps = {
  setPage: (value: number) => void;
  totalPages: number;
  page: number;
};

export default function Pagination({ setPage, totalPages, page }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-6">
      <Button onClick={() => setPage(1)} disabled={page === 1}>First</Button>
      <Button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}>Prev</Button>
      <h2 className="text-gray-300 font-medium">
        Page {page}/{totalPages}
      </h2>
      <Button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages}>Next</Button>
      <Button onClick={() => setPage(totalPages)} disabled={page === totalPages}>Last</Button>
    </div>
  );
}
