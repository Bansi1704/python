print("start code")
try:
    a=int(input("Enter A:"))
    b=int(input("Enter B:"))

    c=a/b
    print("Division:",c)
    l=[1,2,3,4,5,6]
    index=int(input("Enter Index number to print element:"))
    print(l[index])
except exception as e:
    print("Exception caught:",e)
print("End code")
