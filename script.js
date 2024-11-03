import ReceiptPrinterEncoder from "/node_modules/@point-of-sale/receipt-printer-encoder/dist/receipt-printer-encoder.esm.js";
import WebUSBReceiptPrinter from "/node_modules/@point-of-sale/webusb-receipt-printer/dist/webusb-receipt-printer.esm.js";

const receiptPrinter = new WebUSBReceiptPrinter();

const connectButton = document.getElementById("connectButton");

connectButton.onclick = () => {
  receiptPrinter.connect();
};

let lastUsedDevice;

receiptPrinter.addEventListener("connected", (device) => {
  console.log(
    `Connected to ${device.manufacturerName} ${device.productName} (#${device.serialNumber})`
  );

  /* Store device for reconnecting */
  lastUsedDevice = device;
});

receiptPrinter.addEventListener("disconnected", () => {
  console.log("Disconnected");

  if (lastUsedDevice) {
    receiptPrinter.reconnect(lastUsedDevice);
  }
});

const encoder = new ReceiptPrinterEncoder({
  printerModel: "pos-5890",
});

function print(text) {
  let data = encoder.initialize().box({ align: "center" }, text).cut().encode();

  receiptPrinter.print(data);
}

const printButton = document.getElementById("printButton");
const input = document.getElementById("input");

printButton.onclick = () => print(input.value);
