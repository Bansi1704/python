rno=int(input("Enter Rollno:"))
sname=input("Enter student name:")
s1=int(input("Enter marks of subject1:"))
s2=int(input("Enter marks of subject2:"))
s3=int(input("Enter marks of subject3:"))

total=s1+s2+s3
per=total/3

print("Roll no:",rno)
print("student name:",sname)
print("total:",total)
print("percentage:",per)

if per>=70:
    print("Distinction")
elif per>=60:
    print("first class")
elif per>=50:
    print("second class")
elif per>=40:
    print("third class")
else :
    print("fail")
