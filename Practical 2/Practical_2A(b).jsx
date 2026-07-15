function BillGeneration(customerName , itemName , quantity , pricePerItem){
   let amount = quantity * pricePerItem;
   let gst = amount * 0.18;
   let totalAmount = amount + gst;


   console.log("==== Your Bill ====");
   console.log("Customer Name:",customerName);
   console.log("Item Name:",itemName);
   console.log("Quantity:",quantity);
   console.log("Price/Item: ₹",pricePerItem);
   console.log("Amount: ₹",amount);
   console.log("GST (18%): ₹",gst);
   console.log("Total Bill: ₹",totalAmount);
}


//Calling Function
BillGeneration("Himani Malankar" , "MacBook" , 1 , 245000);
