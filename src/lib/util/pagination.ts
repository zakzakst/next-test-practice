// export const getPaginationSrc = ({
//   page = 0,
//   take = 9,
// }: {
//   page?: number;
//   take?: number;
// }) => {
//   const currentPage = page || 1;
//   const skip = (currentPage - 1) * take;
//   return { take, skip, currentPage };
// };

export const generatePagination = (current: number, max: number) => {
  if (!current || !max) return null;
  const prev = current === 1 ? null : current - 1;
  const next = current === max ? null : current + 1;
  const items: (number | string)[] = [1];
  if (current === 1 && max === 1) return { current, prev, next, items };
  if (current > 4) items.push("-");
  const r = 2;
  const r1 = current - r;
  const r2 = current + r;
  for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i);
  if (r2 + 1 < max) items.push("-");
  if (r2 < max) items.push(max);
  return { current, prev, next, items };
};

export type PaginationProps = ReturnType<typeof generatePagination>;
