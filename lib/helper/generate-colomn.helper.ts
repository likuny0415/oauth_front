const generateColumns = (items = [], columnsCount = 3) => {
    const columns = Array.from({ length: columnsCount }, () => []);
  
    items?.map((child, index) => {
      columns[index % columnsCount].push(child);
    });
  
    return columns;
  };
  
  export default generateColumns;
  