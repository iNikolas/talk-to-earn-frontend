export interface PaginationData {
  page: number;
  limit: number;
}

export interface Paginate<T> extends PaginationData {
  data: Array<T>;
  total: number;
}
