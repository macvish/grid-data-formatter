const formateGridData = (data: [], numberOfColumns: 4): [] => {
  if (data) {
    const totalNumberOfRows = Math.floor(data.length / numberOfColumns);

    let numberOfElementsLastRow =
      data.length - totalNumberOfRows * numberOfColumns;

    while (
      numberOfElementsLastRow !== numberOfColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({ title: `Blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }

    return data;
  }
  
  return []
}
