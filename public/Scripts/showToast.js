export function showToast(operation, id) {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  //$ =//=| Set the textContent of the Toast based on the Operation.
  if (operation === "add") {
    toast.textContent = `Product with ID ${id} has been added.`;
  } else {
    toast.textContent = `Product with ID ${id} has been deleted.`;
  }

  document.body.appendChild(toast);

  // Automatically remove the toast after a few seconds
  setTimeout(() => {
    toast.remove();
  }, 2000);
}
