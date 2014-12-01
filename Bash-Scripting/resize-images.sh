#!/usr/bin/bash

# Check if imagemagick package is already installed

pkg_available=false
pkg="imagemagick"
# set .jpg value by default
ext=${1:-".jpg"} 
size=${2:-"1024x768"} 

if type "dpkg -l" >/dev/null 2>&1; then
	if ["dpkg -s $pkg"]; then
		pkg_available=true #1
	fi
fi

if type "rpm -qa" >/dev/null 2>&1; then
	if ["rpm -qa | grep $pkg"]; then
		pkg_available=true
	fi
fi

if type "pacman -h" >/dev/null 2>&1; then
	if "pacman -Qs $pkg"; then
		pkg_available=true
	fi
fi

if $pkg_available == false; then
	echo "Error - Imagemagick package didn't found."
else
	# Resize all $ext images in one directory to width 
	# of 1024px and proportional height.
	
	work_is_done=false

	for img in *; do
		if [[ $img == *$ext ]]; then
			convert $img -resize $size $img;
			echo "$img is resized successfully"
			work_is_done=true
		fi
	done

	if $work_is_done; then
		echo "Done!"
	else 
		echo "Error - Not found $ext images in directory"
	fi
fi
