;;;; -----------------------------------------------------
;;;; Common programming problems with Common Lisp - Part 1
;;;; -----------------------------------------------------

;; Problem 1 - Multiples of 3 and 5
;; Find the sum of all the multiples of 3 or 5 below 1000.

(let ((i 1)(sum 0))
  (loop
     (when (> i 999) (return))
     (if (or (eq (mod i 3) 0) (eq (mod i 5) 0))
         (set 'sum (+ sum i)))
     (incf i))
  (print sum)) ; 233168
