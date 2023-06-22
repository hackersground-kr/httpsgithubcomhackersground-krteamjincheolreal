import pandas as pd
import seaborn as sns
import random
import sys

def input_info():
    first, last, HowMany = map(int,input("범위를 지정해주세요 : ").split())
    if HowMany > (last - first + 1) * 10:
        print("요청하신 단어 갯수에 비해 단어 범위가 너무 작습니다.")
        sys.exit()
    return first, last, HowMany

def read_file(file_path): #파일을 읽어오는 함수
    file_data = pd.read_excel(file_path, header=None)
    return file_data

def print_question(first, last, HowMany, file_data):
    first_num = (first - 1) * 10 # 처음 단어가 몇 번재 단어인지
    last_num = last * 10
    check_list = [ i for i in range(first_num, last_num) ] #중복 출력을 막기 위해 만든 리스트
    print_list = [] #출력된 단어들의 인덱스를 넣어서 리턴할 리스트
    return_list = [] # 출력된 단어들을 리턴할 리스트
    for i in range(HowMany):
        word_num = random.choice(check_list)
        check_list.remove(word_num)
        print_list.append(word_num)
        return_list.append({'problem':file_data.iloc[word_num,0], 'answer':file_data.iloc[word_num,1]})
    return return_list

def print_answer(file_data, print_list, HowMany):
    for i in range(HowMany):
        word_num = print_list[i]
        print("{:>4} | ".format(i+1),end="")
        print("{:<15}  ".format(file_data.iloc[word_num,0]),file_data.iloc[word_num,1])


def main():
    file_data = read_file("./dir/Word Master 초등 베이직.xlsx")
    return_list = print_question(1, 4, 20, file_data)
    print(return_list)
