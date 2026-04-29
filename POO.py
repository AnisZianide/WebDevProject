def calculatetax(product, taxrate):
    for i in product :
        price = product["price"]
        finalprice = price * taxrate
    return finalprice


item = {"name": "Laptop", "price": 1200, "category": "electronics"}
print(f"Your price with tax is {calculatetax(item, 1.15)}")