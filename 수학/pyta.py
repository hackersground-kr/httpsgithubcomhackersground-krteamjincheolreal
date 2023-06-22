from random import *
import math

def randnum():
    num1 = randint(1, 10)
    num2 = randint(1, 10)
    op = ["빗변", "변"]
    opn = randint(0, 1)

    return op[opn], num1, num2

if __name__ == "__main__":
    count = 1
    while count <= 10:
        o, n1, n2 = randnum()
        if n1 > n2:
            if o == "빗변":
                dap = math.sqrt(n1**2-n2**2)
                if len(str(dap)) > 5:
                    continue
                print(str(count)+"번째 문제 : 빗변의 길이가 "+str(n1)+"이고 나머지 변의 길이가 "+str(n2)+"인 직각삼각형의 나머지 변의 길이는? 답 :"+str(int(dap)))
            else:
                dap = math.sqrt(n1**2+n2**2)
                if len(str(dap)) > 5:
                    continue
                print(str(count)+"번째 문제 : 한 변의 길이가 "+str(n1)+"이고 나머지 변의 길이가 "+str(n2)+"인 직각삼각형의 빗변의 길이는? 답 :"+str(int(dap)))
        elif n2 > n1:
            if o == "빗변":
                dap = math.sqrt(n2**2-n1**2)
                if len(str(dap)) > 5:
                    continue
                print(str(count)+"번째 문제 : 빗변의 길이가 "+str(n2)+"이고 나머지 변의 길이가 "+str(n1)+"인 직각삼각형의 나머지 변의 길이는? 답 :"+str(int(dap)))
            else:
                dap = math.sqrt(n1**2+n2**2)
                if len(str(dap)) > 5:
                    continue
                print(str(count)+"번째 문제 : 한 변의 길이가 "+str(n1)+"이고 나머지 변의 길이가 "+str(n2)+"인 직각삼각형의 빗변의 길이는? 답 :"+str(int(dap)))
        else:
            dap = math.sqrt(n1**2+n2**2)
            if len(str(dap)) > 5:
                continue
            print(str(count)+"번째 문제 : 한 변의 길이가 "+str(n1)+"이고 나머지 변의 길이가 "+str(n2)+"인 직각삼각형의 빗변의 길이는? 답 :"+str(int(dap)))
        count += 1