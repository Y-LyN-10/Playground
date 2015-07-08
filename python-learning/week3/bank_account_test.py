#!/usr/bin/env python
# -*- coding: utf-8 -*-

import unittest
from bank_account import BankAccount

class TestBankAccount(unittest.TestCase):
    def setUp(self):
        self.account = BankAccount('Rado', 0, '$')
    
    def test_create_new_account_class(self):
        self.assertTrue(isinstance(self.account, BankAccount))

    # Check if name is a string
        
    def test_raise_value_error_if_name_is_empty(self):
        self.account.set_name = ' '
        
        with self.assertRaises(ValueError):
            self.account
    
    def test_raise_value_error_if_name_is_too_short(self):
        with self.assertRaises(ValueError):
            BankAccount('R', 0, '$')

        with self.assertRaises(ValueError):
            BankAccount(' Ra     ', 0, '$')        

    def test_raise_value_error_if_name_contains_nonalpha_symbols(self):
        with self.assertRaises(ValueError):
            BankAccount('R@d*', 0, '$')

        with self.assertRaises(ValueError):
            BankAccount('Rado-Rado', 0, '$')

        with self.assertRaises(ValueError):
            BankAccount('Rad0Rad0', 0, '$')

    def test_name_is_trimmed_outside_if_contains_empty_spaces(self):
        account = BankAccount('   Rado Rado   ', 0, '$')
        self.assertEqual(account.name(), 'Rado Rado')

    def test_name_is_trimmed_inside_if_contains_more_than_one_empty_space(self):
        account = BankAccount('   Rado     Rado   ', 0, '$')
        self.assertEqual(account.name(), 'Rado Rado')
    
    
        
if __name__ == '__main__':
    unittest.main()
