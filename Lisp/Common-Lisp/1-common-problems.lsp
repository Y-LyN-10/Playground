;;;; ----------------------
;;;; Project Euler - Part 1
;;;; ----------------------

;; Problem 1 - Multiples of 3 and 5

;; For each number from 1 to 1000 check which number devides by 3 or 5 with no reminder. Find the sum of all these numbers.

(let ((i 1)(sum 0))
  (loop
     (when (> i 999) (return))
     (if (or (eq (mod i 3) 0) (eq (mod i 5) 0))
         (set 'sum (+ sum i)))
     (incf i)) (print sum))
