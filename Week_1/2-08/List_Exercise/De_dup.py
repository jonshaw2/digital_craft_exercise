a_list = [1,2,3,4,5,6,5,4,3,1,2,1,5,10]
no_dupe_list = []

for i in range(len(a_list)):
    dupe = False
    for j in range(len(no_dupe_list)):
        if a_list[i] == no_dupe_list[j]:
            dupe = True

    if dupe == False:
        no_dupe_list.append(a_list[i])

print no_dupe_list
