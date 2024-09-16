#!/usr/bin/env python
# -*- coding: utf-8 -*-

import re

class BankAccount:
    def __init__(self, name, balance, currency):
        
        # Validations        
        if BankAccountValidations.is_empty_string(name):
            raise ValueError('Name should be at least 3 symbols')
        
        if not BankAccountValidations.is_valid_alpha_string(name):
            raise ValueError('Name should contain only letters a-z and invervals')

    self.__name = name
    self.__balance = balance
    self.__currency = currency

    # TODO: That is not working
    @property
    def name(self):
        #DG 19.102017 - maybe this should work
        return self.__name;

    @name.setter
    def name(self, name):
        name = re.sub(' +', ' ', name).strip()
        self.__name = name;


class BankAccountValidations:
    def is_empty_string(string):
        return len(string) < 3
    
    def is_valid_alpha_string(string):
        for ch in string:
            if not ch.isalpha():
                if ch != ' ':
                    return False
                
        return True
