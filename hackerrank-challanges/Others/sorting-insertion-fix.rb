def  insertionSort(ar)
  i = 1
  while (i < ar.length)
    if (i > 0 && ar[i] < ar[i - 1])
      value = ar[i]
      j = i
      while (j > 0 && value < ar[j - 1])
        ar[j] = ar[j-1]
        j -= 1
      end
      ar[j] = value
    end
    i += 1
  end
  puts ar.join(" ")
end

# Tail starts here
cnt = gets.to_i;
ar = STDIN.gets.chomp.split(" ").map {|a| a.to_i};
insertionSort(ar);
