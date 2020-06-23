
#1 sume of a list

def sumNum():
    nums = [4, 5, 8, 3, 1, 9]
    print(sum(nums))

#2 print the largest number

def bigNum():
    nums = [5, 88, 8, 12, 93, 54]
    nums.sort()
    print(nums[-1])

#3 print smallest number

def smallNum():
    nums = [5, 88, 8, 12, 93, 54]
    nums.sort()
    print(nums[0])

#4 print the even numbers

def evenNum():
    nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    print(nums[1: 10 :2])

#5 & 6 positive numbers

def posNum():
    nums = [-1, -7, 8, -3, 4, 5, -9, 12]

    for num in nums:
        if num >= 0:
            print(num)

#7 multiply factor

def mulNum():
    nums = [4, 7, 1, 9, 5, 32]
    newNum = []
    for i in nums:
        newNum.append(i * 5)
        print(newNum)

#8 multiply vectors

def vecNum():
    list1 = [3, 5, 6]
    list2 = [9, 4, 3]
    print(list1)
    print(list2)
    final = []
    for i in range(0, len(list1)):
        final.append(list1[i]*list2[i])
    print(final)


while True :
    index = 0
    assignment = int(input("What assignment number do you want? >> "))
    if int(assignment) == 1:
        print(sumNum())
        break