from . import sample_data as data

def sub_AP_method_test (file1: str, file2: str) -> list:
    # Delete this next line and replace it with a real parser (the proprietary thing I can't see).
    #
    # file1 and file2 will each be files that were passed in from the user, which together
    # constitute a sub-AP.
    return [
        data.sample_is_defined,
        data.sample_duplicated
    ]