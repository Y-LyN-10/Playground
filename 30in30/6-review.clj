(use '[clojure.string :only (join split)])

; read input
(def n (read-string (read-line)))

(def counter (atom 0))
(defn inc-counter []
  (swap! counter inc))

(while (< @counter n) (do
  (println 
    (join " "
      (apply map str
        (partition 2 2 (repeat nil) (read-line)))))
  (inc-counter)))
