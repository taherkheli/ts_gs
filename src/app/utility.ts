function getInputValue(elementId : string) : string {
  const inputElement : HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
  return inputElement.value;
}

function log (message : string): void {
  console.log(message);  
}

export { getInputValue as getValue , log };