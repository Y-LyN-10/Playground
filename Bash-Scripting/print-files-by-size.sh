#!/bin/bash                                                                 

while getopts ":d:" directory; do
  case $directory in
      d)
          # the directory path should be absolute
          du -ah ${OPTARG} | grep -v "/$" | sort -rh
          echo ${OPTARG} >&2;;
      \?)
          echo "Invalid option: -$OPTARG" >&2;;
  esac
done

exit 1

# usage example: sh sort_files_by_size.sh -d "/home/user/Downloads"
