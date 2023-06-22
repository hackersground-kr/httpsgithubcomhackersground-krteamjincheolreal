from random import *

def get_least_common_multiple(a, b):
    # a와 b의 최대공약수를 구하는 함수
    def get_greatest_common_divisor(a, b):
        if b == 0:
            return a
        return get_greatest_common_divisor(b, a % b)

    gcd = get_greatest_common_divisor(a, b)
    lcm = (a * b) // gcd
    return lcm

def get_greatest_common_divisor(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def randnum():
    op = ["최소공배수", "최대공약수"]
    num1 = randint(1, 10)
    num2 = randint(1, 10)
    opn = randint(0, 1)

    return op[opn], num1, num2

if __name__ == "__main__":
    count = 1
    while count <= 10:
        o, n1, n2 = randnum()
        if o == "최소공배수":
            result = get_least_common_multiple(n1, n2)
            print(str(count)+"번째 문제 : "+str(n1)+"과 "+str(n2)+"의 최소공배수는?, 답 : "+str(result))
        else:
            result = get_greatest_common_divisor(n1, n2)
            print(str(count)+"번째 문제 : "+str(n1)+"과 "+str(n2)+"의 최대공약수는?, 답 : "+str(result))
        count += 1
        

