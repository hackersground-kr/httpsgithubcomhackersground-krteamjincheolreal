from random import *

def has_decimal(number):
    return isinstance(number, float) and number.is_integer() is False

def decimal_to_fraction(number):
    class Fraction:
        def __init__(self, numerator, denominator):
            self.numerator = numerator
            self.denominator = denominator

    def convert_to_fraction(number):
        # 소숫점을 분수로 변환하는 함수

        num_str = str(number)
        num_digits = len(num_str) - num_str.index('.') - 1
        numerator = int(num_str.replace('.', ''))
        denominator = 10 ** num_digits

        # 분모와 분자를 최대공약수로 나누어 기약분수로 만듦
        divisor = gcd(numerator, denominator)
        numerator //= divisor
        denominator //= divisor

        return Fraction(numerator, denominator)

    def gcd(a, b):
        # 최대공약수를 계산하는 함수
        while b:
            a, b = b, a % b
        return a

    return convert_to_fraction(number)

first = ['%', '*']
second = ['+', '-']

def randx():
    num1 = randint(1, 9)
    op1 = first[randint(0, 1)]
    num2 = randint(1, 9)
    op2 = second[randint(0, 1)]

    if op1 == '%' and op2 == '-':
        ques = "x"+"/"+str(num1)+op2+str(num2)+"=0"
        sol = num1*(num2)
        if sol < 0:
            sol *= -1
    elif op1 == '%' and op2 == '+':
        ques = "x"+"/"+str(num1)+op2+str(num2)+"=0"
        sol = num1*(num2)
        if sol > 0:
            sol *= -1
    elif op1 == '*' and op2 == '-':
        ques = str(num1)+'x'+op2+str(num2)+"=0"
        sol = num2/num1
        if sol < 0:
            sol *= -1
    else:
        ques = str(num1)+"x"+op2+str(num2)+"=0"
        sol = (-num2)/num1
        if sol > 0:
            sol *= -1

    return sol, ques

if __name__ == "__main__":
    count = 1
    while count <= 10:
        dap, moon = randx()
        if has_decimal(dap):
            result = decimal_to_fraction(dap)
            if len(str(result)) > 6:
                continue
            print(str(count)+"번째 문제 : "+moon+", 답 : "+f"{result.numerator}/{result.denominator}")
        else:   
            print(str(count)+"번째 문제 : "+moon+", 답 : "+str(int(dap)))
        count += 1
