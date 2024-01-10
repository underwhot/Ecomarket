export const isItemInArr = (itemId, array) => {
  if (array.length > 0) {
   return array.some(item => item.id === itemId);
  }
}