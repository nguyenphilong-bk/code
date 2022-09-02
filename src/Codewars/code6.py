def tower_builder(n_floors):
    # build here
    # number_of_stars = 2*n_floors
    # number_of_spaces = 2 * (n_floors - 1)
    result = []
    for i in range(n_floors):
        result.append(" "*(i) + "*"*(2*i + 1) + " "*i)

    return result


print(tower_builder(4))
