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

def randnum(num):
    oper = ['+', '-', '*', '%']
    dap = [] 
    per = []
    slash = []

    for i in range(num-1):
        opernum = randint(0, 3)
        if oper[opernum] == '*':
            per.append('x')
        else:
            per.append(oper[opernum])

        if oper[opernum] == '%':
            slash.append('/')
        else:
            slash.append(oper[opernum])

    su = []

    for i in range(num):
        su.append(str(randint(1, 10)))
    
    ques = ""
    ques2 = ""

    for i in range(num):
        ques += su[i]
        ques2 += su[i]
        if i == (num-1):
            break
        ques += per[i]
        ques2 += slash[i]
      
    answer = eval(ques2)
    dap.append(answer)

    return ques, answer

if __name__ == "__main__":
    dd = int(input("원하는 항의 수를 입력하세요"))
    count = 1
    while count <= 10:
        p, d = randnum(dd)
        if has_decimal(d):
            result = decimal_to_fraction(d)
            if len(str(result)) > 6:
                continue
            print(str(count)+"번째 문제 : "+p+", 답 : "+f"{result.numerator}/{result.denominator}")
        else:   
            print(str(count)+"번째 문제 : "+p+", 답 : "+str(int(d)))
        count += 1



