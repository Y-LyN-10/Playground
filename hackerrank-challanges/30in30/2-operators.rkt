#lang racket

;; read input from stdin
(define mealCost (read))
(define tipPercent (read))
(define taxPercent (read))

(displayln 
 (string-append 
  "The total meal cost is " 
  (number->string (exact-round
                   (+ mealCost
                      (* mealCost (/ tipPercent 100))
                      (* mealCost (/ taxPercent 100))))) 
  " dollars."))
