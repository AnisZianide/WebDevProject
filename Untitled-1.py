noms_bruts = ["  ali ", " SARA", "jOhn  "]

def nettoyerliste(liste):
    finallist=[]
    for student in liste:
        value = (student.strip()).capitalize()
        finallist.append(value)
    return finallist

print(f"{nettoyerliste(noms_bruts)}")
        