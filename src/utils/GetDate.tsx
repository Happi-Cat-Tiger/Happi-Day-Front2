export const getDate = (value: string | Date, type?: string) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return type === 'all'
    ? `${year}.${(month < 10 ? '0' : '') + month}.${(day < 10 ? '0' : '') + day} ${(hours < 10 ? '0' : '') + hours}:${
        (minutes < 10 ? '0' : '') + minutes
      }:${(seconds < 10 ? '0' : '') + seconds}`
    : `${year}.${(month < 10 ? '0' : '') + month}.${(day < 10 ? '0' : '') + day}`;
};
